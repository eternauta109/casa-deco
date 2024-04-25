import React from "react";
import Image from "next/image";
import Slideshow from "./Slideshow";

import {
  Container,
  ImageList,
  ImageListItem,
  ListSubheader,
  Box,
  Grid,
  Typography,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const Home = () => {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      {/* <Grid item xs={12} md={2}>
        <Box
          sx={{
            p: 3,

            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Image
            alt="aladestra"
            src="/aladestra.jpeg"
            width={208}
            height={800}
            style={{ transform: "scaleX(-1)" }}
          />
        </Box>
      </Grid> */}
      <Grid item justifyContent="center" xs={12} md={12}>
        <Box sx={{ p: 2, textAlign: "center" }} xs={4}>
          <Image
            src={"/logo.JPG"}
            alt="logo"
            layout="fixed"
            width={200}
            height={200}
            loading="lazy"
          />

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
        <Box sx={{ p: 3 }}>
          <Slideshow />
        </Box>
      </Grid>
      {/*  <Grid item xs={12} md={2}>
        <Box
          sx={{
            p: 3,

            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Image
            alt="aladestra"
            src="/aladestra.jpeg"
            width={208}
            height={800}
          />
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default Home;
