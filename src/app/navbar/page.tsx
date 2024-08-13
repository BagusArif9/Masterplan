// components/Navbar.tsx
"use client";
import React from "react";
import {
  Box,
  Flex,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      bg="gray.50"
      mx={{ base: 4, md: 10, lg: 20 }}
      my={4}
      px={{ base: 3, md: 5 }}
      py={2}
      borderRadius="xl"
      boxShadow="2xl"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Image src="/logos/logoMerawi.svg" alt="Logos" maxW={{ base: 10, md: 14 }} />
        </Box>
        {isMobile ? (
          <IconButton
            ref={btnRef}
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
          />
        ) : (
          <Flex alignItems="center">
            <Stack direction="row" spacing={{ base: 2, md: 4, lg: 7 }}>
              <Button onClick={() => router.push("/masterPlan")}>
                Master Plan
              </Button>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Pemetaan Area
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => router.push("/peta/batasRencana")}>
                    Peta Batas Rencana Agrowisata
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/peta/jaringanJalan")}>
                    Peta Jaringan Jalan Agrowisata 
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/peta/konturTopografi")}>
                    Peta Kontur Topografi Agrowisata
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/peta/lahanExiating")}>
                    Peta Lahan Existing Agrowisata
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/peta/rencanaPembangunan")}>
                    Peta Lahan Rencana Pembangunan Agrowisata
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button onClick={() => router.push("/3DMaps")}>3D Maps</Button>
            </Stack>
          </Flex>
        )}
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              <Button onClick={() => { router.push("/masterPlan"); onClose(); }}>
                Master Plan
              </Button>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Pemetaan Peta
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => { router.push("/peta/batasRencana"); onClose(); }}>
                    Peta Batas Rencana Agrowisata
                  </MenuItem>
                  <MenuItem onClick={() => { router.push("/peta/jaringanJalan"); onClose(); }}>
                    Peta Jaringan Jalan Agrowisata 
                  </MenuItem>
                  <MenuItem onClick={() => { router.push("/peta/konturTopografi"); onClose(); }}>
                    Peta Kontur Topografi Agrowisata
                  </MenuItem>
                  <MenuItem onClick={() => { router.push("/peta/lahanExiating"); onClose(); }}>
                    Peta Lahan Exiating Agrowisata
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button onClick={() => { router.push("/3DMaps"); onClose(); }}>
                3D Maps
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
