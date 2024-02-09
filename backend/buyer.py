import sys, uvicorn
from fastapi import FastAPI
app = FastAPI()

sys.path.append('utils/')
from bhoomicode_buyer import BhoomiCodeBuyer
bc = BhoomiCodeBuyer()

@app.get('/seller/{pincode}')
def sellers(pincode: int):
    return bc.get_sellers(pincode)
    # return seller_dict

@app.get('/value/{pincode}/{seller_id}')
def sellers(pincode: int, seller_id: int):
    return bc.get_value(pincode,seller_id)
    # return value

# print(bc.get_sellers(1))

# if __name__ == "__main__":
#     uvicorn.run("buyer:app",reload = True,host="127.0.0.1",port=1305)