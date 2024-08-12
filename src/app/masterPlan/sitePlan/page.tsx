"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import {
  Box,
  Heading,
  HStack,
  Image,
  Table,
  Tbody,
  Tr,
  Td,
  Thead,
  Th,
} from "@chakra-ui/react";

interface FeatureData {
  letter: string;
  description: string;
}

const SitePlan: React.FC = () => {
  const [features, setFeatures] = useState<FeatureData[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef1 = useRef<HTMLHeadingElement | null>(null);
  const headingRef2 = useRef<HTMLHeadingElement | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    async function fetchFeatures() {
      const response = await fetch("/sitePlan.json");
      const data: FeatureData[] = await response.json();
      setFeatures(data);
    }

    fetchFeatures();
  }, []);

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
      // Animate the first heading
      gsap.fromTo(
        headingRef1.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power1.out" }
      );

      // Animate the second heading
      gsap.fromTo(
        headingRef2.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.8, ease: "power2.out", delay: 0.7 }
      );

      // Animate the table
      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 2, ease: "power2.out", delay: 0.9 }
      );
    }
  }, [isAnimated]);

  return (
    <Box
      as="section"
      minH="600px"
      px={{ base: 4, md: 8 }}
      py={20}
      ref={sectionRef}
    >
      <HStack
        mx="auto"
        maxW="6xl"
        spacing={{ base: 5, md: 10 }}
        px={{ base: 5, md: 0 }}
        py={{ base: 5, md: 0 }}
        align="start"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          flex={1}
          textAlign={{ base: "center", lg: "left" }}
          mt={{ base: 20, md: 20 }}
        >
          <Image src="/images/SITE_PLAN.svg" alt="sitePlan" w="full"></Image>
        </Box>
        <Box flex={1} ml={{ base: 0, lg: 20 }} mt={{ base: 10, md: 10 }}>
          <Heading as="h2" size="4xl" mt={10} ref={headingRef1}>
            Fasilitas
          </Heading>
          <Heading as="h2" size="lg" mt={5} color="#696969" ref={headingRef2}>
            Kenyamanan di setiap sudut. Nikmati fasilitas premium yang dirancang
            khusus untuk Anda.
          </Heading>
          <Box
            mt={10}
            color="grey"
            maxH="300px"
            overflowY="auto"
            ref={tableRef}
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Kode</Th>
                  <Th>Deskripsi</Th>
                </Tr>
              </Thead>
              <Tbody>
                {features.map((feature) => (
                  <Tr key={feature.letter}>
                    <Td>{feature.letter}</Td>
                    <Td>{feature.description}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default SitePlan;
