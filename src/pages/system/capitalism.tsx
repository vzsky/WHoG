import { Layout, TextBox } from '../../components/layout'
import { ISystemOption } from '../../interface'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const options : ISystemOption = {
  type: 'capitalism',
  system: 'CAPITALISM',
  bgSrc: '/assets/capitalismBg.jpg',
}

const textDefinition = "Capitalism is the belief that the market can run smoothly without any intervention. Capitalists support the free market since they believed in the 'invisible hands'. Each individual in the market will help make the price stable. Each person can own private property and have full rights to trade them with any other individual. The production runs with owners' decision in competing for profits from other individuals."
const textHistory = "Capitalism and liberalism share a common history. They are both based on a belief that individuals should have the power and rights to control their private property. With the price system, economists say that price will adapt to the true value without any intervention from the government. Free markets will let companies compete for profits and will leave the best thing for society."

const Page = () => (
  <Layout options={options}>
    <Box> 
      <Flex>
        <Box w="40%">
          <Image src="/assets/capitalism1.jpg"/>
        </Box>
        <Flex w="60%" p="30" justifyContent="center">
          <Box position="relative" top="30%" >
            <Text fontSize="3xl"> MONEY DRIVES PRODUCTION </Text>
          </Box>
        </Flex>
      </Flex>
      <TextBox title="WHAT IS CAPITALISM?" text={textDefinition}/>
      <TextBox title="HISTORY" text={textHistory}/>
      <Flex justifyContent="center">
        <Image src="/assets/capitalism2.png" objectFit="contain"/>
      </Flex>
    </Box>
  </Layout>
)
export default Page