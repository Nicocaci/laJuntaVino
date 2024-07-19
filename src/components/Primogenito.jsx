import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/Primogenito.css'






export default function Primogenito (){
    const [vinos,setVinos] = useState([]);
    const [vinosBodegaPrimogenito,setVinosBodegaPrimogenito] = useState([]);
    const [verDetalle,setVerDetalle] = useState({detalle:false,url2:null});

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosPrimogenito = await obtenerVinosPorBodega('Primogenito');
            setVinosBodegaPrimogenito(vinosPrimogenito);
        };

        cargarDatos();

    },[]);

    const vinosBodegaPrimogenitoFoto = vinosBodegaPrimogenito.filter(vino => vino.url);

    return(
    <>
            <section className="seccionFincaIral">
                <div id="primogenito" className="center">
                    <img className=' logoBodegas' src="../../logoprimogenito.svg" alt="" />
                </div>
                <div className="container">
                <div className="table-container">   
                <table className="table table-dark table-striped w-70 m-auto titulos-estilo">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosBodegaPrimogenito.map(vino =>(
                            <tr key={vino.id}>
                                <td className="descripcion">{vino.nombre}</td>
                                <td className="descripcion">{vino.origen}</td>
                                <td className="descripcion">${vino.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="row container mt-5 m-auto cardQueries">
                    {vinosBodegaPrimogenitoFoto.map(vino =>
                        <div className='col-md-3 cardConteiner cardConteinerP pb-5 ms-5 mb-3 mt-3'>
                            {vino.url && <img className="img-card img-cardP" src={vino.url} alt={vino.nombre}/>}
                            <h4 className="titulo-primogenito">{vino.nombre}</h4>
                            <h5 className="titulo-origen">{vino.origen}</h5>
                            <button className="btn btn-dark boton-detalleP boton-detalle mt-3" onClick={() => setVerDetalle({ detalle: true, url2: vino.url2 })}><p className="titulo-detalle">Ver Detalle..</p></button>
                        </div>
                    )}
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
                </div>
            </section>

    </>);
};

