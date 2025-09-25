//aca comienza la explicacion de gentleman programming


//shape (forma de algo) (mientras se cumpla el contrato de la interfaz, no importa como este implementado)

class Persona {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

interface PersonaInterface {
  name: string;
  getName(): string;
  setName(name: string): void;
}

//copiamos lo de arriba con otro name de clase

class Persona2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

interface PersonaInterface {
  name: string;
  getName(): string;
  setName(name: string): void;
}


//que va a pasar si cambiamos el PersonaInterface por Persona 2 
//antes -> let personaPosible: PersonaInterface = persona;
//despues -> let personaPosible: Persona2 = persona;
//no va a tirar error, porque la forma de Persona y Persona2 es la misma
//esto es gentleman programming, no importa la implementacion, sino que cumpla con el contrato de la interfaz

const persona: Persona = new Persona("juan");
let personaPosible: Persona2 = persona;


//entonces en resumen las clases que creemos siempre deben cumplir con una interfaz
//y si queremos cambiar la implementacion de una clase, no importa, siempre y cuando cumpla con la interfaz
//esto es gentleman programming

//una buena featurepodria ser... 


const persona3 = {
  name: "alan", //si elimino esto, tira error porque no cumple con la interfaz
  getName(): any {
    return this.name;
  },
  setName(name: string): void {
    this.name = name;
  },
};

const sendData = (persona: PersonaInterface): void => {
  console.log(persona.getName());
};

sendData(persona3);


//transpilar -> pasar de un lenguiage de alto nivel a otro de alto nivel / ts -> js
//compilar -> pasar de un lenguiage de alto nivel a uno de bajo nivel (casi entendible por la maquina)

//cosas curiosas 

const a=1 //me dice que es 1 , no nombre porque es una constante

let b=2 //me dice que es number, porque puede cambiar

//incluso puede inferir cosas mas complejas 

const PersonaX ={
    name :'german',
    age:28,

}


//ejemplo problematico 


const arregloDeValores = [
  {
    numero: 1,
    label: "Valor 1",
  },
  {
    numero: 2,
  },
];

const metodo = (param: typeof arregloDeValores): void => {
  const indexArray = [1, 2];

  indexArray.forEach((index: number): void => {
    const value=param[index]
    if (value.label) {
      console.log(value.label); //esto deberia decir string o undef
    }
  });
};


//cambiamos el 

//param[index].label -> const value=param[index] y value.label


//existen 2 forema de hacer un diccionario (normal y enum )

//esto es una constante con una shape
//tiene tipos primitivos como string o number 
const NI ={
    ARG: 'pasaporte',
    ES: 'nie'
}

//lo vamos a usar para tipado
//es de tipo enum 
enum NIENUM {
    ARG = 'pasaporte',
    ES='nie'
}

const dni =NIENUM.ARG







//type es una palabra reservada que nos permite crear tipos personalizados 

type ARG =string //alias 

//si el dia de ma;ana quiero que arg sea number lo unico que hago es cambiar el string de arriba por number y en todos los lugares
//donde use arg pasaria a ser un number 



//diferencia entre union e intersection 

type A = string | number
//son los elementos que se comparten entre string y number 
type B = string & number
//son los elementos que se suman entre string y number 


interface Alumno {
  name : string ,
  nota:number
}

interface Profesor{
  name:string,
  legajo:string
}

type AlumnoUProfesor = Alumno | Profesor

type AlumnoYProfesor = Alumno & Profesor



const personaa :AlumnoUProfesor={
  name:'juan',
  nota:10
}

personaa //sabe si esto es prof o alumno dependiendo de las propiedades de arriba 
         //si tiene name y nota -> alumno si name y legajo -> profesor


//lo que va a pasar aca es que no nos va a dejar trabajar con la prop nota ya que el metodo puede ser alumno o prof en en el caso de 
//que sea profesor no va a existir nota alguna , solo nos va a dejar trabajar con lo seguro que para el ej es name 

const metodo1 =(personaa:AlumnoUProfesor):void=>{
//personaa.nota -> tira un error 
//personaa.legajo -> tira un error 
//personaa.name -> funciona ya que es algo comun 
}

//si hacemos lo mismo pero para el metodo con & lo que va a pasar es que va a funcionar para todos los casos

const metodo2 =(personaa:AlumnoYProfesor):void=>{
personaa.legajo //funciona
personaa.name //funciona
personaa.nota //funciona
}


//unknown vs any

//obligas a que te digan que es antes de utilizarlo 
let numero :unknown=1

//type assertion 

const texto : string = numero as string


//otro caso 

let text : unknown

const method =(text:unknown): 0 | undefined => {
  if(Array(text)){
    return (text as []).length
  }
}


//importancia de as const 

//que tipo de dato tiene 

let myArray : number[] = [1,2,3,4,5] // number[]

//con esa logica 

let myArrayS : string[] = ['rojo','amarillo','verde'] //string[]

let myArrayS1  = ['rojo','amarillo','verde'] as const // read only [rojo, amarillo, verde]

let myArrayS2  = ['rojo','amarillo','verde',1] // number | string 

let myArrayS3  = ['rojo','amarillo','verde',1] as const // read [only rojo, amarillo, verde,1]

function obtenerConfiguracion(){
  return{
    modo:'prod',
    version:'1.0',
    opciones: {
      depuracion : false,
    },
  } as const
}// va a devolver exactamente esa configuracion

const configuracion = obtenerConfiguracion();
//configuracion.opciones.depuracion=true no me va a dejar modificarlo (me va a tirar un error)


//generico 

const metodoW = <T> (x:T) : T => x;

const y = metodoW<number> ( 1);
const z = metodoW<string> ('1');

interface saludar <T> {
  saludar(x:T):string
}

const personaQ :saludar<string>={
  saludar(x:string) {
      return `hola ${x}`
  },

}

const personaQ2 :saludar<number>={
  saludar(x:number) {
      return `hola ${x}`
  },

}

//functional overloading () /lo que te permite es si recibe un string devuelve un tipo dist a string

// functional overloading

interface Persona {
    name: string;
    saludar(x: string): string;
}

interface Perro {
    raza: string;
    saludar(x: number): number;
}

function metodoStringONumber(x: Persona): string; //si me pasás una Persona, te devuelvo un string
function metodoStringONumber(x: Perro): number;//si me pasás un Perro, te devuelvo un number
function metodoStringONumber(x: Persona | Perro): string | number {
    if ("raza" in x) {
        return x.saludar( 1);
    }


if ('name' in x) {
    return x.saludar('1'); 
}

return x;

}

//otra cosa 

enum claves {
  name ='name',
  raza ='raza'
}

type algo ={
  [key in claves]:string
}

//hagamos un tipo que dependa de una property para el resultado de una function 

type Dependant <T extends {property:any}> = T['property']

type Independant = {
  property: number;
}

const dependant : Dependant<Independant>=1 // funciona 
//const dependant : Dependant<Independant>='1' // tira un error  

//explicacion 
// 👉 Esto significa:

// T es un tipo genérico que obligatoriamente tiene una propiedad llamada property.

// Dependant<T> no es todo T, sino específicamente el tipo de la propiedad property dentro de T.

// 📌 T['property'] es un lookup type → es como acceder al tipo de un campo dentro de un objeto.

// Dependant<Independant> equivale a Independant["property"].

// Como Independant["property"] es number, entonces:

// ✨ En resumen

// Dependant<T> siempre “hereda” el tipo de la propiedad property de T


//dado el caso de que quiera juntar 2 enums y usar el valor de las propiedades (considerar dejar la droga)

enum Numbers1 {
    "NUMBER1" = "number1",
    "NUMBER2" = "number2",
}

enum Numbers2 {
    "NUMBER3" = "number3",
}

const myNumbers = { ...Numbers1, ...Numbers2 } as const; //juntamos con spread operator
const mixValues = Object.values(myNumbers);

type MixNumbers = (typeof mixValues)[number];

type Enums = {
    [key in MixNumbers]: any;
};

//explicacion 

//spread operator
// {
//   NUMBER1: "number1",
//   NUMBER2: "number2",
//   NUMBER3: "number3"
// }

//Obtener los valores del objeto

//const mixValues = Object.values(myNumbers);


//Object.values(myNumbers) devuelve un array de valores:

//["number1", "number2", "number3"]

//4. Definir un type con esos valores

//type MixNumbers = (typeof mixValues)[number];


// typeof mixValues → es el tipo de ese array (string[]).

// [number] → significa "el tipo de cualquiera de los elementos del array".

// Resultado:

//type MixNumbers = "number1" | "number2" | "number3";

//✅ En resumen: este patrón sirve para convertir enums en un objeto tipado dinámicamente, 
//y luego derivar un type que asegura que las claves siempre correspondan a los valores
//  reales de los enums.