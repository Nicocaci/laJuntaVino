import '../css/Home.css'

export default function Home() {
    return (
        <section className=' seccion' >
                <div className=''>
                <img className='logo' src="../../logo.png" alt="logo" />
                </div>
                <div>
                <h1 className='titulo-precios text-white'>Bodegas 2024</h1>
                </div>
                <nav className='navBar'>
                    <ul className='navBar text-white'>
                        <li><a  className='text-white' style={{textDecoration:"none"}} href="#fincaIral">Finca Iral Winery</a></li>
                        <li><a  className='text-white' style={{textDecoration:"none"}} href="#primogenito">Primogénito Patritti</a></li>
                        <li><a  className='text-white' style={{textDecoration:"none"}} href="#aicardi">Familia Aicardi</a></li>
                        <li><a  className='text-white' style={{textDecoration:"none"}} href="#laIride">La Íride</a></li>
                        <li><a  className='text-white' style={{textDecoration:"none"}} href="#gauchezco">Gauchezco</a></li>
                        <li><a  className='text-white' style={{textDecoration:"none"}} href="#staphyle">Staphyle</a></li>
                        <li><a  className='text-white' style={{textDecoration:"none"}} href="#camuñas">Finca Camuñas</a></li>
                        <li><a  className='text-white' style={{textDecoration:"none"}} href="#xumek">Xumek</a></li>
                        <li><a  className='text-white' style={{textDecoration:"none"}} href="#lamuchi">Lamuchi</a></li>
                        <li><a  className='text-white'  style={{textDecoration:"none"}} href="#andillian">Andillian</a></li>

                    </ul>
                </nav>
        </section>
    )
}