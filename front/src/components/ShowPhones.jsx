import axios from "axios";
import { useState, useEffect } from "react";
import {Pagination} from "./Pagination";

const url = "http://localhost:8000/phones/";

const ShowPhones = () => {
  const [phones, setPhone] = useState([]);

  //paginacion
  const totalPhones = phones.length

  const [phonePerPage, setPhonePerPage]= useState(6);
  
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * phonePerPage
  const firstIndex = lastIndex - phonePerPage
 

  useEffect(() => {
    getPhones();
   
  }, []);

  //procedimiento para mostrar todos los celulares

  const getPhones = async () => {
    const res = await axios.get(url);
    setPhone(res.data);
  };

  const busqueda =(e)=>{
    if (e.target.value === ""){
      getPhones()
    }
    filtra (e.target.value)
  }
  const filtra = (terminobusqueda) =>{
    var resultado = phones.filter((elemento)=>{
      if(elemento.marca_id.toString().toLowerCase().includes(terminobusqueda.toLowerCase())
      || elemento.nombre.toString().toLowerCase().includes(terminobusqueda.toLowerCase())){
        return elemento
      }
    });
    setPhone(resultado)

  }
  return (
    <>
        <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 pb-5">
                
                    <div className="card-body row no-gutters align-items-center">
                        <div className="col-auto">
                            <i className="fas fa-search h4 text-body"></i>
                        </div>
                        
                        <div className="col">
                            <input onChange={busqueda} className="form-control form-control-lg form-control-borderless" type="search" placeholder="Buscar por marca o nombre"/>
                        </div>

                    </div>
            </div>
        </div>
    
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  
                {phones.map((phone)=>(
                    
                <div className="col card"  key={phone.id}>
                    <div className="card shadow-sm">
                      <figure>
                      <img src={phone.imagen_url} className="card-img-top img-phone"  alt={phone.className}/>
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
                
           
                
                )).slice(firstIndex, lastIndex)}


    </div>
    <Pagination 
        phonePerPage={phonePerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPhones={totalPhones}/> 
      </>
  
  
  );
};

export default ShowPhones;
