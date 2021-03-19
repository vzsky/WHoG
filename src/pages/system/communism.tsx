import { Layout, TextBox } from '../../components/layout'
import { ISystemOption } from '../../interface'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const options : ISystemOption = {
  type: 'communism',
  system: 'COMMUNISM',
  bgSrc: '/assets/communismBg.jpg',
}

const textDefinition = "Communism, political and economic doctrine that aims to replace private property and a profit-based economy with public ownership and communal control of at least the major means of production (e.g., mines, mills, and factories) and the natural resources of a society. Communism is thus a form of socialism—a higher and more advanced form, according to its advocates. Exactly how communism differs from socialism has long been a matter of debate, but the distinction rests largely on the communists’ adherence to the revolutionary socialism of Karl Marx."

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
      <Flex justifyContent="center">
        <Image src="/assets/communism2.png" objectFit="contain"/>
      </Flex>
    </Box>
  </Layout>
)
export default Page