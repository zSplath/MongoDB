db.runCommand({collMod:"contas", 
    validator: {
        $jsonSchema: {
            bsonType: "object",
            "additionalProperties": false,
            required: ["_id", "Numero_Conta", "Tipo", "CPF", "Valor", "Agência"],
            properties: {
                _id: {
                    bsonType: "objectId"  
                },
                Agência: {
                    bsonType: "string",
                    description: "Corrija a agencia da conta"
                },
                Numero_Conta: {
                    bsonType: "string",
                    description: "Corrija o numero da conta"
                },
                Tipo: {
                    bsonType: "string",
                    enum:["Conta corrente", "Conta poupança", "Conta salário"],
                    description: "Corrija o tipo da conta"
                },
                CPF: {
                    bsonType: "string",
                    maxLength: 14,
                    minLength: 14,
                    description: "Corrija o cpf do cliente na conta"
                },
                Valor: {
                    bsonType: ["double","int"],
                    description: "Corrija o valor da conta"
                }
            }
        }
    },
    validationLevel: "moderate",
    validationAction: "warn"
})