import React from 'react';
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/layout"
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';

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
                <Button>View Source</Button>
                <Button colorScheme='red'>Use Extension</Button>
                <Button colorScheme='purple'>Tweet</Button>
            </HStack>
        </Flex>
    </Box>;
}