import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom"; 
import "../css/Login.css"

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);

    if (success) {
      navigate("/");
    } else {
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="auth-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
              {error && <p className="error">{error}</p>}

              <div className="form-group">
                <input
                    type="email"
                    id="email"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="email">Email Address</label>
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

              <button type="submit">Login</button>
          </form>

          <p className="auth-switch">
              Don’t have an account?{" "}
              <Link to="/signup" className="auth-link">
                Sign Up here
              </Link>
          </p>
      </div>
    </div>
  );
}

export default Login;
