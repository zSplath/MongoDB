db.Contas.aggregate([{
    $project: {
        cpf: 1,
        tipo: 1,
        valor: 1,
        valores: {
            $cond: { if: { $gte: ["$valor", 5000] }, then: "Maior ou igual a 5000", else: "Menor que 5000" }
        }
    }
}])

db.Contas.aggregate([{
    $project: {
        cpf: 1,
        tipo: 1,
        valor: 1,
        valores: {
            $cond: [{$gte: ["$valor", 5000]}, "Maior ou igual a 5000", "Menor que 5000"]
        }
    }
}])

db.Contas.aggregate([{
    $project: {
        valor: {
            $ifNull: [ "$valor", " Nulo" ]
        }
    }
}])

db.Contas.aggregate([{
    $project: {
        valor: 1,
        switch: {
            $switch: {
              branches: [
                { 
                    case: {$lt: ["$valor", 4000]}, 
                    then: "Menor que 4 Mil"
                },
                { 
                    case: {$lte: ["$valor", 7000]}, 
                    then: "Entre 4 e 7 Mil" 
                }
              ],
              default: "Acima de 7 Mil"
            }
        }
    }
}])