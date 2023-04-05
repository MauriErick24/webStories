import React from "react";


const Notas = () => {

  return (
    <div>
      <h2>Escriba su nota</h2>
      <div className="textarea">
      <textarea
        cols={30}
        rows={10}
        placeholder="ingrese su nota"
      ></textarea>
      </div>
      

      <div className="buttons">
                <button type="submit">Guardar Nota</button>
              </div>
    </div>
  );
};

  export default Notas;
  