export const obtenerCodigos = (parametros) => ({
  type: "OBTENER_CODIGOS",
  payload: parametros,
});

export const obtenerCodigosExitosamente = (respuesta) => ({
  type: "OBTENER_CODIGOS_EXITOSAMENTE",
  payload: respuesta,
});
