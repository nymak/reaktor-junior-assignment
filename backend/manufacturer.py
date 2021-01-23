import requests
import xmltodict
import requests


def parse_stock(dictionary):
    return {"id": dictionary["id"],
            "instock": xmltodict.parse(dictionary["DATAPAYLOAD"])['AVAILABILITY']['INSTOCKVALUE']
            }


class Manufacturer:
    def __init__(self, name):
        self.name = name
        self.data = []
        self.get_stock_data()

    def get_stock_data(self):
        res = requests.get(f"https://bad-api-assignment.reaktor.com/v2/availability/{self.name}")
        data = list(res.json()["response"])
        self.data = list(map(parse_stock, data))
