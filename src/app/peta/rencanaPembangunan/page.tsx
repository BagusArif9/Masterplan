import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";

const RencanaPembangunan: NextPage = () => {
  return (
    <Box
      display={{ base: "block", md: "flex" }}
      minH="100vh"
      maxH="100vh"
      p={4}
    >
      {/* Left Side (Image) */}
      <Box
        flex={{ base: "100%", md: "70%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="black"
        mb={{ base: 8, md: 0 }}
      >
        <Image
          src="/maps/pembangunan/rencanaPembangunan.svg"
          alt="Your Image"
          objectFit="contain"
          width="100%"
          height="100%"
        />
      </Box>

      {/* Right Side (Text) */}
      <Box
        flex={{ base: "100%", md: "30%" }}
        maxH={{ base: "600px", md: "full" }}
        overflowY="scroll"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
        p={3}
      >
        <Box w="full" p={4} border="2px solid" borderColor="black">
          <Heading fontSize="3xl">
            PETA RENCANA <br/>PENGEMBANGAN WISATA
          </Heading>
          <Text fontSize="md" as="b">
            DUSUN MEJING, DESA DUREN, KECAMATAN BANDUNGAN, KABUPATEN SEMARANG
          </Text>
        </Box>
        <Box w="full" p={4} border="2px solid" borderColor="black">
          <Heading fontSize="xl">SKALA</Heading>
          <Image
            src="/maps/pembangunan/skalaPembangunan.svg"
            alt="Your Image"
            objectFit="contain"
            width="100%"
          />
        </Box>
        <Box w="full" p={4} border="2px solid" borderColor="black">
          <Heading fontSize="xl">INSET PETA</Heading>
          <Image
            src="/maps/batasPerencanaan/insetPeta_BR.svg"
            alt="Your Image"
            objectFit="contain"
            width="100%"
          />
        </Box>
        <Box w="full" p={4} border="2px solid" borderColor="black">
          <Heading fontSize="xl">INFORMASI DATUM</Heading>
          <Image
            src="/maps/batasPerencanaan/informasiDatum_BR.svg"
            alt="Your Image"
            objectFit="contain"
            width="100%"
          />
        </Box>
        <Box w="full" p={4} border="2px solid" borderColor="black">
          <Heading fontSize="xl">LEGENDA</Heading>
          <Image
            src="/maps/pembangunan/legendaPembangunan.svg"
            alt="Your Image"
            objectFit="contain"
            width="80%"
          />
        </Box>
        <Box w="full" p={4} border="2px solid" borderColor="black">
          <Heading fontSize="xl">SUMBER DATA</Heading>
          <VStack>
            <Text fontSize="md" px={2} as="b">
              Data Badan Informasi Geospasial<br/>Peraturan Kepala BIG Nomor 3 Tahun 2016 <br/>Peta RTRW Kabupaten Semarang
              2023-2024
            </Text>
          </VStack>
        </Box>
        <Box w="full" p={4} border="2px solid" borderColor="black">
          <Heading fontSize="xl">DIBUAT OLEH</Heading>
          <VStack>
            <Text fontSize="md" px={2} as="b">
              Laurensia Ayu Anggraeni <br/> Wahyu Cahyaningrum Kusumawati<br/>
              TIM KKN-PPM Universitas Gadjah Mada <br/> Unit JT-005 Periode II - 2024
              <br/>Kecamatan Bandungan
            </Text>
            <Box
              display="flex"
              flexDirection={{ base: "row", sm: "row", md: "column", lg: "row" }}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="/logos/logoUGM.svg"
                alt="Your Image"
                objectFit="contain"
                p={4}
                w={{base:24, md:32}}
              />
              <Image
                src="/logos/logoKKN.svg"
                alt="Your Image"
                objectFit="contain"
                p={4}
                w={{base:24, md:32}}
              />
              <Image
                src="/logos/logoMerawi.svg"
                alt="Your Image"
                objectFit="contain"
                p={4}
                w={{base:24, md:32}}
              />
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default RencanaPembangunan;
