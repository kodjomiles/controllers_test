module.exports = (sequelize, dataType) => {
    return sequelize.define("New_Recruits", {
        id: {
            type: dataType.UUID,
            primaryKey: true,
            defaultValue: dataType.UUIDV4
        },
        username:{
          type:dataType.STRING,
          allowNull:true,
          required:false
        },
        status: {
            type: dataType.STRING,
        }
    });
};