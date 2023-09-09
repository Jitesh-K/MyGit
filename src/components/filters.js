import React from "react";
import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import { FaCalendar, FaList, FaTable } from "react-icons/fa";
import languages from "../data/languages.json";

export const Filters = ({
  viewType,
  onViewChange,
  dateJump,
  onDateJump,
  language,
  languages,
  onLanguageChange,
}) => {
  return (
    <HStack>
      <Select
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
        bg={"white"}
      >
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.title}
          </option>
        ))}
      </Select>
      <Menu>
        <MenuButton
          as={Button}
          bg={"white"}
          borderWidth={"thin"}
          pl={"5"}
          pr={"20"}
          fontWeight={"400"}
          leftIcon={<FaCalendar />}
        >
          <Box as="span" textTransform={"capitalize"}>
            {dateJump}
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => onDateJump("day")}>Daily</MenuItem>
          <MenuItem onClick={() => onDateJump("week")}>Weekly</MenuItem>
          <MenuItem onClick={() => onDateJump("month")}>Monthly</MenuItem>
          <MenuItem onClick={() => onDateJump("year")}>Yearly</MenuItem>
        </MenuList>
      </Menu>
      <HStack spacing={0} borderWidth={"thin"} ml>
        <Button
          leftIcon={<FaTable />}
          onClick={() => onViewChange("grid")}
          bg={viewType === "grid" ? "gray.200" : "white"}
        >
          Grid
        </Button>
        <Button
          leftIcon={<FaList />}
          onClick={() => onViewChange("list")}
          bg={viewType === "list" ? "gray.200" : "white"}
        >
          List
        </Button>
      </HStack>
    </HStack>
  );
};
