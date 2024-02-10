docker build -t myimage .
docker run -d --name mycontainer -p 1306:1306 -p 1305:1305 myimage
cd frontend
npm install
npm run build
docker build -t bhoomi-app .
docker run -d --name bhoomi-app -p 3000:80 bhoomi-app