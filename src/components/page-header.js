import React from "react";
import { Button } from "@chakra-ui/button";
import { HStack, Flex } from "@chakra-ui/layout";
import { FaGithub, FaChrome, FaTwitter } from "react-icons/fa";
import { Brand } from "./brand";

export const PageHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} pt="15px">
      <Brand />
      <HStack>
        <Button leftIcon={<FaGithub />}>View Source</Button>
        <Button leftIcon={<FaChrome />} colorScheme="red">
          Use Extension
        </Button>
        <Button leftIcon={<FaTwitter />} colorScheme="purple">
          Tweet
        </Button>
      </HStack>
    </Flex>
  );
};
