import xmltodict
import json
import logging

def parse_stock(data):
    try:
        for d in data:
            d["DATAPAYLOAD"] = xmltodict.parse(d["DATAPAYLOAD"])['AVAILABILITY']['INSTOCKVALUE']

        return {d["id"].lower(): d["DATAPAYLOAD"] for d in data}
    except TypeError:
        print(data)


class Manufacturer:
    data = []
    lastUpdate = ""

    def __init__(self, name):
        self.name = name

    def __eq__(self, other):
        return self.name == other.name

    def __hash__(self):
        return hash(self.name)

    async def get_stock_data(self, session):
        res = await session.get(f"https://bad-api-assignment.reaktor.com/v2/availability/{self.name}")
        content = await res.text()
        data = json.loads(content)
        if data["response"] == '[]':
            logging.warning("AVAILABILITY RESPONSE EMPTY, TRYING AGAIN")
            await self.get_stock_data(session)
        else:
            self.data = parse_stock(data["response"])

