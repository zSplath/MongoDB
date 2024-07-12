db.Clientes.aggregate([{
    $lookup: {
       from: "Contas",
       localField: "cpf",
       foreignField: "cpf",
       as: "Contas dos Cliente"
    }
}])

db.Clientes.aggregate([
    {$lookup: {
       from: "Contas",
       localField: "cpf",
       foreignField: "cpf",
       as: "Contas dos Cliente"
    }},
    {$project: {_id: 0, data_nascimento: 0, genero: 0, profissao: 0}}
])