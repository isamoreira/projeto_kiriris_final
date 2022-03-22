import NavigationBar from '../../components/NavigationBar';
import './style.css';
import { useState, useContext } from "react";
import { AuthContext } from '../../contexts/auth';



const Login = () => {
    //authencticated
    const {login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password });
        login(email, password);
    };

    return (
        <>
            <NavigationBar />
            <div className="login-title">
                <h2>Login</h2>
            </div>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <div className="container-form">
                        <div className="mb-3">
                            <input type="email" className="form-control" id="email"
                            placeholder="admin@kiriris.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            
                            <input type="password" className="form-control" id="password"
                                placeholder="123"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn" id="sb-login">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;