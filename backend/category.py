import asyncio
import requests
from manufacturer import Manufacturer
from aiohttp import ClientSession
from logger import trace_config
from operator import attrgetter


class Category:
    """
    Category class includes all products and manufacturers for that category.
    """

    def __init__(self, name: str):
        self.name: str = name
        self.data: list = []
        self.manufacturers: set = set()
        self.products: list = []
        self.last_update = 0

    async def update_manufacturers(self):
        """
        Updates a Category objects manufacturers and their stock data
        :return: None
        """
        res = requests.get(f"https://bad-api-assignment.reaktor.com/v2/products/{self.name}")
        data = res.json()
        for prod in data:
            if prod["id"] not in map(lambda x: x.id, self.products):
                self.products.append(Product(
                    prod["id"],
                    prod["type"],
                    prod["name"],
                    prod["color"],
                    prod["price"],
                    prod["manufacturer"]
                ))
            if Manufacturer(prod["manufacturer"]) not in self.manufacturers:
                self.manufacturers.add(Manufacturer(prod["manufacturer"]))
        async with ClientSession(trace_configs=[trace_config]) as s:
            await asyncio.gather(*[man.get_stock_data(s, 5) for man in self.manufacturers])

    def update_products(self):
        """
        Update a Category objects products from manufacturers stock data
        :return: None
        """
        new_products = []
        for prod in self.products:
            for man in self.manufacturers:
                if not man.name == prod.manufacturer:
                    continue
                prod.in_stock = man.data.get(prod.id, "NOT_FOUND")
                if prod.in_stock != "NOT_FOUND":
                    break
            new_products.append(prod)
        new_products.sort(key=attrgetter("name"))
        self.products = new_products

    async def update(self):
        """
        Update stock data to self.products
        :return: None
        """

        await self.update_manufacturers()  # Update manufacturers and their stock data
        self.update_products()  # Update products


class Product(Category):

    def __init__(self, prod_id: str, category: str, name: str, color, price: str, manufacturer: str):
        self.type = category
        self.name = name
        self.color = color
        self.price = price
        self.manufacturer = manufacturer
        self.id = prod_id
        self.in_stock = "NOT_FOUND"

    def __eq__(self, other):
        return self.id == other.id

    def __hash__(self):
        return self.id
