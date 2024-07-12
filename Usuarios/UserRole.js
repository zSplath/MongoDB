db.grantRolesToUser("davi", [{role: "readWrite", db: "showbank"}])

db.getUser("davi")

db.createUser({
    user: "David",
    pwd: passwordPrompt(),
    customData: {nome:"David Luiz", identificador: 3},
    roles: ["FindInsertShowbank"]
})