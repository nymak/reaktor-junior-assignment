from fastapi import FastAPI
from category import Category

app = FastAPI()

gloves = Category('gloves')
facemasks = Category('facemasks')
beanies = Category('beanies')


@app.get('/api/data')
async def root():
    return {
        "updateTime": beanies.last_update,
        "data": {
            "beanies": beanies.products,
            "gloves": gloves.products,
            "facemasks": facemasks.products
        }
    }
