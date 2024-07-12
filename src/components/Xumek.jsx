import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/Xumek.css'





export default function Xumek (){
    const [vinos,setVinos] = useState([]);
    const [vinosBodegaXumek,setVinosBodegaXumek] = useState([]);
    const [verDetalle,setVerDetalle] = useState ({detalle:false, url2:null});

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosXumek = await obtenerVinosPorBodega('Bodega Xumek');
            setVinosBodegaXumek(vinosXumek);
        };

        cargarDatos();

    },[]);
    
    const vinoBodegaXumekFoto = vinosBodegaXumek.filter(vino => vino.url);
    
    return(
    <>
            <section className="seccionFincaIral">
                <div id="xumek" className="center">
                    <img className="logoBodegas" src="https://xumek.com.ar/wp-content/uploads/2020/06/logo-200px.png" alt="logoX" />
                </div>
                <div className="container">
                <div className="table-container">
                <table className="table table-dark table-striped w-70 m-auto">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosBodegaXumek.map(vino =>(
                            <tr key={vino.id}>
                                <td>{vino.nombre}</td>
                                <td>{vino.origen}</td>
                                <td>${vino.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                </div>
                <div className="row container mt-5 m-auto">
                    {vinoBodegaXumekFoto.map(vino =>(
                        <div key={vino.id} className='col-md-3 cardConteiner pb-5 ms-5 mb-3 mt-3'>
                            {vino.url && <img className="img-card" src={vino.url} alt={vino.nombre}/>}
                            <h4 className="titulo-vinoXumek">{vino.nombre}</h4>
                            <h3 className="titulo-origen">{vino.origen}</h3>  
                            <button className="btn btn-dark boton-detalle mt-3" onClick={(e) => setVerDetalle({ detalle: true, url2: vino.url2 })}>Ver Detalle..</button>
                        </div>
                    ))}
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

