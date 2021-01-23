import asyncio
import requests
from manufacturer import Manufacturer
from aiohttp import ClientSession
from logger import trace_config

class Category:

    def __init__(self, name: str):
        self.name: str = name
        self.data: list = []
        self.manufacturers: set = set()
        self.products: list = []

    async def update(self):
        res = requests.get(f"https://bad-api-assignment.reaktor.com/v2/products/{self.name}")
        self.data = res.json()
        for prod in self.data:
            self.manufacturers.add(Manufacturer(prod["manufacturer"]))

        async with ClientSession(trace_configs=[trace_config]) as s:
            await asyncio.gather(*[man.get_stock_data(s, 0) for man in self.manufacturers])

        for prod in self.data:
            id = prod["id"]
            instock = ""
            for man in self.manufacturers:
                if not man.data:
                    break
                instock = man.data.get(id, "NOT_FOUND")
                if instock != "NOT_FOUND":
                    break

            self.products.append(Product(
                prod["id"],
                prod["type"],
                prod["name"],
                prod["color"],
                prod["price"],
                prod["manufacturer"],
                instock
            ))


class Product(Category):
    def __init__(self, prod_id: str, category: str, name: str, color, price: str, manufacturer: str, in_stock: str):
        self.type = category
        self.name = name
        self.color = color
        self.price = price
        self.manufacturer = manufacturer
        self.id = prod_id
        self.in_stock = in_stock
