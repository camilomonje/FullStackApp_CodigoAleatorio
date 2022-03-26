import { obtenerCodigosExitosamente } from "../actions/actions";

const obtenerCodigosFlujo =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === "OBTENER_CODIGOS") {
      try {
        const respuesta = await api.cargarCodigos(action.payload);
        dispatch(obtenerCodigosExitosamente(respuesta));
      } catch (error) {}
    }
  };

  const middleware = [obtenerCodigosFlujo];
  export default middleware;
