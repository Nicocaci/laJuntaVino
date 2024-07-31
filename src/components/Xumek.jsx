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
                <div id="xumek" className="center mb-5">
                    <img className="logoBodegas" src="https://xumek.com.ar/wp-content/uploads/2020/06/logo-200px.png" alt="logoX" />
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
                        {vinosBodegaXumek.map(vino =>(
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

