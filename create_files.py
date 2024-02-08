import pickle
import os

os.mkdir('pincodes/')
pincode = {}
for i in range(0,29_999,10):
    string = f'pincodes/pincode.{str(i)}_{str(i+9)}.pkl'
    with open(string,'wb') as f:
        pickle.dump(pincode,f)
        f.close()