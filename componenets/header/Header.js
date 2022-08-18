import React from 'react';
import { Box, Stack, Flex, Icon, useDisclosure, Spacer, Image, Link } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const Header = (props) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            padding={6}
            justifyContent='center'
            transition={'all 0.2s ease-in-out'}
            backgroundColor={isOpen ? '#083B4F' : ''}
            color={'brand.700'}
            {...props}
        >
            <Flex align='center' mr={5}>
                <Image w='130px' src='/Images/logo.png' />
            </Flex>

            <Spacer />

            <Box cursor='pointer' display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
                <Icon as={isOpen ? CloseIcon : HamburgerIcon} w={isOpen ? '22px' : '30px'} h='auto' />
            </Box>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems='center'
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
                spacing={4}
                justifyContent={'right'}
                fontWeight={600}
            >
                <Box>
                    <NextLink href='/' passHref>
                        <Link
                            _hover={{
                                borderBottom: '1px solid',
                            }}
                        >
                            Home
                        </Link>
                    </NextLink>
                </Box>
                <Box>
                    <NextLink href='/coming-soon' passHref>
                        <Link
                            _hover={{
                                borderBottom: '1px solid',
                            }}
                        >
                            About
                        </Link>
                    </NextLink>
                </Box>
                <Box>
                    <NextLink href='/coming-soon' passHref>
                        <Link
                            _hover={{
                                borderBottom: '1px solid',
                            }}
                        >
                            Blog
                        </Link>
                    </NextLink>
                </Box>
                <Box>
                    <NextLink href='/coming-soon' passHref>
                        <Link
                            _hover={{
                                borderBottom: '1px solid',
                            }}
                        >
                            E-learning
                        </Link>
                    </NextLink>
                </Box>
            </Stack>
            <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} mt={{ base: 4, md: 0 }}></Box>
        </Flex>
    );
};

export default Header;
