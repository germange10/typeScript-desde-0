//vamos a ver desde 0 las diferencias entre js & ts

//que es ts -> es js con una sintaxis para tipos 
//ts es un superset de js que añade tipado estatico

//cosas importantes de ts 
//1. no funciona en tiempos de ejecucion // lo que vamos a llevar al navegador es js plano 
//2. el ts se compila a js

//porque aprender ts
//1.popularidad 
//2. escalabilidad y seguridad (se creo porque js no tenia tipado estatico)


//js es un lenguaje dinamico y debilmente tipado
//let a='hola' //string
//a=2  //number 


//ts es un lenguaje estatico y fuertemente tipado
//va a haber un tipo ya sea inferido o declarado (que no vamos a poder cambiar el tipo de dato)

//inferencia ts es capas de saber que prop tiene un obj y de que tipo son 

//que pasa cuando no puede inferir el tipo ej any

let b; //any
//lo que le estamos diciendo con el any es que ignore el tipado de ts

let anyValue: any='hola' //any 
//anyValue. no aparecen los metodos de string porque any desactiva el tipado estatico

//una buena practica seria en lugar de usar any usar unknown
let unknownValue: unknown='hola' //unknown
//unknownValue.upperCase(); //error

//unknownValue. no aparecen los metodos de string porque unknown desactiva el tipado estatico
//la diferencia entre any y unknown es que con unknown no podemos hacer nada hasta que no hagamos una comprobacion de tipos

//-------------------funciones -------------------

function saludar(nombre: string) {
    console.log(`Hola ${nombre}`);
}

saludar('pepe');
//saludar(2); //error 

//cuando no funciona la inferencia de tipos

function saludar1 ({name , age}){
console.log(`Hola ${name}, tienes ${age} años`);
}

saludar1({name: 30, age: ' pepe'}); //no da error porque no hay tipado
//saludar1({name: 'pepe', age: '30'}); //error
//por la configuracion de vs code da un error 


//---problema de notacion de tipos en objetos

//que es lo que no se puede hacer 

//function saludar1 ({name:string , age:number}){} -> MAL



//forma 1 

function saludar2 ({name, age}: {name: string, age: number}){}

//forma 2  (sacar el name y age fuera)

function saludar3 (persona:{name: string, age: number}){
    const {name, age} = persona;
    console.log(`Hola ${name}, tienes ${age} años`);
}
saludar3({name: 'pepe', age: 30}); //ok