use modelagem3

db.createCollection("clientes",
{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required:["Nome", "CPF","Status_Civil","Data_Nascimento","Endereco", "Genero", "Profissao", "Contas"],
            properties:{
                Nome:{
                    bsonType: "string",
                    maxLength:150,
                    description: "informe corretamente o nome do cliente"
                },
                CPF:{
                    bsonType: "string",
                    minLength:14,
                    maxLength:14,
                    description: "informe corretamente o cpf do cliente" 
                },
                Status_Civil:{
                    bsonType: "string",
                    enum:["Solteiro(a)", "Casado(a)", "Separado(a)", "Divorciado(a)", "Viúvo(a)"],
                    description: "informe corretamente o status civil do cliente" 
                },
                Data_Nascimento:{
                    bsonType: ["string", "null"],
                    description: "informe corretamente a data de nascimento do cliente"  
                },
                Endereco:{
                    bsonType: "array",
                    required:["Rua","Numero","Bairro","Cidade","Estado","CEP"],
                    properties:{
                        Rua:{
                            bsonType: "string"},
                        Numero:{
                            bsonType: "int"},    
                        Bairro:{
                            bsonType: "string"},  
                        Cidade:{
                            bsonType: "string"}, 
                        Estado:{
                            bsonType: "string"},    
                        CEP:{
                            bsonType: "string"} 
                    }
                },
                Genero:{
                    bsonType: "string",
                    description: "informe corretamente o genero do cliente" 
                },
                Profissao:{
                    bsonType: "string",
                    description: "informe corretamente o profissão do cliente"},
                Contas:{
                    bsonType:"object",
                    required:["Numero_Conta", "Tipo", "CPF", "Valor","Agência"],
                    properties:{
                        Numero_Conta:{
                            bsonType: "string"  
                        },
                        Tipo:{
                            bsonType: "string",
                            enum:["Conta corrente", "Conta poupança", "Conta salário"]  
                        },
                        CPF:{
                            bsonType: "string",
                            minLength:14,
                            maxLength:14 
                        },
                        Valor:{
                            bsonType: "double"  
                        },
                        Agência:{
                            bsonType: "string"     
                        }
                    }
                }
            }     
        }

    }
})

db.clientes.insertOne({
    "_id": 3,
    "Nome": "Luan Caio da Silva",
    "CPF": "520.233.763-94",
    "Data_Nascimento": "14/10/1949",
    "Genero": "Masculino",
    "Profissao": "Atendente de farmácia",
    "Endereco": [{
        "Rua": "João Alberto",
        "Numero": 224,
        "Bairro": "Santa Clara",
        "Cidade": "São Luís",
        "Estado": "MA",
        "CEP": "65058-623"
    },
    {
        "Rua": "Rua das Camelias",
        "Numero": 333,
        "Bairro": "Santa Tereza",
        "Cidade": "São Luís",
        "Estado": "MA",
        "CEP": "65058-623"
    }],
    "Contas": {
        "Numero_Conta": "67314-4",
        "Agência": "5575",
        "Tipo": "Conta poupança",
        "CPF": "520.233.763-94",
        "Valor": 2.860
    },
    "Status_Civil": "Viúvo(a)"
})

