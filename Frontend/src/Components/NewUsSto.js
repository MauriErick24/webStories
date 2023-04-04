import React, {useEffect, useState} from 'react';
import {addUserStory} from '../features/apiCalls';

const NewUserStory = () => {
    const [story, setStory] = useState('');

    useEffect(() => {
        if (story) {
            addUserStory(story);
            setStory('');
        }
    }, [story]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target);
        let formData = new FormData(e.target);
        const dataa = Object.fromEntries(formData.entries());
        console.log(dataa);
        try{
            const success =  await addUserStory(dataa);
            if(success) {console.log(success)}
        }catch(e){
            console.log(e);
        }
    };

    return (
        <div>
          <form id="user-form" onSubmit={handleSubmit}>
            <div className="marco">
              <h2>Historia de usuario</h2>
              <div className="campos-de-texto">
                <div>
                  <label>Título:</label>
                  <input type="text" name='title' />
                </div>
              </div>
              <div className="espacios-de-texto">
                <div>
                  <label>Yo como:</label>
                  <textarea name='yo_como'></textarea>
                </div>
                <div>
                  <label>Requiero:</label>
                  <textarea name='requiero'></textarea>
                </div>
                <div>
                  <label>Tal que:</label>
                  <textarea name='tal_que'></textarea>
                </div>
                <div>
                  <label>Criterios de aceptación:</label>
                  <textarea name = 'criterio_aceptacion'></textarea>
                </div>
              </div>
    
              <div className="campos-de-impor-comp">
                <div>
                  <label>Importancia:</label>
                  <input type="number" name='importancia' />
                </div>
                <div>
                  <label>Complejidad:</label>
                  <input type="number" name='complejidad' />
                </div>
              </div>
    
              <div className="buttons">
                <button type="submit">Aceptar</button>
              </div>
            </div>
          </form>
        </div>
      );
}

export default NewUserStory;