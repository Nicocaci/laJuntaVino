import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/LaIride.css'





export default function LaIride (){
    const [vinos,setVinos] = useState([]);
    const [vinosLaIride,setVinosLaIride] = useState([]);
    const [verDetalle,setVerDetalle] = useState ({detalle:false,url2:null});

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosIride = await obtenerVinosPorBodega('La Íride');
            setVinosLaIride(vinosIride);
        };

        cargarDatos();

    },[]);

    const vinosLaIrideFoto = vinosLaIride.filter(vino => vino.url);
    return(
    <>
            <section className="seccionFincaIral">
                <div id="laIride" className="center mb-5">
                    <img className="logoBodegas"  src="../../logoLaIride.svg" alt="logoF" />
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
                        {vinosLaIride.map(vino =>(
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
                    {vinosLaIrideFoto.map(vino =>(
                        <div key={vino.id} className='col-md-3 cardConteiner cardConteinerL pb-5 ms-5 mb-3 mt-3'>
                            {vino.url && <img className="img-card" src={vino.url} alt={vino.nombre}/>}
                            <h4 className="titulo-vinoLaIride">{vino.nombre}</h4>
                            <h3 className="titulo-origen">{vino.origen}</h3>
                            <button className="btn btn-dark boton-detalleIride boton-detalle mt-3" onClick={(e) => setVerDetalle({ detalle: true, url2: vino.url2 })}><p className="titulo-detalle">Ver Detalle..</p></button>
                        </div>
                    ))}
                </div>
                </div>
            </section>
            <div className={verDetalle.detalle === true ? 'verDetalleContainer' : 'd-none'}>
                <div className="verDetalleContainer2">
                <div className='d-flex justify-content-end'>
                    <button onClick={(e) => setVerDetalle({ detalle: false, url2: null })} className='btnNO btnSs close-button'>
                        <i class="bi bi-x"></i>
                    </button>
                </div>
                    <img className="foto-detalle" src={verDetalle.url2} alt="asdasd" />
                </div>
            </div>

    </>);
};

