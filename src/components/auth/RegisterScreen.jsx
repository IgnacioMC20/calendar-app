import React from 'react'
import Swal from 'sweetalert2';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        rName: 'Ignacio',
        rEmail: 'ign@ign.com',
        rPassword: '123456',
        rPassword2: '123456',
    });

    const { rName,
        rEmail,
        rPassword,
        rPassword2, } = formRegisterValues;

    //Todo: validate form
    const handleRegister = (e) => {
        e.preventDefault();
        if (rPassword !== rPassword2) {
            console.log('Passwords do not match');
            Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
            return;
        }
        dispatch(startRegister({ name: rName, password: rPassword, email: rEmail }));
    }

    return (
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
    )
}
