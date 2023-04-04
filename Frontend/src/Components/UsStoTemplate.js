import React from 'react';

const UserStoryTemplate = ({
  titles,
  yo_como,
  requiero,
  tal_que,
  importancia,
  complejidad,
}) => {
  return (
    <div>
      <form id="user-form">
        <div className="marco">
          <h2>Historia de usuario</h2>
          <div className="campos-de-texto">
            <div>
              <label>Título:</label>
              <input type="text" value={titles} />
            </div>
          </div>
          <div className="espacios-de-texto">
            <div>
              <label>Yo como:</label>
              <textarea value={yo_como}></textarea>
            </div>
            <div>
              <label>Requiero:</label>
              <textarea value={requiero}></textarea>
            </div>
            <div>
              <label>Tal que:</label>
              <textarea value={tal_que}></textarea>
            </div>
            <div>
              <label>Criterios de aceptación:</label>
              <textarea></textarea>
            </div>
          </div>

          <div className="campos-de-impor-comp">
            <div>
              <label>Importancia:</label>
              <input type="number" value={importancia} />
            </div>
            <div>
              <label>Complejidad:</label>
              <input type="number" value={complejidad} />
            </div>
          </div>

          <div className="buttons">
            <button type="submit">Aceptar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserStoryTemplate;
