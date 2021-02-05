import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { firebase } from "../firebase/firebase-config"
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { Spinner } from 'react-bootstrap';

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
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
