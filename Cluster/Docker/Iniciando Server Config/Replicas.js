rs.initiate({
    _id: "serverConfig", 
    configsvr:true,
    members: [
        {_id:0, host: "mongo-config1:27018"},
        {_id:1, host: "mongo-config2:27018"},
        {_id:2, host: "mongo-config3:27018"}
    ]
})