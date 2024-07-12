rs.initiate({ 
    _id:"shard1", 
    members: [
        {_id:0, host: "mongo-shard1a:27019"},
        {_id:1, host: "mongo-shard1b:27019"},
        {_id:2, host: "mongo-shard1c:27019"}
    ]
})