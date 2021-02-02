import { types } from "../types/types"
// se necesita ejecutar una accion http para eso instalamos redux-thunk para crear acciones asincronas
// Se crean este archivo para manejar cada accion del usuario



// Funcion asincrona y funcion que dispara otra funcion si es asincrona y/o hace peticiones http
export const startLoginEmailPassword = ( email, password ) =>{

    // Regresa un callback
    return ( dispatch )=>{
        setTimeout(() => { 
            dispatch( login(123243, 'Yoiber'));
        }, 3000);
    }
}


// Se retorna la accion login
export const login = ( uid, displayName ) =>({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    
})