import React, { useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/layout";
import { PageHeader } from "./components/page-header";
import { Grouptitle } from "./components/group-title";
import { Filters } from "./components/filters";
import { Repo } from "./components/repo";
import { Button, Text } from "@chakra-ui/react";

export const Feed = () => {
  const [viewType, setViewType] = useState('grid');
  return (
    <Box maxWidth={"1200px"} mx={"auto"}>
      <PageHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"10px"}>
        <Grouptitle />
        <Filters onViewChange={setViewType}/>
      </Flex>
      <SimpleGrid columns={viewType === 'list' ? 1 : 3} spacing={'15px'} mt={'10px'}>
        <Repo isListView={viewType === 'list'}/>
        <Repo isListView={viewType === 'list'}/>
        <Repo isListView={viewType === 'list'}/>
        <Repo isListView={viewType === 'list'}/>
        <Repo isListView={viewType === 'list'}/>
        <Repo isListView={viewType === 'list'}/>
        <Repo isListView={viewType === 'list'}/>
        <Repo isListView={viewType === 'list'}/>
        <Repo isListView={viewType === 'list'}/>
      </SimpleGrid>
      <Flex alignItems={'center'} justifyContent={'center'} my={'20px'}>
        <Button bg={'blue.500'}><Text color={'white'}>Load new group</Text></Button>
      </Flex>
    </Box>
  );
};
