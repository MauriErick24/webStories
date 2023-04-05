import React from 'react';

const ProjectBox = () => {
    return (
        <button style={{ 
            backgroundColor: "#f2f2f2",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "20px",
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
            margin: "20px",
            width: "300px",
            height: "100px",
            cursor: "pointer"
          }}>
            <h
              style={{
                fontSize: "1.5em",
                textTransform: "uppercase",
                fontWeight: "bold",
                textAlign: "center",
                color: "#000",
                marginBottom: "10px" // Agregar margen inferior de 10px
              }}
            >
              Mojito
            </h>
            <p
              style={{
                fontSize: "1em",
                marginTop: "20px", // Agregar margen superior de 10px
              }}
            >
                Este es un mojito
            </p>
          </button>
    );
}

export default ProjectBox;

//styles

