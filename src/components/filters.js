import React from "react";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import languages from "../data/languages.json";

export const Filters = () => {
  return (
    <Flex>
      <Menu>
        <MenuButton as={Button} leftIcon={<FaAngleDown />}>
          Languages
        </MenuButton>
        <MenuList>
          {languages.map((x) => (
            <MenuItem>{x.title}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
