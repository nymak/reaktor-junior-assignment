from json.decoder import JSONDecodeError
import xmltodict
import json
from logger import logging


def parse_stock(data):
    """
    Parses XML stock data to a dict where the keys are ID:s of the products and values are availability information
    :param data: data in XML
    :return: dict
    """
    try:
        for d in data:
            d["DATAPAYLOAD"] = xmltodict.parse(d["DATAPAYLOAD"])['AVAILABILITY']['INSTOCKVALUE']

        return {d["id"].lower(): d["DATAPAYLOAD"] for d in data}
    except TypeError:
        print(data)


class Manufacturer:

    def __init__(self, name):
        self.name = name
        self.data = []
        self.lastUpdate = ""

    def __eq__(self, other):
        return self.name == other.name

    def __hash__(self):
        return hash(self.name)

    async def get_stock_data(self, session, n=5):
        """
        Gets stock data from the API. If the response is empty it will try again.
        :param session: A session for requests
        :param n: Number of retries
        :return: None
        """

        if n == 0:
            logging.error(f"DID NOT SUCCEED TO GET DATA FOR {self.name}")
            return
        res = await session.get(f"https://bad-api-assignment.reaktor.com/v2/availability/{self.name}")
        content = await res.text()
        try:
            data = json.loads(content)
        except JSONDecodeError:
            logging.error(f"FAILED TO PARSE JSON, TRYING AGAIN NUMBER OF TRIES LEFT {n}")
            await self.get_stock_data(session, n - 1)
        if data["response"] == '[]':
            logging.warning(f"AVAILABILITY RESPONSE EMPTY, TRYING AGAIN NUMBER OF TRIES LEFT {n}")
            await self.get_stock_data(session, n - 1)
        else:
            self.data = parse_stock(data["response"])
