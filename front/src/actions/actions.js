export const obtenerCodigos = (parametros) => {
  console.log("action obtener codigos")
    return {
    type: "OBTENER_CODIGOS",
    payload: parametros,
  };
};

export const obtenerCodigosExitosamente = (respuesta) => ({
  type: "OBTENER_CODIGOS_EXITOSAMENTE",
  payload: respuesta,
});
