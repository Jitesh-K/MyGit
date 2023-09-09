import React, { useEffect, useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/layout";
import { PageHeader } from "./components/page-header";
import { Grouptitle } from "./components/group-title";
import { Filters } from "./components/filters";
import { Repo } from "./components/repo";
import moment from "moment";
import { useFetch } from "use-http";

export const Feed = () => {
  const { get } = useFetch("https://api.github.com");
  const [viewType, setViewType] = useState("grid");
  const [dateJump, setDateJump] = useState({
    title: "Last 24 Hours",
    unit: 1,
    duration: "day",
  });
  const [language, setLanguage] = useState();
  const [languages, setLanguages] = useState([]); // TODO: Check this
  const [createDate, setCreateDate] = useState("");

  useEffect(() => {
    console.log(dateJump);
    setCreateDate(moment().subtract(dateJump.unit, dateJump.duration).format());
  }, [dateJump]);

  useEffect(() => {
    if (!createDate) return;
    try {
      (async () => {
        const response = await get("/users/jitesh-k/repos");
        console.log(createDate);
        if (response.length) {
          console.log(
            response.map((x) => {
              if (x.created_at && moment(createDate).isAfter(x.created_at)) {
                return x;
              }
              return x.name;
            })
          );
          const allLanguages = Array.from(
            new Set(
              response.filter((x) => x.language !== null).map((y) => y.language)
            )
          );
          setLanguages(allLanguages.map((x) => ({ title: x, value: x })));
        }
      })();
    } catch (error) {}
  }, [createDate, get]);

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
    </Box>
  );
};
