import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

const BeerPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [beer, setBeer] = useState(null);

  const getBeers = async (beerId) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`);
    const data = await response.json();
    setBeer(data);
    setIsLoading(false);
    console.log(`https://api.punkapi.com/v2/beers/${beerId}`, beer);
  };
  useEffect(() => {
    getBeers(id);
  }, []);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            left: "50%",
            top: "50%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Container>
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: "300px",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Stack
              sx={{
                maxWidth: "700px",
                justifyContent: "space-between",
                alignItems: "space-between",
              }}
            >
              <Typography variant="h3">{beer[0].name}</Typography>
              <Typography variant="h4">{beer[0].tagline}</Typography>
              <Typography variant="h5">{beer[0].description}</Typography>
            </Stack>
            <Stack
              sx={{
                height: "300px",
                width: "300px",
                background: `url(${beer[0].image_url})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Stack>
          <Stack>
            <Typography variant="h5">Perfect food with this: </Typography>
            <ul>
              {beer[0].food_pairing.map((item) => (
                <li>
                  <Typography variant="h5">{item}</Typography>
                </li>
              ))}
            </ul>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default BeerPage;
