import pickle
import os
from filelock import FileLock

class BhoomiCodeBuyer:
    def __init__(self):
        self.pincode_lookup = {}
        self.current_file = ""
        for file in os.listdir('pincodes/'):
            elements = file.split('.')
            if ('lock' not in elements):
                range_num = [int(num) for num in elements[1].split('_')]
                for pincode in range(range_num[0],range_num[1]+1):
                    self.pincode_lookup[pincode]='pincodes/'+file
    
    def load_file(self,pincode):
        file_name = self.pincode_lookup[pincode]
        if (file_name==self.current_file):
            return
        if (self.current_file!=""):
            self.save_file()
        self.pincodes = {}
        with open(file_name, 'rb') as f:
            self.pincodes = pickle.load(f)
            f.close()
        self.current_file = file_name
        
    def save_file(self):
        lock = FileLock(self.current_file+'.lock')
        with lock:
            with open(self.current_file, 'wb') as f:
                pickle.dump(self.pincodes, f)
                f.close()
        
    def get_sellers(self,pincode):
        self.load_file(pincode)
        if self.pincodes.get(pincode)==None:
            return {}
        return self.pincodes[pincode]
                
    def get_value(self,pincode,seller):
        self.load_file(pincode)
        if self.pincodes.get(pincode)==None:
            return {}
        if self.pincodes[pincode].get(seller) == None:
            return {}
        return self.pincodes[pincode][seller]
