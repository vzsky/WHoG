import React from 'react'
import { Box, Link, Button, Text, Flex, Image, Center } from '@chakra-ui/react'
import Timeline from '../components/timeline'
import Header from '../components/header'
import { colors } from '../constants/colors'
import { references } from '../constants/references'

const subTitle = "World History of Governing"
const Title = "We explain governing systems in the easiest way. We present"

const TextPurpose = "We believed that politics is everywhere. It is in every aspect imaginable. Sometimes, Politics can be as easy as choosing want you want, but some other times, it affects the whole world. Choosing the right thing for oneself or the community usually involves distinguishing between multiple political ideologies. Understanding the belief behind that ideology can also be a good anti-fake-news. Here, we present you with a 5-minute politics."
const textDisclaimer1 = "No actual rigid boundaries are defined to separate each ideology from the other. Many events lie between the boundary and thus may be considered as one or the other. Each ideology shares a common belief in some aspects but is very far apart in the other aspects. Socialism is somewhat close to communism as they share a common history, but then, socialism is also close to liberalism in the aspect of anti-anarchism or demolishing central power. Liberalism resembles capitalist economics since it believes in individual ability and rights of private ownership. However, capitalism is on the opposite side of communism since the former is ruled by competition of individuals, and the latter is driven by workers as a community."
const textDisclaimer2 = "We hereby say that our work is not a clear reference to define the effect of each ideology. Many events are legacy of multiple ideas. However, we present this basically to make a distinction between them. This is based totally on our understanding of each event and the intention behind each one of them."


const NewBox = (props) => (
  <Box px={20} py={20} bg={props.bg}>
    {props.children}
  </Box>
)

const Page = () => {
  references.sort((a,b) => (a.author > b.author) ? 1 : ((b.author > a.author) ? -1 : 0))
  
  return (
  <Box>
    <Header/>
    <Box>
      <NewBox bg="gray.700">
        <Text fontSize="2xl">{Title}</Text>
        <Text fontSize="6xl">{subTitle}</Text>
      </NewBox>

      <NewBox>
        <Flex>
          <Box w="45%">
            <Image src="/assets/index2.jpg"/>
          </Box>
          <Box w="45%" ml="5%">
            <Text fontSize="4xl">Why Should You Care?</Text>
            <Text fontSize="2xl" mt={15}>{TextPurpose}</Text>
          </Box>
        </Flex>
      </NewBox>

      <NewBox bg="bg.700">
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
      </NewBox>
      
      <NewBox bg="gray.700">
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
      </NewBox>

      <Timeline />

      <NewBox bg="gray.100">
        <Text color="black" fontSize="4xl">Difficulties and Disclaimer</Text>
        <Text color="black" fontSize="xl" mt={15}>{textDisclaimer1}</Text>
        <Text color="black" fontSize="xl" mt={15}>{textDisclaimer2}</Text>
      </NewBox>

      <NewBox>
        <Text fontSize="4xl">References</Text>
        <Box pt={15}>
          {
            references.map(ref => 
              <Text fontSize="xl"> {ref.author} . {ref.topic} .
                <a href={ref.url?ref.url:'#'}>{ref.url}</a> 
              </Text>
            )
          }
        </Box>
      </NewBox>
    </Box>
  </Box>
)}

export default Page
