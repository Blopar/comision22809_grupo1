import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const url = "http://localhost:8000/phones/brands/";

const ShowPhonesMarca = () => {
   
    const {busqueda} = useParams()
    
    const [phones, setPhone] = useState([]);

  useEffect(() => {
    getPhones();
   
  }, []);

  //procedimiento para mostrar los celus por marca

  const getPhones = async () => {
    const res = await axios.get(url+busqueda);
    setPhone(res.data);
  };
    
    
    return (
        <>
        
        <div className="container text-center">
        <h1> Marca: {busqueda}  </h1>
        </div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
   

            {phones.map((phone)=>(
                    
                    <div className="col card" key={phone.id}>
                        <div className="card shadow-sm">
                          <figure>
                          <img src={phone.imagen_url} className="card-img-top img-phone"  alt="..."/>
                          </figure>
                        
                            <div className="card-body">
    
                            <h5 className="card-title">{phone.nombre}</h5>
                               
                                <div className="d-flex justify-content-between align-items-center">
    
                                     <ul className="list-group list-group-flush">
                                
                                        
                                     <li className="list-group-item">Marca: {phone.marca_id} </li>
                                  <li className="list-group-item">Bateria: {phone.bateria} </li>
                                  <li className="list-group-item">CPU: {phone.cpu} </li>
                                  <li className="list-group-item">Sistema: {phone.sistemaOperativo} </li>
                                  <li className="list-group-item">Pantalla: {phone.pantallaSize} </li>
                                  <li className="list-group-item">Peso: {phone.peso} </li>
                                  <li className="list-group-item">Dimensiones: {phone.dimensiones} </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>     
                    
               
                    
                    ))}
    </div>
    </>
  
  
  );
};

export default ShowPhonesMarca;
