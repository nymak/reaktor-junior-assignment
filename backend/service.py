from category import Category
import logging
import time

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