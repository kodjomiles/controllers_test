const {sequelize,userManagement} = require('../sequelizeORM')




const createUser = async (params) => {
    try {
        return await userManagement.create({
            first_name:params.first_name,
            last_name:params.last_name,
            age:params.age,
            status:params.status
        })
    }catch (e){
        console.log (e,'Unable to create user')
    }
}


module.exports = {
    createUser
}