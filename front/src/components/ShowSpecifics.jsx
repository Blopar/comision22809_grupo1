import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ShowSpecifics.css";

const url = "http://localhost:8000/phones/";

const ShowSpecifics = () => {
    const [phone, setPhone] = useState([]);
    const [commentsBBDD, setComment] = useState({});

    useEffect(() => {
        getComments()
        getPhone()
    }, []);


    const { id } = useParams();

    //procedimiento para mostrar todos los celulares
    const getPhone = async () => {
        const res = await axios.get(url + id);
        setPhone(res.data);

    };

    //procedimiento para obtener resultados desde base de datos
    const getComments = async () => {
        const res = await axios.get(url + id);
        setComment(res.data.comments);
    };

    //procedimiento para agregar comentarios a la BBDD
    const [comments, setNewComment] = useState("")
    const [ranking, setRanking] = useState("")    

    const navigate = useNavigate()

    const addComment = async (event) => {
        event.preventDefault();

        await axios.post(url + id, {
            comentarios: comments,
            calificacion: ranking,
            id_phone: id
        });

        //navigate(`/phone/${id}`);
        window.location.reload();
    }


    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <div className="col card">
                <div className="card shadow-sm">
                    <img src={phone.imagen_url} class="card-img-top" alt="..." />

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

            <div>Opiniones de Usuarios
                {

                    Object.keys(commentsBBDD).map(element => {
                        return (

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Comentarios: {commentsBBDD[element].comentarios} </li>
                                <li className="list-group-item">Calificacion: {commentsBBDD[element].calificacion}

                                    <div class="rate_comment"
                                        type="text"
                                    >
                                        <input type="radio" id={`comm_star5_`+element} name="rate" checked={5 === commentsBBDD[element].calificacion} />
                                        <label for={`comm_star5_`+element} title="text">5 stars</label>
                                        <input type="radio" id={`comm_star4_`+element} name="rate" checked={4 === commentsBBDD[element].calificacion} />
                                        <label for={`comm_star4_`+element} title="text">4 stars</label>
                                        <input type="radio" id={`comm_star3_`+element} name="rate" checked={3 === commentsBBDD[element].calificacion} />
                                        <label for={`comm_star3_`+element} title="text">3 stars</label>
                                        <input type="radio" id={`comm_star2_`+element} name="rate" checked={2 === commentsBBDD[element].calificacion} />
                                        <label for={`comm_star2_`+element} title="text">2 stars</label>
                                        <input type="radio" id={`comm_star1_`+element} name="rate" checked={1 === commentsBBDD[element].calificacion} />
                                        <label for={`comm_star1_`+element} title="text">1 star</label>

                                    </div>
                                </li>
                            </ul>
                        )
                    })
                }




            </div>

            <form onSubmit={addComment}>
                <div className="mb-3">
                    <label className="form-label">Ranking</label>

                    <div class="rate"
                        value={ranking}
                        onChange={(e) => setRanking(e.target.value)
                        }
                        type="text"                    >

                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">1 star</label>

                    </div>

                </div>

                <div className="mb-3">
                    <label className="form-label">Comentarios</label>
                    <textarea
                        value={comments}
                        onChange={(e) => setNewComment(e.target.value)}
                        type="text"
                        className="form-control"
                    />

                </div>

                <button type="submit" className="btn btn-primary">ENVIAR</button>

            </form>
        </div>

    );
};

export default ShowSpecifics;
