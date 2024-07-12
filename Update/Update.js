db.Clientes.updateOne({"_id": 1},{$push: {seguros: "seguro de vida"}})

db.Clientes.find({_id: 1})

db.Clientes.updateMany({},{$rename: {"cpf": "CPF"}})

db.Clientes.updateMany({},{$rename: {"CPF": "cpf"}})

db.Contas.updateOne({cpf: "410.436.439-82"},{$inc: {valor: -2000}})

db.Contas.findOne({cpf: "410.436.439-82"})