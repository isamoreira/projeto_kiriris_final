import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProdutoService from "../../../services/ProdutoService";
import VendedorService from "../../../services/VendedorService";
import CompradorService from "../../../services/CompradorService";
import "./produtos.css";


export default function Create() {
  const [nomeproduto, setNomeproduto] = useState('');
  const [tipoproduto, setTipoproduto] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [vendedor, setVendedor] = useState({ id_vendedor: "", nomevendedor: "" });
  const [comprador, setComprador] = useState({ comprador_id: "", nomedaempresa: "" });
  const [vendedores, setVendedores] = useState([]);
  const [compradores, setCompradores] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getAllCompradores = () => {
    CompradorService.getAllCompradores()
      .then((response) => {
        setCompradores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllCompradores();
  }, []);

  const getAllVendedores = () => {
    VendedorService.getAllVendedores()
      .then((response) => {
        setVendedores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllVendedores();
  }, []);

  const createProduto = (e) => {
    e.preventDefault();
    
      const produto = { nomeproduto, tipoproduto, valor, quantidade, vendedor, comprador };
      console.log(produto)

      if (id) {
        ProdutoService.updateProduto(id, produto).then((response) => {
          navigate("/produtosCRUD");
        });
      } else {
        
        ProdutoService.createProduto(produto)
          .then(response => {
            console.log('Produto adicionado', response.data);
            navigate("/ProdutosCRUD");
          })
          .catch(error => {
            console.log('Algo deu errado', error);
          })
      }
    }
  
  useEffect(() => {
    function getProdutoById() {
      if (id) {
        ProdutoService.getProdutoById(id)
          .then((response) => {
            setNomeproduto(response.data.nomeproduto);
            setTipoproduto(response.data.tipoproduto);
            setValor(response.data.valor);
            setQuantidade(response.data.quantidade);
            setVendedor({
              id_vendedor: response.data.vendedor.id_vendedor,
              nomevendedor: response.data.vendedor.nomevendedor,
            });
            setComprador({
              comprador_id: response.data.comprador.comprador_id,
              nomedaempresa: response.data.comprador.nomedaempresa,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getProdutoById();
  }, [id]);

  return (
    <div className="container py-3">
      <form className="form-crud">
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome do produto
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nomeproduto}
              onChange={(e) => setNomeproduto(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Tipo" className="form-label">
              Tipo
            </label>
            <input
              type="text"
              id="Tipo"
              className="form-control"
              placeholder="Tipo"
              value={tipoproduto}
              onChange={(e) => setTipoproduto(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Valor" className="form-label">
              Valor
            </label>
            <input
              type="text"
              id="Valor"
              className="form-control"
              placeholder="Valor"
              value={valor}
              onChange={(e) => setValor(Number.parseFloat(e.target.value))}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Quantidade" className="form-label">
              Quantidade
            </label>
            <input
              type="text"
              id="Quantidade"
              className="form-control"
              placeholder="Quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(Number.parseInt(e.target.value))}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="VendedorId_vendedor" className="form-label">
              Vendedor
            </label>
            <select
              id="VendedorId_vendedor"
              name="VendedorId_vendedor"
              className="form-select"
              onChange={(e) =>
                setVendedor({ id_vendedor: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? vendedor.nomevendedor : 'Escolha um vendedor'}</option>
              {vendedores.map((vendedor) => (
                <option key={vendedor.id_vendedor} value={vendedor.id_vendedor}>
                  {vendedor.nomevendedor}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Comprador" className="form-label">
              Comprador
            </label>
            <select
              id="Comprador"
              name="Comprador"
              className="form-select"
              onChange={(e) =>
                setComprador({ comprador_id: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? comprador.nomedaempresa : 'Escolha um comprador'}</option>
              {compradores.map((comprador) => (
                <option key={comprador.comprador_id} value={comprador.comprador_id}>
                  {comprador.nomedaempresa}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => createProduto(e)}
          >
            Enviar
          </button>
          <Link
            to="/ProdutosCRUD"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}