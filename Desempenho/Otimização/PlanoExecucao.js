db.NotasFiscais.find({"id vendedor": 5})
    .explain()

db.NotasFiscais.find({"_id": 12})
    .explain()

db.NotasFiscais.aggregate([{
    $lookup: {
        from:"Vendedores",
        localField:"id pedido",
        foreignField:"_id",
        as: "NotasVendedores"
    }
}])
.explain()