// LoginForm.js
import React, { useState } from 'react';
import '../styles/login-form.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Logging in with:', username, password);
    };

    return (
        <div className="form-container">
            <h2>Se connecter</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Nom d'utilisateur:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Se Connecter</button>
                <div style={{display:'flex', flexDirection:'row', width:'30%', alignContent:"center", justifyContent:"space-between", alignSelf:"center"}}>
                    <p>Pas encore de Compte?</p> <a style={{textDecoration:'none'}} href="/register">         Créer un compte</a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
