db.clientes.insertOne({
    "nome": "Laura Mendes",
    "cpf": "234.627.5731-95",
    "data_nascimento": "17/08/1975",
    "genero": "Feminino",
    "profissao": "Atendente",
    "endereco": "Rua Deputado João Moura Santos, número 155, Matadouro, Teresina, PI, 64004-340",
    "status_civil": "Divorciado(a)"
})
   
db.contas.insertOne({
    "Numero_Conta": "04938-1",
    "Agência": "5575",
    "Tipo": "Conta salário",
    "CPF": "234.627.5731-95",
    "Valor": 308
})

db.clientes.insertOne({
    "nome": "Cauê Luan da Paz",
     "cpf": "426.239.760-23",
     "data_nascimento": "16/02/1967",
     "genero": "Masculino", 
     "profissao": "Vendedor em comércio atacadista", 
     "endereco": "Rua Vinte e Quatro, número 121, Três Vendas, Pelotas, RS, 96071-380", 
     "status_civil": "Casado(a)"
})

db.contas.insertOne({
    "Numero_Conta": "0265177-7",
    "Agência": "0944",
    "Tipo": "Conta salário",
    "CPF": "426.239.760-23",
    "Valor": "1411"
})

db.clientes.find()

db.contas.find()

