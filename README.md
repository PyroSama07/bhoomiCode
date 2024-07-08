![Logo](frontend/src/assets/BhoomiCode_White.png)

# Problem Name
 Optimal storage & retrieval in m*n sparse matrix 

# Problem Statement
Pincode based serviceability allows merchants to define the pincodes where they can deliver their products & services.

In ONDC, definition & verification of pincode based serviceability is separated, i.e. merchants define the pincodes they serve and buyer apps verify whether a particular pincode (of buyer) can be served by any of the available merchants.

Considering there are more than 30K pincodes and at least 100 million merchants (of which about 10% may enable pincode based serviceability), this requires an optimal data structure for storing the pincode serviceability by merchant (i.e. a sparse matrix of 10M*30K) so that verification is near real-time.

# BhoomiCode by team Moisture Bois
Welcome to Bhoomi Code, our cutting-edge software solution revolutionizing buyer-seller interactions through a secure API interface. Built with a modular architecture and object-oriented principles, Bhoomi Code ensures code clarity and efficiency. Security is paramount with a robust file locking mechanism, while innovative algorithms and Docker containerization enhance reusability and deployment flexibility. Leveraging efficient data structures, Bhoomi Code promises optimal performance and scalability, with customizable features tailored to diverse e-commerce needs.

## Local Development

Install Python,pip and pipenv (`pip install pipenv`).  
Clone this repository.

```bash
  git clone https://github.com/PyroSama07/bhoomiCode.git
```

Install the required packages for the project.

```bash
  cd bhoomiCode
  pipenv shell
  pipenv install
```

Now start Seller and Buyer seperatly.  
uncomment line 34,35 in backend/buyer.py and line 38,39 in backend/seller.py.


```bash
  python3 backend/buyer.py
```

In spereate command line terminal
```bash
  python3 backend/seller.py
```

To start the front end application, in new command line terminal run
```bash
  cd frontend
  npm install
  npm run dev
```
Navigate to http://locahost:5173

## Docker Deployment

Install Docker (`sudo apt install docker docker.io`).  
Clone this repository.

```bash
  git clone https://github.com/PyroSama07/bhoomiCode.git
```

Install the required packages for the project.

```bash
  cd bhoomiCode
  chmod +x start.sh
  ./start.sh
```
Navigate to http://localhost:3000

## Customize for dense Sparse Matrix
In utils/create_files.py change the pincode_in_one_file to the desired value in line 8.  
In line 31 get_seller(number_of_seller_per_pincode) to generate the desired test dataset.  
Comment all code from line 22 to not load the test file. 

