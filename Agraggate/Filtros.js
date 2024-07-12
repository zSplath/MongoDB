db.Clientes.find({seguros: {$exists: true}})

db.Clientes.aggregate([{$unwind: "$seguros"}])
db.Clientes.aggregate([{$unwind: "$seguros"}, {$unwind: "$dependentes"}])

db.Clientes.aggregate([{$unwind: "$seguros"}, {$sortByCount: "$genero"}])

db.Enderecos.find({cidade: "Recife"})
db.Enderecos.aggregate([{$match: {cidade: "Recife"}}])

db.Contas.aggregate()

db.Contas.aggregate([
    {$match: {$and: [{tipo: "Conta salário"}, {valor: {$gt: 3500} }] } },
    {$group: { _id: "$tipo", contagem: {$count: {}}}}
])