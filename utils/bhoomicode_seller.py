import pickle
import os
from filelock import FileLock

class BhoomiCodeSeller:
    def __init__(self):
        self.__pincode_lookup = {}
        self.__current_file = ""
        self.__pincodes = {}
        for file in os.listdir('pincodes/'):
            elements = file.split('.')
            if ('lock' not in elements):
                range_num = [int(num) for num in elements[1].split('_')]
                for pincode in range(range_num[0],range_num[1]+1):
                    self.__pincode_lookup[pincode]='pincodes/'+file
    
    def __load_file(self,pincode):
        file_name = self.__pincode_lookup[pincode]
        if (file_name==self.__current_file):
            return
        if (self.__current_file!=""):
            self.__save_file()
        self.__pincodes = {}
        with open(file_name, 'rb') as f:
            self.__pincodes = pickle.load(f)
            f.close()
        self.__current_file = file_name
        
    def __save_file(self):
        lock = FileLock(self.__current_file+'.lock')
        with lock:
            with open(self.__current_file, 'wb') as f:
                pickle.dump(self.__pincodes, f)
                f.close()
    
    def add_value(self,pincode,seller,value):
        self.__load_file(pincode)
        if self.__pincodes.get(pincode)==None:
           self.__pincodes[pincode]={}
        self.__pincodes[pincode][seller]=value
    
    def delete_value(self,pincode,seller):
        self.__load_file(pincode)
        if self.__pincodes.get(pincode)==None:
            return
        if self.__pincodes[pincode].get(seller) == None:
            return
        del self.__pincodes[pincode][seller]
