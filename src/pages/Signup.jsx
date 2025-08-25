import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../css/Signup.css"

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, email, password);
    navigate("/"); 
  };

  return (
    <div className="signup-page">
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
                type="text"
                id="username"
                placeholder=" "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="form-group">
            <input 
                type="email"
                id="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-group">
            <input 
                type="password"
                id="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <label htmlFor="password">Password</label>
          </div>

          <button type="submit">Sign Up</button>
        </form>

        <div className="switch-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
