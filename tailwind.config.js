/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'dancing': ['Dancing Script', 'cursive'],
//         'montserrat': ['Montserrat', 'sans-serif'],
//         'titulo': ['Montserrat', 'sans-serif']
//       },
//       colors: {
//         fondo: '#F2FBFF',
//         bordeLoren: '#E4F7FF',
//         contraste1: '#B8E6FF',
//         contraste2: '#7BCBFF'
//       }
//     }
//   },
//   plugins: []
// }

// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}"  // Patrones de archivos que usan Tailwind
//   ],
//   theme: {
//     extend: {
//       fontFamily: {  // Configuración de fuentes personalizadas
//         dancing: ['"Dancing Script"', 'cursive'],
//         montserrat: ['"Montserrat"', 'sans-serif']
//       },
//       colors: {  // Paleta de colores personalizados
//         fondo: '#F2FBFF',
//         bordeLoren: '#E4F7FF',
//         contraste1: '#B8E6FF',
//         contraste2: '#7BCBFF'
//       }
//     }
//   },
//   plugins: []  // Plugins de Tailwind (vacío por defecto)
// }

// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         dancing: ['Dancing Script', 'cursive'],
//         montserrat: ['Montserrat', 'sans-serif'],
//       },
//       colors: {
//         fondo: '#F2FBFF',
//         bordeLoren: '#E4F7FF',
//         contraste1: '#B8E6FF',
//         contraste2: '#7BCBFF',
//       },
//     },
//   },
//   plugins: [],
// }