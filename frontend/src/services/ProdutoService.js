import axios from "axios";



const PRODUTO_API_URL = "https://kiriris.herokuapp.com/produto";


class ProdutoService {
  getAllProdutos() {
    return axios.get("https://kiriris.herokuapp.com/produto/produtos");
  }

  createProduto(produto) {
    return axios.post("https://kiriris.herokuapp.com/produto/produto", produto);
  }

  getProdutoById(produtoId) {
    return axios.get(PRODUTO_API_URL + "/" + produtoId);
  }

  updateProduto(produto, produtoId) {
    return axios.put( PRODUTO_API_URL + "/" + produto, produtoId);
  }

  deleteProduto(produto, produtoId) {
    return axios.delete(PRODUTO_API_URL + "/" + produto, produtoId);
  }
}

export default new ProdutoService();