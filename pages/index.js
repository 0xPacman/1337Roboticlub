import { Box, Container, Text, Stack, Image } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '../componenets/header/Header';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
    return (
        <Box bgGradient='linear(to-r, #102D40, #014011)' minH='100vh' overflowY='hidden'>
            <Head>
                <title>1337 Robotics club</title>
                <meta
                    name='description'
                    content='We are a team-oriented competitive club in which students work together to build robots and program them to compete in events against teams from other schools.'
                />
                <link rel='icon' href='/Images/1RC.svg' />
            </Head>
            <Header />
            <Container maxW={{ base: 'container.xl' }} px={10}>
                <Box position={'relative'} top='10%' w='100%' overflow='hidden'>
                    <Text w='100%' whiteSpace='pre' opacity={0.03} color='brand.700' fontSize={{ base: '200px', md: '280px' }} height={'400px'}>
                        1337
                    </Text>
                </Box>
                <Stack
                    mt='-400px'
                    minH='80vh'
                    justifyContent='center'
                    direction={{ base: 'column-reverse', md: 'row' }}
                    //   bg='red.100'
                    alignItems='center'
                    pb={{ base: '20px' }}
                >
                    <Box w='full'>
                        <Text fontSize={{ base: '40px', md: '60px', xl: '80px' }} color='brand.700' lineHeight={1.18}>
                            We build nice things!
                        </Text>
                        <Stack w={{ base: 'full', md: '70%' }} fontSize='20px' pt={2}>
                            <Text color='brand.800'>
                                Robotics club is an extracurricular way for us to explore robotics in a more in-depth way
                                <Text as='span' color='brand.700'>
                                    {' '}
                                    <br />
                                    We typically focus on problem-solving and logical thinking.
                                </Text>{' '}
                            </Text>
                        </Stack>
                        <ButtonGroup gap='4' mt={6} flexWrap={'wrap'}>
                            <Button bg='brand.700' color='brand.900' colorScheme='whiteAlpha' px={9}>
                                <Link href='https://1337.ma/'>Read more about 1337</Link>
                            </Button>
                            <Button colorScheme='blackAlpha' color='brand.700' bg='#083B4F' px={9}>
                                <Link href='/coming-soon'>Find out what we do!</Link>
                            </Button>
                        </ButtonGroup>
                    </Box>

                    <Box w='full' overflow='hidden'>
                        <Image src='/Images/ard.png' alt='ardiuno' rounded='md' />
                        <Stack direction='row' display={{ base: 'none', md: 'flex' }}>
                            <Image src='/Images/icon-x.svg' alt='icon' w='150px' />
                            <Image opacity={0.2} src='/Images/icon-x.svg' alt='icon' w='150px' />
                            <Image src='/Images/icon-x.svg' alt='icon' w='150px' />
                            <Image opacity={0.2} src='/Images/icon-x.svg' alt='icon' w='150px' />
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
