import xmltodict
import json


def parse_stock(dictionary):
    try:
        return {"id": dictionary["id"],
                "instock": xmltodict.parse(dictionary["DATAPAYLOAD"])['AVAILABILITY']['INSTOCKVALUE']
                }
    except TypeError:
        print(dictionary)


class Manufacturer:
    def __init__(self, name):
        self.name = name

    async def get_stock_data(self, session):
        res = await session.get(f"https://bad-api-assignment.reaktor.com/v2/availability/{self.name}")
        data = json.loads(await res.text())
        return list(map(parse_stock, data['response']))
