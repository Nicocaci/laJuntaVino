// Listado de todos los vinos

const listadoVinos = [
    {id:1, bodega:'Finca Iral', nombre:'Finca Iral Chardonnay - Single Vineyard Ugarteche',año:'-', origen:'Lujan De Cuyo', botella:'-', precio:9900,},
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
    {id:16, bodega:'Familia Aicardi',nombre:'Malbec',año:2018,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000, url:'https://dcdn.mitiendanube.com/stores/001/156/182/products/aicardi-malbec1-954b486cba7fb978ac16037506825103-640-0.jpg',url2:'https://i.imgur.com/NAAZlCe.jpeg'},
    {id:17, bodega:'Familia Aicardi',nombre:'Cabernet Sauvignon',año:2019,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000,url:'https://dcdn.mitiendanube.com/stores/001/069/568/products/familia-aicardi-cabernet-sauvigggggnon1-e78b99c78c7af3b52e16210052358046-640-0.jpg', url2:'https://i.imgur.com/WkJiaha.jpeg'},
    {id:18, bodega:'Familia Aicardi',nombre:'Merlot',año:2019,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000,url:'https://dcdn.mitiendanube.com/stores/001/069/568/products/familia-aicardi-merlot1-9a1fd5121d081849c615997626985321-1024-1024.jpg',url2:'https://i.imgur.com/qxMjujA.jpeg'},
    {id:19, bodega:'Familia Aicardi',nombre:'Pinot Noir',año:2019,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000, url:'https://dcdn.mitiendanube.com/stores/001/156/182/products/aicardi-pinot1-e21b854c7c39d8c22115884593240178-1024-1024.png',url2:'https://i.imgur.com/80ZrvVY.jpeg'},
    {id:20, bodega:'Familia Aicardi',nombre:'Cabernet Franc',año:2019,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000, url:'https://dcdn.mitiendanube.com/stores/001/156/182/products/aicardi-cabernet-franc1-4c8798032748de87c516257676040327-640-0.png',url2:'https://i.imgur.com/KW6pQIp.jpeg'},
    {id:21, bodega:'Familia Aicardi',nombre:'Red Blend',año:2019,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:12000, url:'https://dcdn.mitiendanube.com/stores/001/156/182/products/aicardi-blend-20191-ff61ae6e273ce2c99016565977681877-640-0.jpeg', url2:'https://i.imgur.com/9D0cmPY.jpeg'},
    {id:22, bodega:'Familia Aicardi',nombre:'Malbec Contraflor',año:2021,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:8000, url:'https://dcdn.mitiendanube.com/stores/001/156/182/products/fa-contraflor-malbec-01011-6247fa11b047273efd16039943063332-640-0.png',url2:'https://i.imgur.com/EKNSpTy.jpeg'},
    {id:23, bodega:'Familia Aicardi',nombre:'Pinot Noir Contraflor',año:2021,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:8000, url:'https://dcdn.mitiendanube.com/stores/001/156/182/products/aicardi-fa-contraflor-pinot-0101-11-4a63261f77073172b216123772863182-1024-1024.png', url2:'https://i.imgur.com/507xuU1.jpeg'},
    {id:24, bodega:'Familia Aicardi',nombre:'Cabernet Franc',año:2018,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:19000,url:'https://www.docwinehouse.com/wp-content/uploads/2021/09/aicardi-cabernet.jpg', url2:'https://i.imgur.com/YbomefA.jpeg'},
    {id:25, bodega:'Familia Aicardi',nombre:'Malbec',año:2018,origen:'San Patricio del Chañar, Neuquén',botella:'-',precio:19000,url:'https://http2.mlstatic.com/D_NQ_NP_755440-MLA74874615131_032024-O.webp', url2:'https://i.imgur.com/1gOiRR6.jpeg'},
    {id:26, bodega:'La Íride',nombre:'La Íride Plata Malbec',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000, url:'https://static.wixstatic.com/media/f13367_65a935b244384a918162cce1dd1cc4d7~mv2.jpg/v1/fill/w_480,h_480,al_c,lg_1,q_80,enc_auto/f13367_65a935b244384a918162cce1dd1cc4d7~mv2.jpg',url2:'https://i.imgur.com/d9THuHq.jpeg'},
    {id:27, bodega:'La Íride',nombre:'La Íride Plata Cabernet Sauvignon',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:28, bodega:'La Íride',nombre:'La Íride Plata Bag In Box 5L',año:'-',origen:'Maipú, Mendoza',botella:'3 x 5000 ml',precio:20000},
    {id:29, bodega:'La Íride',nombre:'La Íride Rojo Malbec',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000, url:'https://http2.mlstatic.com/D_NQ_NP_649158-MLA72697238374_112023-O.webp',url2:'https://i.imgur.com/kAmwmfa.jpeg'},
    {id:30, bodega:'La Íride',nombre:'La Íride Rojo Cabernet Sauvignon',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:31, bodega:'La Íride',nombre:'La Íride Rojo Chardonnay Dulce',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000, url:'https://dcdn.mitiendanube.com/stores/002/453/542/products/photoroom-20230316_0955171-463349b1aa40a7ac0116789715592950-640-0.png', url2:'https://i.imgur.com/F8X1lIf.jpeg'},
    {id:32, bodega:'La Íride',nombre:'La Íride Rojo Bag in Box 3L',año:'-',origen:'Maipú, Mendoza',botella:'5 x 3000 ml',precio:20000},
    {id:33, bodega:'La Íride',nombre:'La Íride Huelga de Amores Malbec Roble',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000, url:'https://supercristian.com.ar/wp-content/uploads/2023/08/9014108.png', url2:'https://i.imgur.com/nnirAqg.jpeg'},
    {id:34, bodega:'La Íride',nombre:'La Íride Huelga de Amores Cabernet Sauvignon Roble',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:35, bodega:'La Íride',nombre:'La Íride Huelga de Amores Chardonnay Dulce',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:36, bodega:'La Íride',nombre:'La Íride Dorado Malbec Roble',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000, url:'https://static.wixstatic.com/media/f13367_0f9e4138c87c4289aad116d472f99ff3~mv2.jpg/v1/fill/w_480,h_480,al_c,lg_1,q_80,enc_auto/f13367_0f9e4138c87c4289aad116d472f99ff3~mv2.jpg', url2:'https://i.imgur.com/fPcuO8z.jpeg'},
    {id:37, bodega:'La Íride',nombre:'La Íride Dorado Cabernet Sauvignon Roble',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:38, bodega:'La Íride',nombre:'La Íride Coordenada Malbec Roble',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000, url:'https://acdn.mitiendanube.com/stores/002/889/113/products/coordenada-malbec-iride1-de59d38e7816cfce9816941094112505-640-0.png', url2:'https://i.imgur.com/xwX6vZh.jpeg'},
    {id:39, bodega:'La Íride',nombre:'La Íride Coordenada Cabernet Sauvignon Roble-',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:40, bodega:'Gauchezco',nombre:'Gauchezco Estate Malbec',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:8500,url:'https://gauchezco.com/cdn/shop/products/GauchezcoEstateMalbec_large_2x.png?v=1637345414' ,url2:'https://i.imgur.com/3GLT1mY.jpeg'},
    {id:41, bodega:'Gauchezco',nombre:'Gauchezco Estate Cabernet Sauvignon',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:8500,url:'https://gauchezco.com/cdn/shop/products/GauchezcoEstateCabernetSauvignon_large_2x.png?v=1637345321', url2:'https://i.imgur.com/Np8Pz78.jpeg'},
    {id:42, bodega:'Gauchezco',nombre:'Gauchezco Estate Malbec Rose',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:8500},
    {id:43, bodega:'Gauchezco',nombre:'Gauchezco Estate Syrah',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:8500},
    {id:44, bodega:'Gauchezco',nombre:'Gauchezco Reserva Malbec',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:11900,url:'https://gauchezco.com/cdn/shop/products/Gauchezco_Reserve_CF_large_2x.png?v=1596746774', url2:'https://i.imgur.com/2KAqVAc.jpeg'},
    {id:45, bodega:'Gauchezco',nombre:'Gauchezco Reserva Cabernet Sauvignon',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:11900},
    {id:46, bodega:'Gauchezco',nombre:'Gauchezco Reserva Cabernet Franc',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:11900,url:'https://gauchezco.com/cdn/shop/products/Gauchezco_Reserve_CF_large_2x.png?v=1596746774', url2:'https://i.imgur.com/Lqry2Tc.jpeg'},
    {id:47, bodega:'Gauchezco',nombre:'Gauchezco Reserva Red Blend',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:11900},
    {id:48, bodega:'Gauchezco',nombre:'Gauchezco Plata Malbec',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:17000, url:'https://gauchezco.com/cdn/shop/products/Gauchezco_Reserve_Red_Blend_large_2x.png?v=1596746653', url2:'https://i.imgur.com/mWD8Sfb.jpeg'},
    {id:49, bodega:'Gauchezco',nombre:'Gauchezco Plata Malbec- Cabernet Franc',año:'-',origen:'Maipú, Mendoza',botella:'6 x 750 ml',precio:17000},
    {id:50, bodega:'Staphyle',nombre:'Staphyle Vástago GEA Malbec',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:6000, url:'https://acdn.mitiendanube.com/stores/002/889/113/products/gea-6728514a411481a3c217155367173491-1024-1024.png', url2:'https://i.imgur.com/9VDF1fO.jpeg'},
    {id:51, bodega:'Staphyle',nombre:'Staphyle Vástago GEA Cabernet Sauvignon',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:52, bodega:'Staphyle',nombre:'Staphyle Vástago GEA Bonarda',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'3 x 5000 ml',precio:6000},
    {id:53, bodega:'Staphyle',nombre:'Staphyle Vástago GEA Malbec Rosé',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:54, bodega:'Staphyle',nombre:'Staphyle Vástago GEA Torrontés',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:6000},
    {id:55, bodega:'Staphyle',nombre:'Staphyle Premium Malbec',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000,url:'https://acdn.mitiendanube.com/stores/087/677/products/staphyle_malbec1-53133e8e1d5371ca0616245705786617-640-0.png', url2:'https://i.imgur.com/JqIHagH.jpeg'},
    {id:56, bodega:'Staphyle',nombre:'Staphyle Premium Cabernet Sauvignon',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000},
    {id:57, bodega:'Staphyle',nombre:'Staphyle Premium Cabernet Franc',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000},
    {id:58, bodega:'Staphyle',nombre:'Staphyle Premium Bonarda',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000},
    {id:59, bodega:'Staphyle',nombre:'Staphyle Premium Merlot',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000},
    {id:60, bodega:'Staphyle',nombre:'Staphyle Premium Chardonnay',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:9000},
    {id:61, bodega:'Staphyle',nombre:'Staphyle Partida Limitada Malbec',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:12000, url:'https://www.staphyle.com/uploads/wines/1674668218_b_partida-limitada-mbc-scosecha.png', url2:'https://i.imgur.com/NzrXnUp.jpeg'},
    {id:62, bodega:'Staphyle',nombre:'Staphyle Partida Limitada Cabernet Franc',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:12000},
    {id:63, bodega:'Staphyle',nombre:'Staphyle Partida Limitada Blend',año:'-',origen:'Luján de Cuyo, Mendoza',botella:'6 x 750 ml',precio:12000},
    {id:64, bodega:'Staphyle',nombre:'Staphyle Dragón del Vino Malbec',año:'-',origen:'Potrerillos, Mendoza',botella:'6 x 750 ml',precio:18500,url:'https://www.staphyle.com/uploads/wines/1678214596_b_ddv.png', url2:'https://i.imgur.com/epi8hHJ.jpeg'},
    {id:65, bodega:'Finca Camuñas',nombre:'Finca Camuñas Malbec',año:'-',origen:'Valle de Tulum, San Juan',botella:'6 x 750 ml',precio:12000},
    {id:66, bodega:'Finca Camuñas',nombre:'Finca Camuñas Cabernet Sauvignon',año:'-',origen:'Valle de Tulum, San Juan',botella:'6 x 750 ml',precio:12000},
    {id:67, bodega:'Finca Camuñas',nombre:'Finca Camuñas Pinot Grigio',año:'-',origen:'Valle de Tulum, San Juan',botella:'6 x 750 ml',precio:12000},
    {id:68, bodega:'Finca Camuñas',nombre:'Finca Camuñas Malbec Reserva',año:'-',origen:'Valle de Tulum, San Juan',botella:'6 x 750 ml',precio:30000},
    {id:69, bodega:'Finca Camuñas',nombre:'San Juan de mi Sangre By Paco Pugas Malbec',año:'-',origen:'Valle de Tulum, San Juan',botella:'6 x 750 ml',precio:35000},
    {id:70, bodega:'Bodega Xumek',nombre:'Línea Fauna Rose de Pinot Noir',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:10000, url:'https://acdn.mitiendanube.com/stores/087/677/products/xumek-rose_ok-d7a1c7bd4243e3e41f16964507152447-1024-1024.png', url2:'https://i.imgur.com/qpSJrfA.jpeg'},
    {id:71, bodega:'Bodega Xumek',nombre:'Línea Fauna Malbec',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:10000, url:'https://dcdn.mitiendanube.com/stores/001/572/455/products/xumek-malbec1-7e3f4dce26fc55beff16662813136374-640-0.png', url2:'https://i.imgur.com/wfHFkhG.jpeg'},
    {id:72, bodega:'Bodega Xumek',nombre:'Línea Fauna Syrah',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:10000, url:'https://acdn.mitiendanube.com/stores/087/677/products/xumek-syrah_ok-b30affe6d7c93cae3916964513735602-1024-1024.png', url2:'https://i.imgur.com/iuLWOca.jpeg'},
    {id:73, bodega:'Bodega Xumek',nombre:'Línea Fauna Chardonnay',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:10000, url:'https://dcdn.mitiendanube.com/stores/001/572/455/products/xumek-chardonnay1-d8a152e16398ffeb4216662813808135-640-0.png', url2:'https://i.imgur.com/gdnRE1t.jpeg'},
    {id:74, bodega:'Bodega Xumek',nombre:'Línea Fauna Espumante',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:10000, url:'https://xumek.com.ar/wp-content/uploads/2020/06/xumek-extrabrut-11b-700x729.jpg', url2:'https://i.imgur.com/aTOpq0P.jpeg'},
    {id:75, bodega:'Bodega Xumek',nombre:'Línea Abismo Malbec',año:'-',origen:'Valle de Zonda, San Juan',botella:'-',precio:50000, url:'https://images.squarespace-cdn.com/content/v1/5b4e7187cef372f73e99ccf1/1605567826817-RX74O8VTAJLG1N1K0H1P/FINCALaCienaga+%281%29.png', url2:'https://i.imgur.com/oShWZRR.jpeg'},
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

