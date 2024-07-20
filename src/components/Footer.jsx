import '../css/Footer.css'

export default function Footer(){
    return(
        <>
        <section className="seccionFooter">
            <div className='footer-div'>
                <div className=''>
                    <h2 className='titulo-footer text-white mb-3'>Contactate con nosotros</h2>
                </div>
                <div className='footer-descripcion'>
                    <li  className='agus-style'>Agustin Kraus</li>
                    <li  className=''><i class="bi bi-whatsapp me-4"></i>+54 9 11 6245-2578</li>
                    <li className=''><i class="bi bi-instagram me-4"></i>@lajuntavinos</li>
                    <li className=''><i class="bi bi-envelope me-4"></i>lajuntavinos@gmail.com</li>
                </div>
            </div>
            <div className='footer-div2'>
                <div >
                    <h2 className='text-white titulo-footer'>La Junta Vinos</h2>
                </div>
                <div className='footer-text'>
                    <p className='text-white'>Desde 2018 llenamos tu copa con vinos diferentes. Quilmes y cercanías. Vino en MIX-Eventos-Degustaciones. Atención a gastronomía</p>
                </div>
            </div>
        </section>
        </>
    )
}