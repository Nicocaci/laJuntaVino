import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/FincaIral.css'





export default function FincaIral (){
    const [vinos,setVinos] = useState([]);
    const [vinosFincaIral,setVinosFincaIral] = useState([]);
    const [verDetalle,setVerDetalle] = useState({detalle:false,url2:null});

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosIral = await obtenerVinosPorBodega('Finca Iral');
            setVinosFincaIral(vinosIral);
        };

        cargarDatos();

    },[]);

    const vinosFincaIralFoto = vinosFincaIral.filter(vino => vino.url);

    return(
    <>
            <section className="seccionFincaIral">
                <div id="fincaIral" className="logo-bodegas center mb-5">
                    <img className="logoBodegas logo-bodegas" src="https://fincairal.com/wp-content/uploads/2024/01/finca-iral-logo-Recuperado.png " alt="logoIral" />
                </div>
                <div className="container">
                <div className="table-container tableM tableC tableCe ">
                <table className="table   table-dark table-striped w-70 m-auto">
                    <thead className="text-black titulos-estilo titulos-estiloC">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosFincaIral.map(vino =>(
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
