import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { obtenerCodigos } from "../actions/actions";

const Form = ({ obtenerCodigos }) => {
  const [codigos, setCodigos] = useState();
  const [caracteres, setCaracteres] = useState();
  const [esNumericos, setEsNumericos] = useState(true);
  const [esMayusculas, setEsMayusculas] = useState(false);
  const [esMinusculas, setEsMinusculas] = useState(false);

  const validarBoton = () => {
    return !(esNumericos || esMayusculas || esMinusculas);
  };

  const limpiarFormulario = () => {
    setCodigos("");
    setCaracteres("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    var objeto = {
      caracteres: caracteres,
      cantidadDeCodigos: codigos,
      numeric: esNumericos,
      upperCase: esMayusculas,
      lowerCase: esMinusculas,
    };

    console.log(objeto);
    obtenerCodigos(objeto);
    limpiarFormulario();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="cantidadCodigos"
            placeholder="Cantidad de códigos"
            onChange={(e) => setCodigos(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="caracteresCodigo"
            placeholder="Caracteres por código"
            onChange={(e) => setCaracteres(e.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="numeric"
              defaultChecked={esNumericos}
              onChange={() => setEsNumericos(!esNumericos)}
            />
            Numerico
          </label>
          <label>
            <input
              type="checkbox"
              name="upperCase"
              defaultChecked={esMayusculas}
              onChange={() => setEsMayusculas(!esMayusculas)}
            />
            Mayusculas
          </label>
          <label>
            <input
              type="checkbox"
              name="lowerCase"
              defaultChecked={esMinusculas}
              onChange={() => setEsMinusculas(!esMinusculas)}
            />
            Minusculas
          </label>
        </div>
        <div>
          <button type="submit" disabled={validarBoton()}>
            Generar codigos
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      obtenerCodigos,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Form);
