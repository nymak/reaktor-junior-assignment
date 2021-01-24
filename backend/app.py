from fastapi import FastAPI
from category import Category

app = FastAPI()

gloves = Category('gloves')
facemasks = Category('facemasks')
beanies = Category('beanies')


@app.get('/api/gloves')
def root():
    return gloves.products[:50]


@app.get('/api/facemasks')
def root():
    return facemasks.products[:50]


@app.get('/api/beanies')
def root():
    return beanies.products[:50]
