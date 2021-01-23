from fastapi import FastAPI
import requests
from pprint import pprint

app = FastAPI()


@app.get('/api/gloves')
def root():
    req = requests.get("https://bad-api-assignment.reaktor.com/v2/products/gloves")
    json = req.json()[:10]
    gloves = map(lambda obj: obj['type'] == 'gloves', json)
    pprint(list(gloves))
    return


@app.get('/api/juuran')
def root():
    req = requests.get("https://bad-api-assignment.reaktor.com/v2/availability/juuran")
    return req.json()
