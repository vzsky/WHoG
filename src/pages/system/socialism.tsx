import { Layout, TextBox } from '../../components/layout'
import { ISystemOption } from '../../interface'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const options : ISystemOption = {
  type: 'socialism',
  system: 'SOCIALISM',
  bgSrc: '/assets/socialismBg.jpg',
}

const textDefinition = "Socialism is the ideology that seeks public ownership over private. Socialism is a belief that individuals don't work on their own, but there're factors of society involving. Therefore, society should be a part of the decision of how should the product be used for the best of society's members. Socialists, however, disagreed on how should the decision be made, or the certain cut of which should be public property and which can be owned privately. Socialism stimulates universal healthcare, creating a five weekdays system, and also a free primary education policy."
const textHistory = "Socialism is an anti-capitalist ideology that rejects the free market. Early socialists argued that capitalism increases wealth inequality since the rich can make more and more money while the poor are left with no choice but to work. Capitalism makes competition in the market harder and harder for newcomers. Since money places people in different social classes and gives power, capitalism seems unfair to the poor's justice and liberty. Socialism is arguably created for the liberty of the people."

const Page = () => (
  <Layout options={options}>
    <Box> 
      <Flex>
        <Box w="40%">
          <Image src="/assets/socialism1.jpg"/>
        </Box>
        <Flex w="60%" p="30" justifyContent="center">
          <Box position="relative" top="30%" >
            <Text fontSize="3xl"> SOCIETY</Text>
            <Text fontSize="3xl"> PEOPLE </Text>
          </Box>
        </Flex>
      </Flex>
      <TextBox title="WHAT IS SOCIALISM?" text={textDefinition}/>
      <TextBox title="HISTORY" text={textHistory}/>
      <Flex justifyContent="center">
        <Image src="/assets/socialism2.jpg" objectFit="contain"/>
      </Flex>
    </Box>
  </Layout>
)
export default Page