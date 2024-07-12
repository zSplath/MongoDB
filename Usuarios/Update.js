db.changeUserPassword("admin","admin123")

db.getUser("David")

db.updateUser(
    "David",
    {
        pwd: "David",
        customData: {nome:"David Luis", identificador: 3},
    }
)

db.getUser("David")