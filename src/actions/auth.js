import Swal from "sweetalert2";
import { types } from "../types/types"
import  { firebase, googleAuthProvider}  from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";

// se necesita ejecutar una accion http para eso instalamos redux-thunk para crear acciones asincronas
// Se crean este archivo para manejar cada accion del usuario



// Funcion asincrona y funcion que dispara otra funcion si es asincrona y/o hace peticiones http
export const startLoginEmailPassword = ( email, password ) =>{

    // Regresa un callback
    return ( dispatch )=>{
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then(async({ user })=>{
                dispatch(finishLoading())
                dispatch( login(user.uid, user.displayName));
            }).catch(err => {
                dispatch(finishLoading())
                Swal.fire('Error', err.message, 'error')
                console.log(err)
            })
       
    }
}

// Función para el registro por google
export const startRegisterWithLoginEmailPassword = ( email, password, name ) =>{
    return( dispatch )=>{
        dispatch(startLoading())
        firebase.auth().createUserWithEmailAndPassword( email, password )  
        .then( async({ user }) => {
            dispatch(finishLoading())
            await user.updateProfile( { displayName: name } );
            console.log(user);
           
        } ).catch(err => {
            dispatch(finishLoading())
            Swal.fire('Error', err.message, 'error')
            console.log(err)
        });
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
    
});


// Cerrar sesión firebase
export const startLogout = () =>{
    return  async( dispatch ) =>{
        await firebase.auth().signOut()

        dispatch( logout() );
    }
}

const logout = () =>({
    type: types.logout
})
