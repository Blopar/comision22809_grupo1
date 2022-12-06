import  {Sequelize} from "sequelize"


const db = new Sequelize ("celulares","root","MySqlR00t@Jmuthuan",{
    host:"localhost",
    dialect:"mysql",
    port:3306
})

export default db