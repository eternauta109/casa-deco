/* eslint-disable react/no-unescaped-entities */
"use client";

import { Typography, Button, Container, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import BackhomeButton from "@/components/BackhomeButton";

const History = () => {
  const router = useRouter();

  return (
    <Container>
      <Typography variant="h1" gutterBottom color="grey">
        Portuense's History
      </Typography>
      <Typography>
        Nestled in the western part of Rome, the Portuense district boasts a
        rich tapestry of history, culture, and charm. Steeped in centuries of
        tradition, this vibrant neighborhood invites visitors to immerse
        themselves in its diverse array of sights and experiences.
      </Typography>
      <Box
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          width={500}
          height={500}
          alt="mappa"
          src="https://laromanatoponomastica.weebly.com/uploads/4/5/8/7/45873993/2349178_orig.jpg"
        />
      </Box>
      <Typography>
        As you stroll through the streets of Portuense, you'll be greeted by a
        captivating blend of architectural styles, from ancient Roman ruins to
        Renaissance palazzos and modern developments. Each corner reveals a new
        story, a testament to the district's dynamic past and present.
      </Typography>
      <Box
        sx={{
          p: 2,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          width={500}
          height={500}
          alt="porta"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Porta_Portese_28_09_2019.jpg/260px-Porta_Portese_28_09_2019.jpg"
        />
      </Box>
      <Typography>
        One of the district's main attractions is its bustling markets, where
        locals and visitors alike converge to sample fresh produce, browse
        artisanal goods, and soak up the lively atmosphere. From the vibrant
        colors of Campo de' Fiori to the bustling stalls of Porta Portese, these
        markets offer a glimpse into the daily life of Roman residents.
      </Typography>
      <Typography>
        For history enthusiasts, Portuense boasts a wealth of cultural landmarks
        and archaeological sites waiting to be explored. The imposing presence
        of the Pyramid of Cestius stands as a testament to Rome's ancient past,
        while the picturesque Janiculum Hill offers panoramic views of the city
        below.
      </Typography>
      <Typography>
        Art lovers will delight in the district's numerous galleries and
        museums, showcasing works by both renowned masters and emerging talents.
        From contemporary art spaces to historic collections housed in
        centuries-old palaces, there's something to captivate every artistic
        sensibility.
      </Typography>
      <Box
        sx={{
          p: 2,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          width={500}
          height={500}
          alt="porta"
          src="https://www.ciclostazionefrattini.it/wp-content/uploads/2017/05/villa-pamphili-giardini-roma.jpg"
        />
      </Box>
      <Typography>
        Of course, no visit to Portuense would be complete without indulging in
        its culinary delights. From traditional trattorias serving up classic
        Roman dishes to trendy cafes and wine bars, the district's gastronomic
        scene offers a tantalizing array of flavors and experiences.
      </Typography>
      <Typography>
        Whether you're wandering through its historic streets, savoring its
        culinary delights, or immersing yourself in its cultural offerings, the
        Portuense district promises an unforgettable journey through the heart
        and soul of Rome. With its timeless charm and vibrant energy, it's no
        wonder that this enchanting neighborhood continues to capture the hearts
        of visitors from around the world.
      </Typography>
      <BackhomeButton />
    </Container>
  );
};

export default History;
