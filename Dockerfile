# 
FROM python:3.10

# 
WORKDIR /code

# 
COPY ./requirements.txt /code/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# 
COPY ./backend /code/backend
COPY ./utils /code/utils

# 
CMD ["sh", "-c", "python utils/create_files.py && uvicorn backend.seller:app --host 0.0.0.0 --port 1306 & uvicorn backend.buyer:app --host 0.0.0.0 --port 1305"]
