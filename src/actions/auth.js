import { types } from "../types/types"
import  { firebase, googleAuthProvider}  from "../firebase/firebase-config";
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



// Funcion para auth de google

export const startGoogleLogin = ()=>{
    // Como es una tarea asincrona se devuelve return
    return ( dispatch )=>{
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch( 
                    login( user.uid, user.displayName )
                 )
            } )
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