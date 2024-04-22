import React from "react";
import Image from "next/image";

import {
  Container,
  ImageList,
  ImageListItem,
  ListSubheader,
  Box,
  Typography,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Box sx={{ p: 2 }}>
          <Typography sx={{ mt: 3 }}>
            I furnished and renovated the apartment to live in it, and it
            reflects my idea of beauty and livability.
          </Typography>

          <Typography sx={{ mt: 3 }}>
            You will find a series of paintings and a fresco created by my
            father, which tell a lot about me. I hope my guests will also enjoy
            the care I put into making them feel comfortable in a quiet and
            easily accessible area, both by car and public transportation.
          </Typography>
          <Typography sx={{ mt: 3 }}>
            The proximity to Trastevere station makes it easy to connect to
            Fiumicino Airport.
          </Typography>
        </Box>
        <ImageList
          variant="quilted"
          cols={4}
          rowHeight={121}
          sx={{ maxWidth: "100vw", height: 500, overflowY: "auto" }}
        >
          <ImageListItem key="Subheader" cols={4}>
            <ListSubheader component="div">Casa Decò</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <Image
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                layout="fill"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />

              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    {/* <InfoIcon /> */}
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Home;

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
    img: "/casa/bagno1.jpg",
    title: "Bagno",

    rows: 4,
    cols: 3,
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
    img: "/casa/cucina 3.jpg",
    title: "Cucina",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: "/casa/cucina 2.jpg",

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
    img: "/casa/salotto3.jpg",
    title: "Salotto",
    rows: 2,
    cols: 1,
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
    img: "/casa/salotto4.jpg",
    title: "Salotto",

    rows: 3,
    cols: 1,
    featured: true,
  },
];
