import asyncio

from manufacturer import Manufacturer
import requests
from aiohttp import ClientSession

categories = ["gloves", "facemasks", "beanies"]


class Category:

    def __init__(self, name: str):
        self.name: str = name
        self.data: list = []
        self.manufacturers: set = set()
        self.products: list = []

    async def update(self):
        res = requests.get(f"https://bad-api-assignment.reaktor.com/v2/products/{self.name}")
        self.data = res.json()
        for x in self.data:
            self.manufacturers.add(Manufacturer(x["manufacturer"]))

        async with ClientSession() as s:
            for man in self.manufacturers:
                await man.get_stock_data(s)


class Product(Category):
    in_stock = ""

    def __init__(self, prod_id: str, category: str, name: str, color, price: str, manufacturer: str):
        self.type = category
        self.name = name
        self.color = color
        self.price = price
        self.manufacturer = manufacturer
        self.id = prod_id




