import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";






export default function Xumek (){
    const [vinos,setVinos] = useState([]);
    const [vinosBodegaXumek,setVinosBodegaXumek] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosXumek = await obtenerVinosPorBodega('Bodega Xumek');
            setVinosBodegaXumek(vinosXumek);
        };

        cargarDatos();

    },[]);
    return(
    <>
            <section className="seccionFincaIral">
                <h1 id="xumek" className="center" >Vinos Xumek</h1>
                <div className="container">
                <div className="table-container">
                <table className="table table-dark table-striped w-70 m-auto">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosBodegaXumek.map(vino =>(
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
                    <img className='vino-xumek' src="https://acdn.mitiendanube.com/stores/087/677/products/xumek-syrah_ok-b30affe6d7c93cae3916964513735602-1024-1024.png" alt="" />
                </div>
                </div>
            </section>

    </>);
};

