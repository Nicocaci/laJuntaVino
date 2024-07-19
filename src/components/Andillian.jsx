import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/FincaIral.css'
import '../css/Andillian.css'





export default function Andillian (){
    const [vinos,setVinos] = useState([]);
    const [vinosBodegaAndillian,setVinosBodegaAndillian] = useState([]);
    const [verDetalle,setVerDetalle] = useState({detalle:false,url2:null});

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosAndillian = await obtenerVinosPorBodega('Andillian');
            setVinosBodegaAndillian(vinosAndillian);
        };

        cargarDatos();

    },[]);
    const vinosBodegaAndillianFoto = vinosBodegaAndillian.filter(vino => vino.url);

    return(
    <>
            <section className="seccionFincaIral">
                <div id="andillian" className="center mb-5">
                    <img className="logoAndillian" src="logoAndillian.jpg" alt="" />
                </div>
                <div className="container">
                <div className="table-container">
                <table className="table table-dark table-striped w-70 m-auto titulos-estilo">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Botella</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosBodegaAndillian.map(vino =>(
                            <tr key={vino.id}>
                                <td className="descripcion">{vino.nombre}</td>
                                <td className="descripcion">{vino.origen}</td>
                                <td className="descripcion">{vino.botella}</td>
                                <td className="descripcion">${vino.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="row container mt-5 m-auto cardQueries">
                    {vinosBodegaAndillianFoto.map(vino =>
                            <div key={vino.id} className='col-md-3 cardConteiner pb-5 ms-5 mb-3 mt-3'>
                            {vino.url && <img className="img-card" src={vino.url} alt={vino.nombre}/>}
                            <h4 className="titulo-andillian">{vino.nombre}</h4>
                            <h5 className="titulo-origen">{vino.origen}</h5>
                            <button className="btn btn-dark boton-detalleA boton-detalle mt-3" onClick={() => setVerDetalle({ detalle: true, url2: vino.url2 })}><p className="titulo-detalle">Ver Detalle..</p></button>
                            </div>                       
                    )}
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

    </>);
};

