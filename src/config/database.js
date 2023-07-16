const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// const databaseName = process.env.DATABASE_NAME;
// const port = process.env.PORT
// const username = process.env.DATABASE_USERNAME
// const password = process.env.DATABASE_PASSWORD
// const host = process.env.HOST
// const dielace = process.env.DIALEC
// CONNNECT TO DB
const Db = new Sequelize('dans_multi_pro', 'root', 'zumbiblzzvrkabutksupsybyzghmwtty5463', {
  host: 'localhost',
  dialect: 'mysql',
  port: 59864,
  dialectOptions: {
    connectTimeout: 600000
  }
});

module.exports = { Db, Op} ;