import React from "react";
const Screenproyecto = () => {
    return (
        <div>
            <h1>Nombre del proyecto</h1>
            <input type="text" name='Nombre del proyecto' />
            <br/>
            <textarea
            colos={10}
            rows={10}
            placeholder="Descripcion"    
            ></textarea>
            <div className="buttons">
                <button type="submit">Crear nuevo proyecto</button>
            </div>
            </div>
    );
};
export default Screenproyecto;