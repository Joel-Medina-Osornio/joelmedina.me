# joelmedina.me

Sitio personal de Joel Salvador Medina Osornio — Sr Software Developer.
HTML/CSS/JS estático, sin build step.

## Desarrollo local

```bash
# opción rápida
python3 -m http.server 8000
# abre http://localhost:8000
```

## Deploy en Vercel

### Opción A — Desde la web (más simple)
1. Sube el repo a GitHub.
2. Ve a https://vercel.com/new
3. Importa el repo `joelmedina.me`.
4. Vercel detecta proyecto estático automáticamente:
   - **Framework Preset:** Other
   - **Build Command:** (vacío)
   - **Output Directory:** (vacío — usa la raíz)
   - **Install Command:** (vacío)
5. Click **Deploy**. Listo.

### Opción B — Desde la terminal (Vercel CLI)
```bash
# instalar CLI (una sola vez)
npm i -g vercel

# desde la carpeta del proyecto
cd ~/Documents/projects/joelmedina.me

# primer deploy (preview)
vercel

# deploy a producción
vercel --prod
```

### Dominio personalizado
1. En el dashboard de Vercel → tu proyecto → **Settings → Domains**.
2. Agrega `joelmedina.me` y `www.joelmedina.me`.
3. Vercel te dirá qué registros DNS configurar en tu proveedor (A / CNAME).

## Estructura

```
.
├── index.html                              # markup + contenido
├── styles.css                              # diseño, animaciones, responsive
├── script.js                               # reveal scroll, counters, parallax
├── favicon.svg                             # icono
├── og-image.svg                            # imagen para compartir en redes
├── robots.txt                              # SEO
├── sitemap.xml                             # SEO
├── vercel.json                             # headers, cache, security
├── .vercelignore                           # archivos excluidos del deploy
└── joel-salvador-medina-osornio-cv_EN.pdf  # CV descargable
```

## Qué incluye `vercel.json`
- Headers de seguridad (HSTS, X-Frame-Options, CSP-ready).
- Cache largo (1 año) para assets estáticos.
- `Content-Disposition: attachment` en el PDF del CV para que descargue en vez de abrir.
- `cleanUrls` para URLs sin `.html`.
