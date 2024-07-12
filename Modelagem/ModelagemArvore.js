use modelagem4

db.createCollection("Pai")

db.Pai.insertMany([
    {_id:"Colaborador01" , parent:"Supervisor02"},
    {_id:"Colaborador02" , parent:"Supervisor02"},
    {_id:"Supervisor02", parent:"Gerente"},
    {_id:"Supervisor01", parent:"Gerente"},
    {_id:"Gerente", parent:"Gerente geral"},
    {_id:"Gerente geral", parent: null}
])

db.Pai.findOne({_id: "Supervisor02"}).parent

db.createCollection("Filho")

db.Filho.insertMany([
    {_id:"Colaborador01" , children:[]},
    {_id:"Colaborador02" , children:[]},
    {_id:"Supervisor01", children:[]},
    {_id:"Supervisor02", children:["Colaborador01", "Colaborador02"]},
    {_id:"Gerente", children:["Supervisor01", "Supervisor02"]},
    {_id:"Gerente geral", children:["Gerente"]}
])

db.Filho.findOne({_id:"Gerente"}).children

db.createCollection("Ancestrais")

db.Ancestrais.insertMany([
    {_id:"Colaborador01", ancestors:["Gerente geral", "Gerente", "Supervisor02"], parent:"Supervisor02"},
    {_id:"Colaborador02", ancestors:["Gerente geral", "Gerente", "Supervisor02"], parent:"Supervisor02"},
    {_id:"Supervisor02", ancestors:["Gerente geral", "Gerente"], parent:"Gerente"},
    {_id:"Supervisor01", ancestors:["Gerente geral", "Gerente"], parent:"Gerente"},
    {_id:"Gerente", ancestors:["Gerente geral"], parent:"Gerente geral"},
    {_id:"Gerente geral", ancestors:[], parent:null}
])

db.Ancestrais.findOne({_id:"Supervisor02"}).ancestors
db.Ancestrais.findOne({_id:"Supervisor02"}).parent

db.createCollection("Materializados")

db.Materializados.insertMany([
    {_id:"Gerente geral", path:null},
    {_id:"Gerente", path:"Gerente geral"},
    {_id:"Supervisor02", path:"Gerente geral,Gerente"},
    {_id:"Supervisor01", path:"Gerente geral,Gerente"},
    {_id:"Colaborador01", path:"Gerente geral,Gerente,Supervisor02"},
    {_id:"Colaborador02", path:"Gerente geral,Gerente,Supervisor02"}
])

db.Materializados.findOne({path:"Gerente geral"})