import React from "react";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import "./Register.css";

const Register = () => {
  const [showalert, setShowalert] = useState(false);
  const { formState, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
    address: "",
    indications: "",
    city: "",
    department: "",
  });
  const { email, password, address, indications, city, department } = formState;

  const uploadForm = (e) => {
    e.preventDefault();
    setShowalert(true);
    setTimeout(() => {
      setShowalert(false);
    }, 2000);
  };

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
              name="email"
              onChange={onInputChange}
              value={email}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Contraseña"
              name="password"
              onChange={onInputChange}
              value={password}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Calle, Carrera..."
            name="address"
            onChange={onInputChange}
            value={address}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="indications">Indicación (opcional)</label>
          <input
            type="text"
            className="form-control"
            id="indications"
            placeholder="..."
            name="indications"
            onChange={onInputChange}
            value={indications}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Ciudad</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              onChange={onInputChange}
              value={city}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">Departamento</label>
            <select
              id="inputState"
              className="form-control"
              name="department"
              onChange={onInputChange}
              value={department}
            >
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
        {showalert && (
          <div className="sended">
            <h6>Fromulario enviado</h6>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-md"
          onClick={onResetForm}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
