'use client'
import { Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Home from '../components/Home'
import { cards, core } from '../components/database'

export default function page() {
  return (
    <>
        <Box pt='30px' bgColor={'blue.100'}>
        <Container maxW={1500}>
          <Center flexDir='column'>
            <Heading size='2xl' mb={'8'} color='blue.700'>Course Syllabus</Heading>
            <Text mt='20px' textAlign='center' px='130px' fontWeight={'medium'}>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
          </Center>
          <Center flexDir='column' mt='20px'>
            <Heading mb={'7'}>Common Track (First 6 months)</Heading>
            <Text textAlign='center' px='130px'>Every participant of the program will start by completing the following three core courses</Text>
          </Center>
          
          <Center>
            <Flex mt='30px' gap='20px'>
              {core.map((elem) => ( 
              <Box textAlign='center' p='30px' bgColor={'green.300'} boxShadow='dark-lg' borderRadius='20px' width='290px' key={elem.id}>
                <Heading>{elem.heading}</Heading>
                <Text pt='5px'>{elem.text}</Text>
              </Box>
              ))}
            </Flex>
          </Center>
        </Container>



        <Container mb={'2'} maxW={1400} mt='30px' bgSize='cover' bgAttachment='fixed'>
          {cards.map((elem) => (
            <Box pt='40px' key={elem.id}>
              <Center flexDir='column' mt='50px'>
                <Heading size='xl'>{elem.heading1}</Heading>
                <Text fontWeight='medium' mt='20px' textAlign='center' px='130px'>{elem.text1}</Text>
              </Center>
              <Center>
                <Flex mt='30px' gap='20px'>
                  <Box bgColor='red.400' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px'>
                    <Heading>{elem.heading2}</Heading>
                    <Text fontWeight='medium' pt='5px'>{elem.text2}</Text>
                  </Box>
                  <Box bgColor='red.400' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px'>
                    <Heading>{elem.heading3}</Heading>
                    <Text fontWeight='medium' pt='5px'>{elem.text3}</Text>
                  </Box>
                </Flex>
              </Center>
            </Box>
          ))}


        </Container>
      </Box>

    </>
  )
}