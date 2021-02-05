import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "../../hooks/UseForm";
import { /* login,  */startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { Spinner } from "react-bootstrap";

export const LoginScreen = () => {

    // Este useDispatch lo que hace es darle acceso al dispatch, hacer dispatch de acciones
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        email: 'yoiber@gmail.com',
        password: '123456'
    })

    const { email, password } = formValues;
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        
        // Se le envia la accion al dispatch
        dispatch( startLoginEmailPassword(email, password));
    }

    const handleInputGoogleLogin =()=>{
        dispatch( startGoogleLogin() );
    }
    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={(e)=>handleSubmit(e) }>

            { loading ?  ( <div className="text-center"><span> loading... <br /> <Spinner className="text-center bg-success"  animation="grow" />  </span></div> ): null }

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={(e)=>handleInputChange(e)  }
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={(e)=>handleInputChange(e)  }
                    className="auth__input"
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={ ()=>handleInputGoogleLogin() }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>
                
            </form>
        </>
    )
}
