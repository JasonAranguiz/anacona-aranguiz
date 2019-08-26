var trabajos = [{
    figure: "media/trabajo-01-panda.jpg",
    alt: "REDES AÉREAS PARA PANDA ROJO",
    title: "REDES AÉREAS PARA PANDA ROJO",
    about: "Dispositivo de enriquecimiento ambiental basado en su vida silvestre para panda rojo del Zoo PARQUEMET."
}, {
    figure: "media/trabajo-02-monos.jpg",
    alt: "PINTAMONOS",
    title: "PINTAMONOS",
    about: "Diseño de enriquecimiento ambiental basado en textiles para chimpancés del Zoo PARQUEMET."
},{
    figure: "media/trabajo-03-Bslide.jpg",
    alt: "B-SLIDE: COLMENAS HORIZONTALES",
    title: "B-SLIDE: COLMENAS HORIZONTALES",
    about: "Servicio de colmenas de acceso lateral que permite reducir el esfuerzo físico de apicultores en temporada de cosecha."
}, {
    figure: "media/trabajo-04-CESFAM.jpg",
    alt: "SERVICIO DE FARMACIA CESFAM MTC",
    title: "SERVICIO DE FARMACIA CESFAM MTC",
    about: "Rediseño del servicio de farmacia del CESFAM Madre Teresa de Calculta, con foco en la experiencia del usuario."
}, {
    figure: "media/trabajo-05-BIOEF.jpg",
    alt: "BIOEF LIMPADOR DE SUPERFICIES",
    title: "BIOEF: LIMPADOR DE SUPERFICIES",
    about: "Limpiadores y desinfectantes de superficies biodegradables, no tóxicos y efervescente en pastillas."
}, {
    figure: "media/trabajo-06-ilkobasic.jpg",
    alt: "ILKO BASIC",
    title: "ILKO BASIC",
    about: "Modelo de negocios diseñado en torno a una línea de productos que rescata lo esencial para la cocina."
}, {
    figure: "media/trabajo-07-golos.jpg",
    alt: "GOLOS: DISPOSITIVO PARA SILLAS DE RUEDAS",
    title: "GOLOS: DISPOSITIVO PARA SILLAS DE RUEDAS",
    about: "Dispositivo para silla de ruedas que ayuda a coordinar el desplazamiento y el lanzamiento sinérgico en bowling."
}, {
    figure: "media/trabajo-08-BanK.jpg",
    alt: "BAN-K: MOBLAJE DE TERCIADO",
    title: "BAN-K: MOBLAJE DE TERCIADO ",
    about: "Banca diseñada a partir de las propiedades laminares y estructurales de terciado de 3mm."
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + '" >Ver mas</a><p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro +'</div>')
});
