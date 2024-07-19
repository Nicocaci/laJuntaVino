import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/Aicardi.css'






export default function Aicardi() {
    const [vinos, setVinos] = useState([]);
    const [vinosFamiliaAicardi, setVinosFamiliaAicardi] = useState([]);
    const [verDetalle, setVerDetalle] = useState({ detalle: false, url2: null });

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosAicardi = await obtenerVinosPorBodega('Familia Aicardi');
            setVinosFamiliaAicardi(vinosAicardi);
        };

        cargarDatos();

    }, []);


    const vinosFamiliaAicardiPar= vinosFamiliaAicardi.filter(vino => vino.partida === 'parcela unica reserva' )
    const vinosFamiliaAicardiSer = vinosFamiliaAicardi.filter(vino => vino.partida === 'serie terrior')
    const vinosFamiliaAicardiBar = vinosFamiliaAicardi.filter(vino => vino.partida === 'barrel fermented')
    const vinosFamiliaAicardiFoto = vinosFamiliaAicardi.filter(vino => vino.url);




    return (
        <>
            <section className="seccionFincaIral">
                <div id="aicardi" className="center">
                    <img className="logoBodegas" src="../../logoAicardi.svg" alt="logoA" />
                </div>
                <div className="container">
                    <div className="table-container">
                        <table className="table table-dark table-striped w-70 m-auto">
                            <thead className="text-black titulos-estilo">
                                <th>Nombre del Producto</th>
                                <th>Año</th>
                                <th>Origen</th>
                                <th>Precio</th>
                            </thead>
                            <tbody>
                                <h5 className="text-black titulo-bodega">PARCELA UNICA RESERVA</h5>
                                {vinosFamiliaAicardiPar.map(vino =>
                                    <tr key={vino.id}>
                                        <td className="descripcion">{vino.nombre}</td>
                                        <td className="descripcion">{vino.año}</td>
                                        <td className="descripcion">{vino.origen}</td>
                                        <td className="descripcion">{vino.precio}</td>
                                    </tr>
                                )}
                                <h5 className="text-black titulo-bodega">SERIE TERRIOR</h5>
                                {vinosFamiliaAicardiSer.map(vino =>
                                    <tr key={vino.id}>
                                        <td className="descripcion">{vino.nombre}</td>
                                        <td className="descripcion">{vino.año}</td>
                                        <td className="descripcion">{vino.origen}</td>
                                        <td className="descripcion">{vino.precio}</td>
                                    </tr>
                                )}
                                <h5 className="text-black titulo-bodega">BARREL FERMENTED</h5>
                                {vinosFamiliaAicardiBar.map(vino =>
                                    <tr key={vino.id}>
                                        <td className="descripcion">{vino.nombre}</td>
                                        <td className="descripcion">{vino.año}</td>
                                        <td className="descripcion">{vino.origen}</td>
                                        <td className="descripcion">{vino.precio}</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row container mt-5 m-auto cardQueries ">
                    <h5 className="text-black center bodegas">PARCELA UNICA RESERVA</h5>
                    {vinosFamiliaAicardiPar.map(vino => (
                        <div className='col-md-3 cardConteiner cardConteinerA pb-5 ms-5 mb-3 mt-3 '>
                            {vino.url && <img className="img-card img-cardA" src={vino.url} alt={vino.nombre} />}
                            <h2 className="titulo-vino">{vino.nombre}</h2>
                            <h3 className="titulo-origen">{vino.origen}</h3>
                            <h4 className="año-vinos">Año:{vino.año}</h4>
                            <button className="btn btn-dark boton-detalleA boton-detalle mt-3" onClick={(e) => setVerDetalle({ detalle: true, url2: vino.url2 })}><p className="titulo-detalleA">Ver Detalle..</p></button>
                        </div>
                    ))}
                </div>
                <div className="row container mt-5 m-auto cardQueries ">
                    <h5 className="text-black center bodegas">SERIE TERRIOR</h5>
                    {vinosFamiliaAicardiSer.map(vino => (
                        <div className='col-md-3 cardConteiner cardConteinerA pb-5 ms-5 mb-3 mt-3 '>
                            {vino.url && <img className="img-card img-cardA" src={vino.url} alt={vino.nombre} />}
                            <h2 className="titulo-vino">{vino.nombre}</h2>
                            <h3 className="titulo-origen">{vino.origen}</h3>
                            <h4 className="año-vinos">Año:{vino.año}</h4>
                            <button className="btn btn-dark boton-detalleA boton-detalle mt-3" onClick={(e) => setVerDetalle({ detalle: true, url2: vino.url2 })}><p className="titulo-detalleA">Ver Detalle..</p></button>
                        </div>
                    ))}
                </div>
                <div className="row container mt-5 m-auto  cardQueries">
                    <h5 className="text-black center bodegas">BARREL FERMENTED</h5>
                    {vinosFamiliaAicardiBar.map(vino => (
                        <div className='col-md-3 cardConteiner cardConteinerA pb-5 ms-5 mb-3 mt-3 '>
                            {vino.url && <img className="img-card" src={vino.url} alt={vino.nombre} />}
                            <h2 className="titulo-vino">{vino.nombre}</h2>
                            <h3 className="titulo-origen">{vino.origen}</h3>
                            <h4 className="año-vinos">Año:{vino.año}</h4>
                            <button className="btn btn-dark boton-detalleA boton-detalle mt-3" onClick={(e) => setVerDetalle({ detalle: true, url2: vino.url2 })}><p className="titulo-detalleA">Ver Detalle..</p></button>
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

