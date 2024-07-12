db.Clientes.find({},{nome: 1})

db.Contas.find().limit(10)

db.Contas.find().limit(10).skip(100)

db.Clientes.find().sort({nome: 1})

db.Contas.find().sort({_id: 1}).limit(10).skip(100)

db.Clientes.find().count()

db.Contas.distinct("tipo")