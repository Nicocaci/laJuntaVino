import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";






export default function Staphyle (){
    const [vinos,setVinos] = useState([]);
    const [vinosBodegaStaphyle,setVinosBodegaStaphyle] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosStaphyle = await obtenerVinosPorBodega('Staphyle');
            setVinosBodegaStaphyle(vinosStaphyle);
        };

        cargarDatos();

    },[]);
    return(
    <>
            <section className="seccionFincaIral">
                <h1 id="staphyle" className="center" >Vinos Staphyle</h1>
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
                        {vinosBodegaStaphyle.map(vino =>(
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
                    <img className='vino' src="https://acdn.mitiendanube.com/stores/087/677/products/staphyle_malbec1-53133e8e1d5371ca0616245705786617-640-0.png" alt="" />
                </div>
                </div>
            </section>

    </>);
};
