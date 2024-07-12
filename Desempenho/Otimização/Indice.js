db.NotasFiscais.find({
    $and: [
        {"valor venda": {$eq:1000}}, 
        {imposto: {$gt:100}}
    ]
})

db.NotasFiscais.createIndex({"valor vendas":1})

db.NotasFiscais.find({
    $and: [
        {"valor venda": {$eq:1000}}, 
        {imposto: {$gt:100}}
    ]
})