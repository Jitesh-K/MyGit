import React from "react";
import { Box, Flex, Heading, Text, HStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export const Brand = () => {
  return (
    <Flex alignItems={"center"}>
      <Image boxSize="80px" src="/logo.svg" />
      <Box ml="10px">
        <Heading fontSize={"24px"}>MyGit</Heading>
        <HStack>
          <Text color={"gray.600"}>
            Custom view listing my Repositories: Jitesh-K
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
};
