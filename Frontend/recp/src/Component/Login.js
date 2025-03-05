import { useState, useContext } from "react";
import { AuthContext } from "../Component/Auth";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = { email };
        login(userData);
        navigate("/");
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="login-btn">Login</button>
                    <p className="signup-link">
                        Not a member? <a href="/signup">Sign up now</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;

