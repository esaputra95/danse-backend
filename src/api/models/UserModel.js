const Sequelize = require("sequelize");
const { Db } = require("../../config/database")

const UserModel = Db.define("users", {
    id: {
        type: Sequelize.STRING,
        max: 50,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    username: {
        type: Sequelize.STRING,
        max: 255,
        allowNull: false,
        field: 'username'
    },
    password: {
        type: Sequelize.STRING,
        max: 255,
        defaultValue: null,
        field: 'password'
    },
    token: {
        type: Sequelize.STRING,
        defaultValue: null,
        field: 'token'
    },
}, {
    freezeTableName: true,
    timestamps: false,
})

module.exports = UserModel;