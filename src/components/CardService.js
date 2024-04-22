import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "next/link";
import Typography from "@mui/material/Typography";

const CardService = ({ tema }) => {
  console.log(tema);
  let description;

  const title = () => {
    switch (tema) {
      case "restaurant":
        description = `Discover a diverse selection of local eateries offering authentic flavors and culinary delights. From cozy trattorias to trendy bistros, there's something to satisfy every palate just steps away from your doorstep.`;
        return "something to eat";
        break;
      case "tour":
        description = `Embark on an exciting journey through the rich cultural heritage and iconic landmarks of the neighborhood. Explore world-class museums, awe-inspiring architecture, and hidden gems waiting to be uncovered around every corner`;
        return "something to see";
        break;

      case "history":
        description = `Immerse yourself in the captivating history of the Portuense district, where centuries-old traditions and fascinating tales intertwine. From ancient ruins to historic monuments, each corner of the neighborhood echoes with the echoes of the past, waiting to be explored.`;
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
        image={`/casa/${tema}.JPG`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/${tema}`}>
          <Button size="small">More info</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardService;
