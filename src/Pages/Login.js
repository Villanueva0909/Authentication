import { Box, Heading, HStack, VStack } from "@chakra-ui/layout";
import { Checkbox, FormControl, FormLabel, Input, Button, } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar"

export function Login() {
  return (
    <>
    <Navbar />
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[15, "vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      BorderRadius={20}
      rounded="lg"
      boxShadow="dark-lg"
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading color="red">Just Lend</Heading>
        </VStack>

        <FormControl>
          <FormLabel>E-mail Address</FormLabel>
          <Input rounded="lg" variant="filled" type="password"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input rounded="lg" variant="filled" type="password"></Input>
        </FormControl>
        <HStack w="full" justify="space-between">
          <Checkbox>Remember Me</Checkbox>
          <Button variant="link" colorScheme="red">
            Forgot Password?
          </Button>
        </HStack>
      </VStack>
      <Button
        mt={["5"]}
        rounded="lg"
        colorScheme="red"
        w={["full"]}
        alignSelf="center"
      >
        LOGIN
      </Button>
      <Button
        mt={["5"]}
        rounded="lg"
        colorScheme="red"
        w={["full"]}
        alignSelf="center"
        variant="outline"
      >
        SIGNUP
      </Button>
    </Box>
    </>
  );
}
