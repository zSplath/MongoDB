db.Clientes.aggregate([{
    $project: {
        Dia: {
            $dayOfMonth: "$data_nascimento"
        },
        Mes: {
            $month: "$data_nascimento"
        },
        Ano: {
            $year: "$data_nascimento"
        },
        "Dia da Semana": {
            $dayOfWeek: "$data_nascimento"
        }
    }
}])

db.Clientes.aggregate([{
    $project: {
        Data: {
            $dateToParts: { 
               date: "$data_nascimento"
            }
        }
    }
}])