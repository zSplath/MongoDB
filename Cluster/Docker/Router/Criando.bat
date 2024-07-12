docker run -p 27021:27021 --name mongo-router --net mongoNet -d mongo mongos --port 27021 --configdb serverConfig/mongo-config1:27018,mongo-config2:27018,mongo-config3:27018 --bind_ip_all

docker exec -it mongo-router mongosh --port 27021

sh.addShard("shard1/mongo-shard1a:27019") 
sh.addShard("shard1/mongo-shard1b:27019") 
sh.addShard("shard1/mongo-shard1c:27019")

sh.addShard("shard2/mongo-shard2a:27020","shard2/mongo-shard2b:27020","shard2/mongo-shard2c:27020")

sh.status()