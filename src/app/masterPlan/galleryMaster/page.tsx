import React from "react";
import { Box, Heading, Flex, Image } from "@chakra-ui/react";
import dataImages from "../../../../public/Images.json"; // Adjust the path if necessary

const GalleryMaster: React.FC = () => {
  return (
    <Box as="section" py={20}>
      <Box mx="auto" maxW="7xl">
        <Heading as="h2" size="md" textAlign="center">
          Gallery
        </Heading>
        <Flex mt={5} wrap="wrap" justifyContent="center">
          {dataImages.map((imageData, index) => (
            <Image
              key={imageData.id || index} // Fallback to index if id is not unique
              src={imageData.image}
              alt={`Image ${imageData.id}`}
              mx={2}
              my={4}
              borderRadius="md"
              boxSize="200px"
              objectFit="cover"
              flexBasis="calc(20% - 16px)" // 5 images per row
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default GalleryMaster;