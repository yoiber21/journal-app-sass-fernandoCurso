import { createStore ,combineReducers, applyMiddleware, compose } from 'redux'
import authReducer from '../reducers/authReducer';

// se necesita ejecutar una accion http para eso instalamos redux-thunk para crear acciones asincronas
import thunk from 'redux-thunk';

/* Este es el store que  contiene todo el árbol de estado de tu aplicación. La única forma de cambiar el estado que contiene es despachando una acción.
El store no es una clase. Es solo un objeto con unos pócos métodos. Para crearlo, pasa tu principal función reductora a createStore. */

//esta funcion recibe simpre un reducer y es reocomendable mandarlo con la funcion combineReducers

// Este reducer es el que se le va a mandar al createStore
const reducers = combineReducers({
     auth: authReducer
})

// Linea para utilizar varios middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// Se recibe el reducer
const store = createStore( 
    reducers,
    // Se agrega esta linea para utilizar redux dev tools y otros middleware, se importa applyMiddleware de redux
    composeEnhancers(
         applyMiddleware( thunk )
    )

 );

export default store;