import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: 'igna@ign.com',
        lPassword: '123456'
    });

    const { lEmail, lPassword } = formLoginValues;

    //Todo: validate form
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
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
            </div>
        </div>
    )
}