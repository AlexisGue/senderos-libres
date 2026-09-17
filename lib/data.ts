export type Destination = {
  slug: string;
  name: string;
  location: string;
  tagline: string;
  summary: string;
  duration: string;
  price: number;
  promoPrice?: number;
  promoLabel?: string;
  image: string;
  gallery: string[];
  altitude?: string;
  departure: string;
  includes: string[];
  activities: string[];
  environment: string;
  days: {
    title: string;
    subtitle: string;
    items: { time: string; activity: string; detail: string }[];
  }[];
};

export const instagram = "https://www.instagram.com/senderos_libres.sv";
export const instagramHandle = "@senderos_libres.sv";
export const email = "senderoslibres.sv@gmail.com";

export const team = [
  "Rosa Polanco",
  "Yolanda Hernández",
  "Kimberly Méndez",
  "Damisela Mejía",
];

export const values = [
  {
    name: "Responsabilidad",
    text: "Cuidamos cada detalle del viaje, desde la salida hasta el regreso.",
  },
  {
    name: "Honestidad",
    text: "Precios claros, itinerarios reales y comunicación transparente.",
  },
  {
    name: "Compromiso",
    text: "Estamos contigo antes, durante y después de cada aventura.",
  },
  {
    name: "Respeto",
    text: "Honramos la naturaleza, la cultura y las comunidades locales.",
  },
  {
    name: "Innovación",
    text: "Diseñamos experiencias auténticas que se sienten únicas.",
  },
  {
    name: "Trabajo en equipo",
    text: "Guías, operación y atención al cliente viajan juntos por ti.",
  },
];

export const services = [
  {
    title: "Venta de pasajes",
    text: "Boletos aéreos y terrestres con conexiones directas y seguras por Centroamérica, para viajeros individuales o grupos.",
  },
  {
    title: "Reservas de alojamiento",
    text: "Desde camping y cabañas ecológicas hasta hostales boutique y hoteles, alineados con la experiencia de cada destino.",
  },
  {
    title: "Seguros de viaje",
    text: "Asistencia médica, protección ante imprevistos y cobertura especial para senderismo y ecoturismo.",
  },
  {
    title: "Excursiones y city tours",
    text: "Caminatas, recuerdos históricos y tours en lancha con especialistas locales en El Pital, Cerro Verde, Coatepeque y Antigua.",
  },
  {
    title: "Paquetes armados",
    text: "Rutas listas para salir, como Fin de semana en El Pital o Escapada cultural a Antigua.",
  },
  {
    title: "Viajes a medida",
    text: "Diseño personalizado para parejas, familias, escuelas y grupos de amigos.",
  },
];

export const destinations: Destination[] = [
  {
    slug: "cerro-el-pital",
    name: "Cerro El Pital",
    location: "Chalatenango, El Salvador",
    tagline: "Naturaleza, aventura y la cima de El Salvador",
    summary:
      "El punto más alto del país, a 2,730 m s. n. m., entre bosques de pino, neblina y clima frío. Dos días de senderismo, fresas, miradores y la frontera con Honduras.",
    duration: "2 días / 1 noche",
    price: 75,
    promoPrice: 60,
    promoLabel: "20% de descuento",
    image: "/images/pital.jpg",
    gallery: ["/images/pital.jpg", "/images/pital-campo.jpg", "/images/volcan.jpg"],
    altitude: "2,730 m s. n. m.",
    departure: "Zacatecoluca",
    includes: ["Transporte", "Cena y desayuno", "Entradas"],
    activities: ["Senderismo", "Camping", "Ecoturismo", "Fotografía"],
    environment:
      "Zona montañosa de clima frío y húmedo, rodeada de bosques de pino y ciprés. Hay neblina, pendientes pronunciadas, riachuelos y cultivos de hortalizas. Ideal para senderismo, camping y ecoturismo, en la zona fronteriza con Honduras.",
    days: [
      {
        title: "Día 1",
        subtitle: "Ruta y aventura hacia El Pital",
        items: [
          { time: "5:00 a. m.", activity: "Salida", detail: "Salida desde Zacatecoluca rumbo a Chalatenango." },
          { time: "8:30 a. m.", activity: "Desayuno", detail: "Desayuno típico salvadoreño en Restaurante Las Palmeras." },
          { time: "10:30 a. m.", activity: "Casa de las Fresas", detail: "Degustación de fresas, fotografías y compras artesanales." },
          { time: "12:30 p. m.", activity: "Cerro El Pital", detail: "Exploración, caminata y clima fresco." },
          { time: "2:00 p. m.", activity: "Almuerzo", detail: "En Lirios del Pital: sopas, carnes y café." },
          { time: "4:00 p. m.", activity: "Mirador de La Palma", detail: "Fotos panorámicas y descanso." },
        ],
      },
      {
        title: "Día 2",
        subtitle: "Regreso y más paisajes",
        items: [
          { time: "6:00 a. m.", activity: "Desayuno", detail: "Desayuno en el hotel." },
          { time: "7:30 a. m.", activity: "Salida", detail: "Salida hacia el mirador de La Palma." },
          { time: "9:00 a. m.", activity: "Mojón El Salvador-Honduras", detail: "Fotografía en la frontera." },
          { time: "1:00 p. m.", activity: "Almuerzo", detail: "En restaurante local." },
          { time: "2:30 p. m.", activity: "La Peña Rajada", detail: "Senderismo y vistas panorámicas." },
          { time: "4:00 p. m.", activity: "Salida de regreso", detail: "Rumbo a Zacatecoluca." },
          { time: "9:00 p. m.", activity: "Llegada", detail: "Fin del recorrido." },
        ],
      },
    ],
  },
  {
    slug: "cerro-verde-coatepeque",
    name: "Cerro Verde + Lago de Coatepeque",
    location: "Santa Ana, El Salvador",
    tagline: "Dos destinos, una misma experiencia",
    summary:
      "Bosque nebuloso a 2,000 m en el Complejo Los Volcanes, con vistas al lago de Coatepeque. Caminata, miradores y paseo en lancha en una antigua caldera volcánica.",
    duration: "1 día",
    price: 40,
    promoPrice: 35,
    promoLabel: "Promoción de temporada",
    image: "/images/cerro-verde.jpg",
    gallery: ["/images/cerro-verde.jpg", "/images/volcan.jpg", "/images/pital.jpg"],
    altitude: "2,000 m s. n. m.",
    departure: "Zacatecoluca",
    includes: ["Transporte", "Almuerzo", "Guía", "Entradas"],
    activities: ["Caminata", "Miradores", "Paseo en lancha", "Kayak"],
    environment:
      "Cerro Verde está dentro del Complejo Los Volcanes, en un bosque nebuloso con gran biodiversidad y vistas a volcanes y al lago. El Lago de Coatepeque ocupa una antigua caldera volcánica, rodeado de montañas y vegetación tropical. Permite kayak, pesca, buceo y paseos en lancha.",
    days: [
      {
        title: "Itinerario",
        subtitle: "Naturaleza, aventura y paisajes únicos",
        items: [
          { time: "5:00 a. m.", activity: "Salida", detail: "Salida desde Zacatecoluca rumbo a Santa Ana." },
          { time: "8:00 a. m.", activity: "Desayuno", detail: "Parada en restaurante local." },
          { time: "9:20 a. m.", activity: "Seguimos la ruta", detail: "Continuamos hacia el cerro." },
          { time: "11:40 a. m.", activity: "Llegada al Cerro Verde", detail: "Vistas panorámicas hacia el volcán de Santa Ana." },
          { time: "1:00 p. m.", activity: "Caminata", detail: "Caminata en el parque de fauna, guiada." },
          { time: "2:00 p. m.", activity: "Parada en el mirador", detail: "Observación de vistas hacia el volcán de Santa Ana." },
          { time: "3:15 p. m.", activity: "Vista panorámica", detail: "Mirador hacia el lago de Coatepeque." },
          { time: "4:30 p. m.", activity: "Almuerzo", detail: "Almuerzo en restaurante Casa 1800." },
          { time: "1:30 p. m.", activity: "Salida al lago", detail: "Traslado rumbo al Lago de Coatepeque." },
          { time: "2:30 p. m.", activity: "Llegada al lago", detail: "Llegamos al Lago de Coatepeque." },
          { time: "2:40 p. m.", activity: "Paseo en lancha", detail: "Recorrido por las aguas de la caldera." },
          { time: "3:15 p. m.", activity: "Fin del recorrido", detail: "Cierre del paseo en lancha." },
          { time: "3:30 p. m.", activity: "Salida desde Santa Ana", detail: "Regreso a Zacatecoluca." },
          { time: "7:00 p. m.", activity: "Llegada", detail: "Fin de la experiencia en Zacatecoluca." },
        ],
      },
    ],
  },
  {
    slug: "antigua-guatemala",
    name: "Antigua Guatemala",
    location: "Sacatepéquez, Guatemala",
    tagline: "Un destino que te conecta con lo esencial",
    summary:
      "Ciudad colonial a 1,500 m s. n. m., entre los volcanes de Agua, Fuego y Acatenango. Calles de piedra, historia, café, jade y una visita a Hobbitenango.",
    duration: "2 días / 1 noche",
    price: 150,
    promoPrice: 140,
    promoLabel: "Tarifa especial",
    image: "/images/antigua-noche.jpg",
    gallery: ["/images/antigua-noche.jpg", "/images/antigua-aerea.jpg", "/images/feria.jpg"],
    altitude: "1,500 m s. n. m.",
    departure: "El Salvador",
    includes: ["Transporte", "Hospedaje (1 noche)", "Almuerzo", "Guía", "Actividades"],
    activities: ["City tour", "Volcán de Pacaya", "Hobbitenango", "Compras artesanales"],
    environment:
      "Antigua Guatemala está en el Valle de Panchoy, a unos 40 km de la Ciudad de Guatemala. La rodean montañas, volcanes y zonas cafetaleras, junto a un entorno urbano colonial con iglesias, arcos y edificios históricos.",
    days: [
      {
        title: "Día 1",
        subtitle: "Explorando Antigua",
        items: [
          { time: "3:30 a. m.", activity: "Salida", detail: "Salida desde El Salvador hacia Antigua (viaje estimado)." },
          { time: "7:30 a. m.", activity: "Desayuno en ruta", detail: "Parada en restaurante local." },
          { time: "10:30 a. m.", activity: "Llegada a Antigua", detail: "Inicio del recorrido." },
          { time: "11:00 a. m.", activity: "City tour", detail: "Catedral, Parque Central y calles coloniales." },
          { time: "1:00 p. m.", activity: "Almuerzo", detail: "Gastronomía típica en restaurante local." },
          { time: "3:00 p. m.", activity: "Fábrica de jade y compras", detail: "Artesanías y recuerdos." },
          { time: "5:00 p. m.", activity: "Check-in", detail: "Descanso en el hotel." },
          { time: "7:00 p. m.", activity: "Cena libre y tiempo personal", detail: "Explora la ciudad a tu ritmo." },
        ],
      },
      {
        title: "Día 2",
        subtitle: "Volcanes y Hobbitenango",
        items: [
          { time: "7:00 a. m.", activity: "Desayuno en el hotel", detail: "Energía para el día." },
          { time: "8:00 a. m.", activity: "Hobbitenango", detail: "Parque temático y vistas increíbles (hasta las 11:30 a. m.)." },
          { time: "11:30 a. m.", activity: "Volcán de Pacaya", detail: "Senderismo y naturaleza. Opcional, según condiciones." },
          { time: "1:30 p. m.", activity: "Almuerzo en ruta", detail: "Parada en restaurante local." },
          { time: "3:00 p. m.", activity: "Tiempo libre / compras", detail: "Recuerdos del viaje." },
          { time: "5:00 p. m.", activity: "Retorno a San Salvador", detail: "Inicio del viaje de regreso." },
          { time: "9:00 p. m.", activity: "Llegada a San Salvador", detail: "Fin de los servicios." },
        ],
      },
    ],
  },
];

export function getDestination(slug: string) {
  return destinations.find((item) => item.slug === slug);
}
