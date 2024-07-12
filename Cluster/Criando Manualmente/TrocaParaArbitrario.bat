
:: Quinto terminal
mongod --replSet rs0 --port 27021 --dbpath F:\MongoDB\Data\arb

:: TiraConfimacaoEscrita.js

:: Segundo terminal

rs.addArb("localhost:27021")

rs.remove("localhost:27020")