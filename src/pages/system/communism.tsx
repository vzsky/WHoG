import { Layout, TextBox } from '../../components/layout'
import { ISystemOption } from '../../interface'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const options : ISystemOption = {
  type: 'communism',
  system: 'COMMUNISM',
  bgSrc: '/assets/communismBg.jpg',
}

const textDefinition = "Communism is a political and economic doctrine that aims to replace private property and a profit-based economy with public ownership and communal control of at least the major means of production (e.g., mines, mills, and factories) and the natural resources of a society. Communism is thus a form of socialism — a higher and more advanced form. Communism and socialism is similar in many aspects, but communism is a form of government while socialism focuses on economics, thus be integrated with democracy. The ultimate goal of communism is to have a society where there are no social class, no money, no private property, and no government."
const textHistory = "Communism idea was firstly proposed in a book called Utopia, written by Thomas More. He described a society with no private property. Later on, Marx wrote The Communist Manifesto to propose the idea of communism, in opposition to capitalism. He argued that capitalism is flawed as the rulling class control all the production means, hence will be replaced with a socialist economics. The idea of communism had driven many revolution from the worker class and establishment of many communist states."

const Page = () => (
  <Layout options={options}>
    <Box> 
      <Flex>
        <Box w="40%">
          <Image src="/assets/communism1.png"/>
        </Box>
        <Flex w="60%" p="30" justifyContent="center">
          <Box position="relative" top="30%" >
            <Text fontSize="3xl"> NO HIERACHY </Text>
            <Text fontSize="3xl"> NO MONEY </Text>
          </Box>
        </Flex>
      </Flex>
      <TextBox title="WHAT IS COMMUNISM?" text={textDefinition}/>
      <TextBox title="HISTORY" text={textHistory}/>
      <Flex justifyContent="center">
        <Image src="/assets/communism2.png" objectFit="contain"/>
      </Flex>
    </Box>
  </Layout>
)
export default Page