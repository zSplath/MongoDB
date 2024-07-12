db.createCollection("clientes",
      {
           validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["nome", "cpf", "status_civil", "data_nascimento", "endereco"],
                    properties: {
                        nome: {
                            bsonType: "string",
                            description: "Nome deve ser String"
                        },
                        cpf: {
                            bsonType: "string",
                            description: "CPF do cliente deve ser String"
                        },
                        status_civil: {
                            bsonType: "string",
                            enum: ["Solteiro(a)", "Casado(a)", "Separado(a)", "Divorciado(a)", "Viúvo(a)"],
                            description: "Corrija o status civil do cliente"
                        },
                        data_nascimento: {
                            bsonType: "string",
                            description: "Corrija a data de nascimento do cliente"
                        },
                        endereco: {
                            bsonType: "string",
                            description: "Corrija o endereço do cliente"
                        }
                    }
                }              
            }
    }
)