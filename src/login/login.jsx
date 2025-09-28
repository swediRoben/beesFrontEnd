import React, { useState, useEffect } from "react"; 
 import "./login.css"
 import toast from 'react-hot-toast'
 import { useNavigate } from 'react-router-dom';
 import { Link } from "react-router-dom";
 import  {login, logout, getProfile} from '../services/userServices'; 

function Login () {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
 
  const handleLogin = async () => {
    try {
      await login({ email, password });
      toast.success("login succes",{style:{backgroundColor:"green",color:'white',fontWeight:'bold'}})  
      navigate("/welcome")
    } catch (err) {
      console.log(err)
      toast.error("feild to login",{style:{backgroundColor:"red",color:'white',fontWeight:'bold'}})  
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
 <div className="login-container">
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
      <div>
          <button onClick={handleLogin}>Se connecter</button>
          <Link to="/signup">SignUp</Link> 
      </div>
    </div>
  )}
</div>
  )
};

export default Login;
