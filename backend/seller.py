import sys, uvicorn
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost:1305",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sys.path.append('utils/')
from bhoomicode_seller import BhoomiCodeSeller
bc = BhoomiCodeSeller()

@app.post('/addValue')
async def add(pincode: int = Form(...),seller: int = Form(...),value: int = Form(...)):
    bc.add_value(pincode,seller,value)
    return True

@app.post('/deleteValue')
async def delete(pincode: int = Form(...),seller: int = Form(...)):
    bc.add_value(pincode,seller)
    return True

@app.post('/sync')
async def sync_values():
    bc.sync()
    return True
# print(bc.get_sellers(1))

# if __name__ == "__main__":
#     uvicorn.run("seller:app",reload = True,host="127.0.0.1",port=1306)