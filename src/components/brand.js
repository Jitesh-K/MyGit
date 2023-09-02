import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { Image } from '@chakra-ui/image';

export const Brand = () => {
    return (<Flex alignItems={'center'}>
        <Image boxSize='80px' src='/logo.svg' />
        <Box ml='10px'>
            <Heading fontSize={'24px'}>TopGit</Heading>
            <Text color={'gray.600'}>Most starred projects on github</Text>
        </Box>
    </Flex>);
}