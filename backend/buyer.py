import sys, uvicorn
from fastapi import FastAPI
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