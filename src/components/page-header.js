import React from "react";
import { Button } from '@chakra-ui/button';
import { HStack } from "@chakra-ui/layout"
import {FaGithub, FaChrome, FaTwitter} from 'react-icons/fa';

export const PageHeader = () => {
    return (<HStack>
        <Button leftIcon={<FaGithub />}>View Source</Button>
        <Button leftIcon={<FaChrome />} colorScheme='red'>Use Extension</Button>
        <Button leftIcon={<FaTwitter />} colorScheme='purple'>Tweet</Button>
    </HStack>);
}