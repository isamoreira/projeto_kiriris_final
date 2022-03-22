import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CompradorService from "../../../services/CompradorService";
import './compradores.css';



export default function CompradoresCreate() {
  const [nomedaempresa, setNomedaempresa] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const createComprador = (e) => {
    e.preventDefault();

    if (nomedaempresa === "" || nomedaempresa === null) {
      window.alert("Campo não pode estar vazio");

    } else {

      const comprador = { nomedaempresa };

      if (id) {
        CompradorService.updateComprador(id, comprador).then((response) => {
          navigate("/compradores");
        });
      } else {
        CompradorService.createComprador(comprador).then((response) => {
          navigate("/compradores");
        });
      }
    }
  };

  useEffect(() => {
    function getCompradorById() {
      if (id) {
        CompradorService.getCompradorById(id)
          .then((response) => {
            setNomedaempresa(response.data.nomedaempresa);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getCompradorById();
  }, [id]);

  return (
    <div className="container py-3 container-compradores-create">
      <form className="form-crud">
        <fieldset>
          <legend>
            <h3 className="text-center">{id ? "Editar" : "Criar"}</h3>
          </legend>
          <div className="mb-3">

            <input

              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome da empresa"
              value={nomedaempresa}
              onChange={(e) => setNomedaempresa(e.target.value)}
            />

          </div>

          <button
            type="submit"
            className="btn btn-warning"
            onClick={(e) => createComprador(e)}
          >
            Salvar
          </button>
          <Link
            to="/compradores"
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