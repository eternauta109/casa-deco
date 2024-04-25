"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

const onClickHandle = (e, imageTitle) => {
  console.log("onClickHandl", e, imageTitle);
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide
        slidesToScroll={2}
        slidesToShow={2}
        indicators={true}
        duration={4000}
      >
        {itemData.map((slideImage, index) => (
          <div key={index}>
            <div
              onClick={(e) => onClickHandle(e, slideImage.img)}
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.img})`,
                backgroundSize: "fill",
                height: "600px",
              }}
            >
              {/* <span style={spanStyle}>{slideImage.title}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;

const itemData = [
  {
    img: "/casa/Pan_1.jpg",
    title: "Panoramica",
    rows: 3,
    cols: 3,
    featured: true,
  },
  {
    img: "/casa/salotto1.jpg",

    title: "Salotto",
  },
  {
    img: "/casa/cucina.jpg",
    title: "Camera",
    rows: 3,
    cols: 1,
  },
  {
    img: "/casa/veduta.jpg",
    title: "Veduta",

    rows: 2,
    cols: 1,
  },
  {
    img: "/casa/letto3.jpg",
    title: "Letto",

    rows: 3,
    cols: 2,
  },
  {
    img: "/casa/salotto3.jpg",
    title: "Salotto",
    rows: 2,
    cols: 1,
    featured: true,
  },

  {
    img: "/casa/cucina3.jpg",
    title: "Cucina",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: "/casa/cucina2.jpg",

    title: "Cucina",
  },
  {
    img: "/casa/dettaglio_frigo.jpg",
    title: "detcucina",
    rows: 3,
    cols: 1,
  },
  {
    img: "/casa/dettaglio_quadro.jpg",
    title: "Quadro",

    rows: 2,
    cols: 1,
  },
  {
    img: "/casa/letto3.jpg",
    title: "Letto",

    rows: 3,
    cols: 2,
  },
  {
    img: "/casa/salotto4.jpg",
    title: "Salotto",

    rows: 3,
    cols: 1,
    featured: true,
  },
  {
    img: "/casa/salotto3.jpg",
    title: "Salotto",
    rows: 2,
    cols: 1,
    featured: true,
  },

  {
    img: "/casa/salotto4.jpg",
    title: "Salotto",

    rows: 3,
    cols: 1,
    featured: true,
  },
  {
    img: "/casa/det_bagno_saponi.jpg",
    title: "Bagno",

    rows: 4,
    cols: 3,
    featured: true,
  },
  {
    img: "/casa/bagno1.jpg",
    title: "Bagno",

    rows: 4,
    cols: 3,
    featured: true,
  },
  {
    img: "/casa/det_bagno_lavandino.JPG",
    title: "Bagno",

    rows: 4,
    cols: 3,
    featured: true,
  },
  {
    img: "/casa/bagno4.jpg",
    title: "Salotto",

    rows: 3,
    cols: 1,
    featured: true,
  },
  {
    img: "/casa/bagno3.jpg",
    title: "Salotto",

    rows: 3,
    cols: 1,
    featured: true,
  },
];
