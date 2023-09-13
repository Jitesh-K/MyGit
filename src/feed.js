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
    title: "All Time",
    unit: 100,
    duration: "Year",
  });
  const [language, setLanguage] = useState("All");
  const [languages, setLanguages] = useState([]);
  const [createDate, setCreateDate] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setCreateDate(moment().subtract(dateJump.unit, dateJump.duration).format());
  }, [dateJump]);

  useEffect(() => {
    if (!createDate) return;
    try {
      (async () => {
        const response = await get("/users/jitesh-k/repos");
        if (response.length) {
          setRepos(
            response
              .map((x) => ({
                id: x.id,
                project: x.name,
                description: x.description,
                fork: x.forks_count,
                language: x.language,
                issues: x.open_issues_count,
                watchers: x.watchers_count,
                image: x.owner.avatar_url,
                user_name: x.owner.login,
                isAfter:
                  x.created_at && moment(x.created_at).isAfter(createDate),
                url: x.url,
              }))
              .filter((y) =>
                language !== "All" ? y.language === language : y.isAfter
              )
          );
          const allLanguages = Array.from(
            new Set(
              response.filter((x) => x.language !== null).map((y) => y.language)
            )
          );
          setLanguages(
            ["All", ...allLanguages].map((x) => ({ title: x, value: x }))
          );
        }
      })();
    } catch (error) {}
  }, [createDate, get, language]);

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
        {repos.map((x) => (
          <Repo key={x.id} repo={x} isListView={viewType === "list"} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
