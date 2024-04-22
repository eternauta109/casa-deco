"use client";

import React from "react";
import Image from "next/image";

import {
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import BackhomeButton from "@/components/BackhomeButton";

const Restaurant = () => {
  const restaurants = [
    {
      id: "letrezucche",
      name: "le tre zucche",
      tipo: "bottega",
      description:
        "Set in a warm and welcoming atmosphere, adorned with pieces of modern antiques and original furnishings made from reclaimed materials, La bottega delle tre zucche aims to offer customers gourmet takeaway food of excellence, as well as a hospitable and pleasant place to enjoy a hearty breakfast, a delightful brunch, a delicious lunch, or a rich aperitif. Moreover, it offers traditional Roman dinners with special chef's reinterpretations.",
      link: "https://www.letrezucche.com/",
    },
    {
      id: "saporidicasa",
      name: "sapori di casa",
      tipo: "restaurant pizzeria",
      description:
        "In our restaurant, you'll rediscover the authentic flavors of traditional culinary preparations: all the grandmother's recipes rediscovered and offered again in a varied menu ranging from appetizers to desserts, all strictly homemade with genuine ingredients.",
      link: "https://ristorantesaporidicasa.com/",
    },
  ];

  return (
    <Container>
      <Typography variant="h1" gutterBottom color="grey">
        restaurants nearby
      </Typography>
      <Box position="relative" height={400}>
        {" "}
        {/* Altezza desiderata per l'immagine */}
        <Image
          src="/casa/restaurant2.JPG"
          alt={"restaurant"}
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </Box>
      <Box mt={4}>
        {" "}
        {/* Aggiungi un margine top per spaziare le card dalla foto */}
        {/* Inserisci qui le tue card contenenti informazioni sui ristoranti */}
        {restaurants.map((rest, key) => (
          <Card key={key} sx={{ display: "flex", mt: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto", maxWidth: "80%" }}>
                <Typography component="div" variant="h5">
                  {rest.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {rest.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                {rest.tipo}
              </Box>
            </Box>

            <CardMedia
              component="a"
              href={rest.link}
              sx={{ width: 400 }}
              image={`/casa/${rest.id}.png`}
              alt="Live from space album cover"
            />
          </Card>
        ))}
        {/* Aggiungi altre card per altri ristoranti, se necessario */}
      </Box>
      <BackhomeButton />
    </Container>
  );
};

export default Restaurant;
