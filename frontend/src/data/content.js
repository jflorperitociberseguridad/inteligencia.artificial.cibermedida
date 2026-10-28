export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1680992046615-065f58bcb4d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA6MjJ8MHwxfHNlYXJjaHw0fHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlcnZlciUyMHJvb20lMjBkYXJrJTIwbmVvbiUyMGN5YW4lMjBzaGllbGQlMjBkYXRhJTIwZGVmZW5zZXxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
  serverRack: "https://images.unsplash.com/photo-1639066648921-82d4500abf1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA6MjJ8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlcnZlciUyMHJvb20lMjBkYXJrJTIwbmVvbiUyMGN5YW4lMjBzaGllbGQlMjBkYXRhJTIwZGVmZW5zZXxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
  analyst: "https://images.unsplash.com/photo-1549605659-32d82da3a059?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxjeWJlciUyMHNlY3VyaXR5JTIwaGFja2VyJTIwY29kZSUyMHNjcmVlbiUyMGRhcmslMjBwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwdGVjaHxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
  code: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHxjeWJlciUyMHNlY3VyaXR5JTIwaGFja2VyJTIwY29kZSUyMHNjcmVlbiUyMGRhcmslMjBwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwdGVjaHxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
  cables: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA6MjJ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlcnZlciUyMHJvb20lMjBkYXJrJTIwbmVvbiUyMGN5YW4lMjBzaGllbGQlMjBkYXRhJTIwZGVmZW5zZXxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
};

export const NAV_LINKS = [
  { label: "Inteligencia Artificial", to: "/inteligencia-artificial" },
  { label: "Servicios", to: "/servicios" },
  { label: "Casos de éxito", to: "/casos-de-exito" },
  { label: "Cumplimiento", to: "/cumplimiento" },
  { label: "Guía de incidentes", to: "/guia-de-incidentes" },
  { label: "Ecosistema", to: "/ecosistema" },
];

export const METRICS = [
  { value: 120, suffix: "+", label: "Organizaciones acompañadas" },
  { value: 40, suffix: "+", label: "Proyectos de IA en producción" },
  { value: 99.9, suffix: "%", label: "Disponibilidad del SOC", decimals: 1 },
  { value: 15, suffix: " min", label: "Tiempo medio de respuesta" },
];

export const MARQUEE_ITEMS = [
  "Consultoría de IA",
  "Agentes conversacionales",
  "Automatización de procesos",
  "AI Act",
  "Formación en IA",
  "Gobierno del dato",
  "Ciberseguridad",
  "SOC 24/7",
];

export const HOME_HIGHLIGHTS = [
  {
    to: "/inteligencia-artificial",
    kicker: "Entender",
    title: "Qué es la IA y qué puede hacer por ti",
    text: "Modelos generativos, agentes y analítica explicados sin jerga, con ejemplos aplicados a empresas, centros formativos y administraciones.",
  },
  {
    to: "/servicios",
    kicker: "Aplicar",
    title: "Servicios de IA y ciberseguridad",
    text: "De la consultoría inicial al agente en producción: implantamos, formamos y vigilamos para que la tecnología rinda desde el primer mes.",
  },
  {
    to: "/cumplimiento",
    kicker: "Cumplir",
    title: "AI Act, RGPD, ENS y NIS2",
    text: "La IA que despliegas debe poder demostrarse: documentamos, auditamos y dejamos evidencia del cumplimiento normativo.",
  },
];

export const AI_PILLARS = [
  {
    id: "generativa",
    label: "IA generativa",
    title: "Contenido y conocimiento a demanda",
    text: "Modelos capaces de redactar documentos, resumir expedientes, generar materiales formativos o responder consultas con el lenguaje de tu organización. Bien gobernados, multiplican la capacidad de los equipos sin aumentar la plantilla.",
  },
  {
    id: "agentes",
    label: "Agentes y automatización",
    title: "Procesos que se ejecutan solos",
    text: "Agentes conversacionales que atienden consultas, flujos que clasifican correos, validan documentos o actualizan sistemas. La automatización con IA elimina el trabajo repetitivo y reduce los errores humanos.",
  },
  {
    id: "analitica",
    label: "Analítica y datos",
    title: "Decisiones con evidencia",
    text: "Modelos que detectan patrones en tus datos: previsión de demanda, detección de anomalías, segmentación de usuarios. La analítica convierte la información acumulada en ventaja competitiva.",
  },
  {
    id: "segura",
    label: "IA segura",
    title: "Innovación con garantías",
    text: "Cada despliegue se evalúa contra el AI Act, el RGPD y los marcos de ciberseguridad: gobierno del dato, control de accesos, trazabilidad de las respuestas y protección frente a usos indebidos.",
  },
];

export const AI_APPLICATIONS = [
  { sector: "Empresas", text: "Atención al cliente automatizada, gestión documental inteligente y apoyo a la decisión directiva." },
  { sector: "Centros formativos", text: "Tutores virtuales, generación de materiales y evaluación asistida con supervisión docente." },
  { sector: "Administraciones", text: "Tramitación ágil, asistentes ciudadanos y análisis de servicios conforme al ENS y al AI Act." },
];

export const SERVICES = [
  {
    icon: "cpu",
    title: "Consultoría e implantación de IA",
    text: "Identificamos los casos de uso con retorno real en tu organización, seleccionamos la tecnología adecuada y la ponemos en producción con métricas de éxito claras.",
  },
  {
    icon: "bot",
    title: "Agentes y chatbots conversacionales",
    text: "Asistentes entrenados con tu información que atienden a clientes, empleados o ciudadanos las 24 horas, con escalado a personas cuando hace falta.",
  },
  {
    icon: "workflow",
    title: "Automatización de procesos con IA",
    text: "Clasificación de documentos, lectura de facturas, gestión de correos y flujos administrativos que se ejecutan solos y dejan registro auditable.",
  },
  {
    icon: "graduation",
    title: "Formación en inteligencia artificial",
    text: "Programas prácticos para plantillas y directivos: del uso responsable de asistentes a la creación de prompts y agentes internos.",
  },
  {
    icon: "shield",
    title: "IA segura y gobierno del dato",
    text: "Evaluación de riesgos, cumplimiento del AI Act y RGPD, control de fugas de información y políticas de uso aceptable de la IA.",
  },
  {
    icon: "activity",
    title: "Ciberseguridad y SOC 24/7",
    text: "La base sobre la que se apoya toda IA: auditoría, monitorización continua y respuesta a incidentes para proteger datos y modelos.",
  },
];

export const COMPLIANCE_ITEMS = [
  {
    code: "AI Act",
    title: "Reglamento europeo de IA",
    text: "Clasificamos tus sistemas por nivel de riesgo, documentamos su funcionamiento y aplicamos las obligaciones de transparencia y supervisión humana exigidas.",
  },
  {
    code: "RGPD",
    title: "Protección de datos y AEPD",
    text: "La IA trata datos personales: evaluaciones de impacto, base jurídica clara, brechas notificadas en 72 horas y medidas proporcionadas al riesgo.",
  },
  {
    code: "ENS",
    title: "Esquema Nacional de Seguridad",
    text: "Marco obligatorio para el sector público y sus proveedores. Preparamos la documentación, los controles y la evidencia para la certificación.",
  },
  {
    code: "NIS2",
    title: "Directiva europea de ciberseguridad",
    text: "Identificamos si tu organización está dentro del ámbito y desplegamos las medidas de gestión de riesgo y notificación exigidas.",
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

export const CERTS = ["AI Act", "RGPD", "ENS", "ISO/IEC 27001", "NIS2", "INCIBE"];

export const PILLARS = [
  {
    title: "IA con retorno real",
    text: "No implantamos tecnología por moda: cada proyecto parte de un caso de uso medible y termina con métricas que demuestran el ahorro o la mejora conseguida.",
  },
  {
    title: "Seguridad desde el diseño",
    text: "Cada agente, modelo o automatización nace con gobierno del dato, control de accesos y cumplimiento normativo integrados, no añadidos después.",
  },
  {
    title: "Cercanía y respuesta inmediata",
    text: "Cuando ocurre un incidente, hablas con personas que conocen tu entorno. Sin centralitas ni tickets perdidos: respuesta directa en minutos.",
  },
];

export const SERVICE_OPTIONS = [
  "Consultoría e implantación de IA",
  "Agentes y chatbots conversacionales",
  "Automatización de procesos con IA",
  "Formación en inteligencia artificial",
  "IA segura y gobierno del dato",
  "Ciberseguridad y SOC 24/7",
  "He sufrido un ciberataque",
  "Otro",
];

export const RISK_QUESTIONS = [
  {
    q: "¿Tu organización ya utiliza herramientas de IA en el día a día?",
    options: [
      { label: "Sí, con políticas y controles definidos", points: 0 },
      { label: "Sí, pero cada uno usa lo que quiere", points: 1 },
      { label: "No las usamos o no lo sé", points: 2 },
    ],
  },
  {
    q: "¿Sabes qué datos internos pueden llegar a herramientas de IA externas?",
    options: [
      { label: "Sí, hay un inventario y reglas claras", points: 0 },
      { label: "Más o menos, sin documentar", points: 1 },
      { label: "No lo controlamos", points: 2 },
    ],
  },
  {
    q: "¿Tu plantilla ha recibido formación en uso responsable de la IA?",
    options: [
      { label: "Sí, al menos una vez al año", points: 0 },
      { label: "Solo charlas puntuales", points: 1 },
      { label: "Nunca o casi nunca", points: 2 },
    ],
  },
  {
    q: "¿Disponéis de copias de seguridad probadas y autenticación multifactor?",
    options: [
      { label: "Sí, ambas verificadas", points: 0 },
      { label: "Solo una de las dos", points: 1 },
      { label: "Ninguna o no lo sé", points: 2 },
    ],
  },
  {
    q: "¿Tu sector está sujeto a obligaciones como AI Act, NIS2, ENS o RGPD reforzado?",
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
    service: "Formación en inteligencia artificial",
    text: "Tu organización aplica los controles esenciales. El siguiente paso es mantener el nivel: la tecnología evoluciona cada trimestre y la formación continua evita que las buenas prácticas se degraden con el tiempo.",
  },
  mid: {
    label: "Riesgo moderado",
    color: "#3FE0F2",
    service: "Consultoría e implantación de IA",
    text: "Usáis IA, pero sin un marco claro: ahí es donde se producen las fugas de datos y los usos fuera de norma. Una consultoría te dará el mapa: qué usos son seguros, cuáles hay que corregir y dónde está el retorno real.",
  },
  high: {
    label: "Riesgo elevado",
    color: "#FF6B6B",
    service: "Ciberseguridad y SOC 24/7",
    text: "Tu perfil combina exposición alta y controles débiles: el escenario favorito de los ataques oportunistas y de las fugas hacia herramientas externas. Recomendamos reforzar la base de seguridad y vigilar de forma continua antes de seguir escalando IA.",
  },
};

export const CASE_STUDIES = [
  {
    name: "Aula Virtual Cibermedida",
    sector: "Formación",
    image: "https://images.unsplash.com/photo-1549605659-32d82da3a059?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxjeWJlciUyMHNlY3VyaXR5JTIwaGFja2VyJTIwY29kZSUyMHNjcmVlbiUyMGRhcmslMjBwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwdGVjaHxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
    challenge: "Centros formativos y empresas necesitaban impartir cursos técnicos con seguimiento real del alumnado, sin depender de plataformas genéricas que no se adaptan a sus contenidos ni a sus procesos.",
    solution: "Diseñamos y operamos un aula virtual propia con cursos, materiales, evaluaciones y panel de seguimiento, integrada con la identidad y los contenidos de cada organización.",
    result: "Formación continua en marcha con seguimiento por alumno y contenidos actualizables por el propio centro, sin costes de licencia por cambio.",
    stack: ["Plataforma propia", "SCORM", "Seguimiento formativo"],
  },
  {
    name: "Chatbot conversacional",
    sector: "Comunicación · IA",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHxjeWJlciUyMHNlY3VyaXR5JTIwaGFja2VyJTIwY29kZSUyMHNjcmVlbiUyMGRhcmslMjBwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwdGVjaHxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
    challenge: "Las mismas preguntas repetidas consumían horas del equipo cada semana, y fuera del horario nadie atendía a los visitantes de la web.",
    solution: "Implantamos un asistente conversacional entrenado con la información de la organización, con respuestas inmediatas y derivación a personas cuando el tema lo requiere.",
    result: "Atención disponible 24/7 y un equipo liberado de las consultas repetitivas para centrarse en las que sí aportan valor.",
    stack: ["IA conversacional", "Integración web", "Escalado humano"],
  },
  {
    name: "Signados",
    sector: "Seguridad",
    image: "https://images.unsplash.com/photo-1639066648921-82d4500abf1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA6MjJ8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlcnZlciUyMHJvb20lMjBkYXJrJTIwbmVvbiUyMGN5YW4lMjBzaGllbGQlMjBkYXRhJTIwZGVmZW5zZXxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
    challenge: "Contratos y documentos sensibles circulaban por correo sin garantía de quién los firmaba ni de que no hubieran sido alterados después.",
    solution: "Creamos Signados, una plataforma de firma digital y certificación segura que aporta validez probatoria a cada documento.",
    result: "Documentos certificados con evidencia de firma e integridad, listos para tener valor ante cualquier requerimiento.",
    stack: ["Firma digital", "Certificación", "Trazabilidad"],
  },
  {
    name: "Turismo Cibermedida",
    sector: "Turismo · IA",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA6MjJ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlcnZlciUyMHJvb20lMjBkYXJrJTIwbmVvbiUyMGN5YW4lMjBzaGllbGQlMjBkYXRhJTIwZGVmZW5zZXxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
    challenge: "Destinos y negocios turísticos necesitaban ofrecer información útil al visitante sin mantener un equipo contestando las mismas dudas de siempre.",
    solution: "Desarrollamos una plataforma de promoción turística con mapas interactivos y un asistente inteligente que guía al visitante en tiempo real.",
    result: "Visitantes mejor informados y una imagen de destino moderna, con contenido gestionable por el propio equipo de turismo.",
    stack: ["Mapas interactivos", "Asistente IA", "Gestión de contenidos"],
  },
  {
    name: "Markitplace",
    sector: "Comunicación · IA",
    image: "https://images.unsplash.com/photo-1680992046615-065f58bcb4d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA6MjJ8MHwxfHNlYXJjaHw0fHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlcnZlciUyMHJvb20lMjBkYXJrJTIwbmVvbiUyMGN5YW4lMjBzaGllbGQlMjBkYXRhJTIwZGVmZW5zZXxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
    challenge: "Mantener una comunicación activa (noticias, redes, materiales) exigía unas horas que los equipos pequeños simplemente no tienen.",
    solution: "Construimos Markitplace, una solución de generación de contenidos con IA que produce borradores alineados con el tono de cada organización para revisión humana.",
    result: "Comunicación constante con supervisión humana: la IA propone y el equipo decide, en una fracción del tiempo anterior.",
    stack: ["IA generativa", "Flujo de aprobación", "Multicanal"],
  },
  {
    name: "Ikas Txiki — Fútbol Base",
    sector: "Gestión deportiva",
    image: "https://images.unsplash.com/photo-1549605659-32d82da3a059?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxjeWJlciUyMHNlY3VyaXR5JTIwaGFja2VyJTIwY29kZSUyMHNjcmVlbiUyMGRhcmslMjBwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwdGVjaHxlbnwwfHx8fDE3OTMxNzE2MjR8MA&ixlib=rb-4.1.0&q=85",
    challenge: "Un club de fútbol base gestionaba equipos, convocatorias y comunicaciones con familias por hojas de cálculo y grupos de mensajería.",
    solution: "Digitalizamos la organización completa de la actividad: equipos, calendarios, convocatorias y avisos centralizados en una sola plataforma.",
    result: "Menos coordinación manual, familias informadas al momento y toda la actividad del club ordenada en un único lugar.",
    stack: ["Gestión deportiva", "Notificaciones", "Calendarios"],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Descubrimiento",
    text: "Escuchamos cómo trabaja tu organización y localizamos los procesos donde la IA o la digitalización aportan retorno real, con una estimación honesta de esfuerzo e impacto.",
  },
  {
    step: "02",
    title: "Diseño",
    text: "Definimos el alcance, las métricas de éxito y los controles de seguridad y cumplimiento antes de escribir la primera línea: nada se construye sin saber cómo se medirá.",
  },
  {
    step: "03",
    title: "Implantación",
    text: "Desarrollamos e integramos por hitos, con entregas parciales que puedes probar. Tu equipo participa desde el primer sprint, no en la presentación final.",
  },
  {
    step: "04",
    title: "Acompañamiento",
    text: "Formamos a las personas que lo van a usar, medimos los resultados pactados y ajustamos. El proyecto no termina en la entrega: termina cuando funciona.",
  },
];

export const LEGAL_PAGES = {
  "aviso-legal": {
    title: "Aviso Legal",
    updated: "Última actualización: julio de 2026",
    blocks: [
      { type: "h3", text: "1. Titular del sitio web" },
      { type: "p", text: "En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el titular de este sitio web es Cibermedida (en adelante, «el Titular»), con domicilio en Cantabria, España, y correo electrónico de contacto jfloradmin@cibermedida.es. Los datos registrales y fiscales completos se facilitarán a cualquier usuario que los solicite por escrito." },
      { type: "h3", text: "2. Objeto y aceptación" },
      { type: "p", text: "Este sitio web tiene por objeto dar a conocer los servicios de inteligencia artificial, ciberseguridad, formación y transformación digital ofrecidos por el Titular, así como facilitar el contacto con potenciales clientes. El acceso y uso del sitio atribuye la condición de usuario e implica la aceptación plena de las condiciones recogidas en este aviso legal." },
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
      { type: "p", text: "A través del formulario de contacto recogemos nombre, empresa, teléfono, correo electrónico y el contenido del mensaje. La finalidad es exclusivamente atender tu solicitud de información, gestionar la relación comercial derivada y, en su caso, coordinar la respuesta ante un incidente de seguridad que nos comuniques. Las conversaciones con el asistente virtual se registran para mejorar el servicio y no se utilizan con fines publicitarios." },
      { type: "h3", text: "3. Base jurídica y conservación" },
      { type: "p", text: "La base del tratamiento es tu consentimiento, expresado al enviar el formulario o al usar el asistente, y la aplicación de medidas precontractuales cuando solicitas un servicio. Conservamos los datos el tiempo necesario para atender tu solicitud y, como máximo, durante los plazos de prescripción legal aplicables si se formaliza una relación contractual." },
      { type: "h3", text: "4. Destinatarios y transferencias" },
      { type: "p", text: "Los datos no se ceden a terceros salvo obligación legal. El envío de comunicaciones por correo electrónico y el asistente virtual se apoyan en proveedores tecnológicos que actúan como encargados del tratamiento con las garantías exigidas por el RGPD." },
      { type: "h3", text: "5. Tus derechos" },
      { type: "p", text: "Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a jfloradmin@cibermedida.es, adjuntando un documento que acredite tu identidad. Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es)." },
      { type: "h3", text: "6. Medidas de seguridad" },
      { type: "p", text: "Aplicamos medidas técnicas y organizativas proporcionadas al riesgo —control de accesos, cifrado en tránsito y minimización de datos— para proteger tu información frente a accesos no autorizados, pérdida o alteración." },
    ],
  },
};
