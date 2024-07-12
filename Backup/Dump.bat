mongodump --collection=Pedidos --db=Vendas --out=F:\MongoDB\Data
mongodump --db=Vendas --excludeCollection=Pedidos --out=F:\MongoDB\Data

mongodump --gzip --db=Vendas --out=F:\MongoDB\Data\zip