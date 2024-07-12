db.createCollection("contas",
    {
       validator: {
             $jsonSchema: {
                    bsonType: "object",
                    required: ["Numero_Conta", "Tipo", "CPF"],
                    properties: {
                       Numero_Conta: {
                             bsonType: "string",
                             description: "O numero da conta deve ser String"
                         },
                         Tipo: {
                             bsonType: "string",
                             enum:["Conta corrente", "Conta poupança", "Conta salário"],
                              description: "Corrija o tipo da conta"
                         },
                         CPF: {
                             bsonType: "string",
                                 description: "O cpf do cliente na conta deve ser String"
                         }
                    }
               }
         }
    }
) 
