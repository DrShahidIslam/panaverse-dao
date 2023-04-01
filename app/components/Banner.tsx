import { Box, Button, Container, Flex, Heading, Text, Image } from '@chakra-ui/react'
// import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'
import Link from 'next/link'


export default function Banner() {
    return (
        <>
            <Box >
                <RevealWrapper origin='rear' delay={200} duration={3000} distance='500px' reset={true}>
                    <Container maxW={1400}>
                        <Flex pt={{ lg: '150px', base: '30px' }} pb={{ lg: '100px', base: '0' }} px={{ lg: '35px', base: '5px' }} display={{ lg: 'flex', base: 'grid' }}>
                            <Box flexBasis={{ lg: '50%', base: '%' }} px={{ lg: '50px', base: '0' }}>
                                <Heading color='black' size='2xl'>Make Pakistan Great Again</Heading>
                                <Text pt='30px' fontWeight={'medium'}>One Year Panaverse Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                            </Box>
                            <Box mt={{ lg: '-80px', base: '0' }} flexBasis='50%'>
                                <Image src='/pngwing.com.png' alt="Panaverse" width={{ lg: '700', base: '400' }} height={{ lg: '400', base: '300px' }} />
                            </Box>
                        </Flex>

                    </Container>
                </RevealWrapper>

            </Box>

            <Box bgColor={'blue.500'}>
                <Container maxW={1400}>
                    <Flex gap={{ lg: '100px', base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis='50%'>
                            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                                <Image src='/Class.png' alt="Panaverse" width={{ lg: '700', base: '100' }} height={{ lg: '400', base: '200' }} />
                            </RevealWrapper>
                        </Box>
                        <Box flexBasis='50%' pt={{ lg: '80px', base: '10px' }} px={{ lg: '0', base: '5px' }}>
                            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
                                <Heading size='2xl'>Syllabus</Heading>
                                <Text pr={{ lg: '50px', base: "25px" }} pt='15px' fontWeight={'medium'}>The Course includes 6 months of common track followed by 6 months of specialised training. It is specially designed to train the students with the latest technologies</Text>
                                <Link href="/syllabus"><Button mt='10px' size='lg' colorScheme='orange'>Read More</Button></Link>
                            </RevealWrapper>
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <Box bgImage={'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMS1wZC1zYXNpLTAzLmpwZw.jpg?s=CdLIad9DE050V1GoHn558RHCcecOGpn7YBeRX4NtwG0'}>
                <Container maxW={1400}>
                    <Flex gap={{ lg: '100px', base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis='50%' pl={{ lg: '60px', base: '5px' }} pt={{ lg: '80px', base: '30px' }}>
                                <Heading size='2xl'>Enroll Now!</Heading>
                                <Text pr={{ lg: '50px', base: "25px" }} pt='10px'>This program is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each.</Text>
                                <Button mt='15px' size='lg' colorScheme='blue'>Enroll</Button>
                        </Box>
                        <Box flexBasis='50%'>
                                <Image src='/logo2.webp' alt="Panaverse" width={{ lg: '700', base: '100' }} height={{ lg: '400', base: '200' }} />
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}