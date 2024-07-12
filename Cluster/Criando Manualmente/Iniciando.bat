
:: Primeiro terminal
mongod --replSet rs0 --port 27018 --dbpath F:\MongoDB\Data\rs1

:: Segundo terminal
mongosh --port 27018

rs.initiate()
rs.status()

:: Terceiro terminal
mongod --replSet rs0 --port 27019 --dbpath F:\MongoDB\Data\rs2

:: Quarto terminal
mongod --replSet rs0 --port 27020 --dbpath F:\MongoDB\Data\rs3

:: Segundo terminal
rs.add({host:"localhost:27019"})
rs.add({host:"localhost:27020"})