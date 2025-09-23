//sirve para ver si algo tiene una forma especifica

type Hexadecimal = `#${string}`
const color1: Hexadecimal = '#ff0000' //ok
const color2: Hexadecimal = 'ff0000' //error no tiene el formato correcto ( le falta el # al inicio)

//recorda que los tipos son estructuras de datos que no existen en js
//no existen en tiempo de ejecucion

//lo que hacemos es decir quye puede ser cualquiera de estas cadenas de texto

type HeroPowerScale = 'local' | 'planetary' | 'universal' | 'multiversal' 


//otro caso 

let aaaaa : string | number //puede ser string o number
aaaaa= 'hola'
aaaaa= 123
//aaaaa= true //error (no espera boolean)

//puede ir mas lejos y usar valores literales
let bbbb : 'hola' | 'mundo' | 123 //puede ser string o number
bbbb= 'hola'
bbbb= 'mundo'
bbbb= 123
//bbbb= true //error (no espera boolean)
//bbbb= 'adios' //error (no espera otro string que no sea hola o mundo) 