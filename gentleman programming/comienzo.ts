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


//que tipo de dato tiene 

let myArray : number[] = [1,2,3,4,5] // number[]

//con esa logica 

let myArrayS : string[] = ['rojo','amarillo','verde'] // read only rojo, amarillo, verde