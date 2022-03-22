import { Link } from "react-router-dom";
import './style.css';
import { FiLogIn } from 'react-icons/fi';

function NavigationBar() {
    return (
        <>
            <div className="container-fluid" id="startsection">

                <nav className="container-fluid navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link to="#" className="navbar-brand"></Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/catalogo"  className="nav-link">Produtos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contato"  className="nav-link">Contato</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login"  className="nav-link"><FiLogIn id="i-login"/>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavigationBar;