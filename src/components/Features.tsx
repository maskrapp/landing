import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Features = () => {
  return (
    <Box id="features" p={6}>
      <Heading textAlign={"center"} fontSize={"3xl"}>Features</Heading>
      <Container maxW={"6xl"} mt={8}>
        <SimpleGrid
          w="full"
          alignItems="center"
          columns={{ base: 1, md: 2, lg: 2 }}
          spacing={10}
        >
          <Feature
            title="Feature"
            description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          />
          <Feature
            title="Feature"
            description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          />
          <Feature
            title="Feature"
            description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          />
          <Feature
            title="Feature"
            description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const Feature = (
  { title, description }: {
    title: string;
    description: string;
  },
) => {
  return (
    <VStack
      p="8"
      bgColor="gray.800"
      rounded="lg"
      spacing="6"
    >
      <Text textAlign="center" fontWeight="extrabold" fontSize="lg">
        {title}
      </Text>
      <Text textAlign="center" color="gray.500">
        {description}
      </Text>
    </VStack>
  );
};
