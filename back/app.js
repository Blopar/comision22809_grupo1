//import {getAllBrands,  getBrandPhone, getPhoneSpec } from "./controllers/phoneControllers.js"


console.log("Inicio de programa");
/* 
//getAllBrands();

//listado de telefonos -> debería venir de un listado predefinido en el Front End
const arrayPhones = ["Alcatel","Apple","BlackBerry","Cat","Google","HTC","Huawei","LG",
        "BLU","Motorola","Nokia","Samsung","TCL","Sony","Xiaomi","ZTE"];

        
const brandPhoneData = await getBrandPhone(arrayPhones[3]);//Apple
//console.log(brandPhoneData.data.length);
 
let deviceSpec =[];
//for(let i=0;i<brandPhoneData.data.length;i++){
for(let i=0;i<5;i++){
        deviceSpec[i] = await getPhoneSpec(brandPhoneData.data[i].url);
       
}
console.log(deviceSpec); 
 */



import express from "express"
import cors from "cors" 
//import blogRoutes from "./routes/blogRoutes.js"
import db from "./database/db.js"
import phoneRoutes from "./routes/phoneRoutes.js"
import { getAllSpec } from "./controllers/phoneControllers_BBDD.js";

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

//const phone = await getAllSpec();
//console.log(phone[0].nombre);


 const port = 8000
app.listen(port,()=>{
    console.log(`Servidor ok en el puerto ${port}`)
}) 

