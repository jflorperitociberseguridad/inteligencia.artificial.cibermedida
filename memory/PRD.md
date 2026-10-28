# PRD — Web corporativa Cibermedida

## Problem statement original
"quiero que repliques estta pagina web: https://www.ia-espana.es/ y la hagas para cibermedida, que se amas profersional, que aplique los tonos y los colores de cibermedida.es"

## Decisiones del usuario
- Noticias de muestra fijas (sin panel de publicación)
- Formulario de contacto con envío directo a email (jfloradmin@cibermedida.es)
- Estilo visual igual que cibermedida.es (oscuro navy + cian)

## Arquitectura
- Frontend: React (CRA/craco), Tailwind, framer-motion (reveals, parallax), lenis (scroll suave), sonner (toasts)
- Backend: FastAPI, MongoDB (motor), endpoint /api/contact con plantilla de email server-side y guardrails G1-G5
- Email: Emergent Managed Resend (proxy integrations.emergentagent.com, X-Email-Key)
- Colores extraídos de cibermedida.es: #071725 navy, #62E7EF cian, #18A6B7 teal, #06D6A0 verde, #102B49 cards
- Logo SVG original (escudo + C) usado como favicon
- Contenido: copy 100% original en español (no se copia texto de ia-espana.es ni cibermedida.es)

## User personas
- Responsable de pyme que necesita cumplir NIS2/ENS y evaluar su seguridad
- Centro formativo / administración pública que busca formación estructurada
- Empresa que acaba de sufrir un incidente y necesita respuesta rápida

## Requisitos core (estáticos)
1. Landing editorial estilo guía: hero, actualidad, qué es, servicios, cumplimiento, guía de incidentes, ecosistema, pilares, contacto, footer
2. Tonos/colores de cibermedida.es
3. Noticias de muestra fijas con filtro por categoría
4. Formulario → email a jfloradmin@cibermedida.es
5. Responsive + animaciones premium (framer-motion, lenis)

## Implementado (2026-10-28, fase 2)
- Páginas de artículo completas para las 6 noticias (/noticias/:id): imagen, cuerpo con subtítulos, botón compartir (navigator.share / copiar enlace), CTA a contacto y volver a actualidad
- Páginas legales RGPD (/legal/aviso-legal y /legal/politica-privacidad) enlazadas desde el footer — plantilla profesional, pendiente de datos registrales definitivos del usuario
- Simulador de riesgo: test de 5 preguntas con barra de progreso, nivel (controlado/moderado/elevado), servicio recomendado y CTA que preselecciona el servicio en el formulario
- Enrutado con react-router (/, /noticias/:id, /legal/:slug) + scroll suave entre rutas
- Verificado: flujo quiz completo con prefill del servicio, navegación artículo/legal/footer, email re-test (sigue 401 en preview: clave de plataforma no provisionada)

## Implementado (2026-10-28, fase 1)
- Hero cinético con reveal línea a línea y parallax + indicador "SOC activo"
- Marquee editorial, strip de métricas con contadores animados
- Sección Actualidad: 6 noticias originales con filtro (Todo/Normativa/Amenazas/Guías/Noticias)
- ¿Qué es la ciberseguridad?: imagen con frame + tabs interactivos (CID + trazabilidad)
- Servicios: 6 tarjetas con glow hover
- Cumplimiento: ENS, ISO 27001, NIS2, RGPD/AEPD
- Guía de incidentes: acordeón de 4 pasos + CTA de emergencia "Reportar incidente"
- Ecosistema Cibermedida (Aula Virtual, Signados, Markitplace, Consulting, Turismo, Chatbot) + marcos de referencia
- Pilares de confianza + formulario de contacto funcional (POST /api/contact, toast, guardado en Mongo)
- Footer completo, favicon SVG original, meta en español
- Verificado: curl health/contact OK; screenshots 375/768/1366; envío e2e del formulario con toast

## Pendiente / limitaciones
- P0: verificar entrega de email real — re-test 2026-10-28: el proxy sigue devolviendo 401 en preview (EMERGENT_EMAIL_KEY no provisionada en este entorno). Las solicitudes se guardan en Mongo igualmente. Re-verificar tras publicar o con soporte
- P1: datos registrales definitivos (razón social, NIF, domicilio) en aviso legal y privacidad
- P2: blog auto-gestionado con panel admin (si el usuario cambia de opinión)
- P2: SEO avanzado (sitemap, JSON-LD, OG image dedicada)
