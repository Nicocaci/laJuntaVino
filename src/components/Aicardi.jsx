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
                            <thead className="text-black titulos-estilo titulos-estiloC">
                                <th>Nombre del Producto</th>
                                <th>Año</th>
                                <th>Origen</th>
                                <th>Precio</th>
                            </thead>
                            <tbody>
                                <h5 className="text-black titulo-bodega">PARCELA UNICA RESERVA</h5>
                                {vinosFamiliaAicardiPar.map(vino =>
                                    <tr key={vino.id}>
                                        <td className="descripcion descripcionC">{vino.nombre}</td>
                                        <td className="descripcion descripcionC">{vino.año}</td>
                                        <td className="descripcion descripcionC">{vino.origen}</td>
                                        <td className="descripcion descripcionC">${vino.precio}</td>
                                    </tr>
                                )}
                                <h5 className="text-black titulo-bodega">SERIE TERRIOR</h5>
                                {vinosFamiliaAicardiSer.map(vino =>
                                    <tr key={vino.id}>
                                        <td className="descripcion descripcionC">{vino.nombre}</td>
                                        <td className="descripcion descripcionC">{vino.año}</td>
                                        <td className="descripcion descripcionC">{vino.origen}</td>
                                        <td className="descripcion descripcionC">${vino.precio}</td>
                                    </tr>
                                )}
                                <h5 className="text-black titulo-bodega">BARREL FERMENTED</h5>
                                {vinosFamiliaAicardiBar.map(vino =>
                                    <tr key={vino.id}>
                                        <td className="descripcion descripcionC">{vino.nombre}</td>
                                        <td className="descripcion descripcionC">{vino.año}</td>
                                        <td className="descripcion descripcionC">{vino.origen}</td>
                                        <td className="descripcion descripcionC">${vino.precio}</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>);
};

