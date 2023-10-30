console.log('test')

//todo ITERACIÓN 1

// !- [ ] 1.- Dado el objeto **empleados**, extrae la empleada Ana completa.
const empleados = [
  { name: 'Luis', email: 'Luis@gmail.com' },
  { name: 'Ana', email: 'Ana@gmail.com' },
  { name: 'Andrea', email: 'Andrea@gmail.com' },
]

const [, n] = empleados
console.log(n)

//!- [ ] 2.- Dado el objeto **empleados**, extrae el email del empleado Luis --> Luis@gmail.com
const [{ email }] = empleados
console.log(email)

//! - [ ] 3.- Usa destructuración para cambiar los valores de a y b;

// Inicialmente
let a = 5
let b = 3
// Al final
// let a = 3;
// let b = 5;
;[a, b] = [b, a]

console.log(a, b)
// console.log(b)

//!- [ ] 4.- Dado el objeto **HIGH_TEMPERATURES**

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
}

// !  Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES

console.log(maximaHoy)
console.log(maximaManana)
