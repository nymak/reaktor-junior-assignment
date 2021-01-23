from fastapi import FastAPI
from category import Category

app = FastAPI()

gloves    = Category('gloves')
facemasks = Category('facemasks')
beanies   = Category('beanies')

@app.get('/api/gloves')
def root():
    return gloves.products

@app.get('/api/facemasks')
def root():
    return facemasks.products

@app.get('/api/beanies')
def root():
    return beanies.products