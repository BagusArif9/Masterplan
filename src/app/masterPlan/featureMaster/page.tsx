"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Button,
} from "@chakra-ui/react";
import { FaHome, FaBuilding, FaMountain } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { MdTravelExplore, MdOutlinePersonSearch } from "react-icons/md";
import gsap from "gsap";

interface FeatureData {
  id: string;
  details: string;
}

const FeatureMaster: React.FC = () => {
  const [features, setFeatures] = useState<FeatureData[]>([]);
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    async function fetchFeatures() {
      const response = await fetch("/feature.json");
      const data: FeatureData[] = await response.json();

      const formattedData = data.map((item) => ({
        ...item,
        details: item.details
          .replace(/(\d+\.)/g, "<br/>$1")
          .replace("<br/>", ""),
      }));

      setFeatures(formattedData);
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
        { opacity: 1, y: 0, duration: 1.5, ease: "power1.out", delay: 0.4 }
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
            ease: "power1.out",
            delay: 0.7 + index * 0.2,
          }
        );
      });
    }
  }, [isAnimated]);

  return (
    <Box
      as="section"
      minH="700px"
      px={{ base: 4, md: 8 }}
      py={10}
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
        <Box flex={1} textAlign={{ base: "center", lg: "left" }}>
          <Heading as="h2" size="4xl" mt={10} ref={headingRef}>
            Lokasi
          </Heading>
          <Heading as="h2" size="lg" mt={5} color="#696969" ref={subHeadingRef}>
            Lokasi yang strategis, dimanfaatkan dengan sempurna. <br /> Dan
            pemandangan alam membuat Anda takjub.
          </Heading>
          <Text
            mt={10}
            color="grey"
            ref={(el) => {
              if (el) textRefs.current.push(el);
            }}
          >
            Dusun Mejing berada di bagian barat Desa Duren. Dusun mejing
            menawarkan potensi agrowisata melalui ladang atau kebun bunga
            peacock, tanaman hortikultura, dan alam yang dimilikinya.
          </Text>
          <Text
            mt={5}
            color="grey"
            ref={(el) => {
              if (el) textRefs.current.push(el);
            }}
          >
            Ketiga hal tersebut dapat disatukan dan menjadi daya tarik
            tersendiri untuk wisatawan datang ke Dusun Mejing.
          </Text>
          <Text
            mt={5}
            color="grey"
            ref={(el) => {
              if (el) textRefs.current.push(el);
            }}
          >
            Dengan pembangunan agrowisata, diharapkan semua potensi yang
            dimiliki dapat dikembangkan secara optimal, meningkatkan taraf hidup
            masyarakat di Dusun mejing sekaligus menjadi contoh
            pengembangan agrowisata.
          </Text>
        </Box>
        <Box flex={1} ml={{ base: 0, lg: 20 }} mt={{ base: 10, lg: 0 }}>
          <VStack spacing={4} align="start" position={"absolute"} my={24}>
            {[
              { label: "Pintu Masuk dan Informasi", icon: FaHome },
              { label: "Produksi Pertanian", icon: GiFarmer },
              { label: "Edukasi dan Wisata", icon: MdTravelExplore },
              { label: "Rekreasi", icon: FaMountain },
              { label: "Pemberdayaan Komunitas", icon: MdOutlinePersonSearch },
              { label: "Fasilitas Penunjang", icon: FaBuilding },
            ].map((item) => (
              <Popover
                key={item.label}
                isOpen={openPopover === item.label}
                onClose={() => setOpenPopover(null)}
                placement="right"
              >
                <PopoverTrigger>
                  <Button
                    leftIcon={<Icon as={item.icon} />}
                    onClick={() =>
                      setOpenPopover(
                        openPopover === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>{`${item.label}`}</PopoverHeader>
                  <PopoverBody>
                    <Box
                      dangerouslySetInnerHTML={{
                        __html:
                          features.find((feature) => feature.id === item.label)
                            ?.details || "Loading...",
                      }}
                    />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ))}
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default FeatureMaster;
