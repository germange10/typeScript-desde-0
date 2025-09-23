//forma 1 

function saludar2 ({name, age}: {name: string, age: number}){}

//forma 2  (sacar el name y age fuera)

function saludar3 (persona:{name: string, age: number}){
    const {name, age} = persona;
    console.log(`Hola ${name}, tienes ${age} años`);
}
saludar3({name: 'pepe', age: 30}); //ok


//que otra cosa puede pasar 

//espera recibir un valor de tipos string y number pero solo recibe number


// function saludar4 ({name, age}: {name: string, age: number}) {
//     console.log(`Hola ${name}, tienes ${age} años`);
//     return age
// }

//-----------

// let username : string
// username = saludar4({name: 'pepe', age: 30}); //error


//tiene que coincidir el tipo de dato que devuelve la funcion con el tipo de dato de la variable donde lo guardamos
//para solucionarlo tenemos que poner el tipo de dato que devuelve la funcion (si espera devolver number no peuede devolver string)

// function saludar5 ({name, age}: {name: string, age: number}): number {
//     console.log(`Hola ${name}, tienes ${age} años`);
//     return name
// }

// let username1 : string
// username1 = saludar5({name: 'pepe', age: 30}); //ok

// username1 = saludar4({name: 'pepe', age: 30}); //error



//-------------------funciones flecha (AF)-------------------
const sumar =(a:number , b:number):number =>{
    return a + b
}

//hay otra forma de definir el tipo de dato que devuelve la funcion flecha que no es legible pero es valida
const restar : (a:number , b:number) => number = (a, b) =>{
    return a - b
}

//-------------------funciones anonimas (FA)-------------------
//puede inferir de que tipo se trata por el metodo que le aplicamos

const avengers = ['spiderman', 'ironman', 'hulk']

avengers.forEach(avenger => { // como estamos usando un array de strings infiere que avenger es string 
    console.log(avenger.toUpperCase());
});



