db.Contas.find({$and: [{tipo: {$eq: "Conta salário"}}, {valor: {$gt: 5000}}]})

db.Contas.find({$or: [{tipo: {$eq: "Conta salário"}}, {valor: {$gt: 5000}}]})

db.Enderecos.find({estado: {$not: {$eq: "SP"}}})