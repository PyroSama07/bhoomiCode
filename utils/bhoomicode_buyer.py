import pickle
import os
from filelock import FileLock

class BhoomiCodeBuyer:
    def __init__(self):
        self.__pincode_lookup = {}
        self.__current_file = "pincodes/first_open.pkl"
        for file in os.listdir('pincodes/'):
            if file != "first_open.pkl":
                elements = file.split('.')
                if ('lock' not in elements):
                    range_num = [int(num) for num in elements[1].split('_')]
                    for pincode in range(range_num[0],range_num[1]+1):
                        self.__pincode_lookup[pincode]='pincodes/'+file
        # print(self.__pincode_lookup)
    
    def __load_file(self,pincode):
        file_name = self.__pincode_lookup[pincode]
        if (file_name==self.__current_file):
            return
        self.__pincodes = {}
        # print(file_name)
        with open(file_name, 'rb') as f:
            self.__pincodes = pickle.load(f)
            f.close()
        self.__current_file = file_name
        
    def get_sellers(self,pincode):
        self.__load_file(pincode)
        if self.__pincodes.get(pincode)==None:
            return {}
        return self.__pincodes[pincode]
                
    def get_value(self,pincode,seller):
        self.__load_file(pincode)
        if self.__pincodes.get(pincode)==None:
            return {}
        if self.__pincodes[pincode].get(seller) == None:
            return {}
        return self.__pincodes[pincode][seller]