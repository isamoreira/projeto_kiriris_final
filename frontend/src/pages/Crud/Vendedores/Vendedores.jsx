import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VendedorService from "../../../services/VendedorService";
import "./vendedores.css";

export default function Vendedores() {
  const [vendedores, setVendedores] = useState([]);
  const[aviso, setAviso] = useState([]);

  const getAllVendedores = () => {
      setAviso("Carregando...");
      VendedorService.getAllVendedores()
      .then((response) => {
        setVendedores(response.data);
        setAviso("")
      })
      .catch((error) => {
        console.log(error);
        setAviso("")
      });
  };

  useEffect(() => {
    getAllVendedores();
  }, []);

  const deleteVendedor = (vendedorId) => {
    VendedorService.deleteVendedor(vendedorId)
      .then((response) => {
        getAllVendedores();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Algo deu errado");
        }
      });
  };

  return (
    <>
    <div>

 
      <header className="header container-title-c-vendedores">
        <h3 className="container">Cadastrar Vendedores</h3>
      </header>

      <div className="container p-5">
        <Link to="/Vendedores-Create" className="btn btn-primary mb-2">
          Cadastrar
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {vendedores.map((vendedor) => (
                <tr key={vendedor.id_vendedor}>
                  <td>{vendedor.id_vendedor}</td>
                  <td>{vendedor.nomevendedor}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Vendedores-Update/${vendedor.id_vendedor}`}
                      className="btn btn-warning"
                      
                    >
                    <i className="fa fa-pen"></i>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteVendedor(vendedor.id_vendedor)}
                      style={{ marginLeft: "10px" }}
                    >
                    <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {aviso}
        </div>
        <div className="container">
            <Link to="/Crud"><p>Voltar para a página de cadastros</p></Link>
        </div>
      </div>
      </div>
    </>
  );
}