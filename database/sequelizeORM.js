require('dotenv').config();
const Sequelize = require('sequelize')



//call the name of the model we created
const UserManagementModel = require('./models/UserManagementModel');
const NewRecruitsModel = require('./models/NewRecruitsModel')

/*establish connection between sequelize and db*/
const sequelize = new Sequelize(process.env.DB_CONN_STR,{
    dialect:'postgres',
    protocol:'postgres',
    logging:false
})


const userManagement = UserManagementModel(sequelize,Sequelize)
const newRecruits = NewRecruitsModel(sequelize,Sequelize)




sequelize.authenticate().then(() => {
    console.log('DB Connection successful')
}).catch((error)=>{
    console.log (error)
})



module.exports = {
    sequelize,userManagement,newRecruits
}