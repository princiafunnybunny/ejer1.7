//Nuestra primera linea en JS
//alert('Hola Mundo');

//  Variables 
// Para declarar una variable usamos la palabra reservada de var / let / const y le damos un nombre y lo igualamos a un valor
var numeroA = 10;
var numeroB = 20;
var resultado = numeroA + numeroB;


// Para mostrar en la consola vamos a hacer uso del console.log ()
//console.log(resultado);

// Vamos a concatenar texto 
var textoA = 'Cris';
var textoB = 'Gil';

// Consoleamos textoA + textoB y le agregamos un espacio
//console.log(textoA + ' ' + textoB);

// Consoleamos textoA + numeroA y nos devulve Cris10
//console.log (textoA + numeroA);

// * Tipos de datos en Js
/*
- Number = 1/35/155/49 ...
- String = 'hola', "hola", `hola`
- Booleanos = true, false 
- Undefined = algo no definido
- Null = vacio 
- Funciones 
- Objetos 
- Arrays
*/

// Ejemplo con template strings ``
// Vamos a usar las variables que tenemos de textoA y textoB 
//console.log('La pelicula es: ' + textoA + ' ' + textoB );
//console.log(`La Pelicula es: ${textoA} ${textoB}`);

// Podemos reasignar valores a las variables 
var nombre = 'Nelson';
//console.log(nombre);
nombre = 'Pepito';
//console.log(nombre);

// Var let const

// Var lo podemos volver a declar con el mismo nombre y asignar un nuevo valor 
var tipoVar = 'Hola soy var';
// console.log(tipoVar)
var tipoVar = 'hola soy un var redeclarado'
// console.log(tipoVar)

// let 
let tipoLet = 'Hola soy let';
//* No puedo volver a declararla con el mismo nombre 
// let tipoLet = 'Hola soy le redeclarado no puedo';

// * Lo que podemos hacer es reasignar su valor 
tipoLet = 'Hola soy let reasignado';
//console.log(tipoLet);

// !Ejemplo
const nombreConst = 'Nelson';
let edad = 27;

// Const
const tipoConst = 'Hola soy const';
// * No podemos volver a declararla con el mismo nombre 
// const tipoConst = 'Hola soy const redeclarado, no puedo'
// * No podemos reasignar su valor 
// tipoConst = 'Hola, no podemos reasignar su valor';
// console.log(tipoConst);

// * Operadores 
/*
+ = sumar 
- = resta 
* = multiplicacion 
/ = division 
** = calcular la base a la potencia del exponente
% = modulo , nos da el resto 
++ = incrementar, suma 1 
-- = decrementador, resta 1 
*/ 

let numeritoUno = 10;
let numeritoDos = 5;

// suma
// console.log(numeritoUno + numeritoDos);
// resta 
// console.log(numeritoUno - numeritoDos);
// multiplicacion 
// console.log(numeritoUno * numeritoDos);
// division 
// console.log(numeritoUno / numeritoDos);
// potencia 
// console.log(numeritoUno ** numeritoDos);
// resto
// console.log(numeritoUno % numeritoDos);
// incrementar, le incrementamos 1 y despues lo consoleamos 
// numeritoUno++;
// console.log(numeritoUno);
// decrementar, le decrementamos 1 y despues consoleamos 
// numeritoDos--;
// console.log(numeritoDos);

// * Operadores de comparacion 
/*
== ==> compara valores
=== ==> compara los valores y el tipo de dato 
!= ==> diferentes valores 
!== ==> diferentes valores y diferente tipo de dato 
> ==> mayor que 
< ==> menor que 
>= ==> mayor o igual
<= ==> menor o igual

&& = y - and 
|| = 0 - or
*/

// console.log(5 == 5); devuelve true
// console.log (5 == '5'); devuelve true 
// console.log(5 === '5'); devuelve false 

// Como sabemos que tipos de datos estamos manejando?
// Podemos usar el typeof
// console.log(typeof 5);
// console.log(typeof '5');
// console.log(typeof true);
// console.log(typeof 5.3);


// Prompt 
// prompt('hola, como te llamas?') // Abre el cuadro de dialogo que nos pide un dato
// Nosotros queremos guardar ese dato para consolearlo, entonces lo guardamos en una variable 
// let dato = prompt('hola, como te llamas?');
// Al guardar una variable dato va a valer lo que le escribamos en el prompt
// Consoleamos
// console.log(dato);




