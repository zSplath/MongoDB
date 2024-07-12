use showbank

db.createCollection("Clientes")
sh.shardCollection("showbank.Clientes", { _id: 1 })

db.createCollection("Contas")
sh.shardCollection("showbank.Contas", { _id: 1 })

db.createCollection("Enderecos")