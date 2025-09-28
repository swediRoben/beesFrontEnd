import React, { useState, useEffect } from "react";
import { login, logout, getProfile } from "../services/authService";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      await login({ email, password });
      const profile = await getProfile();
      setUser(profile);
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
        setUser(profile);
      } catch {
        setUser(null);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Bienvenue, {user.username}</h2>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <div>
          <h2>Connexion</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Se connecter</button>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
