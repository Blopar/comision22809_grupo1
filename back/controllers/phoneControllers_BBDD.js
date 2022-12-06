//importo el modelo


import PhoneModel from "../models/PhoneModel.js";

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

/* 
//crear UN REGISTRO
 export const createBlog = async (req,res)=>{
    try {
        await BlogModel.create (req.body)
        res.json ({message: "Registro creado"})
    } catch (error) {
        res.json ({message:error.message})
    }
 }; */

 //actualizar un registro
/* 
 export const updateBlog =async (req,res)=>{
    try {
        await BlogModel.update(req.body,{
            where:{id:req.params.id} 
        })
        res.json ({message: "Registro Actualizado"})
    } catch (error) {
        res.json ({message:error.message})
    }
 } */
/* 
 export const deleteBlog = async (req,res)=>{
    try {
        await BlogModel.destroy({
            where:{id:req.params.id} 
        })
        res.json ({message: "Registro eliminado"})
    } catch (error) {
        res.json ({message:error.message}) 
    }
 } */