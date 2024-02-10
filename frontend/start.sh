npm install
npm run build
docker build -t bhoomi-app .
docker run -d --name bhoomi-app -p 3000:80 bhoomi-app
