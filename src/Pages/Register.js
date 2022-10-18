import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { Checkbox, FormControl, FormLabel, Input } from "@chakra-ui/react";

export function Register() {
  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[20, "vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      BorderRadius={20}
      rounded="lg"
      boxShadow="dark-lg"
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading>Registration</Heading>
        </VStack>
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
    
      </HStack>
    </Box>
  );
}
