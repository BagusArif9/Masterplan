"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  ChakraProvider,
  Heading,
} from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageData {
  id: number;
  heading: string; // Added heading field
  image: string;
  desc: string;
}

const ChangeImages: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/changeImages.json")
      .then((response) => response.json())
      .then((data: ImageData[]) => setImages(data));
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        onEnter: () =>
          gsap.to(container, { backgroundColor: "black", duration: 0.5 }),
        onLeave: () =>
          gsap.to(container, { backgroundColor: "white", duration: 0.5 }),
        onEnterBack: () =>
          gsap.to(container, { backgroundColor: "black", duration: 0.5 }),
        onLeaveBack: () =>
          gsap.to(container, { backgroundColor: "white", duration: 0.5 }),
      });

      images.forEach((image, index) => {
        gsap.to(`#image-${image.id}`, {
          opacity: 1,
          scrollTrigger: {
            trigger: container,
            start: `${index * 50 + 20}vh`,
            end: `${index * 50 + 50}vh`,
            scrub: true,
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [images]);

  return (
    <ChakraProvider>
      <Box
        ref={containerRef}
        height={{
          base: `${images.length * 50 + 200}vh`,
          md: `${images.length * 50 + 100}vh`,
        }}
        backgroundColor="white"
        position="relative"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
          width="90%"
          mx="auto"
          mt="10vh"
        >
          {images.map((image, index) => (
            <React.Fragment key={image.id}>
              {index % 2 === 0 ? (
                <>
                  <GridItem
                    colSpan={{ base: 1, md: 1 }}
                    position="relative"
                    my={{ base: 6, md: 0 }}
                  >
                    <Image
                      id={`image-${image.id}`}
                      src={image.image}
                      alt={`Image ${image.id}`}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      borderRadius="md"
                      opacity={0}
                      transition="opacity 0.5s"
                    />
                  </GridItem>
                  <GridItem
                    colSpan={{ base: 1, md: 1 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    my={{ base: 6, md: 0 }}
                  >
                    <Heading fontSize="xl" fontWeight="bold" color="white">
                      {image.heading}
                    </Heading>
                    <Text color="white" fontSize="lg" mt={2}>
                      {image.desc}
                    </Text>
                  </GridItem>
                </>
              ) : (
                <>
                  <GridItem
                    colSpan={{ base: 1, md: 1 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    my={{ base: 6, md: 0 }}
                  >
                    <Heading fontSize="xl" fontWeight="bold" color="white">
                      {image.heading}
                    </Heading>
                    <Text color="white" fontSize="lg" mt={2}>
                      {image.desc}
                    </Text>
                  </GridItem>
                  <GridItem
                    colSpan={{ base: 1, md: 1 }}
                    position="relative"
                    my={{ base: 6, md: 0 }}
                  >
                    <Image
                      id={`image-${image.id}`}
                      src={image.image}
                      alt={`Image ${image.id}`}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      borderRadius="md"
                      opacity={0}
                      transition="opacity 0.5s"
                    />
                  </GridItem>
                </>
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default ChangeImages;
