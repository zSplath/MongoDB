db.Clientes.find({genero:"Masculino"})

db.Clientes.find({genero:{$eq:"Masculino"}})

db.Contas.find({valor:{$gt: 5000}})

db.Contas.find({valor:{$lt: 2000}})

db.Contas.find({valor: {$gte: 1000, $lte: 2000}})

db.Clientes.find({status_civil:{$in:["Viúvo(a)", "Casado(a)"]}})

