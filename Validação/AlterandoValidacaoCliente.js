db.runCommand({collMod: "clientes",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            "additionalProperties": false,
            required: ["_id", "nome", "cpf", "status_civil", "data_nascimento", "endereco", "genero", "profissao"],
            properties: {
                _id: {
                    bsonType: "objectId"  
                },
                nome: {
                    bsonType: "string",
                    maxLength: 150,
                    description: "Corrija o Nome do cliente"
                },
                cpf: {
                    bsonType: "string",
                    maxLength: 14,
                    minLength: 14,
                    description: "Corrija o CPF do cliente"
                },
                status_civil: {
                    bsonType: "string",
                    enum: ["Solteiro(a)", "Casado(a)", "Separado(a)", "Divorciado(a)", "Viúvo(a)"],
                    description: "Corrija o status civil do cliente"
                },
                data_nascimento: {
                    bsonType: ["string", "null"],
                    description: "Corrija a data de nascimento do cliente"
                },
                endereco: {
                    bsonType: "string",
                    description: "Corrija o endereço do cliente"
                },
                genero: {
                    bsonType: "string",
                    description: "Corrija o genero do cliente"
                },
                profissao: {
                    bsonType: "string",
                    description: "Corrija a profissao do cliente"
                }
            }
        }              
    }
})