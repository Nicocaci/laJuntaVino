// Listado de todos los vinos

const listadoVinos = [
    {id:1, bodega:'', nombre:'Finca Iral Chardonnay - Single Vineyard Ugarteche',año:'-', origen:'Lujan De Cuyo', botella:'-', precio:9900},
    {id:2, bodega:'Finca Iral',nombre:'Finca Iral Sauvignon Blanc - Single Vineyard Ugarteche',año:'-',origen:'Lujan De Cuyo',botella:'-',precio:9900},
    {id:3, bodega:'Finca Iral',nombre:'Finca Iral Malbec - Single Vineyard Ugarteche',año:'-',origen:'Lujan De Cuyo',botella:'-',precio:9900},
    {id:4, bodega:'Finca Iral',nombre:'Finca Iral Cabernet Franc - Single Vineyard Ugarteche',año:'-',origen:'Lujan De Cuyo',botella:'-',precio:9900},
    {id:5, bodega:'Finca Iral',nombre:'Finca Iral Blend - Single Vineyard Ugarteche',año:'-',origen:'Lujan De Cuyo',botella:'-',precio:9900},
    {id:6, bodega:'Finca Iral',nombre:'Finca Iral Petit Verdot - Single Vineyard Ugarteche',año:'-',origen:'Lujan De Cuyo',botella:'-',precio:9900},
    {id:7, bodega:'Finca Iral',nombre:'Finca Iral Bonarda - Single Vineyard Ugarteche',año:'-',origen:'Lujan De Cuyo',botella:'-',precio:9900},
    {id:8, bodega:'Finca Iral',nombre:'Finca Iral Malbec - Single Vineyard Tunuyán',año:'-',origen:'Las Pintadas, Valle de UcoDe Los Sauces, Valle de Uco',botella:'-',precio:12000},
    {id:9, bodega:'Finca Iral',nombre:'Finca Iral Cabernet Sauvignon - Single Vineyard Tunuyán',año:'-',origen:'Las Pintadas, Valle de UcoDe Los Sauces, Valle de Uco',botella:'-',precio:12000},
    {id:10, bodega:'Finca Iral',nombre:'Finca Iral Blend - Single Vineyard Tunuyán',año:'-', origen:'De Los Sauces, Valle de Uco',botella:'-',precio:12000},
    {id:11, bodega:'Finca Iral',nombre:'Finca Iral Rosé - Single Vineyard Tunuyán',año:'-',origen:'De Los Sauces, Valle de Uco',botella:'-',precio:9900},
    {id:12, bodega:'Finca Iral',nombre:'Finca Iral Winemaker Reserva',año:'-',origen:'Valle de Uco y Luján de Cuyo-',botella:'-',precio:19900},
    {id:13, bodega:'Primogenito',nombre:'Primogénito Malbec',año:'-',origen:'San Patricio del Chañar - Neuquén',botella:'-',precio:10000},
    {id:14, bodega:'Primogenito',nombre:'Primogénito Cabernet Sauvignon',año:'-',origen:'San Patricio del Chañar - Neuquén',botella:'-',precio:10000},
    {id:15, bodega:'Primogenito',nombre:'Primogénito Merlot',año:'-',origen:'San Patricio del Chañar - Neuquén',botella:'-',precio:10000},
    {id:16, bodega:'Primogenito',nombre:'Primogénito Pinot Noir',año:'-',origen:'San Patricio del Chañar - Neuquén',botella:'-',precio:14000},
    {id:16, bodega:'Familia Aicardi',nombre:'Malbec',año:2018,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000},
    {id:17, bodega:'Familia Aicardi',nombre:'Cabernet Sauvignon',año:2019,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000},
    {id:18, bodega:'Familia Aicardi',nombre:'Merlot',año:2019,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000},
    {id:19, bodega:'Familia Aicardi',nombre:'Pinot Noir',año:2019,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000},
    {id:20, bodega:'Familia Aicardi',nombre:'Cabernet Franc',año:2019,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000},
    {id:21, bodega:'Familia Aicardi',nombre:'Red Blend',año:2019,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000},
    {id:22, bodega:'Familia Aicardi',nombre:'Malbec Contraflor',año:2021,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:8000},
    {id:23, bodega:'Familia Aicardi',nombre:'Pinot Noir Contraflor',año:2021,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:8000},
    {id:24, bodega:'Familia Aicardi',nombre:'Cabernet Franc',año:2018,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:19000},
    {id:25, bodega:'Familia Aicardi',nombre:'Malbec',año:2018,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:19000},
    {id:26, bodega:'La Íride',nombre:'La Íride Plata Malbec',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:27, bodega:'La Íride',nombre:'La Íride Plata Cabernet Sauvignon',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:28, bodega:'La Íride',nombre:'La Íride Plata Bag In Box 5L',año:'-',origen:'Maipú, Mendoza',botella:'3 x 5000 ml',precio:20000},
    {id:29, bodega:'La Íride',nombre:'La Íride Rojo Malbec',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:30, bodega:'La Íride',nombre:'La Íride Rojo Cabernet Sauvignon',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:31, bodega:'La Íride',nombre:'La Íride Rojo Chardonnay Dulce',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:32, bodega:'La Íride',nombre:'La Íride Rojo Bag in Box 3L',año:'-',origen:'Maipú, Mendoza',botella:'5 x 3000 ml',precio:20000},
    {id:33, bodega:'La Íride',nombre:'La Íride Huelga de Amores Malbec Roble',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:34, bodega:'La Íride',nombre:'La Íride Huelga de Amores Cabernet Sauvignon Roble',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:35, bodega:'La Íride',nombre:'La Íride Huelga de Amores Chardonnay Dulce',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:36, bodega:'La Íride',nombre:'La Íride Dorado Malbec Roble',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:37, bodega:'La Íride',nombre:'La Íride Dorado Cabernet Sauvignon Roble',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:38, bodega:'La Íride',nombre:'La Íride Coordenada Malbec Roble',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:39, bodega:'La Íride',nombre:'La Íride Coordenada Cabernet Sauvignon Roble-',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:40, bodega:'Gauchezco',nombre:'Gauchezco Estate Malbec',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:8500},
    {id:41, bodega:'Gauchezco',nombre:'Gauchezco Estate Cabernet Sauvignon',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:8500},
    {id:42, bodega:'Gauchezco',nombre:'Gauchezco Estate Malbec Rose',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:8500},
    {id:43, bodega:'Gauchezco',nombre:'Gauchezco Estate Syrah',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:8500},
    {id:44, bodega:'Gauchezco',nombre:'Gauchezco Reserva Malbec',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:11900},
    {id:45, bodega:'Gauchezco',nombre:'Gauchezco Reserva Cabernet Sauvignon',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:11900},
    {id:46, bodega:'Gauchezco',nombre:'Gauchezco Reserva Cabernet Franc',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:11900},
    {id:47, bodega:'Gauchezco',nombre:'Gauchezco Reserva Red Blend',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:11900},
    {id:48, bodega:'Gauchezco',nombre:'Gauchezco Plata Malbec',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:17000},
    {id:49, bodega:'Gauchezco',nombre:'Gauchezco Plata Malbec- Cabernet Franc',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:17000},
    {id:50, bodega:'Staphyle',nombre:'Staphyle Vástago GEA Malbec',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:51, bodega:'Staphyle',nombre:'Staphyle Vástago GEA Cabernet Sauvignon',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:52, bodega:'Staphyle',nombre:'Staphyle Vástago GEA Bonarda',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'3 x 5000 ml',precio:6000},
    {id:53, bodega:'Staphyle',nombre:'Staphyle Vástago GEA Malbec Rosé',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:54, bodega:'Staphyle',nombre:'Staphyle Vástago GEA Torrontés',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:55, bodega:'Staphyle',nombre:'Staphyle Premium Malbec',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000},
    {id:56, bodega:'Staphyle',nombre:'Staphyle Premium Cabernet Sauvignon',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000},
    {id:57, bodega:'Staphyle',nombre:'Staphyle Premium Cabernet Franc',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000},
    {id:58, bodega:'Staphyle',nombre:'Staphyle Premium Bonarda',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000},
    {id:59, bodega:'Staphyle',nombre:'Staphyle Premium Merlot',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000},
    {id:60, bodega:'Staphyle',nombre:'Staphyle Premium Chardonnay',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000},
    {id:61, bodega:'Staphyle',nombre:'Staphyle Partida Limitada Malbec',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:12000},
    {id:62, bodega:'Staphyle',nombre:'Staphyle Partida Limitada Cabernet Franc',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:12000},
    {id:63, bodega:'Staphyle',nombre:'Staphyle Partida Limitada Blend',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:12000},
    {id:64, bodega:'Staphyle',nombre:'Staphyle Dragón del Vino Malbec',año:'-',origen:'Potrerillos, Mendoza',botella:'6 x 750 ml',precio:18500},
    {id:65, bodega:'Finca Camuñas',nombre:'Finca Camuñas Malbec',año:'-',origen:'Valle de Tulum, San Juan',botella:'6 x 750 ml',precio:12000},
    {id:66, bodega:'Finca Camuñas',nombre:'Finca Camuñas Cabernet Sauvignon',año:'-',origen:'Valle de Tulum, San Juan',botella:'6 x 750 ml',precio:12000},
    {id:67, bodega:'Finca Camuñas',nombre:'Finca Camuñas Pinot Grigio',año:'-',origen:'Valle de Tulum, San Juan',botella:'6 x 750 ml',precio:12000},
    {id:68, bodega:'Finca Camuñas',nombre:'Finca Camuñas Malbec Reserva',año:'-',origen:'Valle de Tulum, San Juan',botella:'6 x 750 ml',precio:30000},
    {id:69, bodega:'Finca Camuñas',nombre:'San Juan de mi Sangre By Paco Pugas Malbec',año:'-',origen:'Valle de Tulum, San Juan',botella:'6 x 750 ml',precio:35000},
    {id:70, bodega:'Bodega Xumek',nombre:'Línea Fauna Rose de Pinot Noir',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:10000},
    {id:71, bodega:'Bodega Xumek',nombre:'Línea Fauna Malbec',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:10000},
    {id:72, bodega:'Bodega Xumek',nombre:'Línea Fauna Syrah',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:10000},
    {id:72, bodega:'Bodega Xumek',nombre:'Línea Fauna Chardonnay',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:10000},
    {id:74, bodega:'Bodega Xumek',nombre:'Línea Fauna Espumante',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:10000},
    {id:75, bodega:'Bodega Xumek',nombre:'Línea Abismo Malbec',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:50000},
    {id:76, bodega:'Bodega Lamuchi',nombre:'Zorritos Malbec',año:'-',origen:'Valle de Uco, Mendoza',botella:'-',precio:11000},
    {id:77, bodega:'Bodega Lamuchi',nombre:'Zorritos Bonarda',año:'-',origen:'Valle de Uco, Mendoza',botella:'-',precio:9000},
    {id:78, bodega:'Bodega Lamuchi',nombre:'Bonarda Especial',año:'-',origen:'Valle de Uco, Mendoza',botella:'-',precio:9000},
    {id:79, bodega:'Bodega Lamuchi',nombre:'Espumante Blend Chenin- Malbec Extra Brut',año:'-',origen:'Valle de Uco, Mendoza',botella:'-',precio:12500},
    {id:80, bodega:'Andillian',nombre:'Andillian Chardonnay',año:'-',origen:'Los Chacayes',botella:'6 x 750 ml',precio:10500},
    {id:81, bodega:'Andillian',nombre:'Andillian Sauvignon Blanc',año:'-',origen:'Los Chacayes',botella:'6 x 750 ml',precio:10500},
    {id:82, bodega:'Andillian',nombre:'Andillian Malbec',año:'-', origen:'Luján de Cuyo',botella:'3 x 5000 ml',precio:10500},
    {id:83, bodega:'Andillian',nombre:'Andillian Cabernet Franc',año:'-',origen:'Luján de Cuyo',botella:'	6 x 750 ml',precio:10500},
    {id:84, bodega:'Andillian',nombre:'Andillian Malbec Los Chacayes',año:'-',origen:'Los Chacayes',botella:'	6 x 750 ml',precio:13500},
    {id:85, bodega:'Andillian',nombre:'Andillian Unique Blend',año:'-', origen:'Los Chacayes',botella:'	6 x 750 ml',precio:13500},
];


//  Funcion que carga todo el listado de vinos
export async function cargarVinos (){
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(listadoVinos);
        },)
    });
}

// Funcion que carga todos los vinos

export async function obtenerTodosLosVinos(){
    const vinosCargados = await cargarVinos();
    return vinosCargados;
}

// Funcion para obtener vinos por Bodega

export async function obtenerVinosPorBodega(bodega){
    const vinosCargados = await cargarVinos();
    return vinosCargados.filter(vino => vino.bodega === bodega);
}

