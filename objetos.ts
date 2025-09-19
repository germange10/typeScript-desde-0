let hero ={
    name: 'ironman',
    age: 45
}

//hero.age= "hola" //error no puede cambiar el tiopo de dato

//hero.power= 'money' //no se puede modificar el obj pero ni agregar nuevas propiedades

//buscarlo para mas info

// type alias 
type Hero = {
    name: string,
    age: number,
    power?: string //propiedad opcional
}   