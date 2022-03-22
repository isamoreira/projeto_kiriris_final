import axios from "axios";

const VENDEDOR_API_URL = "https://kiriris.herokuapp.com/vendedor";

class VendedorService {
  getAllVendedores() {
    return axios.get("https://kiriris.herokuapp.com/vendedor/vendedores");
  }

  createVendedor(vendedor) {
    return axios.post("https://kiriris.herokuapp.com/vendedor/vendedor", vendedor);
  }

  getVendedorById(vendedorId) {
    return axios.get(VENDEDOR_API_URL + "/" + vendedorId);
  }

  updateVendedor(vendedorId, vendedor) {
    return axios.put(VENDEDOR_API_URL + "/" + vendedorId, vendedor);
  }

  deleteVendedor(vendedorId) {
    return axios.delete(VENDEDOR_API_URL + "/" + vendedorId);
  }
}

export default new VendedorService();