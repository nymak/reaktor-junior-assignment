from fastapi import FastAPI
from service import cacheUpdate

app = FastAPI()

@app.get('/')
def root():
    return 'hello'