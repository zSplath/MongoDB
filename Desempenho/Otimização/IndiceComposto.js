db.Pedidos.aggregate([
    {
        $match: {
            $and: [ 
                {"quantidade": {$gt: 4}},
                {"valor venda":{$gt:800}}, 
            ]
        }
    },
    {
        $group: {
            _id: "$id produto", 
            contagem: {$count:{}}
        }
    }
])

db.Pedidos.createIndex({"quantidade": 1, "valor venda": 1, "id produto": 1})

db.Pedidos.aggregate([
    {
        $match: {
            $and: [ 
                {"quantidade": {$gt: 4}},
                {"valor venda":{$gt:800}}, 
            ]
        }
    },
    {
        $group: {
            _id: "$id produto", 
            contagem: {$count:{}}
        }
    }
])