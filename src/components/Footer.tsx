import {
  Box,
  chakra,
  Container,
  HStack,
  Link,
  Stack,
  Text,
  useBreakpoint,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("whiteAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("whiteAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const bp = useBreakpoint();
  console.log(bp);
  return (
    <Box
      pt="20"
      w="full"
      bg={useColorModeValue("gray.900", "gray.900")}
      color={useColorModeValue("gray.200", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Text>© 2023 maskr.app</Text>
        <HStack
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Privacy</Link>
            <Link href={"#"}>Contact</Link>
          </Stack>
        </HStack>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
