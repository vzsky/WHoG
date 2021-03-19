import React from 'react'
import { Box, Link, Button, Text } from '@chakra-ui/react'
import Timeline from '../components/timeline'
import { colors } from '../constants/colors'

const references = [
  { author: 'someone idk',
    topic: 'Here is the topic',
    url: 'https://worldhistoryofgoverning.now.sh',
  }
]

const TextWelcome = "Welcome to the website ..."
const TextPurpose = "We believed that politics is everywhere. It is in every aspect imaginable. Sometimes, Politics can be as easy as choose want you want, but some other times, it affects the whole world. To choose the right thing for oneself or the community, it usually involves distinguishing between multiple political ideology. Understanding the belief behind those ideology can also be a good anti-fake-news. Here, we present you with a 5-minute politics."
const textDisclaimer1 = "No actual rigid boundary are defined to seperate each ideology from each other. Many events lie between the boundary, and thus may be considered as one or the other. Each ideology share common belief in some aspects, but is very far apart in the other aspects. Socialism is somewhat close to communism as they share common history, but then, socialism is also close to liberalism in the aspect of anti-anarchism or demolishing central power. Liberlism resembles capitalism economics since it believe in individual ability and rights of private ownership. However, capitalism is on the opposite side of communism since the former is ruled by competition of individual, and the later is driven by workers as a community."
const textDisclaimer2 = "We hereby say that our work is not a clear cut to define the effect of each ideology. In fact, many events are legacy of multiple ideas. However, we present this basically to make distinction between them. This is based totally on our understanding toward each event and the intention behind each one of them."

const Page = () => (
  <Box p={20} pt={10}>
    <Box pt={10}>
      <Text fontSize="5xl">TITLE</Text>
      <Text fontSize="lg">{TextWelcome}</Text>
    </Box>

    <Box pt={10}>
      <Text fontSize="3xl">Why Should I Care?</Text>
      <Text fontSize="lg">{TextPurpose}</Text>
    </Box>

    <Box pt={10}>
      <Text fontSize="3xl"> What Are They?</Text>
      <Text fontSize="lg"> Click to learn what is each ideology and how did it originate </Text>
      <Box>
          {['communism', 'liberalism', 'capitalism', 'socialism'].map((system) => (
            <Link href={`/system/${system}`}><Button m={2} bg={colors[system].shade} color={colors[system].tint}>{system}</Button></Link>
          ))
          }
      </Box>
    </Box>
    
    <Box pt={10}>
      <Text fontSize="3xl">How Does It Affect Us?</Text>
      <Text fontSize="lg">Learn what have each ideology given or affected the humanity</Text>
      <Timeline />
    </Box>

    <Box pt={10}>
      <Text fontSize="3xl">Difficulties and Disclaimer</Text>
      <Text fontSize="lg">{textDisclaimer1}</Text>
      <Text fontSize="lg" mt={5}>{textDisclaimer2}</Text>
    </Box>

    <Box pt={10}>
      <Text fontSize="3xl">References</Text>
      <Box>
        {
          references.map(ref => 
            <Text fontSize="lg"> {ref.author} . {ref.topic} . {ref.url} </Text>
          )
        }
      </Box>
    </Box>

  </Box>
)

export default Page
