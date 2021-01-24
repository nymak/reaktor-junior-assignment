from fastapi import FastAPI
from category import Category

app = FastAPI()

gloves = Category('gloves')
facemasks = Category('facemasks')
beanies = Category('beanies')


@app.get('/api/data')
async def root():
    return {
        "updateTime": beanies.lastUpdate,
        "data": {
            "beanies": beanies.products[:50],
            "gloves": gloves.products[:50],
            "facemasks": facemasks.products[:50]
        }
    }


@app.get('/api/data/50')
async def root():
    return {
        "updateTime": beanies.lastUpdate,
        "data": {
            "beanies": beanies.products,
            "gloves": gloves.products,
            "facemasks": facemasks.products
        }
    }
