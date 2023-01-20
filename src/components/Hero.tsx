import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Container id="hero" maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pt={{ base: 20, md: 24 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "1xl", sm: "3xl", md: "5xl" }}
          lineHeight={"110%"}
        >
          Anonymous Email Forwarding Service
        </Heading>
        <Text color={"gray.500"}>
          a secure and efficient way to manage your email. With our service, you
          can easily forward emails from multiple accounts to a single,
          centralized inbox while maintaining your anonymity.
        </Text>
        <HStack justifyContent="center">
          <Button
            colorScheme={"blue"}
            px={6}
            py="6"
            _hover={{
              bg: "blue.500",
            }}
          >
            Get Started
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
};
