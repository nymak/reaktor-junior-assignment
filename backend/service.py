import logging
import time


async def updateCategory(category):
    while True:
        logging.debug("GETTING UPDATE")
        t0 = time.time()
        logging.debug(f"GETTING {category.name.upper()}")
        await category.update()
        category.lastUpdate = time.time()
        logging.debug(f"SUCCESSFULLY FETCHED DATA FOR {category.name}")
        sleepTime = (4 * 60) - (time.time() - t0)
        time.sleep(sleepTime)
