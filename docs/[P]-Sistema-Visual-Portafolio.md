# Sistema visual del portafolio de Hugo Canaval

**Proyecto:** cv-hugo-canaval
**Última actualización:** 2026-08-27
**Estado:** Implementado y publicado

Este documento registra la dirección visual implementada para el portafolio. El contenido público en español e inglés permanece como fuente aprobada y no depende de este sistema para conservar su significado.

La dirección es una implementación pública del sistema de marca Hugo. Comparte paleta, voz, geometría y principios editoriales con la marca; documenta aquí únicamente las decisiones específicas de la aplicación React.

## Relación entre marca e implementación

| Decisión | Alcance |
|---|---|
| Identidad `Product Management · Data Science · AI Builder` | Global de Hugo |
| Voz directa, factual y centrada en evidencia | Global de Hugo |
| Carbón, marfil, cobalto y verde señal | Global de Hugo |
| Composición editorial y espacio negativo | Global de Hugo |
| Concepto expediente de producto | Portafolio web |
| Órbita de contacto y señal líquida | Portafolio web |
| React, Vite, Tailwind y rutas bilingües | Implementación técnica |

La doctrina completa permanece en documentación privada. Este archivo debe poder publicarse sin revelar trayectoria, inventarios internos o decisiones confidenciales.

## Problema que resuelve el rediseño

La versión anterior usaba un tema oscuro con acentos índigo, tarjetas repetidas, degradados y escalados al pasar el cursor. Era funcional, pero se parecía a una plantilla genérica de portafolio creada con componentes estándar.

El rediseño debía cumplir cuatro condiciones:

1. Diferenciar el portafolio sin saturarlo de efectos.
2. Dar protagonismo a proyectos, decisiones y resultados.
3. Conservar navegación, responsive, idiomas y enlaces existentes.
4. Mantener compatibilidad con el build estático usado por Vercel.

## Dirección editorial implementada

La dirección se denomina **expediente de producto**. Combina referencias editoriales con señales de una interfaz técnica.

| Elemento | Decisión |
|----------|----------|
| Fondo principal | Carbón `#151613` y marfil `#f2efe6` |
| Evidencia | Azul cobalto `#3346f5` |
| Acción | Verde señal `#c7f36b` |
| Tipografía | Inter desde Google Fonts y monoespaciada del sistema |
| Composición | Estructura asimétrica, reglas de separación y numeración; fondos planos sin cuadrícula decorativa |
| Proyectos | Casos horizontales con resultados separados en bloques cobalto |
| Movimiento | Revelado corto por scroll y señal líquida decorativa |
| Favicon | `H` geométrica marfil sobre carbón y punto verde señal, sin tipografía ni gradientes |

La página conserva Inter desde Google Fonts para no alterar la dirección aprobada. No usa imágenes generadas ni librerías externas para las animaciones distintivas.

## Componentes principales

- `src/components/visual/LiquidSignal.tsx`: señal SVG con filtro líquido. Usa `aria-hidden` y no contiene controles.
- `src/pages/LanguageSelect.tsx`: portada editorial y selección ES/EN.
- `src/components/Header.tsx`: navegación fija, estado de sección y menú móvil controlado.
- `src/components/sections/HeroSection.tsx`: presentación, resumen, propuestas de valor y llamadas a la acción.
- `src/components/visual/ContactOrbit.tsx`: menú orbital reutilizado en hero y contacto, con temporizadores de hover controlados.
- `src/components/projects/ProjectCard.tsx`: estructura de cada caso con descripción, tecnologías y resultados.
- `src/index.css`: tokens, composición, movimiento y respuesta a movimiento reducido.
- `public/favicon.svg`: fuente vectorial del favicon; los PNG y el ICO reproducen la misma geometría en tamaños compatibles.

## Aplicación de las referencias investigadas

Liquid Gooey se aplicó como una señal visual puntual. El SVG animado permanece separado del texto y los botones. No se instaló la librería porque la primera hipótesis podía probarse con un componente local menor.

La discusión de Tailwind sirvió como referencia para movimiento ligado al recorrido. La implementación usa `IntersectionObserver`, que ya formaba parte de la aplicación, en lugar de sumar un plugin. Las secciones conservan su contenido cuando el usuario solicita movimiento reducido.

Los criterios de Emil Kowalski influyeron en la duración de las transiciones, la continuidad espacial y la decisión de evitar escalados repetidos. Cada sección tiene una jerarquía distinta, pero comparte tokens, espaciado y comportamiento.

## Ajustes derivados de la revisión visual

- Se retiraron las cuadrículas decorativas de los fondos oscuros y claros. La diferenciación depende ahora del color, la tipografía, las reglas y el espacio.
- Los textos largos del cuerpo usan justificación completa sin guiones automáticos ni división interna de palabras. Títulos, etiquetas, navegación y resultados conservan su alineación propia.
- El selector de producto y capacidades técnicas se duplicó al final de la sección para evitar que el usuario tenga que retroceder manualmente. Al usar el selector inferior, la vista cambia y vuelve al inicio de la sección.
- El selector inferior se muestra solo en mobile y tablet. Desde `1024 px` se oculta para evitar duplicación innecesaria en escritorio.
- El botón `Contactar` del hero y `Hablemos` del cierre comparten la órbita de LinkedIn, GitHub, correo y WhatsApp. Los iconos estáticos redundantes se retiraron del cierre.
- Cada destino abre su enlace con un clic. El panel para copiar aparece después de mantener el cursor y se limpia al cambiar rápido entre destinos, evitando que quede asociado al enlace anterior.
- El comportamiento responsive y el cierre del menú móvil se conservaron después de estos cambios.

## Accesibilidad y movimiento

- La señal líquida es decorativa y no participa en el árbol accesible.
- Los controles conservan etiquetas y estados de foco visibles.
- El botón del menú móvil tiene nombre accesible.
- `prefers-reduced-motion` elimina animaciones y desplazamiento suave.
- El contenido interactivo no recibe filtros SVG.
- Las combinaciones principales usan texto claro sobre carbón o texto oscuro sobre marfil.

## Verificación local

[VERIFIED] El 27 de agosto de 2026 se comprobaron:

- Selector ES/EN y cambio de idioma dentro del portafolio.
- Navegación de escritorio y menú móvil.
- Cierre del menú móvil después de elegir una sección.
- Selector superior visible en escritorio y selector inferior adicional visible por debajo de `1024 px`.
- Retorno al inicio de la sección al usar el selector inferior.
- Órbitas de contacto funcionales en hero y cierre, con apertura y cierre independientes.
- Fondos sin cuadrícula decorativa.
- Textos largos justificados sin separación de palabras mediante guiones.
- Modal de cursos.
- Hero, perfil, proyectos, formación, objetivo y contacto.
- Vista móvil de 390 por 844 píxeles.
- Consola sin errores en una sesión nueva del navegador.
- `npm audit` con cero vulnerabilidades.
- `npm run lint` con cero errores y 15 advertencias heredadas de Fast Refresh.
- `npm run build` con Vite 8.2.2 y 1.725 módulos transformados.

## Runtime y despliegue

- Node.js `22.x` es el runtime definido para desarrollo limpio y Vercel.
- Vite se migró a `8.2.2` y React Router DOM a `7.18.2` para cerrar las vulnerabilidades detectadas.
- `lovable-tagger`, el script externo de GPT Engineer, el lockfile de Bun y el workflow de GitHub Pages fueron retirados por no formar parte del producto.
- Vercel instala con `npm ci`, construye `dist` y conserva el fallback de rutas de la SPA.
- Los assets con hash bajo `/assets/` reciben caché inmutable.

## Límites y pendientes

- Falta completar la revisión visual en dispositivos físicos después del despliegue.
- La dirección visual está aprobada en términos generales. Quedan ajustes visuales menores durante la revisión de Hugo.
- Los PDF del CV, LinkedIn y GitHub permanecen como frentes separados.
