import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import VendedorService from "../../../services/VendedorService";
import "./vendedores.css";

export default function VendedoresCreate() {
  const [nomevendedor, setNomevendedor] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const createVendedor = (e) => {
    e.preventDefault();

    if (nomevendedor === "" || nomevendedor === null) {
      window.alert("Campo não pode estar vazio");

    } else {
      
      const vendedor = { nomevendedor };

      if (id) {
        VendedorService.updateVendedor(id, vendedor)
          .then((response) => {
            navigate("/vendedores")
          })

      } else {
        VendedorService.createVendedor(vendedor)
          .then((response) => {
            navigate("/vendedores")
          })
      }
    }
  }
  useEffect(() => {
    function getVendedorById() {
      if (id) {
        VendedorService.getVendedorById(id)
          .then((response) => {
            setNomevendedor(response.data.nomevendedor);
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
    getVendedorById()
  }, [id]);

  return (
    <div className="container py-3 container-vendedores-create">
      <form className="form-crud">
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nomevendedor}
              onChange={(e) => setNomevendedor(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => createVendedor(e)}>
            Salvar
          </button>
          <Link
            to="/Vendedores"
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