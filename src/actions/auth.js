import { types } from '../types/types'

// Se crean este archivo para manejar cada accion del usuario

// Se retorna la accion login
export const login = ( uid, displayName ) =>({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    
})