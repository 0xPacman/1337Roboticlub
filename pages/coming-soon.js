import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

const ComingSoon = () => {
    return (
        <Box h='100vh' bgGradient='linear(to-r, #102D40, #014011)'>
            <Stack spacing={3} justifyContent='center' alignItems='center' h='full'>
                <Heading color='brand.700'>Coming Soon</Heading>
                <Text textAlign='center' color='brand.800'>
                    We are working hard to get this page up and running.
                </Text>
            </Stack>
        </Box>
    );
};

export default ComingSoon;
