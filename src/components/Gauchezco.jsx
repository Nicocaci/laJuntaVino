import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";





export default function Gauchezco (){
    const [vinos,setVinos] = useState([]);
    const [vinosGauchezcoReserve,setVinosGauchezcoReserve] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosGauchezco = await obtenerVinosPorBodega('Gauchezco');
            setVinosGauchezcoReserve(vinosGauchezco);
        };

        cargarDatos();

    },[]);
    return(
    <>
            <section className="seccionFincaIral">
                <h1 id="gauchezco" className="center" >Gauchezco</h1>
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
                        {vinosGauchezcoReserve.map(vino =>(
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
                <div className='image-container'>+
                    <img className='vino' src="https://gauchezco.com/cdn/shop/products/Gauchezco_Reserve_CF_large_2x.png?v=1596746774" alt="" />
                </div>
                </div>
            </section>

    </>);
};


