db.Clientes.find({dependentes: {$exists: false}})

db.Clientes.find({dependentes: {$exists: true}})

db.Clientes.find({seguros: {$exists: true}})

db.Clientes.find({seguros: {$type: 2}}) // 2 = string