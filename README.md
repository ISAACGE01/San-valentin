# Página Web de San Valentín para Pilar - README

## 📝 Descripción
Página web romántica y moderna creada especialmente para Pilar en San Valentín 2026. Incluye múltiples secciones interactivas con animaciones, efectos visuales impresionantes y contenido multimedia.

## 🎯 Características
- ✨ Diseño moderno con glassmorphism y gradientes animados
- 💕 Corazones flotantes en el fondo
- 🎵 Música de fondo ("Tu refugio" de Pablo Alborán)
- ⏱️ Contador regresivo hasta el 14 de febrero 2026
- 🖼️ Galería de fotos y videos con carrusel 3D
- 📖 Carta romántica con efecto de libro
- 🎟️ Invitación oficial tipo ticket
- 📱 Totalmente responsive (móvil y desktop)

## 📁 Estructura de Archivos
```
san-valentin/
├── index.html          # Estructura principal
├── styles.css          # Estilos y animaciones
├── script.js           # Interactividad
├── README.md           # Este archivo
└── assets/
    ├── music/
    │   └── tu-refugio.mp3    # Música de fondo
    ├── images/
    │   ├── foto1.jpg         # Primera foto (destacada)
    │   ├── foto2.jpg
    │   └── ...               # 39 fotos en total
    └── videos/
        ├── video1.mp4
        └── ...               # 14 videos en total
```

## 🚀 Instrucciones de Uso

### 1. Agregar Contenido Multimedia

#### Música:
1. Descarga "Tu refugio" de Pablo Alborán en formato MP3
2. Guárdala en `assets/music/tu-refugio.mp3`

#### Fotos:
1. Coloca tus 39 fotos en la carpeta `assets/images/`
2. Nómbralas como `foto1.jpeg`, `foto2.jpeg`, etc.
3. La primera foto (`foto1.jpeg`) debe ser la foto de cuando empezaron
4. **IMPORTANTE**: Las fotos deben estar en formato JPEG

#### Videos:
1. Coloca tus 14 videos en la carpeta `assets/videos/`
2. Nómbralos como `video1.mp4`, `video2.mp4`, etc.
3. Formato: MP4 (H.264 recomendado para mejor compatibilidad)
4. **Nota**: La mayoría de los MP4 son compatibles. Si algún video no se reproduce, puedes convertirlo con herramientas gratuitas como HandBrake

### 2. Actualizar la Galería en JavaScript

Abre `script.js` y busca la sección de `mediaItems` (línea ~140). Actualiza el array con todas tus fotos y videos:

```javascript
const mediaItems = [
    { type: 'image', src: 'assets/images/foto1.jpg' },
    { type: 'image', src: 'assets/images/foto2.jpg' },
    // ... añade las 39 fotos
    { type: 'video', src: 'assets/videos/video1.mp4' },
    { type: 'video', src: 'assets/videos/video2.mp4' },
    // ... añade los 14 videos
];
```

### 3. Probar Localmente

1. Abre `index.html` en tu navegador web
2. Navega por todas las secciones
3. Verifica que todas las fotos y videos cargan correctamente
4. Prueba en móvil (usa las herramientas de desarrollador del navegador)

### 4. Subir a GitHub Pages

#### Opción A: Usando GitHub Desktop (Más Fácil)
1. Descarga e instala [GitHub Desktop](https://desktop.github.com/)
2. Crea un nuevo repositorio llamado `para-pilar`
3. Arrastra toda la carpeta `san valentin` al repositorio
4. Haz commit y push
5. Ve a Settings → Pages → Source: main branch
6. Tu página estará en: `https://[tu-usuario].github.io/para-pilar/`

#### Opción B: Usando Git en Terminal
```bash
cd "C:\Users\Usuario\Desktop\san valentin"
git init
git add .
git commit -m "Página de San Valentín para Pilar"
git branch -M main
git remote add origin https://github.com/[tu-usuario]/para-pilar.git
git push -u origin main
```

Luego activa GitHub Pages en la configuración del repositorio.

## ⚠️ Consideraciones Importantes

### Tamaño de Archivos
- GitHub tiene un límite de 100MB por archivo
- Optimiza las fotos antes de subirlas (usa herramientas como TinyPNG)
- Los videos deben ser cortos (< 40 segundos como mencionaste)

### Música Autoplay
- Algunos navegadores bloquean la reproducción automática
- Si no suena automáticamente, Pilar puede hacer clic en el botón de música (esquina inferior derecha)

### Compatibilidad
- Funciona en Chrome, Firefox, Safari, Edge
- Optimizado para móvil (iOS y Android)

## 🎨 Personalización Adicional

### Cambiar Colores
Edita las variables CSS en `styles.css` (líneas 10-20):
```css
:root {
    --primary-color: #ff6b9d;
    --secondary-color: #c44569;
    /* ... más colores */
}
```

### Cambiar Fuentes
Las fuentes actuales son:
- Playfair Display (títulos)
- Poppins (texto general)
- Dancing Script (firma)

Para cambiar, edita el enlace de Google Fonts en `index.html`.

### Modificar Textos
Todos los textos están en `index.html`. Busca y reemplaza según necesites.

## 📱 Compartir con Pilar

Una vez subido a GitHub Pages:
1. Copia el enlace: `https://[tu-usuario].github.io/para-pilar/`
2. Puedes acortar el enlace con [Bitly](https://bitly.com/) o similar
3. Envíaselo a Pilar el 14 de febrero 🎉

## 💡 Tips Finales

- **Prueba todo antes del 14**: No dejes nada para el último momento
- **Haz backup**: Guarda una copia de todos los archivos
- **Comparte en privado**: Asegúrate de que el repositorio sea público para GitHub Pages, pero no compartas el enlace hasta el día especial
- **Añade un favicon**: Puedes añadir un corazón como icono de la pestaña

## ❤️ ¡Disfruta!

Esta página fue hecha con mucho amor. Espero que Pilar la disfrute tanto como tú disfrutaste creándola.

---

**Creado con amor para Pilar** 💕
**Por Isaac** ❤️
**San Valentín 2026** 🌹
