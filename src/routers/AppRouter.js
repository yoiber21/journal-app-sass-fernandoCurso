import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { firebase } from "../firebase/firebase-config"
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { Spinner } from 'react-bootstrap';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const AppRouter = () => {

    const [ checking, setChecking ] = useState(true);
    const [ loggedIn, setLoggedIn ] = useState(false);
    const dispatch = useDispatch()

    // Mantener usuario logueado
    useEffect(()=>{
        firebase.auth().onAuthStateChanged( (user)=>{
            // Si existe un uid dispara la accion login
            if( user?.uid ){
                dispatch( login( user.uid, user.displayName ) );
                setLoggedIn( true )
            }else setLoggedIn( false );
            
            setChecking(false)
        } )
    }, [ dispatch,setChecking,setLoggedIn ]);

    if ( checking ) {
        return (
            <span> Espere... <br/> <Spinner animation="grow" variant="success" /></span>
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        loggedIn={  loggedIn }
                    /> 

                    <PrivateRoute
                        exact
                        path="/"
                        component={ JournalScreen }
                        loggedIn={  loggedIn }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
