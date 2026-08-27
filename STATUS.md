# Estado operativo del portafolio

**Proyecto:** cv-hugo-canaval
**Última actualización:** 2026-08-27
**Estado:** Producción

Este archivo resume la versión activa, el despliegue y las verificaciones necesarias para operar el portafolio público.

## Producción activa

| Campo | Valor |
|-------|-------|
| Repositorio público | `Hacanaval/cv-hugo-canaval` |
| Rama | `main` |
| Hosting | Vercel |
| URL | <https://cv-hugo-canaval.vercel.app/> |
| Runtime | Node.js `22.x` |
| Build | Vite `8.2.2` |
| Router | React Router DOM `7.18.2` |
| Checkpoint anterior | `pre-expediente-producto-2026-08-27` |

## Contenido activo

- Selector inicial de español e inglés.
- Perfil profesional explicado mediante capacidades y evidencia.
- Cuatro casos profesionales sanitizados.
- Formación, cursos, dirección profesional y contacto.
- Órbitas de contacto en el hero y la sección final.
- PDF históricos del CV conservados por compatibilidad.

## Verificación de la entrega

[VERIFIED] Antes de publicar se completaron estas comprobaciones con Node.js 22.15:

- `npm ci`: instalación limpia.
- `npm audit`: cero vulnerabilidades.
- `npm run lint`: cero errores y 15 advertencias heredadas de Fast Refresh.
- `npm run build`: Vite 8.2.2, 1.725 módulos transformados.
- Landing bilingüe, `/home` directo y recarga de la SPA.
- Menú móvil y cambio de idioma.
- Órbitas independientes en `Contactar` y `Hablemos`.
- Selector inferior de Capacidades visible en 390 por 844 píxeles y oculto desde 1024 píxeles.
- Consola sin errores durante las pruebas funcionales.

## Despliegue

Vercel instala con `npm ci`, ejecuta `npm run build` y publica `dist`. La reescritura hacia `index.html` permite abrir y recargar rutas de la SPA. Los archivos bajo `/assets/` usan caché inmutable.

El despliegue se activa automáticamente al hacer push a `main`. La publicación no depende de GitHub Pages ni de un comando local de Vercel.

## Recuperación

Ante una regresión, se debe revertir el commit de producción mediante un nuevo commit y hacer push. No se reescribe el historial remoto. El tag `pre-expediente-producto-2026-08-27` conserva la versión anterior.

## Pendientes

- Revisión visual final de Hugo desde escritorio e iPhone.
- Ajustes visuales menores que surjan de esa revisión.
- Sustitución futura de los PDF históricos cuando se actualice el CV.
- Alineación de CV, LinkedIn y GitHub con la identidad aplicada en la web.
