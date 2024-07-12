import { useEffect } from "react";
import { useState } from "react";
import { obtenerTodosLosVinos, obtenerVinosPorBodega } from "../asyncmock";



export default function Gauchezco() {
    const [vinos, setVinos] = useState([]);
    const [vinosGauchezcoReserve, setVinosGauchezcoReserve] = useState([]);
    const [mostrarImagen, setMostrarImagen] = useState(false);
    const handleButtonClick = () => {
        setMostrarImagen(!mostrarImagen);
    }

    useEffect(() => {
        const cargarDatos = async () => {
            const todosLosVinos = await obtenerTodosLosVinos();
            setVinos(todosLosVinos);

            const vinosGauchezco = await obtenerVinosPorBodega('Gauchezco');
            setVinosGauchezcoReserve(vinosGauchezco);
        };

        cargarDatos();

    }, []);

    const vinosGauchezcoReserveEM = vinosGauchezcoReserve.filter(vino => vino.nombre === 'Gauchezco Estate Malbec');
    const vinosGauchezcoReserveECS = vinosGauchezcoReserve.filter(vino => vino.nombre === 'Gauchezco Estate Cabernet Sauvignon');
    const vinosGauchezcoReserveRCF = vinosGauchezcoReserve.filter(vino => vino.nombre === 'Gauchezco Reserva Cabernet Franc');
    const vinosGauchezcoReserveVM = vinosGauchezcoReserve.filter(vino => vino.nombre === 'Gauchezco Reserva Malbec');
    const vinosGauchezcoReserveRRR = vinosGauchezcoReserve.filter(vino => vino.nombre === 'Gauchezco Reserva Red Blend');

    return (
        <>
            <section className="seccionFincaIral">
                <div className="center">
                    <img className="logoBodegas mb-5" src="https://gauchezco.com/cdn/shop/t/2/assets/logo.png?v=153744729930749575201539804183" alt="logoG" />
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
                                {vinosGauchezcoReserve.map(vino => (
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
                </div>
                <div className="row container mt-5 m-auto">
                    <div className="col-md-4">
                        {vinosGauchezcoReserveEM.map(vino => (
                            <div className=" cardConteiner pb-5 ms-5" >
                                <img className="img-card" src="https://gauchezco.com/cdn/shop/products/GauchezcoEstateMalbec_large_2x.png?v=1637345414" alt="" />
                                <div className="">
                                    <h3>{vino.nombre}</h3>
                                    <h4>{vino.origen}</h4>
                                    {/* <button onClick={handleButtonClick}>
                                        {mostrarImagen ? 'Ocultar Imagen' : 'Mostrar Imagen'}
                                    </button>
                                    {mostrarImagen && <img className="img-detalle" src='../../GauchezcoEstateMalbec.jpg' alt='asdasd'/>} */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        {vinosGauchezcoReserveECS.map(vino => (
                            <div className=" cardConteiner pb-5 ms-5" >
                                <img className="img-card" src="https://gauchezco.com/cdn/shop/products/GauchezcoEstateCabernetSauvignon_large_2x.png?v=1637345321" alt="" />
                                <div className="">
                                    <h3>{vino.nombre}</h3>
                                    <h4>{vino.origen}</h4>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" col-md-4 ">
                        {vinosGauchezcoReserveRCF.map(vino => (
                            <div className=" cardConteiner pb-5 ms-5" >
                                <img className="img-card" src="https://gauchezco.com/cdn/shop/products/Gauchezco_Reserve_CF_large_2x.png?v=1596746774" alt="" />
                                <div className="">
                                    <h3>{vino.nombre}</h3>
                                    <h4>{vino.origen}</h4>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row container mt-5 m-auto"                                                                                         >
                    <div className="col-md-4">
                        {vinosGauchezcoReserveVM.map(vino => (
                            <div className=" cardConteiner pb-5 ms-5" >
                                <img className="img-card" src="https://gauchezco.com/cdn/shop/products/Gauchezco_Reserve_MC_large_2x.png?v=1596746412" alt="" />
                                <div className="">
                                    <h3>{vino.nombre}</h3>
                                    <h4>{vino.origen}</h4>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4 ">
                        {vinosGauchezcoReserveRRR.map(vino => (
                            <div className=" cardConteiner pb-5 ms-5" >
                                <img className="img-card" src="https://images.vivino.com/thumbs/w81If2BLQ5e3sR6Oola70Q_pb_x600.png" alt="" />
                                <div className="">
                                    <h3>{vino.nombre}</h3>
                                    <h4>{vino.origen}</h4>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>);
};


