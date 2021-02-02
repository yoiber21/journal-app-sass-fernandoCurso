import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/UseForm';

export const RegisterScreen = () => {


    const [ formValues, handleInputChange, /* reset */ ] = useForm({
        name: 'Yoiber Beitar',
        email: 'yoiber@gmail.com',
        password: 123456,
        password2: 123456
    })
    const { name, email, password, password2 }= formValues;
    const handleRegister = e =>{
        e.preventDefault();
        // reset();
    }

    const isValidForm =()=>{
        
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ (e)=>handleRegister(e) }>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    className="auth__input"
                    onChange={ (e)=>handleInputChange(e) }
                    autoComplete="off"
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    className="auth__input"
                    onChange={ (e)=>handleInputChange(e) }
                    autoComplete="off"
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    className="auth__input"
                    onChange={ (e)=>handleInputChange(e) }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={ password2 }
                    className="auth__input"
                    onChange={ (e)=>handleInputChange(e) }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
