import sys, uvicorn
from fastapi import FastAPI, Form
app = FastAPI()

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

# print(bc.get_sellers(1))

if __name__ == "__main__":
    uvicorn.run("seller:app",reload = True,host="127.0.0.1",port=1306)