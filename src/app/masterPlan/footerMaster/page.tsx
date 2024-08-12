"use client";
import React from 'react';
import { Box, Grid, GridItem, Image, Text, ChakraProvider, VStack, HStack } from '@chakra-ui/react';

const FooterMaster: React.FC = () => {
  return (
    <ChakraProvider>
      <Box
        as="footer"
        height={{ base: 'auto', md: '66vh' }}
        minHeight={{ base: '66vh', md: '66vh' }}
        bg="black"
        color="white"
        px={{ base: 4, md: 8 }}
        py={{ base: 6, md: 12 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          width="100%"
          maxW="1200px"
          gap={8}
          alignItems="start"
        >
          <GridItem>
            <Image
              src="/logos/logoKecamatan.svg"
              alt="Main Logo"
              width="150px"
              height="auto"
              mb={{ base: 4, md: 0 }}
            />
          </GridItem>
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Text fontSize="lg" fontWeight="bold">
                Alamat
              </Text>
              <Text>
                Bandungan, Kabupaten Semarang, Jawa tengah
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                Informasi Pembuat Website
              </Text>
              <Text>
                Dibuat oleh: Bagus Arif Arikusworo
              </Text>
              <HStack spacing={4} mt={4}>
                <Image
                  src="/logos/logoUGM.svg"
                  alt="Logo 1"
                  width="50px"
                  height="auto"
                />
                <Image
                  src="/logos/logoKKN.svg"
                  alt="Logo 2"
                  width="50px"
                  height="auto"
                />
                <Image
                  src="/logos/logoMerawi.svg"
                  alt="Logo 3"
                  width="50px"
                  height="auto"
                />
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
        <Text mt={8} textAlign="center">
          &copy; {new Date().getFullYear()} Merawi Pangeran 2024 UGM.
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default FooterMaster;
