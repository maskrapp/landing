import { Box, Button, Flex, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box w="full" p="4">
      <Flex
        justify="space-between"
        alignItems="center"
        flex="1"
      >
        <Text fontWeight="700">Maskr</Text>
        <Button variant="outline" px="5">
          Login
        </Button>
      </Flex>
    </Box>
  );
};
