import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCodeBranch, FaExclamationCircle, FaStar } from "react-icons/fa";
export const Repo = () => {
  return (
    <Box borderWidth={"thin"} bg={"white"} p={"15px"}>
      <Flex mb={"15px"}>
        <Image
          src="https://randomuser.me/api/portraits/med/men/2.jpg"
          w={"35px"}
          h={"35px"}
          rounded={"5px"}
        />
        <Box ml={"10px"}>
          <Heading fontSize={"16px"}>Jitesh Kumar</Heading>
          <Text fontSize={"13px"}>View Profile</Text>
        </Box>
      </Flex>
      <Box mb={"15px"}>
        <Box mb={"10px"}>
          <Heading
            as={"a"}
            href="https://github.com/Jitesh-K/topgit"
            target="_blank"
            color={"purple.700"}
            fontSize={"19px"}
          >
            TopGit
          </Heading>
          <Text color={"gray.600"} fontSize={"14px"}>
            Built by &middot;{" "}
            <Link
              fontWeight={"bold"}
              href="https://github.com/Jitesh-K"
              target="_blank"
            >
              Jitesh Kumar
            </Link>
            &middot; Jun 15, 2020
          </Text>
        </Box>
        <Text fontSize={"14px"} color={"gray.900"}>
          List the most starred projects on github
        </Text>
      </Box>
      <HStack spacing={'10px'}>
        <Button
          as={"a"}
          cursor={"pointer"}
          leftIcon={<FaStar />}
          variant={"link"}
          fontSize={"14px"}
          iconSpacing={"4px"}
          _hover={{textDecoration: 'none'}}
        >
          123
        </Button>
        <Button
          as={"a"}
          cursor={"pointer"}
          leftIcon={<FaCodeBranch />}
          variant={"link"}
          fontSize={"14px"}
          iconSpacing={"4px"}
          _hover={{textDecoration: 'none'}}
        >
          123
        </Button>
        <Button
          as={"a"}
          cursor={"pointer"}
          leftIcon={<FaExclamationCircle />}
          variant={"link"}
          fontSize={"14px"}
          iconSpacing={"4px"}
          _hover={{textDecoration: 'none'}}
        >
          123
        </Button>
      </HStack>
    </Box>
  );
};
