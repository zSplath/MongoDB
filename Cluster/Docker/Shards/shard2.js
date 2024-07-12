rs.initiate({ 
    _id:"shard2", 
    members: [
        {_id:0, host: "mongo-shard2a:27020"},
        {_id:1, host: "mongo-shard2b:27020"},
        {_id:2, host: "mongo-shard2c:27020"}
    ]
})