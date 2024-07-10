import '../css/Xumek.css'

export default function Xumek(){
    return(
        <section id='xumek' className='seccionFincaIral'>
        <h1 className='center'>Bodega Xumek</h1>
        <div className='container'>
        <div className='table-container'>
        <table>
            <tr>
                <th>Nombre del Producto</th>
                <th>Origen</th>
                <th>Precio</th>
            </tr>
            <tr>
                <td>Línea Fauna Rose de Pinot Noir</td>
                <td>Valle de Zonda, San Juan</td>
                <td>$10.000</td>
            </tr>
            <tr>
                <td>Línea Fauna Malbec</td>
                <td>Valle de Zonda, San Juan</td>
                <td>$10.000</td>
            </tr>
            <tr>
                <td>Línea Fauna Syrah</td>
                <td>Valle de Zonda, San Juan</td>
                <td>$10.000</td>
            </tr>
            <tr>
                <td>Línea Fauna Chardonnay</td>
                <td>Valle de Zonda, San Juan</td>
                <td>$10.000</td>
            </tr>
            <tr>
                <td>Línea Fauna Espumante</td>
                <td>SValle de Zonda, San Juan</td>
                <td>$10.000</td>
            </tr>
            <tr>
                <td>Línea Abismo Malbec</td>
                <td>Valle de Zonda, San Juan</td>
                <td>$50.000</td>
            </tr>
        </table>
        </div>
        <div className=''><img className='vino-xumek' src="https://acdn.mitiendanube.com/stores/087/677/products/xumek-syrah_ok-b30affe6d7c93cae3916964513735602-1024-1024.png" alt="" />
        </div>
        </div>
    </section>
    )
}