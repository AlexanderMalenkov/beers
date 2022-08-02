import React, { useEffect } from "react";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import { BeerCard } from "./BeerCard";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { Stack } from "@mui/material";
import { CircularProgress } from "@mui/material";

const Main = () => {
  const [beers, setBeers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getBeers = async (page) => {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`
    );
    const data = await response.json();
    setBeers(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getBeers(1);
  }, []);

  return (
    <Container>
      <Stack>
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
          <Stack>
            <Stack
              sx={{
                marginTop: "2rem",
                marginBottom: "2rem",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "2rem",
                flexDirection: "column",
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "2rem",
                }}
              >
                {beers.map((item) => (
                  <a href={item.id}>
                    <BeerCard
                      image_url={item.image_url}
                      tagline={item.tagline}
                      name={item.name}
                    />
                  </a>
                ))}
              </Stack>
              <Stack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pagination
                  count={10}
                  variant="outlined"
                  onChange={(_, num) => {
                    getBeers(num);
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default Main;
