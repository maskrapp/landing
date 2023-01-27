import { Badge, Box, Button, Flex, HStack, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box w="full" p="4">
      <Flex
        justify="space-between"
        alignItems="center"
        flex="1"
      >
        <HStack>
          <Text fontWeight="700">Maskr</Text>
          <Badge colorScheme="blue">Alpha</Badge>
        </HStack>
        <Button
          variant="outline"
          colorScheme="blue"
          px="5"
          onClick={() => window.location.assign("https://dash.maskr.app")}
        >
          Sign in
        </Button>
      </Flex>
    </Box>
  );
};
