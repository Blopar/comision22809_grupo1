
console.log("Inicio de programa");
/* 


//listado de telefonos -> debería venir de un listado predefinido en el Front End
const arrayPhones = ["Alcatel","Apple","BlackBerry","Cat","Google","HTC","Huawei","LG",
        "BLU","Motorola","Nokia","Samsung","TCL","Sony","Xiaomi","ZTE"];
*/        

import express from "express"
import cors from "cors" 
import db from "./database/db.js"
import phoneRoutes from "./routes/phoneRoutes.js"

const app = express()

app.use(cors())
app.use (express.json())
 //analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body

 app.use("/phones",phoneRoutes)

//base de datos
try {
    await db.authenticate()
    console.log("conexion a la BD OK")
} catch (error) {
    console.log(`conexion fallida por el error ${error}`)
}


 const port = 8000
app.listen(port,()=>{
    console.log(`Servidor ok en el puerto ${port}`)
}) 

