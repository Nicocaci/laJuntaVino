import '../css/Home.css'

export default function Home() {
    return (
        <section className='row seccion' >
            <div className='col'>
                <img className='foto' src="../../public/vinos.jpg" alt="vinos" />
            </div>
            <div className='col-5'>
                <img className='logo' src="../../public/logo.png" alt="logo" />
                <h1 className='titulo-precios text-white'>Bodegas 2024</h1>
                <nav className='navBar'>
                    <ul>
                        <a style={{textDecoration: "none"}} href="#fincaIral"><li className='text-white'>Finca Iral Winery</li></a>
                        <a style={{textDecoration: "none"}} href="#primogenito"><li className='text-white'>Primogénito Patritti</li></a>
                        <a style={{textDecoration: "none"}} href="#aicardi"><li className='text-white'>Familia Aicardi</li></a>
                        <a style={{textDecoration: "none"}} href="#laIride"><li className='text-white'>La Íride</li></a>
                        <a style={{textDecoration: "none"}} href="#gauchezco"><li className='text-white'>Gauchezco</li></a>
                        <a style={{textDecoration: "none"}} href="#staphyle"><li className='text-white'>Staphyle</li></a>
                        <a style={{textDecoration: "none"}} href="#camuñas"><li className='text-white'>Finca Camuñas</li></a>
                        <a style={{textDecoration: "none"}} href="#xumek"><li className='text-white'>Xumek</li></a>
                        <a style={{textDecoration: "none"}} href="#lamuchi"><li className='text-white'>Lamuchi</li></a>
                        <a style={{textDecoration: "none"}} href="#andillian"><li className='text-white'>Andillian</li></a>
                    </ul>
                </nav>
            </div>
        </section>
    )
}