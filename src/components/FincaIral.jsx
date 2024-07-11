import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/FincaIral.css'





export default function FincaIral (){
    const [vinos,setVinos] = useState([]);
    const [vinosFincaIral,setVinosFincaIral] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosIral = await obtenerVinosPorBodega('Finca Iral');
            setVinosFincaIral(vinosIral);
        };

        cargarDatos();

    },[]);
    return(
    <>
            <section className="seccionFincaIral">
                <div className="logo-container center mb-5">
                    <img className="logoBodegas" src="https://fincairal.com/wp-content/uploads/2024/01/finca-iral-logo-Recuperado.png " alt="logoIral" />
                </div>
                <div className="container">
                <div className="table-container">
                <table className="table table-dark table-striped w-70 m-auto">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosFincaIral.map(vino =>(
                            <tr key={vino.id}>
                                <td>{vino.nombre}</td>
                                <td>{vino.origen}</td>
                                <td>${vino.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className='image-container'>
                    <img  src="https://www.consultoravcwines.com.ar/wp-content/uploads/2021/05/Finca-Iral-Single-Vineyard-Cabernet-Franc-Azul.png" alt="" />
                </div>
                </div>
            </section>

    </>);
};
