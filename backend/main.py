import asyncio
from threading import Thread
import uvicorn
from app import app
from service import cacheUpdate

if __name__ == "__main__":
    _thread = Thread(target=asyncio.run, args=(cacheUpdate(),))
    _thread.start()
    uvicorn.run(app, port=8000)
