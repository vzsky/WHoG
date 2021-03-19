import { Layout, TextBox } from '../../components/layout'
import { ISystemOption } from '../../interface'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const options : ISystemOption = {
  type: 'capitalism',
  system: 'CAPITALISM',
  bgSrc: '/assets/capitalismBg.jpg',
}

const textDefinition = "Capitalism is the belief regarding economic organization..."

const Page = () => (
  <Layout options={options}>
    <Box> 
      <Flex>
        <Box w="40%">
          <Image src="/assets/communism1.png"/>
        </Box>
        <Flex w="60%" p="30" justifyContent="center">
          <Box position="relative" top="30%" >
            <Text fontSize="3xl"> MONEY DRIVES PRODUCTION </Text>
          </Box>
        </Flex>
      </Flex>
      <TextBox title="WHAT IS CAPITALISM?" text={textDefinition}/>
      <Flex justifyContent="center">
        <Image src="/assets/communism2.png" objectFit="contain"/>
      </Flex>
    </Box>
  </Layout>
)
export default Page