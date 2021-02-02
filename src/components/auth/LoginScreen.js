import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useForm } from "../../hooks/UseForm";
import { /* login,  */startLoginEmailPassword } from "../../actions/auth";

export const LoginScreen = () => {

    // Este useDispatch lo que hace es darle acceso al dispatch, hacer dispatch de acciones
    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: 'yoiber@gmail.com',
        password: 123456
    })

    const { email, password } = formValues;

    const handleSubmit = (e)=> {
        e.preventDefault();
        
        // Se le envia la accion al dispatch
        dispatch( startLoginEmailPassword(email, password));
    }
    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={(e)=>handleSubmit(e) }>

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
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
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
