import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {
  
    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ] = useForm( {
        lEmail: 'igna@ign.com',
        lPassword: '123456'
    } );

    const [ formRegisterValues, handleRegisterInputChange ] = useForm( {
        rName: 'Ignacio',
        rEmail: 'ign@ign.com',
        rPassword: '123456',
        rPassword2: '123456',

    } );

    const { lEmail, lPassword } = formLoginValues;
    const { rName,
            rEmail,
            rPassword,
            rPassword2, } = formRegisterValues;

    //Todo: validate form
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
    }

    //Todo: validate form
    const handleRegister = (e) => {
        e.preventDefault();
        if(rPassword !== rPassword2){
            console.log('Passwords do not match');
            Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
            return;
        }
        dispatch(startRegister({name: rName, password: rPassword, email: rEmail}));
    }

    return (
        <div className="login-container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group my-4">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='lEmail'
                                value={lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group my-4">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='lPassword'
                                value={lPassword}
                                onChange={handleLoginInputChange}
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
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group my-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='rName'
                                value={rName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group my-4">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='rEmail'
                                value={rEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group my-4">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='rPassword'
                                value={rPassword}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group my-4">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name='rPassword2'
                                value={rPassword2}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group my-4 d-flex justify-content-center">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                        <div className="form-group my-4 d-flex justify-content-center">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}