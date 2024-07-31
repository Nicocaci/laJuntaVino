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
                <table className="table table-dark table-striped w-70 m-auto titulos-estilo titulos-estiloC">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Botella</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosLaIride.map(vino =>(
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

