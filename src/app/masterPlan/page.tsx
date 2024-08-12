// MasterPlan.tsx
import React from "react";
import {
  Flex,
  ChakraProvider,
} from "@chakra-ui/react";
import Grids from "./gridMaster/page";
import AboutMaster from "./aboutMaster/page";
import ArtcMaster from "./artcMaster/page";
import FeatureMaster from "./featureMaster/page";
import GalleryMaster from "./galleryMaster/page";
import HeroMaster from "./heroMaster/page";
import ChangeImages from "./changeMaster/page";
import Slider from "./sliderMaster/page";
import FooterMaster from "./footerMaster/page";
import SitePlan from "./sitePlan/page";

const MasterPlan: React.FC = () => {
  return (
    <ChakraProvider>
      <Flex as="section" direction="column" minH="100vh">
        {/* Hero Section  */}
        <HeroMaster />

        {/* Architecture */}
        <ArtcMaster />

        {/* About Section */}
        <AboutMaster/>

        {/* Site Plan  */}
        <SitePlan/>

        {/* Grid Section  */}
        <Grids />

        {/* Architecture */}
        <FeatureMaster />

        {/* Slider */}
        <Slider />

        {/* Change Image  */}
        <ChangeImages />

        {/* Gallery Section */}
        <GalleryMaster />

        {/* Footer Section  */}
        <FooterMaster/>
      </Flex>
    </ChakraProvider>
  );
};

export default MasterPlan;
