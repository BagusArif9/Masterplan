"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic", "0.83,0,0.17,1");

interface ImageData {
  id: number;
  image: string;
  desc: string;
}

const Slider: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [images, setImages] = useState<ImageData[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/Images.json')
      .then((response) => response.json())
      .then((data: ImageData[]) => {
        // Filter and map only the first 6 items based on id
        const limitedImages = data
          .sort((a, b) => a.id - b.id)
          .slice(0, 6);
        setImages(limitedImages);
      });
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      splitTextIntoSpans(".copy h1");
      initializeCards();

      gsap.set("h1 span", { y: -200 });
      gsap.set(".slider .card:last-child h1 span", { y: 0 });
    }
  }, [images]);

  const splitTextIntoSpans = (selector: string) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const text = element.innerHTML;
      const splitText = text.split("").map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`).join("");
      element.innerHTML = splitText;
    });
  };

  const initializeCards = () => {
    const cards = Array.from(document.querySelectorAll(".card"));
    gsap.to(cards, {
      y: (i: number) => -15 + 15 * i + "%",
      z: (i: number) => 15 * i,
      duration: 1,
      ease: "cubic",
      stagger: -0.1,
    });
  };

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const slider = sliderRef.current!;
    const cards = Array.from(slider.querySelectorAll(".card"));
    const lastCard = cards.pop()!;
    const nextCard = cards[cards.length - 1];

    gsap.to(lastCard.querySelectorAll("h1 span"), {
      y: 200,
      duration: 0.75,
      ease: "cubic",
    });

    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.75,
      ease: "cubic",
      onComplete: () => {
        slider.prepend(lastCard);
        initializeCards();
        gsap.set(lastCard.querySelectorAll("h1 span"), { y: -100 });

        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      },
    });
    gsap.to(nextCard.querySelectorAll("h1 span"), {
      y: 0,
      duration: 1,
      ease: "cubic",
      stagger: 0.05,
    });
  };

  return (
    <Box
      position="relative"
      width="100vw"
      height="100vh"
      overflow="hidden"
      bg="white"
      onClick={handleClick}
    >
      <Box
        ref={sliderRef}
        className="slider"
        position="absolute"
        width="100vw"
        height="100vh"
        overflow="hidden"
        style={{ perspective: '250px', perspectiveOrigin: '50% 70%' }}
      >
        {images.map((image) => (
          <Box
            key={image.id}
            className="card"
            position="absolute"
            top={{ base: "40%", md: "35%" }}
            left="50%"
            width={{ base: "55%", md: "50%" }}
            height={{ base: "250px", md: "400px" }}
            borderRadius="10px"
            overflow="hidden"
            transform="translate3d(-50%, -50%, 0)"
            bg="#000"
          >
            <Image src={image.image} alt={image.desc} position="absolute" opacity="0.95" />
            <Box
              className="copy"
              position="absolute"
              top="80%"
              left="60%"
              transform="translate(-50%, -50%)"
              width="100%"
            >
              <Heading
                as="h1"
                fontSize={{ base: "5vw", md: "2vw" }}
                fontWeight="300"
                letterSpacing="-0.02em"
                textTransform="uppercase"
                color="#dfe1c8"
              >
                {`${image.desc}`}
              </Heading>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
