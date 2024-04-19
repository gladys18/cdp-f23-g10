// RegisterForm.js
import React, { useState } from 'react';
import '../styles/login-form.css';

const RegisterForm = () => {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [userAddress, setUserAddress] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userCountry, setUserCountry] = useState('')
    const [userCity, setUserCity] = useState('')

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your register logic here
        console.log('Registering with:', newUsername, newPassword);
    };

    return (
        <div className="form-container">
            <h2>Créer un compte</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="new-username">Nom d'utilisateur:</label>
                    <input
                        type="text"
                        id="new-username"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userEmail">Addresse Email:</label>
                    <input
                        type="text"
                        id="userEmail"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="new-useraddress">Addresse:</label>
                    <input
                        type="text"
                        id="new-useraddress"
                        value={userAddress}
                        onChange={(e) => setUserAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="new-usercountry">Pays:</label>
                    <input
                        type="text"
                        id="new-usercountry"
                        value={userCountry}
                        onChange={(e) => setUserCountry(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="new-usercity">Ville:</label>
                    <input
                        type="text"
                        id="new-usercity"
                        value={userCity}
                        onChange={(e) => setUserCity(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="new-password">Mot de passe:</label>
                    <input
                        type="password"
                        id="new-password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Créer un compte</button>
                <div style={{display:'flex', flexDirection:'row', width:'30%', alignContent:"center", justifyContent:"space-between", alignSelf:"center"}}>
                    <p>Vous avez déjà un compte?</p> <a style={{textDecoration:'none'}} href="/login">         Connectez-vous</a>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
