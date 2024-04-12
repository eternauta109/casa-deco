import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardService = ({ tema }) => {
  console.log(tema);
  const title = () => {
    switch (tema) {
      case "resturant":
        return "something to eat";
        break;
      case "tour":
        return "something to see";
        break;

      case "history":
        return "something to know";
        break;

      default:
        break;
    }
  };
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        /* image="/casa/resturant.jpg" */
        image={`/casa/${tema}.jpg`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardService;
