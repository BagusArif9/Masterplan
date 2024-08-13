"use client";
import React from "react";
import { Box, Image, VStack, Heading, Text } from "@chakra-ui/react";

const AboutMaster: React.FC = () => {
  return (
    <Box
      as="section"
      minH={{ base: "400px", md: "500px" }}
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      m={{ base: 4, md: 20 }}
    >
      <Box
        position="absolute"
        w="full"
        h="full"
        top={0}
        left={0}
        right={0}
        bottom={0}
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="/images/MULTIPURPOSE_ROOM_2.webp" // Make sure this path matches the uploaded image
          alt="Architecture"
          objectFit="cover"
          borderRadius={20}
          w="full"
          h="full"
        />
      </Box>
      <VStack
        position="absolute"
        bottom={0}
        right={0}
        bg="white"
        p={5}
        borderTopRightRadius="0px"
        borderTopLeftRadius="20px"
        borderBottomLeftRadius="0px"
        borderBottomRightRadius="20px"
        maxW={{ base: "90%", md: "2xl" }}
        m={{ base: 0, md: 0 }}
        my={{ base: -20, md: 0 }}
      >
        <Heading as="h2" size={{ base: "md", md: "lg" }}>
          Desain Arsitektur
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} textAlign="justify">
          Arsitektur wisata Desa Mejing dirancang untuk menyatu dengan alam,
          menggunakan material lokal yang menciptakan kesan hangat dan autentik,
          sekaligus merayakan keindahan tradisi setempat. Desain terbuka yang
          diterapkan tidak hanya memperkuat hubungan antara ruang dalam dan
          luar, tetapi juga memaksimalkan pencahayaan alami, memanjakan mata
          dengan pemandangan perbukitan dan sawah, serta memastikan sirkulasi
          udara yang segar. Setiap elemen arsitektur dirancang dengan alur yang
          dinamis, memungkinkan pengunjung menikmati perjalanan yang mulus dan
          terhubung secara emosional dengan keindahan alam sekitar, menjadikan
          setiap langkah di area wisata ini sebuah pengalaman yang
          mendalam dan memikat.
        </Text>
        <Box
          position={"absolute"}
          right={0}
          top={-6}
          borderTopRightRadius="10px"
          borderTopLeftRadius="10"
          borderBottomLeftRadius="0"
          borderBottomRightRadius="0"
          backgroundColor={"white"}
          color={"white"}
        >
          ####
        </Box>
        <Box
          position={"absolute"}
          left={-8}
          bottom={0}
          borderTopRightRadius="0px"
          borderTopLeftRadius="10"
          borderBottomLeftRadius="10"
          borderBottomRightRadius="0"
          backgroundColor={"white"}
          color={"white"}
        >
          ####
        </Box>
      </VStack>
    </Box>
  );
};

export default AboutMaster;
