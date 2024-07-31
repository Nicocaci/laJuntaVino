import { useEffect, useState } from "react";
import { obtenerVinosPorBodega, obtenerTodosLosVinos } from "../asyncmock";
import '../css/Camuñas.css'

export default function Camuñas(){
    const [vinos,setVinos] = useState ([]);
    const [vinosBodegaCamuñas,setVinosBodegaCamuñas] = useState([]);
    const [verDetalle,setVerDetalle] = useState({detalle:false,url2:null});

        useEffect(() =>{
            const CargarDatos = async () => {
                const todosLosVinos = await obtenerTodosLosVinos();
                setVinos(todosLosVinos);

                const vinosCamuñas = await obtenerVinosPorBodega('Finca Camuñas');
                setVinosBodegaCamuñas(vinosCamuñas);
            };
            CargarDatos();
        });
    const vinosBodegaCamuñasFoto = vinosBodegaCamuñas.filter(vino => vino.url);
    
    return (
        <section className="seccionFincaIral">
            <div id="camuñas" className="center">
                <img className="logoBodegas" src="../../logoCamuñas.svg" alt="logoC" />
            </div>
            <div className="container">
                <div className="table-container">
                    <table className="table table-dark table-striped w-70 m-auto titulos-estilos titulos-estilosC">
                        <thead className="text-black">
                            <tr>
                                <th>Nombre del Producto</th>
                                <th>Origen</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vinosBodegaCamuñas.map(vino => (
                                <tr key={vino.id}>
                                    <td className="descripcion descripcionC">{vino.nombre}</td>
                                    <td className="descripcion descripcionC">{vino.origen}</td>
                                    <td className="descripcion descripcionC">${vino.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

