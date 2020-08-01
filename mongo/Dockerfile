FROM mongo:4.2
COPY seed.json /seed.json
CMD mongoimport --host db --db hidden_treasures --collection treasures --drop --file /seed.json --jsonArray
