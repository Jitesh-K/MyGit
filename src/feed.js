import React from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/layout";
import { PageHeader } from "./components/page-header";
import { Grouptitle } from "./components/group-title";
import { Filters } from "./components/filters";
import { Repo } from "./components/repo";
import { Button, Text } from "@chakra-ui/react";

export const Feed = () => {
  return (
    <Box maxWidth={"1200px"} mx={"auto"}>
      <PageHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"10px"}>
        <Grouptitle />
        <Filters />
      </Flex>
      <SimpleGrid columns={3} spacing={'15px'} mt={'10px'}>
        <Repo isListView={false}/>
        <Repo isListView={false}/>
        <Repo isListView={false}/>
        <Repo isListView={false}/>
        <Repo isListView={false}/>
        <Repo isListView={false}/>
        <Repo isListView={false}/>
        <Repo isListView={false}/>
        <Repo isListView={false}/>
      </SimpleGrid>
      <Flex alignItems={'center'} justifyContent={'center'} my={'20px'}>
        <Button bg={'blue.500'}><Text color={'white'}>Load new group</Text></Button>
      </Flex>
    </Box>
  );
};
