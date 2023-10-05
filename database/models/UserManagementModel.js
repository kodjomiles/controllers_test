module.exports = (sequelize, dataType) => {
    return sequelize.define("User_Management", {
        id: {
            type: dataType.UUID,
            primaryKey: true,
            defaultValue: dataType.UUIDV4
        },
        first_name: {
            type: dataType.STRING,
            required: true,
            allowNull: false
        },
        last_name: {
            type: dataType.STRING,
            required: true,
            allowNull: false
        },
        age: {
            type: dataType.NUMBER,
            required: true,
            allowNull: false
        },
        status: {
            type: dataType.TEXT,
        }
    });
};