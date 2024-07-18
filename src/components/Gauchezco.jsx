import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/Gauchezco.css'



export default function Gauchezco() {
    const [vinos, setVinos] = useState([]);
    const [vinosGauchezcoReserve, setVinosGauchezcoReserve] = useState([]);
    const [mostrarImagen, setMostrarImagen] = useState(false);
    const [verDetalle, setVerDetalle] = useState({detalle:false, url2:null});


    const handleButtonClick = () => {
        setMostrarImagen(!mostrarImagen);
    }

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosGauchezco = await obtenerVinosPorBodega('Gauchezco');
            setVinosGauchezcoReserve(vinosGauchezco);
        };

        cargarDatos();

    }, []);

    const vinosGauchezcoReserveFoto = vinosGauchezcoReserve.filter(vino => vino.url);


    return (
        <>
            <section className="seccionFincaIral">
                <div id="gauchezco" className="center">
                    <img className="logoBodegas mb-5" src="https://gauchezco.com/cdn/shop/t/2/assets/logo.png?v=153744729930749575201539804183" alt="logoG" />
                </div>
                <div className="container">
                    <div className="table-container">
                        <table className="table table-dark table-striped w-70 m-auto">
                            <thead className="text-black">
                                <th>Nombre del Producto</th>
                                <th>Origen</th>
                                <th>Botella</th>
                                <th>Precio</th>
                            </thead>
                            <tbody>
                                {vinosGauchezcoReserve.map(vino => (
                                    <tr key={vino.id}>
                                        <td>{vino.nombre}</td>
                                        <td>{vino.origen}</td>
                                        <td>{vino.botella}</td>
                                        <td>${vino.precio}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="row container mt-5 m-auto">
                    {vinosGauchezcoReserveFoto.map(vino =>(
                        <div key={vino.id} className='col-md-3 cardConteiner pb-5 ms-5 mb-3 mt-3'>
                            {vino.url && <img className="img-card" src={vino.url} alt={vino.nombre}/>}
                            <h4 className="titulo-gauchezco">{vino.nombre}</h4>
                            <h3 className="titulo-origen">{vino.origen}</h3>
                            <button className="btn btn-dark boton-detalle mt-3" onClick={(e) => setVerDetalle({ detalle: true, url2: vino.url2 })}>Ver Detalle..</button>
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


