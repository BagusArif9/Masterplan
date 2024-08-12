// pages/index.tsx
import React from "react";
import Navbar from "./navbar/page";
import Hero from "./hero/page";
import { ChakraProvider } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <ChakraProvider>
      {/* <Navbar /> */}
      <Hero />
    </ChakraProvider>
  );
};

export default Home;
