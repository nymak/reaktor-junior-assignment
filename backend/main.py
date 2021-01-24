import asyncio
from threading import Thread
import uvicorn
from app import app, gloves, beanies, facemasks
from service import updateCategory

if __name__ == "__main__":
    for category in (gloves, beanies, facemasks):
        _thread = Thread(target=asyncio.run, args=(updateCategory(category),))
        _thread.start()
    uvicorn.run(app, port=8000)
