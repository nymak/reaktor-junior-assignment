import unittest

from category import Category, Product
from manufacturer import Manufacturer, parse_stock


class CategoryTest(unittest.TestCase):
    """
    Simple tests for Category class
    """


    def test_update_products(self):
        test_cat = Category("gloves")
        test_cat.products = [Product("1", "gloves", "testproduct", ["black"], "5", "manuel")]
        test_cat.manufacturers = [Manufacturer("manuel")]
        test_cat.manufacturers[0].data = {"1": "INSTOCK"}
        test_cat.update_products()
        self.assertEqual("INSTOCK", test_cat.products[0].in_stock, "update_products should update product object")

class ManufacturerTest(unittest.TestCase):
    """
    Simple tests for Manufacturer class
    """

    async def test_get_stock_data_successfull(self):
        """
        Test get_stock_data on successful response
        :return:
        """
        class Test:
            sampleResponse = {
                "code": 200,
                "response": [
                    {
                        "id": "D9C2E468D2B50A5E32AC24E",
                        "DATAPAYLOAD": "<AVAILABILITY>\n  <CODE>200</CODE>\n  <INSTOCKVALUE>INSTOCK</INSTOCKVALUE>\n</AVAILABILITY>"
                    }
                ]
            }

            async def get(self, string):
                return self.sampleResponse

        session = Test()

        manufacturer = Manufacturer("test")
        self.assertEqual({'d9c2e468d2b50a5e32ac24e': 'INSTOCK'}, await manufacturer.get_stock_data(session, 1), "Successfully returns data on successful response")

    async def test_get_stock_data_empty(self):
        """
        Test get_stock_data on empty response
        :return:
        """
        class Test:
            sampleResponse = {
                "code": 200,
                "response": []
            }

            async def get(self, string):
                return self.sampleResponse

        session = Test()

        manufacturer = Manufacturer("test")
        self.assertEqual(None, await manufacturer.get_stock_data(session, 1), "Returns None when out of retries")

    def test_parse_data_correct(self):
        sampleList = [
            {
                "id": "D9C2E468D2B50A5E32AC24E",
                "DATAPAYLOAD": "<AVAILABILITY>\n  <CODE>200</CODE>\n  <INSTOCKVALUE>INSTOCK</INSTOCKVALUE>\n</AVAILABILITY>"
            }
        ]

        self.assertEqual({"d9c2e468d2b50a5e32ac24e": "INSTOCK"}, parse_stock(sampleList), "Returns dict on correct data")

    def test_parse_data_incorrect(self):
        self.assertRaises(TypeError, parse_stock([]), "Raises TypeError on incorrect data")



if __name__ == '__main__':
    unittest.main()
