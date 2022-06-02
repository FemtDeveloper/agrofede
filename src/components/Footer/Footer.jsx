import React from "react";
import "./Footer.css";
import { ImMobile2 } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* <ul className='list-container'>
          <li><h5>Contactenos</h5></li>
          <li><h5>Sobre nosotros</h5></li>
          <li><h5>Nuestras redes</h5></li>
          </ul> */}
      <div className="cell-container">
        <ImMobile2 />
        <div className="number-container">
          <p>3007322667</p>
          <p>3228386159</p>
        </div>
      </div>
      <div>
        <FiMail />
        <p>direcciongeneral@fenagro.com.co</p>
      </div>
      <div className="ubicacion-container">
        <SiGooglemaps />
        <div className="direccion-container">
          <p>Edificio Torres Unidas 2 Cra 9 # 113 - 52 of. 903</p>
          <p>Bogotá, Colombia</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
