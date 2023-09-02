import React from 'react';
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/layout"
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import {FaGithub, FaChrome, FaTwitter} from 'react-icons/fa';

export const Feed = () => {
    return <Box maxWidth={'1200px'} mx={'auto'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} pt='15px'>
            <Flex alignItems={'center'}>
                <Image boxSize='80px' src='/logo.svg' />
                <Box ml='10px'>
                    <Heading fontSize={'24px'}>TopGit</Heading>
                    <Text color={'gray.600'}>Most starred projects on github</Text>
                </Box>
            </Flex>
            <HStack>
                <Button leftIcon={<FaGithub />}>View Source</Button>
                <Button leftIcon={<FaChrome />} colorScheme='red'>Use Extension</Button>
                <Button leftIcon={<FaTwitter />} colorScheme='purple'>Tweet</Button>
            </HStack>
        </Flex>
    </Box>;
}