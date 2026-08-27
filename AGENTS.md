# Contexto público del portafolio Hugo

Este repositorio implementa públicamente la identidad `Product Management · Data Science · AI Builder` como un expediente de producto.

## Alcance público

- Mantener contenido, documentación y assets libres de nombres internos, código privado y datos confidenciales.
- No copiar fuentes privadas de `CV_HACA/docs/` al repositorio público.
- Tratar `CONTENIDO-WEB-ES.md` y `CONTENIDO-WEB-EN.md` como copy visible aprobado.
- Tratar `docs/[P]-Sistema-Visual-Portafolio.md` como fuente de la implementación visual.
- La doctrina completa de identidad y marca permanece fuera de este repositorio.

## Verificación

Usar Node.js 22 y npm:

```sh
npm ci
npm audit
npm run lint
npm run build
```

Antes de publicar, revisar el diff, la privacidad y las rutas `/` y `/home`. Vercel despliega automáticamente los pushes a `main`. No usar force-push; revertir regresiones con un commit nuevo.
