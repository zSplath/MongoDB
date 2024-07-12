db.Clientes.find().count()

db.Clientes.count()

db.Clientes.aggregate({$count: "Total"})

db.Contas.aggregate({$group: { _id: "$tipo"}})

db.Contas.aggregate({$group: { _id: "$tipo", contagem: {$count: {}}}})

db.Contas.aggregate({$limit: 5})

db.Contas.aggregate({$skip: 100})

db.Contas.aggregate([{$limit: 5}, {$skip: 1}])

db.Contas.aggregate([{$skip: 100}, {$limit: 5}])

db.Contas.aggregate({$sort: {valor: -1}})

db.Contas.aggregate([{$sort: {valor: -1}}, {$skip: 258}, {$limit: 5}])



