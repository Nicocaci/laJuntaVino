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
                </div>

            </section>

    </>);
};

