import axios from "axios"

const functions = {

    cargarCodigos: async (parametros) => {
        console.log("llamando la api")
        return await axios.post("http://localhost:8080/random", parametros);
    }
}

export default functions;