import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/Lamuchi.css'






export default function Lamuchi (){
    const [vinos,setVinos] = useState([]);
    const [vinosBodegaLamuchi,setVinosBodegaLamuchi] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosLamuchi = await obtenerVinosPorBodega('Bodega Lamuchi');
            setVinosBodegaLamuchi(vinosLamuchi);
        };

        cargarDatos();

    },[]);
    return(
    <>
            <section className="seccionFincaIral">
                <h1 id="lamuchi" className="center" >Vinos Lamuchi</h1>
                <div className="container">
                <div className="table-container">
                    <table className="table table-dark table-striped w-70 m-auto">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosBodegaLamuchi.map(vino =>(
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
                    <img className='vino-lamuchi' src="https://www.lovemarktrading.com/wp-content/uploads/2020/10/lamuchi_malbec.png" alt="" />
                </div>
                </div>

            </section>

    </>);
};

