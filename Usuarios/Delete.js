db.getUser("David")

db.runCommand({
    revokeRolesFromUser: "David",
    roles: [{role: "FindInsertShowbank", db: "admin"}]
})

db.getUser("David")

db.dropRole("FindInsertShowbank")

db.dropUser("David")

db.getUser("David")
