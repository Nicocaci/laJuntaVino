import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";





export default function LaIride (){
    const [vinos,setVinos] = useState([]);
    const [vinosLaIride,setVinosLaIride] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosIride = await obtenerVinosPorBodega('La Íride');
            setVinosLaIride(vinosIride);
        };

        cargarDatos();

    },[]);
    return(
    <>
            <section className="seccionFincaIral">
                <div className="center">
                    <img className="logoBodegas"  src="../../logoLaIride.svg" alt="logoF" />
                </div>
                <div className="container">
                <div className="table-container">
                <table className="table table-dark table-striped w-70 m-auto">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Botella</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosLaIride.map(vino =>(
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
                <div className="image-container">
                <img className='vino' src="https://www.infinitybrands.pe/wp-content/uploads/2019/07/LA-IRIDE-ETIQUETA-PLATA-MALBEC.png" alt="" />
                </div>
                </div>
            </section>

    </>);
};

