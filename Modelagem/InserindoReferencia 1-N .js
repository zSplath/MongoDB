use modelagem2

db.clientes.insertOne({
    "_id": 3,
    "Nome": "Marcos Benedito Rodrigues",
    "CPF": "099.632.834-38",
    "Data_Nascimento": "18/10/1972",
    "Genero": "Masculino",
    "Profissao": "Professor do EJA ensino fundamental",
    "Status_Civil": "Divorciado(a)"
})

db.endereco.insertMany([
    {
        "_id": 1,
        "creator" : {
            "$ref": "clientes",
            "$id":3,
            "$db": "modelagem02"},
        "Rua": "Rua das Acácias",
        "Numero": 287,
        "Bairro":"Centro",
        "Cidade": "Parnamirim",
        "Estado":"RN",
        "CEP":"59140-030"
    },
    {
        "_id": 2,
        "creator" : {
            "Sref": "clientes",
            "$id":3,
            "$db": "modelagem02"
        },
        "Rua": "Rua das Acácias",
        "Numero": 287,
        "Bairro":"Centro",
        "Cidade": "Parnamirim",
        "Estado": "RN",
        "CEP":"59140-030"
    }
])
    
db.contas.insertOne({
    "_id": 1,
    "creator" : {
        "$ref": "clientes",
        "$id":3,
        "$db": "modelagem02"
    },
    "Numero_Conta": "1095052-4",
    "Agência": "5575",
    "Tipo": "Conta poupança",
    "CPF": "099.632.834-38",
    "Valor": 9.855
})

db.endereco.find()

