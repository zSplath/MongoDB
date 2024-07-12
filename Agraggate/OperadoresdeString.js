db.Clientes.aggregate([{
    $project: {
        pessoa: {
            $concat: ["$nome", " | ", "$cpf"]
        }
    }
}])

db.Clientes.aggregate([{
    $project: {
        nomes: {
            $split: ["$nome", " "]
        }
    }
}])

db.Clientes.aggregate([{
    $project: {
        nome: {
            $toUpper: "$nome"
        }
    }
}])

db.Clientes.aggregate([{
    $project: {
        nome: {
            $toLower: "$nome"
        }
    }
}])


db.Contas.aggregate([{
    $project: {
        valor: {
            $toString: "$valor"
        }
    }
}])

db.Contas.aggregate([{
    $project: {
        texto: {
            $concat: ["O cliente", " (CPF: ", "$cpf", " ) tem ", {$toString: "$valor"}, " na ", "$tipo"]
        }
    }
}])