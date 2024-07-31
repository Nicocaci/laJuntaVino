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
                        <table className="table table-dark table-striped w-70 m-auto titulos-estilo titulos-estiloC">
                            <thead className="text-black">
                                <th>Nombre del Producto</th>
                                <th>Origen</th>
                                <th>Botella</th>
                                <th>Precio</th>
                            </thead>
                            <tbody>
                                {vinosGauchezcoReserve.map(vino => (
                                    <tr key={vino.id}>
                                        <td className="descripcion descripcionC">{vino.nombre}</td>
                                        <td className="descripcion descripcionC">{vino.origen}</td>
                                        <td className="descripcion descripcionC">{vino.botella}</td>
                                        <td className="descripcion descripcionC">${vino.precio}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>);
};


