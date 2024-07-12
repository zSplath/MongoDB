db.createRole({
        role: "FindInsertShowbank",
        privileges: [{
            resource: {db:"showbank", collection: ""}, 
            actions: ["find", "insert"]
            
        }],
        roles:[]
})

db.createRole({
        role: "FindInsertShowbankClientes",
        privileges: [{
            resource: {db:"showbank", collection: "Clientes"}, 
            actions: ["find", "insert"]
            
        }],
        roles:[]
})
