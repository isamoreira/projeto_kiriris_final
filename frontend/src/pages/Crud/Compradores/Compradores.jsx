import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CompradorService from "../../../services/CompradorService";

export default function Compradores() {
    const [compradores, setCompradores] = useState([]);
    const[aviso, setAviso] = useState([]);

    const getAllCompradores = () => {

            setAviso("Carregando...");
            CompradorService.getAllCompradores()
            .then((response) => {
                setCompradores(response.data);
                setAviso("")
            })
            .catch((error) => {
                console.log(error);
                setAviso("")
            });
    };

    useEffect(() => {
        getAllCompradores();
    }, []);

    const deleteComprador = (compradorId) => {
        CompradorService.deleteComprador(compradorId)
            .then((response) => {
                getAllCompradores();
            })
            .catch((error) => {
                console.log(error);
                const { data } = error.response;
                if (data.status === 500) {
                    alert("Erro na API");
                }
            });
    };

    return (
        <>
            <header className="header container-title-c-compradores">
                <h3 className="container">Cadastro comprador</h3>
            </header>

            <div className="container py-3">
                <Link to="/compradores-create" className="btn btn-primary mb-2">
                    Cadastrar
                </Link>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome da Empresa</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {compradores.map((comprador) => (
                                <tr key={comprador.comprador_id}>
                                    <td>{comprador.comprador_id}</td>
                                    <td>{comprador.nomedaempresa}</td>
                                    <td className="d-flex">
                                        <Link
                                            to={`/compradores-update/${comprador.comprador_id}`}
                                            className="btn btn-warning"
                                        >
                                        <i className="fa fa-pen"></i>
                                        </Link>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteComprador(comprador.comprador_id)}
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
                <Link to="/Crud"><p>Voltar para a página de cadastros</p></Link>
            </div>

        </>
    );
}