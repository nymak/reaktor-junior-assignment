import logging
import time


async def update_category(category):
    """
    Runs the Category.update() method for every category in it's own thread. It checks how long it takes to update
    and sleeps for 4 minutes - update time.
    :param category: A Category object
    :return: None
    """
    while True:
        logging.debug("GETTING UPDATE")
        t0 = time.time()
        logging.debug(f"GETTING {category.name.upper()}")
        await category.update()
        category.last_update = time.time()
        logging.debug(f"SUCCESSFULLY FETCHED DATA FOR {category.name}")
        sleep_time = (4 * 60) - (time.time() - t0)
        logging.debug(f"SLEEPING FOR {sleep_time} SECONDS")
        time.sleep(sleep_time)
