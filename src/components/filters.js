import React from "react";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import languages from "../data/languages.json";

export const Filters = () => {
  return (
    <Flex>
      <Select>
        {languages.map((language) => (
          <option value={language.value}>{language.title}</option>
        ))}
      </Select>
      {/* <Menu>
        <MenuButton as={Button} leftIcon={<FaAngleDown />}>
          Languages
        </MenuButton>
        <MenuList>
          {languages.map((x) => (
            <MenuItem>{x.title}</MenuItem>
          ))}
        </MenuList>
      </Menu> */}
    </Flex>
  );
};
