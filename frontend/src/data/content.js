export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1680992046615-065f58bcb4d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA6MjJ8MHwxfHNlYXJjaHw0fHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlcnZlciUyMHJvb20lMjBkYXJrJTIwbmVvbiUyMGN5YW4lMjBzaGllbGQlMjBkYXRhJTIwZGVmZW5zZXxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
  serverRack: "https://images.unsplash.com/photo-1639066648921-82d4500abf1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA6MjJ8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlcnZlciUyMHJvb20lMjBkYXJrJTIwbmVvbiUyMGN5YW4lMjBzaGllbGQlMjBkYXRhJTIwZGVmZW5zZXxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
  analyst: "https://images.unsplash.com/photo-1549605659-32d82da3a059?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxjeWJlciUyMHNlY3VyaXR5JTIwaGFja2VyJTIwY29kZSUyMHNjcmVlbiUyMGRhcmslMjBwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwdGVjaHxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
  code: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHxjeWJlciUyMHNlY3VyaXR5JTIwaGFja2VyJTIwY29kZSUyMHNjcmVlbiUyMGRhcmslMjBwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwdGVjaHxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
  cables: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA6MjJ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlcnZlciUyMHJvb20lMjBkYXJrJTIwbmVvbiUyMGN5YW4lMjBzaGllbGQlMjBkYXRhJTIwZGVmZW5zZXxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
};

export const NAV_LINKS = [
  { label: "Actualidad", href: "#actualidad" },
  { label: "Qué es", href: "#que-es" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cumplimiento", href: "#cumplimiento" },
  { label: "Guía de incidentes", href: "#guia" },
  { label: "Ecosistema", href: "#ecosistema" },
];

export const METRICS = [
  { value: 120, suffix: "+", label: "Organizaciones protegidas" },
  { value: 500, suffix: "+", label: "Recursos de seguridad publicados" },
  { value: 99.9, suffix: "%", label: "Disponibilidad del SOC", decimals: 1 },
  { value: 15, suffix: " min", label: "Tiempo medio de respuesta" },
];

export const NEWS_CATEGORIES = ["Todo", "Normativa", "Amenazas", "Guías", "Noticias"];

export const NEWS = [
  {
    id: 1,
    category: "Normativa",
    date: "12 jul 2026",
    readTime: "6 min",
    title: "NIS2 en España: qué obligaciones alcanzan a tu empresa y cómo prepararse",
    excerpt: "La transposición de la directiva europea amplía los sectores esenciales y endurece los requisitos de gestión de riesgos. Repasamos el calendario y los primeros pasos.",
    image: IMAGES.cables,
    body: [
      { type: "p", text: "La directiva NIS2 eleva el listón de la ciberseguridad en Europa y su transposición al ordenamiento español amplía de forma notable el número de organizaciones obligadas. Ya no afecta solo a grandes operadores de servicios críticos: sectores como la alimentación, la logística, la gestión de residuos o los proveedores digitales entran en el ámbito de aplicación." },
      { type: "h3", text: "¿Está tu empresa dentro del ámbito?" },
      { type: "p", text: "El criterio combina sector y tamaño. Las entidades esenciales e importantes deberán implantar medidas de gestión de riesgos, notificar incidentes significativos en plazos estrictos y responder ante inspecciones. La novedad más sensible para las pymes es la responsabilidad directa de los órganos de dirección: la ciberseguridad deja de ser un asunto delegable al departamento técnico." },
      { type: "h3", text: "Las medidas mínimas que exige" },
      { type: "p", text: "La directiva articula diez familias de medidas: análisis de riesgos, gestión de incidentes, continuidad de negocio, seguridad de la cadena de suministro, cifrado, autenticación reforzada y formación del personal, entre otras. Ninguna es exótica; todas exigen método, documentación y evidencias." },
      { type: "h3", text: "Por dónde empezar" },
      { type: "p", text: "Recomendamos un análisis de brechas contra los requisitos aplicables, un plan de adecuación priorizado por riesgo y un calendario realista. Las organizaciones que empiezan pronto convierten la obligación en ventaja: clientes y administraciones ya valoran el cumplimiento como criterio de confianza." },
    ],
  },
  {
    id: 2,
    category: "Amenazas",
    date: "28 jun 2026",
    readTime: "5 min",
    title: "El ransomware contra pymes se profesionaliza: así se venden los accesos robados",
    excerpt: "Los grupos de extorsión ya no improvisan: compran accesos iniciales en mercados clandestinos. Analizamos la cadena de ataque y dónde cortarla.",
    image: IMAGES.analyst,
    body: [
      { type: "p", text: "Detrás de muchos secuestros de datos en pymes españolas no hay un atacante solitario, sino una cadena de suministro criminal. Unos actores se especializan en conseguir el primer acceso a la red —credenciales robadas, VPN sin parchear, correos de phishing— y otros lo compran para desplegar el ransomware. Esta división del trabajo abarata el ataque y multiplica las víctimas." },
      { type: "h3", text: "La cadena de ataque, paso a paso" },
      { type: "p", text: "Primero se compra o se roba una credencial válida. Después el intruso explora la red durante días o semanas sin hacer ruido: localiza copias de seguridad, servidores de ficheros y sistemas de facturación. Solo entonces cifra y exige el rescate, amenazando además con publicar la información sustraída." },
      { type: "h3", text: "Dónde se puede cortar" },
      { type: "p", text: "La autenticación multifactor neutraliza la mayoría de las credenciales robadas. La segmentación de la red limita el movimiento lateral. Las copias de seguridad aisladas y probadas convierten el peor escenario en un contratiempo recuperable. Y la monitorización continua detecta al intruso en su fase silenciosa, cuando aún no hay daño." },
      { type: "p", text: "La conclusión práctica: no hace falta blindarlo todo, hace falta blindar lo que el atacante necesita. Una auditoría identifica exactamente esos puntos." },
    ],
  },
  {
    id: 3,
    category: "Guías",
    date: "17 jun 2026",
    readTime: "8 min",
    title: "Cinco controles mínimos de seguridad para equipos en teletrabajo",
    excerpt: "Autenticación multifactor, cifrado de disco, gestión de parches y dos medidas más que reducen drásticamente el riesgo sin frenar la productividad.",
    image: IMAGES.code,
    body: [
      { type: "p", text: "El teletrabajo desplazó el perímetro de seguridad de la oficina al salón de cada empleado. La buena noticia es que cinco controles bien aplicados cubren la inmensa mayoría de los vectores de ataque habituales, sin necesidad de grandes inversiones ni de entorpecer el trabajo diario." },
      { type: "h3", text: "1. Autenticación multifactor en todo lo crítico" },
      { type: "p", text: "Correo, VPN, gestores de contraseñas y aplicaciones de negocio deben exigir un segundo factor. Es la medida con mejor relación coste-impacto que existe: la mayoría de accesos no autorizados se apoyan en contraseñas robadas." },
      { type: "h3", text: "2. Cifrado de disco y bloqueo automático" },
      { type: "p", text: "Un portátil perdido en un tren no debe convertirse en una brecha de datos. El cifrado completo del disco, activo de serie en los sistemas actuales, hace que el dispositivo extraviado sea un problema de inventario y no una crisis legal." },
      { type: "h3", text: "3. Parches y antivirus gestionados" },
      { type: "p", text: "Las actualizaciones no pueden depender de la voluntad de cada persona. Centralizar la gestión de parches y la protección de equipos garantiza que ningún puesto quede atrás, aunque nunca pise la oficina." },
      { type: "h3", text: "4. Conexión segura y 5. Verificación ante pagos urgentes" },
      { type: "p", text: "Una VPN o acceso Zero Trust protege el tráfico fuera de la oficina. Y una regla de oro —ningún pago o cambio de datos bancarios se ejecuta sin confirmación por un segundo canal— detiene el fraude del CEO, la estafa más costosa para las pymes." },
    ],
  },
  {
    id: 4,
    category: "Noticias",
    date: "3 jun 2026",
    readTime: "4 min",
    title: "La IA llega al centro de operaciones: detección de anomalías en tiempo real",
    excerpt: "Los modelos de comportamiento permiten identificar movimientos laterales en la red horas antes que las reglas tradicionales. Así lo aplicamos en el SOC.",
    image: IMAGES.serverRack,
    body: [
      { type: "p", text: "Los sistemas de detección tradicionales comparan lo que ocurre en la red contra listas de amenazas conocidas. Funcionan bien contra lo ya visto, pero quedan ciegos ante técnicas nuevas. Los modelos de comportamiento basados en inteligencia artificial toman el camino contrario: aprenden cómo es la actividad normal de cada organización y avisan cuando algo se desvía." },
      { type: "h3", text: "Qué detecta el análisis de comportamiento" },
      { type: "p", text: "Un usuario que de repente descarga el triple de ficheros, un servidor que habla con un país con el que nunca habló, una cuenta de servicio usada a las tres de la madrugada. Cada señal aislada puede ser inocua; la combinación, evaluada en contexto, delata al intruso en su fase de exploración, antes del daño." },
      { type: "h3", text: "IA como copiloto, no como sustituto" },
      { type: "p", text: "En nuestro centro de operaciones la IA filtra el ruido y prioriza las alertas, pero la decisión final la toman analistas humanos. La tecnología aporta velocidad y memoria; las personas, criterio y contexto del negocio. Esa combinación reduce el tiempo medio de detección de semanas a minutos." },
      { type: "p", text: "Para la pyme, la puerta de entrada ya no es montar un SOC propio, sino contratar la vigilancia como servicio gestionado." },
    ],
  },
  {
    id: 5,
    category: "Normativa",
    date: "21 may 2026",
    readTime: "7 min",
    title: "Esquema Nacional de Seguridad: hoja de ruta práctica para administraciones",
    excerpt: "Del análisis de riesgos al plan de adecuación: una guía por fases para entidades públicas que deben certificar su conformidad con el ENS.",
    image: IMAGES.hero,
    body: [
      { type: "p", text: "El Esquema Nacional de Seguridad es obligatorio para las administraciones públicas españolas y para los proveedores que prestan servicios tecnológicos al sector público. Su lógica es sencilla —proteger lo que importa en proporción a su valor—, pero su aplicación exige método y documentación rigurosa." },
      { type: "h3", text: "Fase 1: conocer el punto de partida" },
      { type: "p", text: "Todo comienza con el inventario de sistemas y datos, su categorización por niveles de seguridad y un análisis de riesgos honesto. Muchas entidades descubren en esta fase activos olvidados o dependencias no documentadas que cambian por completo el mapa de riesgos." },
      { type: "h3", text: "Fase 2: el plan de adecuación" },
      { type: "p", text: "Con el análisis sobre la mesa se redacta el plan de adecuación: qué medidas del anexo II aplican, en qué orden se implantan y quién es responsable de cada una. La clave es priorizar por riesgo real, no por facilidad de cumplimiento documental." },
      { type: "h3", text: "Fase 3: evidencias y mejora continua" },
      { type: "p", text: "La conformidad no se declara, se demuestra. Registros, actas, resultados de pruebas y revisiones periódicas forman el cuerpo de evidencias que sostiene la certificación. Y el ciclo no termina: el ENS exige revisión y mejora continuas, no una foto fija." },
    ],
  },
  {
    id: 6,
    category: "Amenazas",
    date: "9 may 2026",
    readTime: "5 min",
    title: "Phishing generado por IA: señales que delatan un correo escrito por un modelo",
    excerpt: "Los textos perfectos ya no son garantía de legitimidad. Estas son las pistas contextuales y técnicas que tu equipo debe comprobar siempre.",
    image: IMAGES.code,
    body: [
      { type: "p", text: "Durante años enseñamos a detectar el phishing buscando faltas de ortografía y traducciones torpes. Los modelos de lenguaje han eliminado esa pista: hoy un correo fraudulento puede estar escrito en un español impecable, con el tono exacto de un proveedor real y referencias veraces a operaciones en curso." },
      { type: "h3", text: "Lo que la IA no puede falsificar" },
      { type: "p", text: "El contexto operativo. Un escrito perfecto que llega desde un dominio recién registrado, que pide cambiar una cuenta bancaria por correo o que introduce urgencia artificial sigue siendo sospechoso. La pregunta correcta ya no es ¿está bien escrito?, sino ¿encaja con cómo trabajamos?" },
      { type: "h3", text: "Tres comprobaciones que no fallan" },
      { type: "p", text: "Primera: verificar el dominio real del remitente, no el nombre visible. Segunda: confirmar por un canal independiente cualquier petición de pago o cambio de datos. Tercera: desconfiar de la urgencia —la prisa es el ingrediente favorito del fraude, con IA o sin ella." },
      { type: "p", text: "La defensa eficaz combina filtros técnicos actualizados con simulacros de phishing periódicos: la plantilla entrenada es la última barrera, y también la más importante." },
    ],
  },
];

export const CID_PILLARS = [
  {
    id: "confidencialidad",
    label: "Confidencialidad",
    title: "Solo quien debe, accede",
    text: "La información sensible se protege con cifrado, control de accesos por roles y políticas de mínimo privilegio. Cada dato tiene un dueño y cada acceso deja rastro.",
  },
  {
    id: "integridad",
    label: "Integridad",
    title: "Datos que no se alteran",
    text: "Mecanismos de verificación y firmas electrónicas garantizan que la información no ha sido manipulada, desde el documento contractual hasta el registro contable.",
  },
  {
    id: "disponibilidad",
    label: "Disponibilidad",
    title: "El negocio nunca se detiene",
    text: "Copias de seguridad verificadas, planes de continuidad y arquitecturas redundantes aseguran que los sistemas críticos sigan operativos incluso durante un incidente.",
  },
  {
    id: "trazabilidad",
    label: "Trazabilidad",
    title: "Cada evento, auditado",
    text: "El registro continuo de actividad permite reconstruir cualquier incidente, demostrar el cumplimiento normativo y responder ante auditorías con evidencias sólidas.",
  },
];

export const SERVICES = [
  {
    icon: "radar",
    title: "Auditoría y pentesting",
    text: "Evaluamos tu infraestructura con las mismas técnicas que usa un atacante real y entregamos un plan de corrección priorizado por riesgo.",
  },
  {
    icon: "activity",
    title: "SOC gestionado 24/7",
    text: "Monitorización continua de redes, equipos y aplicaciones con analistas que detectan y contienen amenazas antes de que escalen.",
  },
  {
    icon: "scale",
    title: "Cumplimiento normativo",
    text: "Adecuación a ENS, ISO 27001, NIS2 y RGPD con acompañamiento completo: análisis de brechas, documentación y evidencias.",
  },
  {
    icon: "graduation",
    title: "Formación y concienciación",
    text: "Programas prácticos para plantillas y equipos directivos: phishing simulado, talleres y rutas formativas medibles.",
  },
  {
    icon: "fingerprint",
    title: "Firma digital y evidencias",
    text: "Certificación segura de documentos y comunicaciones con valor probatorio, integrada en tus procesos de negocio.",
  },
  {
    icon: "cpu",
    title: "Consultoría de IA segura",
    text: "Adopción de inteligencia artificial con garantías: gobierno del dato, evaluación de modelos y despliegues conformes a normativa.",
  },
];

export const COMPLIANCE_ITEMS = [
  {
    code: "ENS",
    title: "Esquema Nacional de Seguridad",
    text: "Marco obligatorio para el sector público y sus proveedores. Preparamos la documentación, los controles y la evidencia para la certificación.",
  },
  {
    code: "ISO 27001",
    title: "Sistema de gestión de seguridad",
    text: "Implantamos un SGSI vivo, no un papel: políticas operativas, análisis de riesgos y mejora continua auditables año tras año.",
  },
  {
    code: "NIS2",
    title: "Directiva europea de ciberseguridad",
    text: "Identificamos si tu organización está dentro del ámbito y desplegamos las medidas de gestión de riesgo y notificación exigidas.",
  },
  {
    code: "RGPD",
    title: "Protección de datos y AEPD",
    text: "Coordinamos seguridad técnica y cumplimiento legal: registro de actividades, brechas notificadas en 72 horas y medidas proporcionadas.",
  },
];

export const INCIDENT_STEPS = [
  {
    step: "01",
    title: "Identificación y contención",
    text: "Detecta el alcance real del incidente y aísla los sistemas afectados sin apagarlos: la memoria volátil contiene evidencias clave. Desconecta de la red, no de la corriente.",
  },
  {
    step: "02",
    title: "Análisis y preservación de evidencias",
    text: "Documenta todo: capturas, registros, horas y acciones realizadas. Una cadena de custodia correcta convierte tu investigación en una prueba válida ante un procedimiento legal.",
  },
  {
    step: "03",
    title: "Notificación legal",
    text: "Si hay datos personales afectados, el RGPD exige notificar a la AEPD en un máximo de 72 horas. En sectores regulados pueden aplicar plazos adicionales de NIS2 o DORA.",
  },
  {
    step: "04",
    title: "Recuperación y lecciones aprendidas",
    text: "Restaura desde copias verificadas, corrige la causa raíz y actualiza tus controles. Cada incidente bien gestionado fortalece la organización que lo supera.",
  },
];

export const ECOSYSTEM = [
  { name: "Aula Virtual", tag: "Formación", text: "Entorno de cursos, materiales y seguimiento formativo para equipos y centros." },
  { name: "Signados", tag: "Seguridad", text: "Firma digital y certificación segura de documentos con validez probatoria." },
  { name: "Markitplace", tag: "Comunicación e IA", text: "Soluciones de comunicación y generación de contenidos asistida por IA." },
  { name: "Consulting", tag: "Transformación", text: "Automatización e inteligencia artificial aplicadas a procesos reales de negocio." },
  { name: "Turismo", tag: "Turismo · IA", text: "Promoción turística digital con mapas interactivos y asistente inteligente." },
  { name: "Chatbot conversacional", tag: "Comunicación · IA", text: "Asistente que atiende consultas y facilita el acceso a la información." },
];

export const CERTS = ["INCIBE", "CCN-CERT", "ISO/IEC 27001", "ENS", "AEPD", "NIS2"];

export const PILLARS = [
  {
    title: "Experiencia técnica real",
    text: "Nuestros programas nacen de la práctica: incidentes gestionados, auditorías ejecutadas y sistemas protegidos en producción, no de la teoría de un manual.",
  },
  {
    title: "Metodología estructurada",
    text: "Cada servicio sigue un método con hitos, entregables y métricas. Sabrás en qué punto está tu organización y qué falta para alcanzar el siguiente nivel.",
  },
  {
    title: "Cercanía y respuesta inmediata",
    text: "Cuando ocurre un incidente, hablas con personas que conocen tu entorno. Sin centralitas ni tickets perdidos: respuesta directa en minutos.",
  },
];

export const MARQUEE_ITEMS = [
  "Auditoría 360°",
  "SOC 24/7",
  "Esquema Nacional de Seguridad",
  "ISO 27001",
  "NIS2",
  "Formación y concienciación",
  "Firma digital",
  "Respuesta a incidentes",
  "IA segura",
];

export const SERVICE_OPTIONS = [
  "Auditoría y pentesting",
  "SOC gestionado 24/7",
  "Cumplimiento normativo",
  "Formación y concienciación",
  "Firma digital y evidencias",
  "Consultoría de IA segura",
  "He sufrido un ciberataque",
  "Otro",
];

export const RISK_QUESTIONS = [
  {
    q: "¿Recibe tu plantilla formación periódica en ciberseguridad?",
    options: [
      { label: "Sí, al menos una vez al año", points: 0 },
      { label: "Solo cuando se incorpora alguien", points: 1 },
      { label: "Nunca o casi nunca", points: 2 },
    ],
  },
  {
    q: "¿Disponéis de copias de seguridad probadas y aisladas de la red?",
    options: [
      { label: "Sí, y las restauramos para verificarlas", points: 0 },
      { label: "Existen, pero no las hemos probado", points: 1 },
      { label: "No tenemos o no lo sé", points: 2 },
    ],
  },
  {
    q: "¿Usáis autenticación multifactor en el correo y los sistemas críticos?",
    options: [
      { label: "En todos los accesos importantes", points: 0 },
      { label: "Solo en algunos sistemas", points: 1 },
      { label: "No usamos doble factor", points: 2 },
    ],
  },
  {
    q: "¿Tenéis un plan documentado para responder a un incidente?",
    options: [
      { label: "Sí, y lo hemos ensayado", points: 0 },
      { label: "Está escrito, pero nunca lo hemos probado", points: 1 },
      { label: "No existe", points: 2 },
    ],
  },
  {
    q: "¿Tu sector está sujeto a obligaciones como NIS2, ENS o RGPD reforzado?",
    options: [
      { label: "No", points: 0 },
      { label: "No lo sé con seguridad", points: 1 },
      { label: "Sí", points: 2 },
    ],
  },
];

export const RISK_RESULTS = {
  low: {
    label: "Riesgo controlado",
    color: "#06D6A0",
    service: "Formación y concienciación",
    text: "Tu organización aplica los controles esenciales. El siguiente paso es mantener el nivel: las personas formadas son la barrera que más se degrada con el tiempo. Un programa continuo de concienciación con simulacros de phishing mantiene la guardia alta.",
  },
  mid: {
    label: "Riesgo moderado",
    color: "#62E7EF",
    service: "Auditoría y pentesting",
    text: "Tienes bases, pero hay huecos que un atacante aprovecharía. Una auditoría 360° te dará el mapa exacto: qué está expuesto, qué probabilidad tiene de ser atacado y en qué orden conviene corregirlo, sin gastar donde no hace falta.",
  },
  high: {
    label: "Riesgo elevado",
    color: "#FF6B6B",
    service: "SOC gestionado 24/7",
    text: "Tu perfil combina exposición alta y controles débiles: el escenario favorito de los ataques oportunistas. Recomendamos vigilancia continua para detectar intrusiones en su fase silenciosa, junto a un plan de refuerzo de controles básicos.",
  },
};

export const LEGAL_PAGES = {
  "aviso-legal": {
    title: "Aviso Legal",
    updated: "Última actualización: julio de 2026",
    blocks: [
      { type: "h3", text: "1. Titular del sitio web" },
      { type: "p", text: "En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el titular de este sitio web es Cibermedida (en adelante, «el Titular»), con domicilio en Cantabria, España, y correo electrónico de contacto jfloradmin@cibermedida.es. Los datos registrales y fiscales completos se facilitarán a cualquier usuario que los solicite por escrito." },
      { type: "h3", text: "2. Objeto y aceptación" },
      { type: "p", text: "Este sitio web tiene por objeto dar a conocer los servicios de ciberseguridad, formación y transformación digital ofrecidos por el Titular, así como facilitar el contacto con potenciales clientes. El acceso y uso del sitio atribuye la condición de usuario e implica la aceptación plena de las condiciones recogidas en este aviso legal." },
      { type: "h3", text: "3. Propiedad intelectual e industrial" },
      { type: "p", text: "Todos los contenidos del sitio —textos, logotipos, diseño, código e imágenes— son titularidad del Titular o se utilizan con licencia, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o transformación sin autorización expresa y por escrito." },
      { type: "h3", text: "4. Responsabilidad" },
      { type: "p", text: "Los contenidos de divulgación publicados tienen carácter meramente informativo y no constituyen asesoramiento jurídico ni técnico personalizado. El Titular no responde de los daños derivados del uso de la información sin una evaluación profesional del caso concreto, ni del contenido de sitios de terceros enlazados desde esta página." },
      { type: "h3", text: "5. Legislación aplicable" },
      { type: "p", text: "Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten a los juzgados y tribunales que resulten competentes conforme a derecho." },
    ],
  },
  "politica-privacidad": {
    title: "Política de Privacidad",
    updated: "Última actualización: julio de 2026",
    blocks: [
      { type: "h3", text: "1. Responsable del tratamiento" },
      { type: "p", text: "El responsable del tratamiento de los datos personales recabados a través de este sitio web es Cibermedida, con domicilio en Cantabria, España, y correo electrónico jfloradmin@cibermedida.es. Tratamos tus datos conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD)." },
      { type: "h3", text: "2. Datos que recogemos y finalidad" },
      { type: "p", text: "A través del formulario de contacto recogemos nombre, empresa, teléfono, correo electrónico y el contenido del mensaje. La finalidad es exclusivamente atender tu solicitud de información, gestionar la relación comercial derivada y, en su caso, coordinar la respuesta ante un incidente de seguridad que nos comuniques." },
      { type: "h3", text: "3. Base jurídica y conservación" },
      { type: "p", text: "La base del tratamiento es tu consentimiento, expresado al enviar el formulario, y la aplicación de medidas precontractuales cuando solicitas un servicio. Conservamos los datos el tiempo necesario para atender tu solicitud y, como máximo, durante los plazos de prescripción legal aplicables si se formaliza una relación contractual." },
      { type: "h3", text: "4. Destinatarios y transferencias" },
      { type: "p", text: "Los datos no se ceden a terceros salvo obligación legal. El envío de comunicaciones por correo electrónico se realiza mediante un proveedor de servicios de mensajería transaccional que actúa como encargado del tratamiento con las garantías exigidas por el RGPD." },
      { type: "h3", text: "5. Tus derechos" },
      { type: "p", text: "Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a jfloradmin@cibermedida.es, adjuntando un documento que acredite tu identidad. Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es)." },
      { type: "h3", text: "6. Medidas de seguridad" },
      { type: "p", text: "Aplicamos medidas técnicas y organizativas proporcionadas al riesgo —control de accesos, cifrado en tránsito y minimización de datos— para proteger tu información frente a accesos no autorizados, pérdida o alteración." },
    ],
  },
};
