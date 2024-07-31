import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/Primogenito.css'






export default function Primogenito (){
    const [vinos,setVinos] = useState([]);
    const [vinosBodegaPrimogenito,setVinosBodegaPrimogenito] = useState([]);
    const [verDetalle,setVerDetalle] = useState({detalle:false,url2:null});

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosPrimogenito = await obtenerVinosPorBodega('Primogenito');
            setVinosBodegaPrimogenito(vinosPrimogenito);
        };

        cargarDatos();

    },[]);

    const vinosBodegaPrimogenitoFoto = vinosBodegaPrimogenito.filter(vino => vino.url);

    return(
    <>
            <section className="seccionFincaIral">
                <div id="primogenito" className="center">
                    <img className=' logoBodegas' src="../../logoprimogenito.svg" alt="" />
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
                        {vinosBodegaPrimogenito.map(vino =>(
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

