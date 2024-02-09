docker build -t myimage .
docker run -d --name mycontainer -p 1306:1306 -p 1305:1305 myimage