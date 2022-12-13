//importo el modelo
import CommentsModel from "../models/CommentsModel.js";


/* METODOS DEL CRUD */

export const getPhoneComments = async (req, res) =>{
   
    try {
        const phoneComments = await CommentsModel.findAll({
            where: {id_phone:req}
        })
        return phoneComments;
        //res.json(phoneComments);
    } catch (error) {
        res.json({message: error.message})
    }
}


//crear UN REGISTRO
 export const createComment = async (req,res)=>{
    try {
        await CommentsModel.create (req.body)
        res.json ({message: "Registro creado"})
    } catch (error) {
        res.json ({message:error.message})
    }
 }; 

 