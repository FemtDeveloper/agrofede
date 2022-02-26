import axios from "axios";
import React, { useEffect, useState } from "react";
import vegetales from "../../assets/imgs/vegetables.webp";
import "./News.css";

const News = () => {
  const [agricultorsList, setAgricultorsList] = useState([]);

  useEffect(() => {
    const agricultors = axios
      .get("http://localhost:1337/api/agricultors?populate=*")
      .then((res) => {
        setAgricultorsList(res.data.data);
      });
  }, []);

  console.log(agricultorsList);
  agricultorsList.map((a) => {
    console.log(a.attributes.nombre);
  });

  return (
    <div className="news-container">
      <p className="text-muted h4 mr-auto">Ultimas Noticias</p>
      <article>
        <img src={vegetales} alt="" />
        <a href="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          iste explicabo cupiditate?
        </a>
      </article>
      <article>
        <img src={vegetales} alt="" />
        <a href="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          iste explicabo cupiditate?
        </a>
      </article>
    </div>
  );
};

export default News;
