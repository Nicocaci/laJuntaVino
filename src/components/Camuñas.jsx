import { useEffect, useState } from "react";
import { obtenerVinosPorBodega, obtenerTodosLosVinos } from "../asyncmock";

export default function Camuñas(){
    const [vinos,setVinos] = useState ([]);
    const [vinosBodegaCamuñas,setVinosBodegaCamuñas] = useState([]);
        useEffect(() =>{
            const CargarDatos = async () => {
                const todosLosVinos = await obtenerTodosLosVinos();
                setVinos(todosLosVinos);

                const vinosCamuñas = await obtenerVinosPorBodega('Finca Camuñas');
                setVinosBodegaCamuñas(vinosCamuñas);
            };
            CargarDatos();
        });
    
    
    return(
        <section className="seccionFincaIral">
            <div id="camuñas" className="center">
                <img className="logoBodegas" src="../../logoCamuñas.svg" alt="logoC" />
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
                    {vinosBodegaCamuñas.map(vino =>(
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
                <img className='vino' src="https://acdn.mitiendanube.com/stores/087/677/products/fc_malbec_r1-edf886d59e0367172a16533377279734-640-0.png" alt="" />
            </div>
            </div>
        </section>
    );
};

