import React from 'react'
import { Box, Link, Button } from '@chakra-ui/react'


const Page = () => (
  <Box p={5}>
    Introduction page here
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
