import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/Lamuchi.css'






export default function Lamuchi (){
    const [vinos,setVinos] = useState([]);
    const [vinosBodegaLamuchi,setVinosBodegaLamuchi] = useState([]);
    const [verDetalle,setVerDetalle] = useState({detalle:false,url2:null});

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosLamuchi = await obtenerVinosPorBodega('Bodega Lamuchi');
            setVinosBodegaLamuchi(vinosLamuchi);
        };

        cargarDatos();

    },[]);

    const vinosBodegaLamuchiFoto = vinosBodegaLamuchi.filter(vino => vino.url);

    return(
    <>
            <section className="seccionFincaIral">
                <div id="lamuchi" className="center mb-5">
                    <img className="logoBodegas" src="https://i0.wp.com/lamuchi.com/wp-content/uploads/2023/01/LaMuchi-logo.png?fit=402%2C114&ssl=1" alt="logoL" />
                </div>
                <div className="container">
                <div className="table-container">
                    <table className="table table-dark table-striped w-70 m-auto titulos-estilo titulos-estiloC">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosBodegaLamuchi.map(vino =>(
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
                    {vinosBodegaLamuchiFoto.map(vino =>
                        <div className='col-md-3 cardConteiner cardConteinerCe cardConteinerL pb-5 ms-5 mb-3 mt-3'>
                            {vino.url && <img className="img-card img-cardM" src={vino.url} alt={vino.nombre}/>}
                            <h4 className="titulo-lamuchi">{vino.nombre}</h4>
                            <h5 className="titulo-origen">{vino.origen}</h5>
                            <button className="btn btn-dark boton-detalleL boton-detalle boton-detalleC  mt-3" onClick={() => setVerDetalle({ detalle: true, url2: vino.url2 })}><p className="titulo-detalle">Ver Detalle..</p></button>
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

