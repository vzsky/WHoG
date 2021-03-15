import React from 'react'
import { Box, Link, Button, Text } from '@chakra-ui/react'

const TextWelcome = "Welcome to the title page, "
const TextPurpose = "We created this website to help demonstrate the difference of the systems because it is nessesary that people know because ..."

const Page = () => (
  <Box p={20}>
    <Text fontSize="5xl">TITLE</Text>
    <Text fontSize="lg">{TextWelcome}</Text>
    <Text fontSize="2xl">WHY?</Text>
    <Text fontSize="lg">{TextPurpose}</Text>
    <Text fontSize="2xl"> LET'S START! </Text>
    <Box>
      <Link href="/timeline"><Button>timeline</Button></Link>
      <Link href="/system/communism"><Button>communism</Button></Link>
      <Link href="/system/liberalism"><Button>liberalism</Button></Link>
      <Link href="/system/socialism"><Button>socialism</Button></Link>
      <Link href="/system/capitalism"><Button>capitalism</Button></Link>
    </Box>
  </Box>
)

export default Page
