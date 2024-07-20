import { useEffect, useState } from "react";
import { obtenerVinosPorBodega, obtenerTodosLosVinos } from "../asyncmock";
import '../css/Camuñas.css'

export default function Camuñas(){
    const [vinos,setVinos] = useState ([]);
    const [vinosBodegaCamuñas,setVinosBodegaCamuñas] = useState([]);
    const [verDetalle,setVerDetalle] = useState({detalle:false,url2:null});

        useEffect(() =>{
            const CargarDatos = async () => {
                const todosLosVinos = await obtenerTodosLosVinos();
                setVinos(todosLosVinos);

                const vinosCamuñas = await obtenerVinosPorBodega('Finca Camuñas');
                setVinosBodegaCamuñas(vinosCamuñas);
            };
            CargarDatos();
        });
    const vinosBodegaCamuñasFoto = vinosBodegaCamuñas.filter(vino => vino.url);
    
    return (
        <section className="seccionFincaIral">
            <div id="camuñas" className="center">
                <img className="logoBodegas" src="../../logoCamuñas.svg" alt="logoC" />
            </div>
            <div className="container">
                <div className="table-container">
                    <table className="table table-dark table-striped w-70 m-auto titulos-estilos titulos-estilosC">
                        <thead className="text-black">
                            <tr>
                                <th>Nombre del Producto</th>
                                <th>Origen</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vinosBodegaCamuñas.map(vino => (
                                <tr key={vino.id}>
                                    <td className="descripcion descripcionC">{vino.nombre}</td>
                                    <td className="descripcion descripcionC">{vino.origen}</td>
                                    <td className="descripcion descripcionC">${vino.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="row container mt-5  cardQueries cardQueriesCe">
                    {vinosBodegaCamuñasFoto.map(vino => (
                        <div key={vino.id} className='col-md-3 cardConteiner  cardConteinerC  pb-5 ms-5 mb-3 mt-3 '>
                            {vino.url && <img className="img-card" src={vino.url} alt={vino.nombre} />}
                            <h4 className="titulo-gauchezco">{vino.nombre}</h4>
                            <h3 className="titulo-origen">{vino.origen}</h3>
                            <button className="btn btn-dark boton-detalleC boton-detalle boton-detalleM  mt-3" onClick={() => setVerDetalle({ detalle: true, url2: vino.url2 })}><p className="titulo-detalle">Ver Detalle..</p></button>
                        </div>
                    ))}
                </div>
            </div>
            <div className={verDetalle.detalle ? 'verDetalleContainer' : 'd-none'}>
                <div className="verDetalleContainer2">
                    <div className='d-flex justify-content-end'>
                        <button onClick={() => setVerDetalle({ detalle: false, url2: null })} className='btnNO btnSs close-button'>
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                    <img className="foto-detalle" src={verDetalle.url2} alt="Detalle" />
                </div>
            </div>
        </section>
    );
};

