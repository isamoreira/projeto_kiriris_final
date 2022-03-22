import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    
    const navigate = useNavigate();
    const [user, setUser] =  useState(null);


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('use');
        
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const login = (email, password) => {
        console.log("login auth", {email, password});

        const loggedUser = {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));


        //validacao de formulário (valida email e senha)
        if(password === "123" && email === "admin@kiriris.com"){
            setUser({id: "123", email})
            navigate("/crud");
        }else{
            window.alert("Credencias incorretas");
        }

        //validação de campos nulos(senha)
        if(password === "" || password === null){
            window.alert("O campo senha precisa ser preechido");
        }

        setUser({id: "123", email});
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}