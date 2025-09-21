//hasta ahora el contrato de los obj era algo asi

type HeroX ={
    id : number,
    name: string,
    age: number,
    power?: string //propiedad opcional
}

const hero3: HeroX ={
    id: 1,
    name: 'ironman',
    age: 45
}


//pero tambien podemos usar interfaces 
//lo que tenemos con esto es la forma del objeto no el obj en si


interface HeroZ {
    id : number,
    name: string,
    age: number,
    power?: string //propiedad opcional
}

//pueden haber interfaces anidadas

interface producto {
    id: number,
    name: string,
    price: number,
    quantity: number
    
}

//los products del carrito van a a ser un array de la  interfaz producto

interface CarritoDeCompras {
    id: number,
    userId: number,
    products: (producto | zapatiillas)[] // acepta ambos
} 



const carrito: CarritoDeCompras ={
    id: 1,
    userId: 1,
    products: [
        {
            id: 1,
            name: 'producto 1',
            price: 100,
            quantity: 2,
            talla: 42,
            color: 'rojo'
        },
        {
            id: 2,
            name: 'producto 2',
            price: 200,
            quantity: 1
        }
    ]
}

//tambien podriamos extender interfaces (solo hay que agregar la propiedad nueva)
//en el caso de que queramos hacer una interfaz que herede de producto (va a haber que agregar las propiedades de producto)

interface zapatiillas extends producto {
    talla: number,
    color: string,
    
}

//como creamos funciones en interfaces o metodos

//fortma 1

interface carritoOps {
    add (product: producto | zapatiillas): void, //no devuelve nada
    remove (productId: number): void
    clear(): void
}


//forma 2
interface carritoOps2 {
    add: (product: producto | zapatiillas) => void, //no devuelve nada
    remove: (productId: number) => void
    clear: () => void
}

//cual es el issue con las interfaces ?

//se extienen automaticamente

//si tenemos una interfaz llamada A y en otro archivo otra interfaz llamada A
//las dos se van a unir en una sola interfaz A con todas las propiedades de ambas ej...

interface A {
    prop1: string
}

interface A {
    prop2: number
}
//ahora A tiene prop1 y prop2

//esto puede ser util en algunos casos pero en otros no
//si queremos evitar esto podemos usar type alias

const ops : A = {
    prop1: 'hola',
    prop2: 123
} 


//cosa que no pasa con los type alias

//type alias no se pueden extender automaticamente
//si tenemos un type alias A y en otro archivo otro type alias A
//nos va a dar error ej...

// type B = {
//     prop1: string
// } 
// type B = {
//     prop2: number
// }
//nos va a dar error porque no se pueden extender automaticamente


//por todo lo que vimos en este archivo si tuvieras que elegir entre type alias e interfaces
//cual elegir? 
//los mas optimo por lo general es usar type alias ya que permiten mas cosas

//cosas que no se pueden hacer con interfaces

type HeroId = `hero-${number}-hero${string}` //template literal types

type HeroY = {
    id : HeroId,
    name: string,
    age: number,
    power?: string //propiedad opcional
}

//entonces un tipo ciertas caracteristicas distintivas 

//1.No podés escribir type Zapatilla extends Producto {} porque la palabra clave extends no existe para type, solo para interface.

//2.en lugar de eso, podés hacer type nuevo = existente & { propiedades nuevas } para crear un nuevo type que combine las propiedades de ambos.
    
// Zapatilla = Producto & { talla: number; color: string; };
