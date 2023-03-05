'use client'
import { Box, Button, Container, Flex, SimpleGrid, Menu, IconButton, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import Image from 'next/image'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Dao from '../../public/Dao.png'

export default function Header() {
    return (
        <Box bgColor={'blue.600'} boxShadow='lg'>
            <Container maxW={1400}>
                <SimpleGrid templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)' }}>
                    <Box>
                        <Image src={Dao} alt='panaverse-logo' ></Image>
                    </Box>
                    <Flex display={{ lg: 'flex', base: 'none' }} placeItems='center' color='black' fontSize={20} fontWeight='semibold' gap={10}>
                        <Link href='/'>Home</Link>
                        <Link href='/syllabus'>Syllabus</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/contact'>Contact</Link>

                    </Flex>
                    <Box display={{ lg: 'initial', base: 'none' }}>
                        <Link href={'./form'}><Button mt='10px' size='lg' colorScheme='red' float='right'>Enroll</Button>
                        </Link>
                    </Box>
                    <Box pt='20px' display={{ lg: 'none', base: 'initial' }}>
                        <Menu  >
                            <MenuButton float='right'
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem>
                                    Home
                                </MenuItem>
                                <MenuItem>
                                    Syllabus
                                </MenuItem>
                                <MenuItem>
                                    Explore
                                </MenuItem>
                                <MenuItem>
                                    About
                                </MenuItem>
                                <MenuItem>
                                    Contact
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}