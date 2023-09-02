import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { PageHeader } from "./components/page-header";
import { Grouptitle } from "./components/group-title";
import { Filters } from "./components/filters";

export const Feed = () => {
  return (
    <Box maxWidth={"1200px"} mx={"auto"}>
      <PageHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"10px"}>
        <Grouptitle />
        <Filters />
      </Flex>
    </Box>
  );
};
