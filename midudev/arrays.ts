//esto lo puede tomar como un array de never
//porque no tiene ningun elemento y no sabe de que tipo son los elementos
const languages=[]
languages.push("TypeScript") 

//si queremos que infiera el tipo de dato tenemos que inicializarlo con un tipo de dato
const languages1: string[] =[]
languages1.push("TypeScript") 
//languages1.push(123) //error

//otra forma de definir un array <tipo de dato> 
const languages2: Array<string> =[]
languages2.push("TypeScript") 
//languages2.push(123) //error

//si quiciera que sea un array de varios tipos de datos
const languages3: (string | number)[] =[]
languages3.push("TypeScript") 
languages3.push(123) //ok


//tuplas
//es un array con una cantidad fija de elementos y con tipos de datos fijos

//caso del tateti con tuplas

type CellValue = 'X' | 'O' | ''
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard : GameBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', '']
]