import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Contato from './pages/Contato';
import Crud from './pages/Crud';
import Home from './pages/Home';
import Login from './pages/Login';
import Catalogo from './pages/Catalogo';



import { AuthProvider } from './contexts/auth';

import VendedoresCreate from './pages/Crud/Vendedores/VendedoresCreate';
import Vendedores from './pages/Crud/Vendedores/Vendedores';
import Compradores from './pages/Crud/Compradores/Compradores';
import CompradoresCreate from './pages/Crud/Compradores/CompradoresCreate';
import ProdutosCreate from './pages/Crud/Produtos/ProdutosCreate';
import ProdutosCRUD from './pages/Crud/Produtos/Produtos';
import Parceiros from './pages/Parceiros';
import Vaquinha from './pages/Vaquinha';




const AppRoutes = () => {

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/parceiros" element={< Parceiros/>} />
                    <Route path="/vaquinha" element={< Vaquinha/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/crud" element={<Crud />} />
                    <Route path="/vendedores" element={<Vendedores />} />
                    <Route path="/Vendedores-Create" element={<VendedoresCreate />} />
                    <Route path="/Vendedores-Update/:id" element={<VendedoresCreate />} />
                    <Route path="/compradores" element={<Compradores />} />
                    <Route path="/compradores-create" element={<CompradoresCreate />} />
                    <Route path="/compradores-update/:id" element={<CompradoresCreate />} />
                    <Route path="/ProdutosCRUD" element={<ProdutosCRUD />} />
                    <Route path="/Produtos-Update/:id" element={<ProdutosCreate />} />
                    <Route path="/Produtos-create" element={<ProdutosCreate />} />
                </Routes>
            </AuthProvider>

            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;