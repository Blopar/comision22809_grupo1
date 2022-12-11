//importo el modelo


import PhoneModel from "../models/PhoneModel.js";
import { getPhoneComments } from "./commentsControllers_BBDD.js";



/* METODOS DEL CRUD */

//MOSTRAR TODOS LOS REGISTROS
export const getAllSpec = async (req,res)=>{
    console.log("tesing getAllSpec");
    try {
       const phone_spec = await PhoneModel.findAll()  
       res.json(phone_spec)      ;
        
       //return JSON.parse(JSON.stringify(phone_spec));
      
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

//MOSTRAR UN REGISTRO

export const getPhone = async (req,res)=>{
   try {
    const phone  = await PhoneModel.findOne({
        where:{id:req.params.id}
    })

    //obtenemos los comentarios asociados al celular
    const comments = await getPhoneComments(req.params.id);

    phone.dataValues.comments = comments;
    res.json(phone)    

   } catch (error) {
    res.json({message: error.message})
   } 
}

export const getPhonesBrands = async (req, res) =>{

    try {
        const phoneBrands = await PhoneModel.findAll({
            where: {marca_id: req.params.marca_id}
        })
        res.json(phoneBrands);
    } catch (error) {
        res.json({message: error.message})
    }
}
