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

export const Repo = ({ repo, isListView }) => {
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
            <Image src={repo.image} w={"35px"} h={"35px"} rounded="5px" />
            <Box ml="10px">
              <Heading fontSize="16px">{repo.name}</Heading>
              <Text fontSize="13px">View profile</Text>
            </Box>
          </Flex>
        )}

        <Box mb="15px" flex={1}>
          <Box mb="10px">
            <Flex fontSize="19px" fontWeight={700} color="purple.700" mb="3px">
              {isListView && (
                <>
                  <Text as="a" href={repo.url} target="_blank">
                    {repo.user_name}
                  </Text>
                  &nbsp;/&nbsp;
                </>
              )}
              <Text as="a" href={repo.url} target="_blank">
                {repo.project}
              </Text>
            </Flex>
            <Text fontSize="14px" color="gray.600">
              <Box as={"span"} d={["none", "none", "inline", "inline"]}>
                Built by &middot;{" "}
                <Link fontWeight={600} href={repo.url} target="_blank">
                  {repo.user_name}
                </Link>{" "}
                &middot;
              </Box>{" "}
            </Text>
          </Box>

          <Text fontSize="14px" color="gray.900">
            {repo.description}
          </Text>
        </Box>

        <HStack spacing="10px">
          <Button
            as="a"
            href={repo.url}
            cursor="pointer"
            leftIcon={<FaStar />}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            target="_blank"
            _hover={{ textDecor: "none" }}
          >
            {repo.watchers}
          </Button>
          <Button
            as="a"
            cursor="pointer"
            href={repo.url}
            leftIcon={<FaCodeBranch />}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            target="_blank"
            _hover={{ textDecor: "none" }}
          >
            {repo.fork}
          </Button>
          <Button
            as="a"
            cursor="pointer"
            href={repo.url}
            target="_blank"
            leftIcon={<FaExclamationCircle />}
            variant="link"
            fontSize="13px"
            iconSpacing="4px"
            _hover={{ textDecor: "none" }}
          >
            {repo.issues}
          </Button>
        </HStack>
      </Flex>
      {isListView && (
        <Image src={repo.image} w={"105px"} h={"105px"} rounded="100%" />
      )}
    </Flex>
  );
};
