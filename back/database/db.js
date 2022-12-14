import  {Sequelize} from "sequelize"


const db = new Sequelize ("celulares","root","",{
    host:"localhost",
    dialect:"mysql",
    port:3306
})

export default db