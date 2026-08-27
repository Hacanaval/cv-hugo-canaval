# Portafolio web de Hugo Canaval

Sitio público bilingüe de Hugo Canaval. Presenta su trabajo en producto, datos e inteligencia artificial mediante capacidades, casos sanitizados y resultados verificables.

Implementa públicamente la identidad `Product Management · Data Science · AI Builder`. Su concepto, **expediente de producto**, traduce la marca Hugo a una experiencia web basada en decisiones y evidencia.

**Última actualización:** 2026-08-27

## Estado

- Fuente canónica del sitio publicado en <https://cv-hugo-canaval.vercel.app/>.
- Rama de producción: `main` en `Hacanaval/cv-hugo-canaval`.
- Contenido ES/EN y sistema visual **expediente de producto** aprobados.
- La versión anterior está preservada en el tag `pre-expediente-producto-2026-08-27`.
- Hugo continúa revisando ajustes visuales menores desde escritorio e iPhone.

## Stack

- React 18 y TypeScript.
- Vite 8 para desarrollo y build.
- Tailwind CSS 3 y componentes shadcn/ui existentes.
- SVG local para la señal líquida y órbitas de contacto implementadas sin dependencias visuales nuevas.
- Node.js 22 y npm como runtime y gestor de paquetes.

## Ejecutar

La instalación limpia requiere que macOS y Node.js usen la misma arquitectura. En esta Mac ambos deben reportar `arm64`:

```sh
uname -m
node -p "process.arch"
```

Si Node.js reporta `x64`, instalar una versión LTS nativa para Apple Silicon antes de ejecutar `npm ci`. La mezcla entre macOS ARM y Node.js x64 impide que SWC y esbuild resuelvan sus binarios opcionales.

```sh
npm ci
npm run dev
```

Vite mostrará la dirección local. La ruta inicial permite escoger español o inglés.

## Verificar

```sh
npm run lint
npm run build
npm run preview
```

## Verificación de la versión publicada

Verificado el 27 de agosto de 2026:

- `npm ci`: instalación limpia con Node.js 22.15.
- `npm audit`: cero vulnerabilidades.
- `npm run lint`: cero errores y 15 advertencias heredadas de Fast Refresh.
- `npm run build`: build de producción con Vite 8.2.2 y 1.725 módulos transformados.
- Selector inicial de español e inglés funcional.
- Navegación, pestañas de habilidades y menú móvil funcionales.
- El menú móvil se cierra después de seleccionar una sección.
- El selector inferior de producto y capacidades técnicas aparece solo por debajo de `1024 px`. En escritorio se conserva únicamente el selector superior.
- Las órbitas de contacto funcionan en el hero y en la sección final, con cierre controlado y estado accesible mediante `aria-expanded`.
- Los textos largos del cuerpo están justificados sin separar palabras mediante guiones.
- Las cuadrículas decorativas del fondo fueron retiradas durante la revisión visual.
- El favicon usa una `H` geométrica en marfil, fondo carbón y punto verde señal; reemplaza el monograma índigo de la plantilla anterior.
- Contenido completo visible en ambos idiomas.
- Modal de cursos funcional y consola limpia en una sesión nueva del navegador.
- Vista móvil comprobada en un viewport de 390 por 844 píxeles.
- Sin nombres de empleadores ni enlaces a repositorios privados en `src/` o `index.html`.
- Build estático compatible con el flujo vigente de Vercel.

La aplicación anterior conserva su código y configuración. Su huella de referencia sigue siendo `452a9a52c8a4a7e2551c14502c6c94744058eb4e`.

## Contenido

- `CONTENIDO-WEB-ES.md`: fuente aprobada en español.
- `CONTENIDO-WEB-EN.md`: traducción en inglés B2.
- `src/utils/translations/`: contenido consumido por la aplicación.

Los proyectos profesionales se presentan como casos privados sanitizados. No hay enlaces a repositorios internos ni nombres de empleadores.

## Estructura

- `src/components/`: navegación, secciones, proyectos y elementos visuales.
- `src/pages/`: entrada de idioma y página principal.
- `src/utils/translations/`: contenido que consume la interfaz en español e inglés.
- `docs/`: decisiones y límites del sistema visual.
- `public/`: recursos estáticos y PDF históricos del CV.

## Sistema visual

La dirección se llama **expediente de producto**. Usa una base carbón y marfil, azul cobalto para evidencia y verde señal para acciones puntuales. La composición prioriza tipografía, reglas de separación, numeración y espacio. Los fondos se mantienen planos, sin cuadrícula decorativa.

Las tres referencias investigadas se aplicaron de forma acotada:

- Liquid Gooey: una señal SVG decorativa en la entrada y el hero. El contenido interactivo permanece en el DOM y fuera del filtro.
- Tailwind y scroll: revelado progresivo mediante `IntersectionObserver`, con degradación para `prefers-reduced-motion`.
- Skills de Emil Kowalski: duraciones cortas, respuesta directa, jerarquías comparables y movimiento con función clara.

El detalle técnico y los límites del sistema están en `docs/[P]-Sistema-Visual-Portafolio.md`.

La paleta, la voz y los principios editoriales provienen del sistema de marca privado. Este repositorio documenta solo su implementación pública. La órbita de contacto, la señal líquida, el comportamiento responsive y los componentes React son decisiones específicas del portafolio.

## Contexto para agentes

- `AGENTS.md` contiene las reglas públicas para Codex.
- `CLAUDE.md` es un enlace relativo al mismo contenido para Claude Code.
- La identidad completa, la trayectoria y los inventarios privados no pertenecen a este repositorio.
- Antes de publicar se revisan secretos, nombres internos, métricas y documentos privados.

## Siguiente etapa del perfil

El sitio está publicado y permanece abierto a ajustes visuales menores derivados de la revisión en dispositivos físicos.

Después de aprobar la web, la siguiente etapa recomendada es investigar oportunidades compatibles con Product Management, Data Science y AI Builder. Los hallazgos servirán para ajustar palabras clave del CV, LinkedIn y GitHub sin cambiar la identidad ni inventar experiencia.

La investigación inicial está documentada en `../../docs/06-investigacion-diseno-interfaces.md`. La siguiente etapa es alinear CV, LinkedIn y GitHub con la misma identidad profesional y con palabras clave verificadas contra vacantes reales.
