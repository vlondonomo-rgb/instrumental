# 🔪 Ahorcado Quirúrgico 🧵

Juego de estudio tipo **ahorcado + memofichas** para memorizar **instrumental quirúrgico** y **patrones de sutura** mirando fotografías.

## 🎮 Cómo jugar

1. Abre **`index.html`** en tu navegador (doble clic, no necesita internet ni instalar nada).
2. Elige una sección:
   - 🔧 **Instrumental quirúrgico** — organizado por función (Corte, Disección, Hemostasia, Campo, Separadores, Sutura, Agarre).
   - 🧵 **Patrones de sutura**.
3. Mira la **foto**, adivina el nombre **letra por letra**.
4. Al acertar, la ficha **gira** 🔄 y te muestra **¿para qué sirve?**.
5. Pulsa **Siguiente** hasta terminar el mazo y ver tu puntaje.

Puedes usar el teclado físico o el teclado en pantalla. Tienes 6 vidas por palabra ❤️.

## 📷 Agregar las fotos reales

El juego funciona **sin fotos** (muestra la pista y un recuadro "Foto pendiente").
Para ver las fotos reales, coloca cada imagen en la carpeta **`imagenes/`** con el nombre
exacto indicado en [`imagenes/COMO-SUBIR-FOTOS.txt`](imagenes/COMO-SUBIR-FOTOS.txt).

Ejemplos: `metzembaum.jpg`, `kelly.jpg`, `gelpi.jpg`, `p_lembert.jpg`…

## 📁 Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | El juego completo (interfaz + lógica). |
| `datos.js` | Base de datos: nombres, pistas y funciones de cada elemento. |
| `imagenes/` | Carpeta donde van las fotografías. |

## ✏️ Editar el contenido

Para cambiar nombres, pistas o descripciones, edita `datos.js`.
Para agregar un instrumento o patrón nuevo, copia un bloque existente y rellénalo.
