import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";






export default function Aicardi (){
    const [vinos,setVinos] = useState([]);
    const [vinosFamiliaAicardi,setVinosFamiliaAicardi] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosAicardi = await obtenerVinosPorBodega('Familia Aicardi');
            setVinosFamiliaAicardi(vinosAicardi);
        };

        cargarDatos();

    },[]);
    return(
    <>
            <section className="seccionFincaIral">
                <h1 id="aicardi" className="center" >Familia Aicardi</h1>
                <div className="container">
                <div className="table-container">
                <table className="table table-dark table-striped w-70 m-auto">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Año</th>
                        <th>Origen</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosFamiliaAicardi.map(vino =>(
                            <tr key={vino.id}>
                                <td>{vino.nombre}</td>
                                <td>{vino.año}</td>
                                <td>{vino.origen}</td>
                                <td>${vino.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            <div className='image-container'>
                <img className='' src="https://www.docwinehouse.com/wp-content/uploads/2021/09/aicardi-blend-3-300x300.png" alt="" />
            </div>
            </div>
            </section>
        </>);
};

