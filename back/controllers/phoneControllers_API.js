import axios from "axios";
import Phone from "../models/phoneObject.js";

const BASE_URL =  "http://gsmarena-api.herokuapp.com";


//pedido GET para todas las marcas de celulares
export const getAllBrands = async ()=>{

     try {
        const resBrands = await axios(`${BASE_URL}/brands/`);
        
        return resBrands.data;
        
    } catch (error) {
        console.log(`getAllBrands - ocurrio el error: ${error}`)
    } 
}

//pedido GET para pedido de celulares por "Marca"

export const getBrandPhone = async (brand)=>{
    try {
        let allBrand = await getAllBrands();
        //verifica que exista informacion en el Objeto
        if(Object.entries(allBrand).length !==0){
            allBrand = allBrand.find(element => element.name===brand);

            const brandPhone = await axios(`${BASE_URL}/brand/${allBrand.url}`)
            return brandPhone.data;
        }
        else {
          console.log("No se pueden recuperar datos del servidor. Intente mas tarde");
         
        };
               
    } catch (error) {        
        console.log(`getBrandPhone - ocurrio el error: ${error}`);
    }
}

//PEDIDO GET PARA ESPECIFICACIONES DE UN TELEFONO
export const getPhoneSpec = async (device)=>{
    
    try {       
        const  phone = await axios(`${BASE_URL}/device/${device}`);
        //const  phone = await axios(`${BASE_URL}/device/lg_v50_thinq_5g-9607`);

        //crea instancia del Objeto Phone con las especificaciones del dispositivo 
        const phoneSpec = new Phone();
        phoneSpec.title =phone.data.title;
        phoneSpec.imagen =phone.data.img;
        phoneSpec.dimensiones =phone.data.spec_detail[2].specs[0].value;
        phoneSpec.peso =phone.data.spec_detail[2].specs[1].value;
        phoneSpec.pantallaSize =phone.data.spec_detail[3].specs[1].value;
        phoneSpec.sistemaOperativo =phone.data.spec_detail[4].specs[0].value;
        phoneSpec.cpu =phone.data.spec_detail[4].specs[2].value;
        phoneSpec.memoria =phone.data.spec_detail[5].specs[1].value;
        phoneSpec.bateria =phone.data.spec_detail[11].specs[0].value;

        return phoneSpec;
        
    } catch (error) {
        console.log(`getPhoneSpec - ocurrio el error: ${error}`);
    }

}



