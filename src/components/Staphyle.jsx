import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/Staphyle.css'





export default function Staphyle (){
    const [vinos,setVinos] = useState([]);
    const [vinosBodegaStaphyle,setVinosBodegaStaphyle] = useState([]);
    const [verDetalle,setVerDetalle] = useState({detalle:false,url2:null});

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosStaphyle = await obtenerVinosPorBodega('Staphyle');
            setVinosBodegaStaphyle(vinosStaphyle);
        };

        cargarDatos();

    },[]);

    const vinosBodegaStaphyleFoto = vinosBodegaStaphyle.filter(vino => vino.url);
    return(
    <>
            <section className="seccionFincaIral">
                <div id="staphyle" className="center mb-5">
                    <img className="logoBodegas" src="https://www.staphyle.com/img/staphyle-logo.png" alt="logoS" />
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
                        {vinosBodegaStaphyle.map(vino =>(
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
