import {
  Box,
  Container,
  HStack,
  Link,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
export const Footer = () => {
  return (
    <Box
      pt="20"
      bg={"gray.900"}
      color={"gray.200"}
      w="full"
    >
      <Container
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={"gray.700"}
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Terms of Service</Link>
          <Link href={"#"}>Privacy</Link>
          <Link href={"#"}>Contact</Link>
        </Stack>
        <Text>© 2023 maskr.app</Text>
      </Container>
    </Box>
  );
};
