import React from 'react';
import { Box, Flex } from "@chakra-ui/layout"
import { Brand } from './components/brand';
import { PageHeader } from './components/page-header';

export const Feed = () => {
    return <Box maxWidth={'1200px'} mx={'auto'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} pt='15px'>
            <Brand />
            <PageHeader />
        </Flex>
    </Box>;
}