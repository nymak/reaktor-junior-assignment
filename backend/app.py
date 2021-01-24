from fastapi import FastAPI
from category import Category

app = FastAPI()

gloves = Category('gloves')
facemasks = Category('facemasks')
beanies = Category('beanies')


@app.get('/api/gloves')
def root():
    return {"updateTime": gloves.lastUpdate, "data": gloves.products[:50]}


@app.get('/api/facemasks')
def root():
    return {"updateTime": facemasks.lastUpdate, "data": facemasks.products[:50]}


@app.get('/api/beanies')
def root():
    return {"updateTime": beanies.lastUpdate, "data": beanies.products[:50]}


