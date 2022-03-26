import React, { useState } from "react";

const Form = () => {
  const [codigos, setCodigos] = useState();
  const [caracteres, setCaracteres] = useState();
  const [esNumericos, setEsNumericos] = useState(true);
  const [esMayusculas, setEsMayusculas] = useState(false);
  const [esMinusculas, setEsMinusculas] = useState(false);

  const validarBoton = () => {
    return !(esNumericos || esMayusculas || esMinusculas);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    var objeto = {
      cantidadDeCaracteres : caracteres,
      cantidadDeCodigos: codigos,
      numeric : esNumericos,
      upperCase : esMayusculas,
      lowerCase : esMinusculas,
    };
    console.log(objeto);
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

export default Form;
