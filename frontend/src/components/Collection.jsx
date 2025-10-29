import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import necklaceImg from "../assets/Necklace.jpeg";
import earringsImg from "../assets/Earring.jpeg";
import braceletImg from "../assets/Bracelet.jpeg";

const categories = [
  {
    title: "Necklaces",
    description: "Elegant pieces that grace your neckline with timeless beauty",
    image: necklaceImg,
  },
  {
    title: "Earrings",
    description: "Dazzling designs that frame your face with sophistication",
    image: earringsImg,
  },
  {
    title: "Bracelets",
    description: "Exquisite adornments for your wrists, from delicate to bold",
    image: braceletImg,
  },
];

const Collections = () => {
  return (
    <Box
  sx={{
    width: "100%", // full screen width
    backgroundColor: "#f9f7f3",
    py: "5rem",
    textAlign: "center",
    overflowX: "hidden",
  }}
>
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: "#1a1a1a",
          mb: 1,
        }}
      >
        Our Collections
      </Typography>

      {/* Subtext */}
      <Typography
        sx={{
          color: "#6f6f6f",
          fontSize: "1.05rem",
          mb: "3.5rem",
          maxWidth: "900px",
          mx: "auto",
        }}
      >
        Explore our curated selection of handcrafted jewelry, each piece telling its own unique story
      </Typography>

      {/* CSS Grid - reliable three columns on md+ */}
      <Box
        sx={{
          display: "grid",
          gap: 3,
          // 1 column on xs, 2 on sm, 3 on md+
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          // restrict max width so cards don't get too wide on very large screens
          maxWidth: "1300px",
          mx: "auto",
          px: { xs: "4%", md: "6%" }, // some padding for spacing
        }}
      >
        {categories.map((cat) => (
          <Card
            key={cat.title}
            sx={{
              borderRadius: "14px",
              overflow: "hidden",
              backgroundColor: "white",
              // fixed-ish height but flexible content area
              display: "flex",
              flexDirection: "column",
              height: "100%",
              minHeight: "360px",        // reduced height so 3 fit nicely
              border: "2px solid transparent",
              transition: "transform 0.28s ease, box-shadow 0.28s ease, border 0.28s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                border: "2px solid #C38822",
                boxShadow: "0 10px 30px rgba(195,136,34,0.15)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={cat.image}
              alt={cat.title}
              sx={{
                height: { xs: 180, md: 200 }, // smaller image heights
                objectFit: "cover",
                width: "100%",
              }}
            />

            <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#1a1a1a",
                  mb: 0.6,
                  fontSize: { xs: "1.05rem", md: "1.1rem" },
                }}
              >
                {cat.title}
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  fontSize: "0.92rem",
                  minHeight: "54px",
                  mb: 1.5,
                }}
              >
                {cat.description}
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "#C38822",
                  color: "#C38822",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 2.2,
                  py: 1,
                  "&:hover": {
                    backgroundColor: "#C38822",
                    color: "white",
                    borderColor: "#C38822",
                  },
                }}
              >
                View Collection
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Collections;
