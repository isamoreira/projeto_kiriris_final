import NavigationBar from '../../components/NavigationBar';
import './style.css';
import {AuthContext} from "../../contexts/auth";
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const Crud = () => {
        //authenticated
    const {logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    return (
        <>  
            <NavigationBar/>
            <div className="container-crud">
                <h2>Bem-vindo, admin</h2>
                <br/>
                <br/>
                <div className="links-crud">
                    <Link to="/vendedores"><h5>Cadastrar Vendedores</h5></Link>
                    <br/>
                    <Link to="/compradores"><h5>Cadastrar Compradores</h5></Link>
                    <br/>
                    <Link to="/ProdutosCRUD"><h5>Cadastrar Produtos</h5></Link>
                </div>
                <br/>
                {/*<p>{String(authenticated)}</p>*/}
                <button onClick={handleLogout} className="btn btn-danger" id="btn-lgt">Logout</button>
            </div>      
        </>
    )
}

export default Crud;