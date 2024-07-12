db.system.users.find()

db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [
        {role: "userAdminAnyDatabase", db: "admin"},
        {role: "readWriteAnyDatabase", db: "admin"}
    ]
})

db.system.users.find()

// mongosh --authenticationDatabase "admin" -u "admin" -p

db.auth("admin", "admin")

db.createUser({
    user: "davi",
    pwd: "senha",
    roles: []
})

db.getUser("davi")