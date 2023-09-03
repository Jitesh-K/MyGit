import { Box } from "@chakra-ui/layout";
import { React } from "react";
import { Feed } from "./feed";

export const App = () => {
  return (
    <Box width="100vw" minHeight={"100vh"} bg={"gray.100"}>
      <Feed />
    </Box>
  );
};
