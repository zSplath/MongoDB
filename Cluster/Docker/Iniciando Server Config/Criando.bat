docker network create mongoNet

docker run --name mongo-config1 --net mongoNet -d mongo mongod --configsvr --replSet serverConfig --port 27018

docker run --name mongo-config2 --net mongoNet -d mongo mongod --configsvr --replSet serverConfig --port 27018

docker run --name mongo-config3 --net mongoNet -d mongo mongod --configsvr --replSet serverConfig --port 27018

docker exec -it mongo-config1 mongosh --port 27018

:: Replicas.js