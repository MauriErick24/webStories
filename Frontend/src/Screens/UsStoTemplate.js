import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserStoryById } from '../features/apiCalls';


const handleAbort = (e) => {
  e.preventDefault();
  console.log('ABORTED');
}

var usArr = [];


function UserStoryTemplate(id) {

  const [userTitle, setUserTitle] = useState(['']);
  const [userYocomo, setUserYocomo] = useState(['']);
  const [userRequiero, setUserRequiero] = useState(['']);
  const [userTalque, setUserTalque] = useState(['']);
  const [userCriterioA, setUserCriterioA] = useState(['']);
  const [userImportancia, setUserImportancia] = useState();
  const [userComplejidad, setUserComplejidad] = useState();

  function setDefaultState(e) {
    e.preventDefault();
    setUserTitle('');
    setUserYocomo('');
    setUserRequiero('');
    setUserTalque('');
    setUserCriterioA('');
    setUserComplejidad('');
  }

  const search = async (e) => {
    e.preventDefault();
    console.log('e.target', e.target);
    let formatData = new FormData(e.target);
    const dataa = Object.fromEntries(formatData.entries());
    console.log('dataa', dataa.bid);
    try {
      const success = await getUserStoryById(dataa.bid);
      [usArr] = success.data;
      if (success) { console.log('success', success) };
    } catch (e) {
      console.log('error', e);
    }

    setUserTitle(usArr.title);
    setUserYocomo(usArr.yo_como);
    setUserRequiero(usArr.requiero);
    setUserTalque(usArr.tal_que);
    setUserCriterioA(usArr.criterio_aceptacion);
    setUserImportancia(usArr.importancia);
    setUserComplejidad(usArr.complejidad);

  }


  return (
    <div>
      <form id='user-form' onSubmit={search}>
        <label>Buscar por id: </label>
        <input type="text" name='bid' placeholder='Ingrese ID' />
        <button type="submit">Buscar</button>
      </form>
      <form id="user-form" onAbort={handleAbort}>
        <div className="marco">
          <h2>Historia de usuario</h2>
          <div className="campos-de-texto">
            <div>
              <label>Título:</label>
              <input type="text" name='title' value={userTitle}
                onChange={e => setUserTitle(e.target.value)} />
            </div>
          </div>
          <div className="espacios-de-texto">
            <div>
              <label>Yo como:</label>
              <textarea value={userYocomo} name='yo_como' onChange={e => setUserYocomo(e.target.value)}></textarea>
            </div>
            <div>
              <label>Requiero:</label>
              <textarea name='requiero' value={userRequiero} onChange={e => setUserRequiero(e.target.value)}></textarea>
            </div>
            <div>
              <label>Tal que:</label>
              <textarea name='tal_que' value={userTalque} onChange={e => setUserTalque(e.target.value)}></textarea>
            </div>
            <div>
              <label>Criterios de aceptación:</label>
              <textarea name='criterioA' value={userCriterioA}> onChange={e => setUserCriterioA(e.target.value)}</textarea>
            </div>
          </div>

          <div className="campos-de-impor-comp">
            <div>
              <label>Importancia:</label>
              <input name='importancia' type="number" value={userImportancia} onChange={e => setUserImportancia(e.target.value)} />
            </div>
            <div>
              <label>Complejidad:</label>
              <input name='complejidad' type="number" value={userComplejidad} onChange={e => setUserComplejidad(e.target.value)} />
            </div>
          </div>

          <div className="buttons">
            <button type="submit" onClick={setDefaultState}>Aceptar</button>
            <Link to="/newProject">
              <button>Cancelar</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserStoryTemplate;
