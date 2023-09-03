import React from "react";
import {
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

export const Filters = () => {
  return (
    <HStack>
      <Select bg={"white"}>
        {languages.map((language) => (
          <option value={language.value}>{language.title}</option>
        ))}
      </Select>
      <Menu>
        <MenuButton
          as={Button}
          bg={"white"}
          borderWidth={'thin'}
          pl={'5'}
          pr={'20'}
          fontWeight={"400"}
          leftIcon={<FaCalendar />}
        >
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <HStack spacing={0} borderWidth={'thin'} ml>
        <Button leftIcon={<FaTable />} bg={'white'}>Grid</Button>
        <Button leftIcon={<FaList />} bg={'white'}>List</Button>
      </HStack>
    </HStack>
  );
};
