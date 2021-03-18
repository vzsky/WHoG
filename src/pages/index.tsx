import React from 'react'
import { Box, Link, Button, Text } from '@chakra-ui/react'

const references = [
  { author: 'someone idk',
    topic: 'Here is the topic',
    url: 'https://worldhistoryofgoverning.now.sh',
  }
]

const TextWelcome = "Welcome to the website ..."
const TextPurpose = "We believed that politics is everywhere. It is in every aspect imaginable. Sometimes, Politics can be as easy as choose want you want, but some other times, it affects the whole world. To choose the right thing for oneself or the community, it usually involves distinguishing between multiple political ideology. Understanding the belief behind those ideology can also be a good anti-fake-news. Here, we present you with a 5-minute politics."

const Page = () => (
  <Box p={20}>

    <Text fontSize="5xl">TITLE</Text>
    <Text fontSize="lg">{TextWelcome}</Text>

    <Text fontSize="3xl">Why Should I Care?</Text>
    <Text fontSize="lg">{TextPurpose}</Text>

    <Text fontSize="3xl"> What Are They?</Text>
    <Text fontSize="lg"> Click to learn what is each ideology and how did it originated </Text>
    <Box>
      <Link href="/system/communism"><Button>communism</Button></Link>
      <Link href="/system/liberalism"><Button>liberalism</Button></Link>
      <Link href="/system/socialism"><Button>socialism</Button></Link>
      <Link href="/system/capitalism"><Button>capitalism</Button></Link>
    </Box>
    
    <Text fontSize="3xl">How Does It Affect Me?</Text>
    <Text fontSize="lg">Learn what have each ideology given or affected the humanity</Text>
    <Link href="/timeline"><Button>timeline</Button></Link>

    <Text fontSize="3xl">References</Text>
    <Box>
      {
        references.map(ref => 
          <Text fontSize="lg"> {ref.author} . {ref.topic} . {ref.url} </Text>
        )
      }
    </Box>

  </Box>
)

export default Page
