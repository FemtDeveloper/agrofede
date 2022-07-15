import React from "react";
import "./External.css";
const External = () => {
  return (
    <div className="external-links-container">
      <a
        href="https://www.finagro.com.co/l%C3%ADneas-especiales-de-cr%C3%A9dito-lec-finagro"
        target="_blank"
      >
        <h3>Lineas Especiales de Credito Finagro</h3>
        <p>Financia tus actividades con tasas de crédito preferenciales</p>
      </a>
      <div className="lineas-container">
        <a
          href="https://www.bbva.com.co/empresas/productos/prestamos/capital-de-trabajo/agrocredito.html"
          target={"_blank"}
        >
          <article className="lineas-finagro">
            <img src="https://pbs.twimg.com/media/D80UCjLXYAEYgPx.png" alt="" />
            <div className="lineas-finagro--description">
              <h4>Agrocrédito BBVA</h4>
              <p>
                Esta oportunidad que brinada el BBVA se convierte en una buena
                opción para quienes transformen, comercialicen y/o presten sus
                servicios de apoyo en las diferentes etapas
              </p>
            </div>
          </article>
        </a>
        <a
          href="https://www.bancolombia.com/negocios/productos-financieros/credito-agro-ya"
          target={"_blank"}
        >
          <article className="lineas-finagro">
            <img
              src="https://www.valoraanalitik.com/wp-content/uploads/2018/11/Bancolombianew-696x696.jpg"
              alt=""
            />
            <div className="lineas-finagro--description">
              <h4>CR AGRO YA</h4>
              <p>
                Esta opción que propone Bancolombia ofrece plazos y condiciones
                financieras que se ajustan al ciclo productivo. Facil de
                gestionar a través de la app de Bancolombia
              </p>
            </div>
          </article>
        </a>
        <a
          href="https://www.davivienda.com/wps/portal/empresas/nuevo/menu/agropecuario/siga_creciendo/redescuento/finagro/!ut/p/z1/hY6xDoIwGISfhYHR9i-t2rgVwiBEoyxiFwMEgYRSAtXGt7eOJhpuu9z3JYclzrEcimfXFKbTQ9G7fpWbG-VndkzC4BCJNAARx6csDbN9RAm-LAHSzfAnApwvl5AEy65UyFYKASJ8TRhjwZbyABgl_HNRDCXlDZZTfa-nekKPyT1vjRnnnQ8-WGtRo3XT16jSyodfSqtng_NvEo8qh5UsX1Z43hv62ZYI/dz/d5/L2dBISEvZ0FBIS9nQSEh/"
          target={"_blank"}
        >
          <article className="lineas-finagro">
            <img
              src="https://ccplazacentral.com/wp-content/uploads/2021/07/davivienda-logo.jpg"
              alt=""
            />
            <div className="lineas-finagro--description">
              <h4>Finagro - Davivienda</h4>
              <p>
                Estos recursos tienen acceso a garantías complementarias como el
                FAG, garantía otorgada por el Fondo Agropecuario de Garantías y
                los proyectos de Inversión a Incentivos de gobierno como el ICR,
                Incentivo a la Capitalización Rural.
              </p>
            </div>
          </article>
        </a>
        <a
          href="https://www.bancoagrario.gov.co/BancaAgropecuaria/Paginas/LEC_COLOMBIA_AGRO_PRODUCE.aspx"
          target={"_blank"}
        >
          <article className="lineas-finagro">
            <img
              src="https://pbs.twimg.com/ext_tw_video_thumb/1517177672861995010/pu/img/WUjMPEHIj5o6ry-c.jpg"
              alt=""
            />
            <div className="lineas-finagro--description">
              <h4>LEC - Colombia Agro Produce</h4>
              <p>
                Financiar siembra de cultivos cortos, sostenimiento de cultivos
                perennes y la producción, comercialización y transformación
                agropecuaria
              </p>
            </div>
          </article>
        </a>
      </div>
    </div>
  );
};

export default External;
