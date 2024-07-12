db.adminCommand({getDefaultRWConcern: 1})

db.adminCommand({
    setDefaultRWConcern: 1,
    defaultReadConcern: {level: "local"},
    defaultWriteConcern: {w: 1, wtimeout: 0}
})