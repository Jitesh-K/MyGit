import React, { useEffect, useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/layout";
import { PageHeader } from "./components/page-header";
import { Grouptitle } from "./components/group-title";
import { Filters } from "./components/filters";
import { Repo } from "./components/repo";
import { Button, Text } from "@chakra-ui/react";
import moment, { months } from "moment/moment";
import { useFetch } from "use-http";

export const Feed = () => {
  const { loading, error, get } = useFetch("https://api.github.com");
  const [viewType, setViewType] = useState("grid");
  const [dateJump, setDateJump] = useState("Day");
  const [language, setLanguage] = useState();
  const [languages, setLanguages] = useState([]); // TODO: Check this
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(moment().subtract(1, "day").format());

  useEffect(() => {
    setEndDate(moment().subtract(1, "day").format());
    setStartDate(moment().subtract(1, dateJump).format());
  }, [dateJump]);

  useEffect(() => {
    if (!startDate) return;
    try {
      (async () => {
        const response = await get("/users/jitesh-k/repos");
        const allLanguages = Array.from(
          new Set(
            response.filter((x) => x.language !== null).map((y) => y.language)
          )
        );
        setLanguages(allLanguages.map((x) => ({ title: x, value: x })));
      })();
    } catch (error) {}
  }, [startDate, get]);

  return (
    <Box maxWidth={"1200px"} mx={"auto"}>
      <PageHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"10px"}>
        <Grouptitle />
        <Filters
          viewType={viewType}
          onViewChange={setViewType}
          dateJump={dateJump}
          onDateJump={setDateJump}
          language={language}
          languages={languages}
          onLanguageChange={setLanguage}
        />
      </Flex>
      <SimpleGrid
        columns={viewType === "list" ? 1 : 3}
        spacing={"15px"}
        mt={"10px"}
      >
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
        <Repo isListView={viewType === "list"} />
      </SimpleGrid>
      <Flex alignItems={"center"} justifyContent={"center"} my={"20px"}>
        <Button bg={"blue.500"}>
          <Text color={"white"}>Load new group</Text>
        </Button>
      </Flex>
    </Box>
  );
};
