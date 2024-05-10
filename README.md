# Supply Bridge Challenge:
### To run the project:
```shell
# Fetch from git
git clone https://github.com/BotEkrem/supply-bridge-challenge.git
cd ./supply-bridge-challenge

# docker-compose 
cd docker
docker-compose up --build # you can run with -d flag after successfully built

# Project
cp .env-example .env
npm install
# If you don't have installed ts-node and nodemon, please run "npm install -g ts-node nodemon" before

# Finally, to start the app
npm start

# For generating data from Excel file
npm run generate-data
```

### DB Structure:
I designed my DB structure according to Product Entity, it's like the center of all entities. For a dynamic flow, I created CRUDs and entities for other columns. All of them depend on the Product entity. I didn't understand some column's meaning, and for this reason, I interpreted them according to myself

### Postman Documentation
You can find Postman Collection file in `docs` folder.