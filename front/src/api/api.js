import axios from "axios"

const functions = {

    cargarCodigos: async (parametros) => {
        console.log("llamando api")
        const resultados =  await axios.post("http://localhost:8080/random", parametros);
        return resultados.data
    }
}

export default functions;