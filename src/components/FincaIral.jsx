import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";
import '../css/FincaIral.css'





export default function FincaIral (){
    const [vinos,setVinos] = useState([]);
    const [vinosFincaIral,setVinosFincaIral] = useState([]);
    const [verDetalle,setVerDetalle] = useState({detalle:false,url2:null});

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosIral = await obtenerVinosPorBodega('Finca Iral');
            setVinosFincaIral(vinosIral);
        };

        cargarDatos();

    },[]);

    const vinosFincaIralFoto = vinosFincaIral.filter(vino => vino.url);

    return(
    <>
            <section className="seccionFincaIral">
                <div id="fincaIral" className="logo-container center mb-5">
                    <img className="logoBodegas" src="https://fincairal.com/wp-content/uploads/2024/01/finca-iral-logo-Recuperado.png " alt="logoIral" />
                </div>
                <div className="container">
                <div className="table-container tableM tableC">
                <table className="table  table-dark table-striped w-70 m-auto">
                    <thead className="text-black titulos-estilo titulos-estiloC">
                        <th>Nombre del Producto</th>
                        <th>Origen</th>
                        <th>Precio</th>
                    </thead>
                    <tbody>
                        {vinosFincaIral.map(vino =>(
                            <tr key={vino.id}>
                                <td className="descripcion descripcionC">{vino.nombre}</td>
                                <td className="descripcion descripcionC">{vino.origen}</td>
                                <td className="descripcion descripcionC">${vino.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div className="row container mt-5 m-auto  cardQueries cardQueriesM cardQueriesC ">
                    {vinosFincaIralFoto.map(vino =>
                        <div className='col-md-3 cardConteiner cardConteinerF cardConteinerM pb-5 ms-5 mb-3 mt-3'>
                            {vino.url && <img className="img-card img-cardF img-cardM" src={vino.url} alt={vino.nombre}/>}
                            <h4 className="titulo-iral titulo-iralM">{vino.nombre}</h4>
                            <h5 className="titulo-origen">{vino.origen}</h5>
                            <button className="btn btn-dark boton-detalleF boton-detalle boton-detalleM mt-3" onClick={() => setVerDetalle({ detalle: true, url2: vino.url2 })}><p className="titulo-detalle">Ver Detalle..</p></button>
                        </div>
                    )}
                </div>
                <div className={verDetalle.detalle ? 'verDetalleContainer' : 'd-none'}>
                <div className="verDetalleContainer2">
                    <div className='d-flex justify-content-end'>
                        <button onClick={() => setVerDetalle({ detalle: false, url2: null })} className='btnNO btnSs close-button'>
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                    <img className="foto-detalle" src={verDetalle.url2} alt="Detalle" />
                </div>
                </div>
                </div>
            </section>

    </>);
};
