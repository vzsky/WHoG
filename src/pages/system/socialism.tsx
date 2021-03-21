import { Layout, TextBox } from '../../components/layout'
import { ISystemOption } from '../../interface'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const options : ISystemOption = {
  type: 'socialism',
  system: 'SOCIALISM',
  bgSrc: '/assets/socialismBg.jpg',
}

const textDefinition = "Socialism is the ideology that seeks for public ownership over private. Socialism is a belief that individual don't work on there own, but there're factors of society involving. Therefore, the society should be a part of decision of how should the product be used for the best of the society's member. Socialists, however, disagreed on how should the decision be made, or the certain cut of which should be public property and which can be owned privately. Socialism stimulates universal healthcare, creating 5 weekdays system, and also free primary education policy."
const textHistory = "Socialism is an anti-capitalism ideology that rejects free market. Early socialists argued that capitalism increase the wealth inequality since the rich can make more and more money while the poor are left with no choice but to work. Capitalism makes competition in the market harder and harder for newcomers. Since money places people in different social class and gives power, capitalism seems unfair to the poor's justice and liberty. Socialism is arguably created for liberty of the people."

const Page = () => (
  <Layout options={options}>
    <Box> 
      <Flex>
        <Box w="40%">
          <Image src="/assets/socialism1.jpg"/>
        </Box>
        <Flex w="60%" p="30" justifyContent="center">
          <Box position="relative" top="30%" >
            <Text fontSize="3xl"> HEADLINE </Text>
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