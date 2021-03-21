import React from 'react'
import { Box, Link, Button, Text, Flex, Image, Center } from '@chakra-ui/react'
import Timeline from '../components/timeline'
import { colors } from '../constants/colors'

const references = [
  { author: 'someone idk',
    topic: 'Here is the topic',
    url: 'https://worldhistoryofgoverning.now.sh',
  }
]

const subTitle = "World History of Governing"
const Title = "We explains governing systems in the easiest way. We presents"

const TextPurpose = "We believed that politics is everywhere. It is in every aspect imaginable. Sometimes, Politics can be as easy as choose want you want, but some other times, it affects the whole world. To choose the right thing for oneself or the community, it usually involves distinguishing between multiple political ideology. Understanding the belief behind those ideology can also be a good anti-fake-news. Here, we present you with a 5-minute politics."
const textDisclaimer1 = "No actual rigid boundary are defined to seperate each ideology from each other. Many events lie between the boundary, and thus may be considered as one or the other. Each ideology share common belief in some aspects, but is very far apart in the other aspects. Socialism is somewhat close to communism as they share common history, but then, socialism is also close to liberalism in the aspect of anti-anarchism or demolishing central power. Liberlism resembles capitalism economics since it believe in individual ability and rights of private ownership. However, capitalism is on the opposite side of communism since the former is ruled by competition of individual, and the later is driven by workers as a community."
const textDisclaimer2 = "We hereby say that our work is not a clear cut to define the effect of each ideology. In fact, many events are legacy of multiple ideas. However, we present this basically to make distinction between them. This is based totally on our understanding toward each event and the intention behind each one of them."

const Page = () => (
  <Box py={20} pt={10}>
    <Box px={20} pt={20}>
      <Text fontSize="2xl">{Title}</Text>
      <Text fontSize="6xl">{subTitle}</Text>
    </Box>

    <Box px={20} py={10}>
      <Flex>
        <Box w="45%">
          <Image src="/assets/index1.jpg"/>
        </Box>
        <Box w="45%" ml="5%">
          <Text fontSize="4xl">Why Should You Care?</Text>
          <Text fontSize="2xl" mt={15}>{TextPurpose}</Text>
        </Box>
      </Flex>
    </Box>

    <Box px={20} py={10} bg="gray.700">
      <Center>
        <Text fontSize="4xl"> What Are They?</Text>
      </Center>
      {/* <Text fontSize="xl"> Click to learn what is each ideology and how did it originate </Text> */}
      <Center>
      <Box>
          {['communism', 'liberalism', 'capitalism', 'socialism'].map((system) => (
            <Link 
              href={`/system/${system}`}
              style={{textDecoration: 'none'}}
            >
              <Button 
                rounded={0}
                m={5} 
                py={150}
                px={30}
                bg={colors[system].shade} 
                color={colors[system].tint}
                _hover={{
                  background: colors[system].main,
                  color: "black",
                }}
              >
                {system}
              </Button>
            </Link>
          ))
          }
      </Box>
      </Center>
    </Box>
    
    <Box px={20} py={10}>
      <Flex>
        <Box w="45%">
          <Text fontSize="5xl">Do They</Text>
          <Text fontSize="5xl">Affect Us?</Text>
          <Text fontSize="3xl" mt={25}>Click each one to learn what have each ideology given to the humanity</Text>
        </Box>
        <Box w="45%" ml="5%">
          <Image src='/assets/index1.jpg'/>
        </Box>
      </Flex>
      <Timeline />
    </Box>

    <Box px={20} py={10}>
      <Text fontSize="4xl">Difficulties and Disclaimer</Text>
      <Text fontSize="xl" mt={15}>{textDisclaimer1}</Text>
      <Text fontSize="xl" mt={15}>{textDisclaimer2}</Text>
    </Box>

    <Box px={20} py={10}>
      <Text fontSize="4xl">References</Text>
      <Box>
        {
          references.map(ref => 
            <Text fontSize="xl"> {ref.author} . {ref.topic} . {ref.url} </Text>
          )
        }
      </Box>
    </Box>

  </Box>
)

export default Page
