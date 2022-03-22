import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProdutoService from "../../../services/ProdutoService";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const[aviso, setAviso] = useState([]);


  const getAllProdutos = () => {
      setAviso("Carregando...");
      ProdutoService.getAllProdutos()
      .then((response) => {
        setProdutos(response.data);
        setAviso("")
      })
      .catch((error) => {
        console.log(error);
        setAviso("")
      });
  };

  useEffect(() => {
    getAllProdutos();
  }, []);

  const deleteProduto = (produtoId) => {
    ProdutoService.deleteProduto(produtoId)
      .then((response) => {
        getAllProdutos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header className="header container-title-c-produtos">
        <h3 className="container">Cadastro Produto</h3>
      </header>
      <div className="container py-3">
        <Link to="/Produtos-create" className="btn btn-primary mb-2">
          Cadastrar
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome do Produto</th>
                <th>Tipo do Produto</th>
                <th>Valor</th>
                <th>Quantidade</th>
                <th>Comprador</th>
                <th>Vendedor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id_produto}>
                  <td>{produto.id_produto}</td>
                  <td>{produto.nomeproduto}</td>
                  <td>{produto.tipoproduto}</td>
                  <td>{produto.valor}</td>
                  <td>{produto.quantidade}</td>
                  <td>
                    {produto.comprador.nomedaempresa}
                  </td>
                  <td>{produto.vendedor.nomevendedor}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Produtos-Update/${produto.id_produto}`}
                      className="btn btn-warning"
                    >
                      <i className="fa fa-pen"></i>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduto(produto.id_produto)}
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
        <br/>
        <Link to="/Crud"><p>Voltar para a página de cadastros</p></Link>
      </div>
    </>
  );
}