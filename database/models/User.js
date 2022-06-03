module.exports = function (sequelize, dataTypes){
    let alias = "Users";
    
    let cols = {
        user_id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        user_lastname: {
            allowNull: false,
            type: dataTypes.STRING
        },
        birth_date: {
            allowNull: false,
            type: dataTypes.DATE
        },
        user_email: {
            allowNull: false,
            type: dataTypes.STRING
        },
        user_password: {
            allowNull: false,
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        products: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        comments: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        followers: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        remember_token: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE /* consultar tipo de dato de created_at y updated_at en clase */
        },
        updated_at: {
            type: dataTypes.DATE
        }
    };
    
    let config = {
        tableName: "users",
        timeStamps: false
    };

    const User = sequelize.define(alias, cols, config);
    
    return User;
}