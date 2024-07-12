db.Clientes.aggregate()
    .project({
        _id:0,
        valor: {$rand: {}}
    })

db.Clientes.aggregate({
    $project: {
        _id:0,
        valor: {$rand: {}}
    }
})

db.Clientes.aggregate({
    $project: {
        _id:0,
        valorRound: {$round: [{$rand: {}}, 3]}
    }
})

db.Clientes.aggregate({
    $project: {
        _id:0,
        valorTrunc: {$trunc: [{$rand: {}}, 3]}
    }
})

db.Contas.aggregate([
  {
    $project: {
        valor: 1,
      fieldType: { $type: "$valor" }
    }
  },
  {
    $group: {
      _id: "$fieldType",
      count: { $sum: 1 }
    }
  }
])

db.Contas.updateMany(
  { 
    valor: { $not: { $type: "double" } }
  },
  [
    {
      $set: {
        valor: 0
      }
    }
  ]
)

db.Contas.aggregate([{
    $project: {
        _id: 0,
        valor: 1,
        metade: {
            $divide: ["$valor", 2]
        }
    }
}])

db.Contas.aggregate([{
    $project: {
        _id: 0,
        valor: 1,
        dobro: {
            $multiply: ["$valor", 2]
        }
    }
}])

