# 🚀 Guía de Deployment - CV Hugo Canaval

## ✅ Proyecto Listo para Deploy

Tu proyecto está completamente configurado y listo para ser desplegado. He añadido los archivos de configuración necesarios para 3 plataformas gratuitas.

## 🌟 Opción 1: VERCEL (RECOMENDADA)

### ¿Por qué Vercel?
- ✅ Perfecto para aplicaciones React/Vite
- ✅ Deploy automático desde GitHub
- ✅ CDN global ultra-rápido
- ✅ SSL gratuito
- ✅ 100GB bandwidth/mes gratis

### Pasos para desplegar:

1. **Sube tu código a GitHub** (si no lo has hecho):
   ```bash
   git add .
   git commit -m "Preparado para deployment"
   git push origin main
   ```

2. **Ve a [vercel.com](https://vercel.com)**
3. **Regístrate con GitHub**
4. **Click en "Add New Project"**
5. **Selecciona tu repositorio `cv-hugo-canaval`**
6. **Vercel detectará automáticamente la configuración**
7. **Click en "Deploy"**

🎉 **¡Listo!** Tu sitio estará disponible en: `https://cv-hugo-canaval.vercel.app`

### Configuración automática:
- ✅ Build: `npm run build`
- ✅ Output: `dist/`
- ✅ Redirects para React Router configurados
- ✅ Deploy automático en cada push

---

## 🚀 Opción 2: NETLIFY

### Pasos para desplegar:

1. **Ve a [netlify.com](https://netlify.com)**
2. **Regístrate con GitHub**
3. **Click en "Add new site" → "Import an existing project"**
4. **Conecta GitHub y selecciona tu repositorio**
5. **Configuración de build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Click en "Deploy"**

🎉 **¡Listo!** Tu sitio estará disponible en: `https://tu-nombre.netlify.app`

---

## 📱 Opción 3: GITHUB PAGES

### Pasos para desplegar:

1. **Ve a tu repositorio en GitHub**
2. **Click en "Settings" → "Pages"**
3. **En "Source" selecciona "GitHub Actions"**
4. **Haz push de cualquier cambio para activar el workflow**
5. **Ve a la pestaña "Actions" para ver el progreso**

🎉 **¡Listo!** Tu sitio estará disponible en: `https://tu-usuario.github.io/cv-hugo-canaval`

---

## 🔧 Archivos de Configuración Añadidos

- `vercel.json` - Configuración para Vercel
- `_redirects` - Configuración para Netlify  
- `.github/workflows/deploy.yml` - Workflow para GitHub Pages
- `vite.config.ts` - Optimizado para producción

## 🌐 Dominio Personalizado (Opcional)

Una vez desplegado, puedes conectar tu propio dominio:

### En Vercel:
1. Ve a tu proyecto → Settings → Domains
2. Añade tu dominio personalizado
3. Configura los DNS según las instrucciones

### En Netlify:
1. Ve a Site settings → Domain management
2. Add custom domain
3. Configura los DNS según las instrucciones

## 🚀 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 🔄 Updates Automáticos

Con cualquiera de estas opciones, cada vez que hagas `git push` a la rama `main`, tu sitio se actualizará automáticamente.

---

**¡Tu CV profesional estará online en menos de 5 minutos! 🎉** 