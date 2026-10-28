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
  },
  {
    id: 2,
    category: "Amenazas",
    date: "28 jun 2026",
    readTime: "5 min",
    title: "El ransomware contra pymes se profesionaliza: así se venden los accesos robados",
    excerpt: "Los grupos de extorsión ya no improvisan: compran accesos iniciales en mercados clandestinos. Analizamos la cadena de ataque y dónde cortarla.",
    image: IMAGES.analyst,
  },
  {
    id: 3,
    category: "Guías",
    date: "17 jun 2026",
    readTime: "8 min",
    title: "Cinco controles mínimos de seguridad para equipos en teletrabajo",
    excerpt: "Autenticación multifactor, cifrado de disco, gestión de parches y dos medidas más que reducen drásticamente el riesgo sin frenar la productividad.",
    image: IMAGES.code,
  },
  {
    id: 4,
    category: "Noticias",
    date: "3 jun 2026",
    readTime: "4 min",
    title: "La IA llega al centro de operaciones: detección de anomalías en tiempo real",
    excerpt: "Los modelos de comportamiento permiten identificar movimientos laterales en la red horas antes que las reglas tradicionales. Así lo aplicamos en el SOC.",
    image: IMAGES.serverRack,
  },
  {
    id: 5,
    category: "Normativa",
    date: "21 may 2026",
    readTime: "7 min",
    title: "Esquema Nacional de Seguridad: hoja de ruta práctica para administraciones",
    excerpt: "Del análisis de riesgos al plan de adecuación: una guía por fases para entidades públicas que deben certificar su conformidad con el ENS.",
    image: IMAGES.hero,
  },
  {
    id: 6,
    category: "Amenazas",
    date: "9 may 2026",
    readTime: "5 min",
    title: "Phishing generado por IA: señales que delatan un correo escrito por un modelo",
    excerpt: "Los textos perfectos ya no son garantía de legitimidad. Estas son las pistas contextuales y técnicas que tu equipo debe comprobar siempre.",
    image: IMAGES.code,
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
