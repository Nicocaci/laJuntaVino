import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";






export default function Primogenito (){
    const [vinos,setVinos] = useState([]);
    const [vinosBodegaPrimogenito,setVinosBodegaPrimogenito] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosPrimogenito = await obtenerVinosPorBodega('Primogenito');
            setVinosBodegaPrimogenito(vinosPrimogenito);
        };

        cargarDatos();

    },[]);
    return(
    <>
            <section className="seccionFincaIral">
                <h1 id="primogenito" className="center" >Vinos Primogenito</h1>
                <div className="container">
                <div className="table-container">   
                <table className="table table-dark table-striped w-70 m-auto">
                    <thead className="text-black">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosBodegaPrimogenito.map(vino =>(
                            <tr key={vino.id}>
                                <td>{vino.nombre}</td>
                                <td>{vino.origen}</td>
                                <td>${vino.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className='image-container'><img  src="https://emporiohoch.com.br/wp-content/uploads/2021/11/40-270x270.png" alt="" />
                </div>
                </div>
            </section>

    </>);
};

