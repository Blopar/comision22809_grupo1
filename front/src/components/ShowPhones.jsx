import axios from "axios";
import { useState, useEffect } from "react";

const url = "http://localhost:8000/phones/";

const ShowPhones = () => {
  const [phones, setPhone] = useState([]);

  useEffect(() => {
    getPhones();
   
  }, []);

  //procedimiento para mostrar todos los celulares

  const getPhones = async () => {
    const res = await axios.get(url);
    setPhone(res.data);
  };
  
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  
                {phones.map((phone)=>(
 
                    
                <div className="col card">

                
                    <div className="card shadow-sm">

                    <img src={phone.imagen_url} class="card-img-top" alt="..."/>
                     
            
                        <div className="card-body">

                        <h5 className="card-title">{phone.nombre}</h5>
                           
                            <div className="d-flex justify-content-between align-items-center">

                                 <ul className="list-group list-group-flush">
                            

                                    
                                <li className="list-group-item">Marca: {phone.marca_id} </li>
                                <li className="list-group-item">Bateria: {phone.bateria} </li>
                                <li className="list-group-item">CPU: {phone.cpu} </li>
                                <li className="list-group-item">Sistema Operativo: {phone.sistemaOperativo} </li>
                                <li className="list-group-item">Display: {phone.pantallaSize} </li>
                                <li className="list-group-item">Peso: {phone.peso} </li>
                                <li className="list-group-item">Dimensiones: {phone.dimensiones} </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>     
                
           
                
                ))}
    </div>
      
  
  
  );
};

export default ShowPhones;
