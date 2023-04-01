'use client';
import { Heading, Stack, FormControl, FormLabel, Input, Textarea, Button, useBreakpointValue } from "@chakra-ui/react";

function ContactPage() {
  const formWidth = useBreakpointValue({ base: "100%", sm: "80%", md: "60%" });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 4rem)", // adjust the height based on your navbar height
      }}
    >
      <Stack spacing={6} w={formWidth}>
        <Heading>Contact Us</Heading>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter your name" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email address" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter your message" />
        </FormControl>
        <Button colorScheme="blue" width={20}>Submit</Button>
      </Stack>
    </div>
  );
}

export default ContactPage;
