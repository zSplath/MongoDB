db.Contas.findAndModify({
    query: {_id:34}, 
    update: {$unset: {valor: ""}}
})

db.Contas.findAndModify({
    query: {_id:34}, 
    update: {$inc: {valor: 1200.0}}, 
    new:true
})

db.Contas.findAndModify({
    query: {valor: {$lt: 500}},
    sort: {valor: 1},
    update: {$inc: {valor: 10.99}}, 
    new:true
})

db.Contas.find({valor: {$lt: 500}})