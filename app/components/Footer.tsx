'use client'

import { Box, Container, Grid, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react"
// import Image from "next/image"
import Link from "next/link"
import logo from '../../../public/Dao.png'

export default function Footer() {
    return (
        <Box bg='blue.600'>
            <Container maxW={1300}>
                <SimpleGrid textAlign={{lg:'start',base:'center'}} spacing='30px' py='60px' templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}>
                    <Box >
                        <Heading  pb='20px' color='black'>About Us</Heading>
                        <Image m={{base:'auto',lg:'0'}} src='/Dao.png' alt='Panaverse'></Image>
                        <Text pt='15px' pr={{lg:'40px',base:'0'}} color='gray.800'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread </Text>
                    </Box>
                    <Box>
                        <Heading color='black'>Useful Links</Heading>
                        <Grid pt='40px' color='gray.800' gap={'2'} fontWeight={'bold'}>
                            <Link href='/'>Home</Link>
                            <Link href='/syllabus'>Syllabus</Link>
                            <Link href='/about'>About</Link>
                            <Link href='/contact'>Contact</Link>
                        </Grid>
                    </Box>
                    <Box>
                        <Heading color='black'>Follow Us</Heading>
                        <Grid pt='40px' color='gray.800' fontWeight={'bold'} gap={'2'}>
                            <Link href='/https://www.facebook.com/groups/piaic/'>Facebook</Link>
                            <Link href='/https://pk.linkedin.com/company/piaicofficial'>Linkedin</Link>
                            <Link href='/https://twitter.com/piaicofficial?'>Twitter</Link>
                            <Link href='/https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg'>Youtube</Link>
                            <Link href='/https://github.com/piaic-official'>GitHub</Link>
                        </Grid>
                    </Box>
                    <Box>
                        <Heading color='black'>Contact Us</Heading>
                        <Grid pt='40px' color='gray.800' fontWeight={'bold'} gap={'2'}>
                            <Link href='/'>+92-308-2220203</Link>
                            <Link href='/'>piaic@gmail.com</Link>
                            <Link href='/'>Karachi, Pakistan</Link>
                        </Grid>
                    </Box>

                </SimpleGrid>

            </Container>
        </Box>
    )
}