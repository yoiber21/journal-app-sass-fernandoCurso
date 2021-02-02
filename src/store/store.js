import { createStore ,combineReducers } from 'redux'
import authReducer from '../reducers/authReducer';

/* Este es el store que  contiene todo el árbol de estado de tu aplicación. La única forma de cambiar el estado que contiene es despachando una acción.
El store no es una clase. Es solo un objeto con unos pócos métodos. Para crearlo, pasa tu principal función reductora a createStore. */

//esta funcion recibe simpre un reducer y es reocomendable mandarlo con la funcion combineReducers

// Este reducer es el que se le va a mandar al createStore
const reducers = combineReducers({
     auth: authReducer
})
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Se recibe el reducer
const store = createStore( 
    reducers,
    // Se agrega esta linea para utilizar redux dev tools
    devTools

 );

export default store;