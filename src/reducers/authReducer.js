import { types } from "../types/types";


// Reducer que simpre reciben el state y el action
const authReducer = ( state = {}, action ) => {
        
    // Action en caso de que sea login va a retornar el uid y name of user
        switch ( action.type ) {
            case types.login:
                return {
                    uid: action.payload.uid,
                    name: action.payload.displayName
                }
                // Si el action es logout restablezco el objeto a vacio
                case types.logout:
                    return {  }
        
            default:
                return state;
        }
}

export default authReducer;

// Despues crear el store que es la fuente unica de informacion
