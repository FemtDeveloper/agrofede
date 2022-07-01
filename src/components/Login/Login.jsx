import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Ingresar
        </button>
        <Link to="/registro">
          <p className="no-cuenta">¿No tienes cuenta?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
