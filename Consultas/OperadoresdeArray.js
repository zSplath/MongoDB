db.Clientes.find({seguros:{$all:["seguro de vida", "seguro para carro"]}})

db.Clientes.find({dependentes:{$size: 2}})

db.Clientes.find({dependentes:{$size:2}},{dependentes:{$slice:1}})