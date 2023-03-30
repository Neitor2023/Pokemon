

import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [value, setValue] = useState("")
    
    const tologin = e => {
        if (value === "password") {
            navigate("/about/")
        } else {
            alert("Contraseña incorrecta")
        }
        e.preventDefault()
    }

    return (
        <div>
            <h1>Iniciar seccion</h1>
            <br />
            <form onSubmit={e => tologin(e)}>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type='Submit'></button>
            </form>
        </div>
    );
};

export default Login;