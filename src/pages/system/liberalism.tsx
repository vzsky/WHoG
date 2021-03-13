import { Layout, TextBox } from '../../components/layout'
import { ISystemOption } from '../../interface'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const options : ISystemOption = {
  type: 'socialism',
  system: 'SOCIALISM',
  bgSrc: '',
}

const textDefinition = "Socialism is the ideology that .... "
const textHistory = "Socialism and Communism is closely related. ..."

const Page = () => (
  <Layout options={options}>
    <Box> 
      <Flex>
        <Box w="40%">
          <Image src="/assets/communism1.png"/>
        </Box>
        <Flex w="60%" p="30" justifyContent="center">
          <Box position="relative" top="30%" >
            <Text fontSize="3xl"> HEADLINE </Text>
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