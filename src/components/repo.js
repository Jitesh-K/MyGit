import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FaCodeBranch, FaExclamationCircle, FaStar } from "react-icons/fa";

export const Repo = ({isListView}) => {

  return (
    <Flex
      borderWidth={1}
      bg="white"
      p="15px"
      rounded="5px"
      alignItems="flex-start"
    >
      <Flex flex={1} flexDir="column">
        {!isListView && (
          <Flex mb="15px" as="a" href="">
            <Image
              src="https://randomuser.me/api/portraits/med/men/2.jpg"
              w={"35px"}
              h={"35px"}
              rounded="5px"
            />
            <Box ml="10px">
              <Heading fontSize="16px">Jitesh Kumar</Heading>
              <Text fontSize="13px">View profile</Text>
            </Box>
          </Flex>
        )}

        <Box mb="15px" flex={1}>
          <Box mb="10px">
            <Flex fontSize="19px" fontWeight={700} color="purple.700" mb="3px">
              {isListView && (
                <>
                  <Text
                    as="a"
                    href="https://github.com/Jitesh-K/topgit"
                    target="_blank"
                  >
                    Jitesh-K
                  </Text>
                  &nbsp;/&nbsp;
                </>
              )}
              <Text
                as="a"
                href="https://github.com/Jitesh-K/topgit"
                target="_blank"
              >
                TopGit
              </Text>
            </Flex>
            <Text fontSize="14px" color="gray.600">
              <Box as={"span"} d={["none", "none", "inline", "inline"]}>
                Built by &middot;{" "}
                <Link
                  fontWeight={600}
                  href="https://github.com/Jitesh-K"
                  target="_blank"
                >
                  Jitesh-K
                </Link>{" "}
                &middot;
              </Box>{" "}
            </Text>
          </Box>

          <Text fontSize="14px" color="gray.900">
            List the most starred projects on github
          </Text>
        </Box>

        <HStack spacing="10px">
          <Button
            as="a"
            href="https://github.com/Jitesh-K"
            cursor="pointer"
            leftIcon={<FaStar />}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            target="_blank"
            _hover={{ textDecor: "none" }}
          >
            44
          </Button>
          <Button
            as="a"
            cursor="pointer"
            href="https://github.com/Jitesh-K"
            leftIcon={<FaCodeBranch />}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            target="_blank"
            _hover={{ textDecor: "none" }}
          >
            34
          </Button>
          <Button
            as="a"
            cursor="pointer"
            href="https://github.com/Jitesh-K"
            target="_blank"
            leftIcon={<FaExclamationCircle />}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            23
          </Button>
        </HStack>
      </Flex>
      {isListView && (
        <Image
          src="https://randomuser.me/api/portraits/med/men/2.jpg"
          w={"105px"}
          h={"105px"}
          rounded="100%"
        />
      )}
    </Flex>
  );
};
