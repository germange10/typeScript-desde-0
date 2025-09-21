//no existen los enums en js 
//como se hace en js

function comoSeHariaEnJS() {

const ERROR_TYPES = {
  NOT_FOUND: 'NOT_FOUND',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
};

function mostrarError(errorType: string) {
  if (errorType === ERROR_TYPES.NOT_FOUND) {
    console.log('No encontrado');
  } else if (errorType === ERROR_TYPES.UNAUTHORIZED) {
    console.log('No autorizado');
  } else if (errorType === ERROR_TYPES.FORBIDDEN) {
    console.log('Prohibido');
  } else {
    console.log('Error desconocido');
  }}

}





//en ts tenemos los enums
//depende de como se hagan podemos usarlos en tienpo de ejecucion o no

//para que se pueden usar los enums?
//para un a coleccion de datos finitos

//Enum numérico: útil si necesitás mapear internamente a códigos, o si querés usar el objeto tanto por nombre como por índice.

enum ERROR_TYPES  {
  NOT_FOUND, // 0
  UNAUTHORIZED, // 1
  FORBIDDEN // 2
};

//preguntas 
//es correcto tipar al parametro de la funcion con el nombre del enum? ¡Sí, es 100% correcto tipar así el parámetro!✅
//esta función solo acepta valores que pertenezcan al enum ERROR_TYPES


function mostrarError(errorType: ERROR_TYPES) {
  if (errorType === ERROR_TYPES.NOT_FOUND) {
    console.log('No encontrado');
  } else if (errorType === ERROR_TYPES.UNAUTHORIZED) {
    console.log('No autorizado');
  } else if (errorType === ERROR_TYPES.FORBIDDEN) {
    console.log('Prohibido');
  } else {
    console.log('Error desconocido');
  }}



//la opcion 2 creo que seria 

//Enum string: mejor para logs, mensajes al usuario, serialización a JSON, etc.
enum ERROR_TYPES_2  {
  NOT_FOUND='No encontrado',
  UNAUTHORIZED='No autorizado',
  FORBIDDEN='Prohibido'
};

function mostrarError2(errorType: ERROR_TYPES_2) {
  if (errorType === ERROR_TYPES_2.NOT_FOUND) {
    console.log(`${ERROR_TYPES_2.NOT_FOUND}`);
  } else if (errorType === ERROR_TYPES_2.UNAUTHORIZED) {
    console.log(`${ERROR_TYPES_2.UNAUTHORIZED}`);
  } else if (errorType === ERROR_TYPES_2.FORBIDDEN) {
    console.log(`${ERROR_TYPES_2.FORBIDDEN}`);
  } else {
    console.log('Error desconocido');
  }}