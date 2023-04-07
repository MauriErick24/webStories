import React from "react";
const Screenproyecto = () => {
    return (
        <div>
            <div
                style={
                    {
                        display: "flex",
                        justifyContent: "center",
                    }
                }
            >
                <h1>Nombre del proyecto</h1>
            </div>
            <input 
                style={
                    {
                        margin: "10px",
                        padding: "10px",
                        width: "30%",
                        height: "15px",
                        fontSize: "20px",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                    }
                }
            type="text" name='Nombre del proyecto' />
            <br/>
            <textarea
                colos={10}
                rows={10}
                placeholder="Descripcion"    
                style={
                    {
                        margin: "10px",
                        padding: "10px",
                        width: "30%",
                    }
                }
            ></textarea>
            <div className="buttons">
                <button type="submit">Crear nuevo proyecto</button>
            </div>
        </div>
    );
};
export default Screenproyecto;