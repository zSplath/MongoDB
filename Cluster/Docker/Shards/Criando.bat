docker run --name mongo-shard1a --net mongoNet -d mongo mongod --shardsvr --replSet shard1 --port 27019
docker run --name mongo-shard1b --net mongoNet -d mongo mongod --shardsvr --replSet shard1 --port 27019
docker run --name mongo-shard1c --net mongoNet -d mongo mongod --shardsvr --replSet shard1 --port 27019

docker run --name mongo-shard2a --net mongoNet -d mongo mongod --shardsvr --replSet shard2 --port 27020
docker run --name mongo-shard2b --net mongoNet -d mongo mongod --shardsvr --replSet shard2 --port 27020
docker run --name mongo-shard2c --net mongoNet -d mongo mongod --shardsvr --replSet shard2 --port 27020

docker exec -it mongo-shard1a mongosh --port 27019

:: shard1.js

exit

docker exec -it mongo-shard2a mongosh --port 27020

:: shard2.js