export const siteConfig = {
  name: 'Cásate conmigo',
  planner: 'Sara',
  domain: 'casateconmigowp.com', // TODO: dominio definitivo
  email: '', // TODO: email de contacto (los leads llegan igualmente vía RESEND_TO)
  whatsapp: '34617232636',
  whatsappMessage: 'Hola Sara, os escribo desde la web. Nos casamos y nos gustaría hablar con vosotras.',
  instagram: '@casateconmigo_wp',
  instagramUrl: 'https://www.instagram.com/casateconmigo_wp/',
  locations: ['Valencia', 'Comunidad Valenciana'],
  tagline: 'Que tu única preocupación sea elegir el ramo',
  bio: 'Soy Sara, wedding planner en Valencia. Organizo bodas reales con la tranquilidad de una amiga y el criterio de una profesional: presupuesto, proveedores, cronograma y cada detalle del día, para que vosotros solo tengáis que disfrutar.',
  bioShort: 'Transformo el estrés de tu boda en ilusión. Yo me ocupo de la logística, los proveedores y los imprevistos; vosotros, de vivirla.',
}

export const navLinks = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
]

export const services: Array<{
  title: string
  slug: string
  kicker: string
  description: string
  longDescription: string
  includes: string[]
  image: string
  imageAlt: string
}> = [
  {
    title: 'Organización integral',
    slug: 'organizacion-integral',
    kicker: 'De la primera idea al último baile',
    description:
      'Diseño, presupuesto, proveedores y coordinación completa. Tú decides, yo me encargo de que todo encaje.',
    longDescription:
      'Empezamos con una reunión larga para entender cómo sois y qué boda os imagináis. A partir de ahí construyo un presupuesto realista, os propongo espacios y proveedores de confianza en Valencia, negocio condiciones y llevo el calendario de pagos. Cada mes sabréis en qué punto estamos, sin sorpresas. El día de la boda coordino a todo el equipo para que vosotros no tengáis que contestar ni una llamada.',
    includes: [
      'Presupuesto detallado y seguimiento de pagos',
      'Búsqueda de finca, iglesia o espacio civil',
      'Selección y negociación con proveedores',
      'Diseño de la estética y la decoración',
      'Cronograma minuto a minuto',
      'Coordinación completa del día B con asistente',
    ],
    image: '/photos/novios-cartuja-ara-christi.jpg',
    imageAlt: 'Novios paseando por el claustro en ruinas de La Cartuja de Ara Christi con un velo largo',
  },
  {
    title: 'Coordinación del día B',
    slug: 'coordinacion-dia-b',
    kicker: 'Lo tenéis casi todo, falta alguien al mando',
    description:
      'Entro dos meses antes, reviso cada contrato y dirijo el día para que el plan salga como lo habéis soñado.',
    longDescription:
      'Muchas parejas organizan su boda solas y llegan a las últimas semanas con todo contratado pero con la sensación de que algo se escapa. Ahí entro yo. Reviso contratos y tiempos, hablo con cada proveedor, hago visita técnica al espacio y preparo un guion del día. El día de la boda estoy desde el montaje hasta el final: coloco la cola del vestido un segundo antes de entrar, resuelvo imprevistos y cuido de que los tiempos se cumplan.',
    includes: [
      'Reunión de traspaso y revisión de contratos',
      'Visita técnica al espacio',
      'Guion del día y contacto con cada proveedor',
      'Ensayo de ceremonia si lo necesitáis',
      'Presencia desde el montaje hasta el cierre',
    ],
    image: '/photos/novia-padre-blauverd.jpg',
    imageAlt: 'La novia y su padre junto a un coche clásico blanco antes de salir hacia la ceremonia',
  },
  {
    title: 'Diseño y ambientación',
    slug: 'diseno-ambientacion',
    kicker: 'Que el espacio cuente vuestra historia',
    description:
      'Concepto estético, flores, luz y montaje. Pasillos, mesas y rincones pensados al detalle.',
    longDescription:
      'Parto de lo que os gusta, un color, una canción, un viaje, y lo convierto en un concepto visual coherente: flores, mantelería, papelería, iluminación y señalética. Preparo un moodboard y un plano de montaje, trabajo con floristas y empresas de decoración de Valencia y superviso el montaje en persona para que lo que veáis el día sea exactamente lo que aprobasteis.',
    includes: [
      'Moodboard y paleta de la boda',
      'Propuesta floral y de iluminación',
      'Papelería, seating y señalética',
      'Plano de montaje del espacio',
      'Supervisión del montaje y desmontaje',
    ],
    image: '/photos/pasillo-arcos-luz.jpg',
    imageAlt: 'Pasillo de arcos iluminados con tul blanco, hiedra y rosas color crema',
  },
]

export const processSteps: Array<{
  number: number
  title: string
  description: string
}> = [
  {
    number: 1,
    title: 'Nos conocemos',
    description:
      'Un café o una videollamada sin compromiso. Me contáis cómo os imagináis el día y yo os explico cómo trabajo y qué encaja con vosotros.',
  },
  {
    number: 2,
    title: 'Plan y presupuesto',
    description:
      'Os entrego una propuesta clara con partidas, calendario y prioridades. Sabréis desde el principio dónde va cada euro.',
  },
  {
    number: 3,
    title: 'Diseñamos juntos',
    description:
      'Visitamos espacios, elegimos proveedores y damos forma a la estética. Reuniones periódicas y un canal directo conmigo para cualquier duda.',
  },
  {
    number: 4,
    title: 'El día B',
    description:
      'Yo dirijo al equipo, controlo los tiempos y resuelvo lo imprevisto. Vuestra única tarea: disfrutar y, como mucho, elegir el ramo.',
  },
]

export const testimonials: Array<{
  name: string
  date: string
  location: string
  text: string
}> = [
  {
    name: 'Andrea y Sergio',
    date: 'Mayo 2026',
    location: 'La Cartuja de Ara Christi, El Puig',
    text:
      'Mi velo medía casi cuatro metros y en cada foto estaba perfecto. Era Sara, siempre un paso por detrás colocándolo sin que nadie se diera cuenta. Llegamos a la boda sin haber hecho una sola llamada esa semana.',
  },
  {
    name: 'Lucía y Pablo',
    date: 'Junio 2026',
    location: 'Valencia',
    text:
      'Queríamos un coche clásico y una boda con aire de los años cuarenta, y no sabíamos por dónde empezar. Sara encontró el coche, la floristería y hasta el peluquero para el recogido. El día fue exactamente como lo dibujamos en su moodboard.',
  },
  {
    name: 'Marta y Javier',
    date: 'Octubre 2025',
    location: 'Masía en Bétera',
    text:
      'A una semana de la boda cambió la previsión y amenazaba lluvia. Sara tenía un plan B montado en la carpa en dos horas y nosotros ni nos enteramos. Nos dio una tranquilidad que no sabíamos que necesitábamos.',
  },
]

export const photos: Array<{
  src: string
  alt: string
  featured: boolean
  orientation: 'landscape' | 'portrait'
}> = [
  { src: '/photos/novia-catedral-valencia.jpg', alt: 'Novia con cola de tres metros entrando del brazo de su padre en una iglesia gótica de Valencia', featured: true, orientation: 'portrait' },
  { src: '/photos/novios-coche-clasico.jpg', alt: 'Novios sonrientes de la mano delante de un coche clásico blanco entre olivos', featured: true, orientation: 'portrait' },
  { src: '/photos/novios-ruinas-cartuja.jpg', alt: 'Novios en blanco y negro entre las ruinas de piedra de una cartuja', featured: true, orientation: 'portrait' },
  { src: '/photos/pasillo-arcos-luz.jpg', alt: 'Pasillo de ceremonia con arcos de luz, tul y flores blancas', featured: false, orientation: 'landscape' },
  { src: '/photos/novia-pendiente-perlas.jpg', alt: 'Detalle de pendiente de perla y gargantilla de la novia bajo el velo', featured: false, orientation: 'portrait' },
  { src: '/photos/coche-iglesia-santa-catalina.jpg', alt: 'Coche nupcial clásico esperando a la puerta de una iglesia barroca con flores blancas', featured: true, orientation: 'portrait' },
  { src: '/photos/novios-cartuja-ara-christi.jpg', alt: 'Novia mirando atrás mientras pasea con el novio por el jardín de La Cartuja de Ara Christi', featured: false, orientation: 'portrait' },
  { src: '/photos/novia-padre-blauverd.jpg', alt: 'El padre de la novia la ayuda a bajar del coche clásico, fotografía en blanco y negro', featured: false, orientation: 'portrait' },
  { src: '/photos/sara-wedding-planner.jpg', alt: 'Sara, wedding planner de Cásate conmigo, sonriendo con jersey color crema', featured: false, orientation: 'portrait' },
]

export const portfolioPhotos = photos.filter(p => !p.src.includes('sara-'))

export const values = [
  { title: 'Detalle', text: 'Llevo imperdibles, pañuelos y un plan B para cada cosa. Lo pequeño es lo que hace que el día fluya.' },
  { title: 'Cercanía', text: 'Me hablaréis como a una amiga. Respondo rápido, sin tecnicismos y sin juzgar ninguna idea.' },
  { title: 'Criterio', text: 'Os diré qué funciona y qué no, con proveedores que conozco y precios que he negociado antes.' },
  { title: 'Alegría', text: 'Una boda es una fiesta. Mi trabajo es quitaros el estrés para que os quede solo la ilusión.' },
]

export const coverage = [
  'Valencia ciudad',
  "L'Horta y El Puig",
  'Camp de Túria y Bétera',
  'La Safor y Gandia',
  'Ribera Alta y Alzira',
  'Castellón y Alicante bajo consulta',
]
