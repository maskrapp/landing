import {
  Box,
  Button,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

// TODO: make this customizable
const PriceCard = ({}: {}) => {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      <Box py={4} px={12}>
        <Text fontWeight="500" fontSize="2xl">
          Free Tier
        </Text>
        <HStack justifyContent="center">
          <Text fontSize="3xl" fontWeight="600">
            $
          </Text>
          <Text fontSize="5xl" fontWeight="900">
            0
          </Text>
          <Text fontSize="3xl" color="gray.500">
            /month
          </Text>
        </HStack>
      </Box>
      <VStack
        bg={useColorModeValue("gray.50", "gray.700")}
        py={4}
        borderBottomRadius={"xl"}
      >
        <List spacing={3} textAlign="start" px={12}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            unlimited build minutes
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Lorem, ipsum dolor.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            5TB Lorem, ipsum dolor.
          </ListItem>
        </List>
        <Box w="80%" pt={7}>
          <Button w="full" colorScheme="blue" variant="outline">
            Sign in
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export const Pricing = () => {
  return (
    <Box py={12}>
      <Heading as="h1" fontSize="4xl" textAlign="center">
        Pricing
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </Stack>
    </Box>
  );
};
