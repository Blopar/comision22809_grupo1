import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Pagination} from "./Pagination";

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

  //paginacion
  const totalPhones = phones.length
  const [phonePerPage, setPhonePerPage]= useState(6); // determina cuantos por pagina
  const [currentPage, setCurrentPage] = useState(1);  // determina la primer pagina default
  const lastIndex = currentPage * phonePerPage
  const firstIndex = lastIndex - phonePerPage


  // busqueda

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
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
          <li className="breadcrumb-item active"  aria-current="page"><a href="/">Inicio</a></li>
         
          </ol>
        </nav> 
        <h2 class="titulo">Listado de celulares</h2>
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
                    
                    <Link to={`/phone/${phone.id}`} >
                <div className="col card"  key={phone.id}>
                    <div className="card shadow-sm">
                      <div className="d-phone">
                      <img src={phone.imagen_url} className="card-img-top img-phone"  alt={phone.className}/>
                      </div>
                        
                          <div className="card-body">

                          <h5 className="card-title"> <strong>Modelo:</strong>  {phone.nombre}</h5>
                            
                              <div className="d-flex justify-content-between align-items-center">

                                  <ul className="list-group list-group-flush">
                              
                                      
                                  <li className="list-group-item"> <strong>Marca:</strong> {phone.marca_id} </li>
                                 
                                  </ul>
                                  
                              </div>
                          </div>
                    </div>
                </div>     
                
           
                </Link>
                )).slice(firstIndex, lastIndex)}


    </div>

        <Pagination 
        phonePerPage={phonePerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPhones={totalPhones}
        />

      </>
  
  
  );
};

export default ShowPhones;
