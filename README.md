# AL-FIX — Web Corporativa

Web oficial de **AL-FIX Puertas Automáticas y Carpintería**, construida con HTML/CSS/JS puro y publicada en GitHub Pages.

🌐 **Web en vivo:** [elenacastan-maker.github.io/alfix-web](https://elenacastan-maker.github.io/alfix-web)

---

## Estructura del proyecto

```
alfix-web/
├── index.html                  # Página principal
├── politica-privacidad.html    # Aviso legal, privacidad y cookies
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos globales (paleta, layout, responsive)
│   ├── js/
│   │   └── main.js             # Menú mobile, formulario, banner cookies
│   └── img/
│       ├── logo.png            # Logo AL-FIX
│       ├── trabajo-1.jpg       # Portfolio: puerta seccional marrón
│       └── trabajo-2.jpg       # Portfolio: puerta seccional antracita
└── README.md
```

---

## Secciones

| Sección | Descripción |
|---|---|
| **Hero** | Portada con eslogan, CTA a presupuesto y teléfono |
| **Sobre nosotros** | Texto SEO con servicios y propuesta de valor |
| **Servicios** | 4 tarjetas: puertas automáticas, automatización, carpintería metálica, mantenimiento |
| **Portfolio** | 2 fotos de trabajos reales |
| **Reseñas** | 4 reseñas verificadas de Google Maps |
| **Contacto** | Datos, WhatsApp, mapa y formulario de presupuesto |

---

## Paleta de marca

| Color | Hex | Uso |
|---|---|---|
| Azul AL-FIX | `#29ABE2` | Acentos, CTAs, links |
| Marino | `#3D4A5C` | Textos, fondos, hero |
| Blanco | `#FFFFFF` | Fondo principal |

---

## Funcionalidades

- Responsive mobile-first
- Menú hamburguesa en móvil
- Botón flotante de WhatsApp
- Formulario de presupuesto con apertura automática de email
- Banner de cookies con persistencia en `localStorage`
- Schema.org `LocalBusiness` para SEO local
- Meta description y OG tags optimizados

---

## Contacto del negocio

📞 [623 353 750](tel:623353750)
✉️ [alfixreparaciones@gmail.com](mailto:alfixreparaciones@gmail.com)
📍 [Ver en Google Maps](https://maps.app.goo.gl/YycMByynhzMeESqc8)

---

## Cómo añadir fotos al portfolio

1. Guarda la foto en `assets/img/` con nombre `trabajo-N.jpg`
2. Añade un bloque `<figure>` en la sección `#galeria` de `index.html`
3. Haz commit y push — GitHub Pages lo publica automáticamente

---

## Publicación

La web se publica automáticamente en GitHub Pages desde la rama `main`.
Cualquier `git push` a `main` actualiza la web en 1-2 minutos.
