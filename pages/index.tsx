import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  textDecoration,
} from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Container maxW="container.xl">
      <title> Blocksafe </title>
      {/* Hero Section */}

      <Box as="section" h={"100vh"}>
        <Center height="100%" flexDirection="column">
          <Text
            fontSize="4xl"
            mb={4}
            fontWeight={"bold"}
            fontFamily={"monospace"}
            bgGradient="linear(to-r, green.200, pink.500)"
            bgClip="text"
          >
            Welcome to Blocksafe, the future of blockchain security.
          </Text>
          <Text fontSize="xl" fontWeight={"semibold"}>
            Secure, Transparent, Immutable.
          </Text>
          <Button
            mt={10}
            bgGradient="linear(to-r, teal.500, green.500)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
            size="lg"
            onClick={() => (window.location.href = "/dashboard")}
          >
            Launch App
          </Button>
        </Center>
      </Box>
    </Container>
  );
};

export default LandingPage;
