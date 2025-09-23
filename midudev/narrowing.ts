//que es narrowing?

//es ir pendiendo los tipos de datos a medida que avanza el codigo
//es decir ir reduciendo los tipos de datos



//formas de hacer narrowing en TypeScript

interface mario {
    company: 'nintendo', //literal type //podira poner string pero asi es mas especifico
    name: string,
    age: number,
    isPlumber: boolean,
    saltar (): void
}

interface sonic {
    company: 'sega', //literal type //podria poner string pero asi es mas especifico
    name: string,
    age: number,
    isBlue: boolean,
    correr (): void

}

type Personaje = mario | sonic //union type







function jugar  (personaje: Personaje){
    console.log(personaje.name) //aqui solo sabe que es un personaje
    //pero no sabe si es mario o sonic
    // si intento console.log(personaje.saltar) //error no sabe si es mario o sonic (por eso lo se;ala como un error)
    //tengo que hacer un narrowing para que sepa de que tipo es personaje

    if(personaje.company === 'nintendo'){ //si es nintendo es mario
        //aqui ya sabe que es mario
        console.log(personaje.saltar) //ok
    }
    if(personaje.company === 'sega'){ //si es sega es sonic
        //aqui ya sabe que es sonic
        console.log(personaje.correr) //ok
    }
}


//que pasaria si no tengo la company para hacer el narrowing?

//type guard
//es una funcion que devuelve un booleano
//y que le dice a TypeScript de que tipo es el parametro que recibe

function esMario (personaje: Personaje): personaje is mario { //la parte de personaje is mario es lo que hace el narrowing
    return typeof (personaje as mario).saltar === 'function'
}

//la funcion de arriba de jugar la podemos dejar asi ahora
function jugar1  (personaje: Personaje){
    if (esMario(personaje)){ //si es mario
        //aqui ya sabe que es mario
        personaje.saltar() //ok
    }
}

//lo optimo seria evitar los typeguard 



//si queremos hacerlo en codigo js 

class Avenger {
//aca podemos tipar las propiedades
  readonly name: string
  powerScore: number
  wonBattles: number = 0  //propiedad con valor por defecto
  //para que sea privada
  //#wonBattles: number = 0 //propiedad privada con # (solo se puede usar dentro de la clase)

  constructor(name: string, powerScore: number) {
    this.name = name      // La propiedad 'name' no existe en el tipo 'Avenger'.
    this.powerScore = powerScore   // La propiedad 'powerScore' no existe en el tipo 'Avenger'.
  }

  get fullName() {
    return `${this.name}, de poder ${this.powerScore}` 
    // La propiedad 'name' no existe en el tipo 'Avenger'
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower   // La propiedad 'powerScore' no existe en el tipo 'Avenger'.
    } else {
      throw new Error('Power score cannot be more than 100')
    }
  }
}

//ahora puedo hacer 

const avenger = new Avenger('spiderman', 85)

avenger.name //ok
avenger.powerScore //ok
avenger.fullName //ok
avenger.power = 90 //ok
//problema (una vez que digo readonly name no puedo cambiar el nombre del avenger)
//avenger.name='ironman' //ok //podria cambiar el nombre del avenger //para evitar esto podemos usar readonly //ahora me da error


//como puedo hacer que una prtopiedad sea privada?

//forma 1 -> usando # en todos los lados que aparece la propiedad



//forma 2 con private (solo se puede usar dentro de la clase)


//forma 3 con protected (solo se puede usar dentro de la clase y en las clases que heredan de esta clase)


//solo lo voy a mencionar para no volver el codigo muy largo 

//consoulta futura (https://youtu.be/L1ZSk-vPVKI?t=5042)


//lo que se puede hacer es crear una interfaz que implemente la clase avenger




  interface supervillain {
  name: string
  powerScore: number
  wonBattles: number
  battle :(enemy : Avenger , win : boolean) => void
}

class supervillain implements supervillain {
 
  constructor(name: string, powerScore: number , wonBattles: number) {
    this.name = name      
    this.powerScore = powerScore   
    this.wonBattles = wonBattles
  }

  

  get fullName() {
    return `${this.name}, de poder ${this.powerScore}` 
    // La propiedad 'name' no existe en el tipo 'Avenger'
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower   
    } else {
      throw new Error('Power score cannot be more than 100')
    }
  }
}


//una buena practica seria exportar la interfaz y la clase en archivos separados
//y en el archivo de la clase importo la interfaz y la implemento en la clase  
//y en el archivo de la interfaz importo la clase y la uso para tipar los parametros de las funciones que la usen
//de esta forma si cambio la clase no tengo que cambiar la interfaz y viceversa
//y en el archivo principal importo la interfaz y la clase y las uso para tipar los parametros de las funciones que las usen
//y si quiero usar la clase sin la interfaz puedo hacerlo tambien

//entonces por convencion se suele crear un archivo de la forma 
//types.d.ts o interfaces.ts

//para usar la interfaz en otro archivo tengo que importarla

//import { supervillain } from './types.d.ts'


//asi es como deberia hacerse de forma optima (https://youtu.be/L1ZSk-vPVKI?t=5458)