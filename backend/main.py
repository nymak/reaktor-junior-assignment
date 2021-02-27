import asyncio
from threading import Thread
import uvicorn
from app import app, gloves, beanies, facemasks
from service import update_category

"""
The main file which starts everything
"""

if __name__ == "__main__":
    for category in (gloves, beanies, facemasks):
        _thread = Thread(target=asyncio.run, args=(update_category(category),))
        _thread.start()
    uvicorn.run(app, port=8000)
