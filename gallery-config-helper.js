// ========================================
// HELPER: GALLERY CONFIGURATION
// ========================================
// Este archivo te ayuda a configurar la galería con todas tus fotos y videos
// Copia este código y reemplaza la sección de mediaItems en script.js

const mediaItems = [
    // ===== FOTOS (39 en total) =====
    // Primera foto - destacada (cuando empezaron)
    { type: 'image', src: 'assets/images/foto1.jpg' },

    // Resto de fotos (añade las 38 restantes)
    { type: 'image', src: 'assets/images/foto2.jpg' },
    { type: 'image', src: 'assets/images/foto3.jpg' },
    { type: 'image', src: 'assets/images/foto4.jpg' },
    { type: 'image', src: 'assets/images/foto5.jpg' },
    { type: 'image', src: 'assets/images/foto6.jpg' },
    { type: 'image', src: 'assets/images/foto7.jpg' },
    { type: 'image', src: 'assets/images/foto8.jpg' },
    { type: 'image', src: 'assets/images/foto9.jpg' },
    { type: 'image', src: 'assets/images/foto10.jpg' },
    { type: 'image', src: 'assets/images/foto11.jpg' },
    { type: 'image', src: 'assets/images/foto12.jpg' },
    { type: 'image', src: 'assets/images/foto13.jpg' },
    { type: 'image', src: 'assets/images/foto14.jpg' },
    { type: 'image', src: 'assets/images/foto15.jpg' },
    { type: 'image', src: 'assets/images/foto16.jpg' },
    { type: 'image', src: 'assets/images/foto17.jpg' },
    { type: 'image', src: 'assets/images/foto18.jpg' },
    { type: 'image', src: 'assets/images/foto19.jpg' },
    { type: 'image', src: 'assets/images/foto20.jpg' },
    { type: 'image', src: 'assets/images/foto21.jpg' },
    { type: 'image', src: 'assets/images/foto22.jpg' },
    { type: 'image', src: 'assets/images/foto23.jpg' },
    { type: 'image', src: 'assets/images/foto24.jpg' },
    { type: 'image', src: 'assets/images/foto25.jpg' },
    { type: 'image', src: 'assets/images/foto26.jpg' },
    { type: 'image', src: 'assets/images/foto27.jpg' },
    { type: 'image', src: 'assets/images/foto28.jpg' },
    { type: 'image', src: 'assets/images/foto29.jpg' },
    { type: 'image', src: 'assets/images/foto30.jpg' },
    { type: 'image', src: 'assets/images/foto31.jpg' },
    { type: 'image', src: 'assets/images/foto32.jpg' },
    { type: 'image', src: 'assets/images/foto33.jpg' },
    { type: 'image', src: 'assets/images/foto34.jpg' },
    { type: 'image', src: 'assets/images/foto35.jpg' },
    { type: 'image', src: 'assets/images/foto36.jpg' },
    { type: 'image', src: 'assets/images/foto37.jpg' },
    { type: 'image', src: 'assets/images/foto38.jpg' },
    { type: 'image', src: 'assets/images/foto39.jpg' },

    // ===== VIDEOS (14 en total) =====
    { type: 'video', src: 'assets/videos/video1.mp4' },
    { type: 'video', src: 'assets/videos/video2.mp4' },
    { type: 'video', src: 'assets/videos/video3.mp4' },
    { type: 'video', src: 'assets/videos/video4.mp4' },
    { type: 'video', src: 'assets/videos/video5.mp4' },
    { type: 'video', src: 'assets/videos/video6.mp4' },
    { type: 'video', src: 'assets/videos/video7.mp4' },
    { type: 'video', src: 'assets/videos/video8.mp4' },
    { type: 'video', src: 'assets/videos/video9.mp4' },
    { type: 'video', src: 'assets/videos/video10.mp4' },
    { type: 'video', src: 'assets/videos/video11.mp4' },
    { type: 'video', src: 'assets/videos/video12.mp4' },
    { type: 'video', src: 'assets/videos/video13.mp4' },
    { type: 'video', src: 'assets/videos/video14.mp4' },
];

// ========================================
// INSTRUCCIONES
// ========================================
/*
1. Guarda tus fotos en assets/images/ con los nombres:
   - foto1.jpg (la primera, cuando empezaron - IMPORTANTE)
   - foto2.jpg, foto3.jpg, ... hasta foto39.jpg

2. Guarda tus videos en assets/videos/ con los nombres:
   - video1.mp4, video2.mp4, ... hasta video14.mp4

3. Si tus archivos tienen otros nombres, puedes:
   - OPCIÓN A: Renombrarlos según el patrón anterior
   - OPCIÓN B: Cambiar los nombres en este array

4. Si tus fotos están en otro formato (PNG, JPEG, etc.):
   - Cambia la extensión en el array (.jpg → .png)
   - O convierte las fotos a JPG (recomendado para web)

5. Para mezclar fotos y videos en orden diferente:
   - Reorganiza las líneas del array como prefieras
   - Ejemplo: puedes poner videos entre fotos

6. Una vez configurado, copia TODO el array mediaItems
   y reemplázalo en script.js (línea ~140)

EJEMPLO DE PERSONALIZACIÓN:
Si quieres alternar fotos y videos:

const mediaItems = [
    { type: 'image', src: 'assets/images/foto1.jpg' },
    { type: 'video', src: 'assets/videos/video1.mp4' },
    { type: 'image', src: 'assets/images/foto2.jpg' },
    { type: 'video', src: 'assets/videos/video2.mp4' },
    // ... y así sucesivamente
];
*/
