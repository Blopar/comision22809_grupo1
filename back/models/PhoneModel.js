// importar la conexion a la base de datos

import db from "../database/db.js"

//sequelize

import { DataTypes } from "sequelize"

const PhoneModel = db.define("phone_specs",{
    nombre:{type:DataTypes.STRING},
    imagen_url:{type:DataTypes.STRING},
    dimensiones:{type:DataTypes.STRING},
    peso:{type:DataTypes.STRING},
    pantallaSize:{type:DataTypes.STRING},
    sistemaOperativo:{type:DataTypes.STRING},
    cpu:{type:DataTypes.STRING},
    memoria:{type:DataTypes.STRING},
    bateria:{type:DataTypes.STRING},
    marca_id:{type:DataTypes.STRING}
})

export default PhoneModel;