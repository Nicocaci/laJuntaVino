import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/FincaIral.css'
import '../css/Andillian.css'





export default function Andillian (){
    const [vinos,setVinos] = useState([]);
    const [vinosBodegaAndillian,setVinosBodegaAndillian] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosAndillian = await obtenerVinosPorBodega('Andillian');
            setVinosBodegaAndillian(vinosAndillian);
        };

        cargarDatos();

    },[]);
    return(
    <>
            <section className="seccionFincaIral">
                <div id="andillian" className="center">
                    <img className="logoAndillian" src="logoAndillian.jpg" alt="" />
                </div>
                <div className="container">
                <div className="table-container">
                <table className="table table-dark table-striped w-50 m-auto">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Botella</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosBodegaAndillian.map(vino =>(
                            <tr key={vino.id}>
                                <td>{vino.nombre}</td>
                                <td>{vino.origen}</td>
                                <td>{vino.botella}</td>
                                <td>${vino.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className='image-container'>
                    <img className='vino' src="https://cellar.db.wine/attachments/4f30ed62-d3ce-4558-811a-9d0d4028dc13/290b3374b12c0dd2b97510d426899f25792cf1104e650f30b8e2cdc4c2a03516.png" alt="" />
                </div>
                </div>
            </section>

    </>);
};

