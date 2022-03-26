import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { obtenerCodigos } from "../actions/actions";
import "../styles/Form.css"

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

    obtenerCodigos(objeto);
    limpiarFormulario();
  };

  return (
    <div className='form-container'>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            className="input"
            type="number"
            name="cantidadCodigos"
            placeholder="Cantidad de códigos"
            value={codigos}
            onChange={(e) => setCodigos(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
          className="input"
            type="number"
            name="caracteresCodigo"
            placeholder="Caracteres por código"
            value={caracteres}
            onChange={(e) => setCaracteres(e.target.value)}
          />
        </div>
        <div className='form-group'>
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
        <div className="form-group">
          <button className="btn" type="submit" disabled={validarBoton()}>
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
