import React from "react";
import { useState } from "react";
import "./Anuncios.css";

const Anouncements = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="anouncements-container">
      <article>
        <h3>Fondo Nacional Del Fomento Agropecuario</h3>
        <p>
          El Fondo Nacional de Fomento Agropecuario impulsa las actividades que
          contribuyan al fomento del desarrollo del Sector Agropecuario,
          Pesquero, de Acuicultura y de Desarrollo Rural.{" "}
          {isActive && (
            <span>
              El objetivo del Fondo se cumple en el marco de las políticas que
              adopte el Ministerio de Agricultura y Desarrollo Rural, mediante
              la cofinanciación de proyectos que pueden ser presentador por: La
              Entidad Otorgante de los subsidios de vivienda de interés social
              rural para las vigencias 2000 a 2017 es el Banco Agrario de
              Colombia- BAC. Para las vigencias 2018 y 2019 es el Ministerio de
              Agricultura y Desarrollo Rural.
            </span>
          )}
          <span onClick={() => setIsActive(!isActive)} className="verMas">
            [{isActive ? "ver menos" : "ver más"}]
          </span>
        </p>
      </article>
    </div>
  );
};

export default Anouncements;
