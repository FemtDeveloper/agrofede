import React from "react";
import "./Register.css";

const Register = () => {
  const uploadForm = () => {};

  return (
    <div className="form-container">
      <h2>Brindanos tus datos</h2>
      <form onSubmit={uploadForm}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Calle, Carrera..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Indicación (opcional)</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="..."
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Ciudad</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">Departamento</label>
            <select id="inputState" className="form-control">
              <option value=""> </option>
              <option value="Amazonas">Amazonas</option>
              <option value="Antioquia">Antioquia</option>
              <option value="Arauca">Arauca</option>
              <option value="Atlántico">Atlántico</option>
              <option value="Bolívar">Bolívar</option>
              <option value="Boyacá">Boyacá</option>
              <option value="Caldas">Caldas</option>
              <option value="Caquetá">Caquetá</option>
              <option value="Casanare">Casanare</option>
              <option value="Cauca">Cauca</option>
              <option value="Cesar">Cesar</option>
              <option value="Chocó">Chocó</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Cundinamarca">Cundinamarca</option>
              <option value="Guainía">Guainía</option>
              <option value="Guaviare">Guaviare</option>
              <option value="Huila">Huila</option>
              <option value="La Guajira">La Guajira</option>
              <option value="Magdalena">Magdalena</option>
              <option value="Meta">Meta</option>
              <option value="Nariño">Nariño</option>
              <option value="Norte de Santander">Norte de Santander</option>
              <option value="Putumayo">Putumayo</option>
              <option value="Quindío">Quindío</option>
              <option value="Risaralda">Risaralda</option>
              <option value="San Andrés y Providencia">
                San Andrés y Providencia
              </option>
              <option value="Santander">Santander</option>
              <option value="Sucre">Sucre</option>
              <option value="Tolima">Tolima</option>
              <option value="Valle del Cauca">Valle del Cauca</option>
              <option value="Vaupés">Vaupés</option>
              <option value="Vichada">Vichada</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-md">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
