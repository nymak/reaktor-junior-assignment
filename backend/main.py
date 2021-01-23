from category import Category
import asyncio
import logging
import http.client
import time
from threading import Thread
from fastapi import FastAPI
import requests
from pprint import pprint


http.client.HTTPConnection.debuglevel = 1

logging.basicConfig()
logging.getLogger().setLevel(logging.DEBUG)
requests_log = logging.getLogger("requests.packages.urllib3")
requests_log.setLevel(logging.DEBUG)
requests_log.propagate = True


async def cacheUpdate():
    categories = [Category('gloves'), Category('facemasks'), Category('beanies')]
    while True:
        logging.debug("GETTING UPDATE")
        t0 = time.time()
        for category in categories:
            logging.debug(f"GETTING {category.name.upper()}")
            await category.update()

        sleepTime = (4*60)-(time.time()-t0)
        logging.debug(sleepTime)
        time.sleep(sleepTime)


app = FastAPI()

@app.get('/api/gloves')
def root():
    return "Hello"


@app.get('/api/juuran')
def root():
    return "Hello"


_thread = Thread(target=asyncio.run, args=(cacheUpdate(),))
_thread.start()
