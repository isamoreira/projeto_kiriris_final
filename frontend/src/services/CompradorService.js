
import axios from "axios";

const COMPRADOR_API_URL = "https://kiriris.herokuapp.com/comprador";

class CompradorService {
  getAllCompradores() {
    return axios.get("https://kiriris.herokuapp.com/comprador/compradores");
  }

  createComprador(comprador) {
    return axios.post("https://kiriris.herokuapp.com/comprador/comprador", comprador);
  }

  getCompradorById(compradorId) {
    return axios.get(COMPRADOR_API_URL + "/" + compradorId);
  }

  updateComprador(compradorId, comprador) {
    return axios.put(COMPRADOR_API_URL + "/" + compradorId, comprador);
  }

  deleteComprador(compradorId) {
    return axios.delete(COMPRADOR_API_URL + "/" + compradorId);
  }
}

export default new CompradorService();