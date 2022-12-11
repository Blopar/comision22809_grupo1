// importar la conexion a la base de datos
import db from "../database/db.js"

//sequelize

import { DataTypes } from "sequelize"

const CommentsModel = db.define("comments",{    
    comentarios:{type:DataTypes.STRING},
    calificacion:{type:DataTypes.INTEGER},
    id_phone:{type:DataTypes.INTEGER}    
})

export default CommentsModel;