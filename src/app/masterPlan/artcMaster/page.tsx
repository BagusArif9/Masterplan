"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import gsap from "gsap";

function ArtcMaster() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current?.offsetTop || 0;
      const windowHeight = window.innerHeight;

      if (window.scrollY >= sectionTop - windowHeight * 0.8 && !isAnimated) {
        setIsAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAnimated]);

  useEffect(() => {
    if (isAnimated) {
      // Animate the main heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power1.out" }
      );

      // Animate the sub-heading
      gsap.fromTo(
        subHeadingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "ease-in-out", delay: 0.4 }
      );

      // Animate the paragraphs
      textRefs.current.forEach((text, index) => {
        gsap.fromTo(
          text,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "ease-in-out",
            delay: 0.7 + index * 0.2,
          }
        );
      });
    }
  }, [isAnimated, headingRef, subHeadingRef, textRefs]);

  return (
    <>
      <Box
        as="section"
        minH={{ base: "400px", md: "600px" }}
        p={{ base: 4, md: 8 }}
        ref={sectionRef}
      >
        <Box
          mx="auto"
          mr={{ base: 0, md: 20 }}
          maxW={{ base: "95%", md: "xl" }}
          p={5}
        >
          <Heading
            as="h2"
            size={{ base: "3xl", md: "4xl" }}
            textAlign="left"
            mt={{ base: 5, md: 10 }}
            ref={headingRef}
          >
            Konsep
          </Heading>
          <Heading
            as="h2"
            size={{ base: "md", md: "lg" }}
            textAlign="left"
            mt={{ base: 3, md: 5 }}
            color="#696969"
            ref={subHeadingRef} // Add ref here
          >
            Educational Tourism, Aligned with Nature
          </Heading>
          <Text
            mt={{ base: 5, md: 10 }}
            color="grey"
            fontSize={{ base: "sm", md: "md" }}
            textAlign="justify"
            ref={(el) => {
              if (el) textRefs.current[0] = el;
            }} // Corrected ref callback
          >
            Merupakan sebuah destinasi wisata pertanian yang dirancang untuk
            memberikan pengalaman menyeluruh tentang kehidupan di pedesaan
            dengan fokus pada praktik pertanian organik.
          </Text>
          <Text
            mt={{ base: 3, md: 5 }}
            color="grey"
            fontSize={{ base: "sm", md: "md" }}
            textAlign="justify"
            ref={(el) => {
              if (el) textRefs.current[1] = el;
            }} // Corrected ref callback
          >
            Terletak di dataran tinggi dengan pemandangan sawah yang hijau dan
            latar belakang pegunungan yang megah, wisata ini menawarkan suasana
            yang tenang dan segar.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default ArtcMaster;
