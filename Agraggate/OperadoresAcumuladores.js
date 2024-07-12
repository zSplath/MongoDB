db.Contas.aggregate({
    $group: {
        _id: "$tipo",
        Quantidade: {
            $count: {}
        },
        Total: {
            $sum: "$valor"
        },
        Media: {
            $avg: "$valor"
        }
    }
})

db.Contas.aggregate([
    {$match: {tipo: "Conta corrente"}},
    {$group: {
        _id: "$tipo",
        Quantidade: {
            $count: {}
        },
        Total: {
            $sum: "$valor"
        },
        Media: {
            $avg: "$valor"
        }
    }
}])

db.Contas.aggregate({
    $group: {
        _id: "$tipo",
        Quantidade: {
            $count: {}
        },
        Total: {
            $sum: "$valor"
        },
        Media: {
            $avg: "$valor"
        }
    }
}).match({_id: "Conta salário"})

db.Contas.aggregate({
    $group: {
        _id: "$tipo",
        Quantidade: {
            $count: {}
        },
        Total: {
            $sum: "$valor"
        },
        Media: {
            $avg: "$valor"
        }
    }
}).match(qb.where("_id").eq("Conta poupança"))