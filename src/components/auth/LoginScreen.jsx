import React, { useEffect, useState } from 'react';
import './login.css';

export const LoginScreen = () => {
    useEffect(() => {
        document.getElementById('register').style.display = 'none';
    }, [])    
 
    const ingresarForm = () => {
        document.getElementById('login').style.display = 'block';
        document.getElementById('register').style.display = 'none';
    }
    
    const registrarForm = () => {
        document.getElementById('register').style.display = 'block';
        document.getElementById('login').style.display = 'none';
    }

    return (
        <div className="container login-container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 login-form-1" id='login'>
                    <h3>Ingreso</h3>
                    <form>
                        <div className="form-group my-4">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group my-4">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group my-4 d-flex justify-content-center">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                        <div className="form-group my-4 d-flex justify-content-center">
                            <a className='change-form' onClick={registrarForm}>Eres nuevo aquí?</a>
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2" id='register'>
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group my-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group my-4">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group my-4">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group my-4">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                            />
                        </div>

                        <div className="form-group my-4 d-flex justify-content-center">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                        <div className="form-group my-4 d-flex justify-content-center">
                            <a className='change-form' style={{ color:'white' }} onClick={ingresarForm}>Ya tienes una cuenta?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}