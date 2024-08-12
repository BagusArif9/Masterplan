"use client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface ImageData {
  id: number;
  image: string;
  desc: string;
}

function Grids() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch("./images.json");
      const data: ImageData[] = await response.json();
      setImages(data);
    }

    fetchImages();
  }, []);

  return (
    <Box mx={{ base: 4, md: 20 }}>
      <Grid
        h={{ base: "auto", md: "600px" }}
        templateRows={{ base: "repeat(4, 1fr)", md: "repeat(2, 1fr)" }}
        templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
        gap={4}
        mt={{base:40, md:10}}
      >
        {images.length > 0 && (
          <>
            <GridItem
              rowSpan={{ base: 1, md: 2 }}
              colSpan={1}
              bgImage={`url(${images[0].image})`}
              bgSize="cover"
              bgPosition="center"
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.2s",
              }}
              h={{ base: "200px", md: "auto" }}
            />
            <GridItem
              colSpan={{ base: 1, md: 2 }}
              bgImage={`url(${images[1].image})`}
              bgSize="cover"
              bgPosition="center"
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.2s",
              }}
              h={{ base: "200px", md: "auto" }}
            />
            <GridItem
              colSpan={{ base: 1, md: 2 }}
              bgImage={`url(${images[2].image})`}
              bgSize="cover"
              bgPosition="center"
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.2s",
              }}
              h={{ base: "200px", md: "auto" }}
            />
            <GridItem
              colSpan={{ base: 1, md: 4 }}
              bgImage={`url(${images[3].image})`}
              bgSize="cover"
              bgPosition="center"
              _hover={{
                transform: "scale(1.02)",
                transition: "transform 0.2s",
              }}
              h={{ base: "200px", md: "auto" }}
            />
          </>
        )}
      </Grid>
    </Box>
  );
}

export default Grids;
