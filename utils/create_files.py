import pickle
import os
import random

if not os.path.exists('pincodes/'):
    os.makedirs('pincodes/')
pincode = {}
pincode_in_one_file = 10
for i in range(0,29_999,pincode_in_one_file):
    string = f'pincodes/pincode.{str(i)}_{str(i+pincode_in_one_file-1)}.pkl'
    with open(string,'wb') as f:
        pickle.dump(pincode,f)
        f.close()
    with open(string+'.lock','wb') as f:
        f.close()
        
empty_dict = {}
with open('pincodes/first_open.pkl','wb') as f:
    pickle.dump(empty_dict,f)
    f.close()

def get_sellers(x):
    seller_ids = random.sample(range(10_000_000),x)
    pincode = {}
    for i in range (x):
        pincode[seller_ids[i]]=random.randint(1,5)
    return pincode

pincodes = {}
for i in range(10):
    pincodes[i]=get_sellers(20)
with open('pincodes/pincode.0_9.pkl', 'wb') as f:
    pickle.dump(pincodes, f)
    f.close()
