import { Layout, TextBox } from '../../components/layout'
import { ISystemOption } from '../../interface'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const options : ISystemOption = {
  type: 'liberalism',
  system: 'LIBERALISM',
  bgSrc: '/assets/liberalismBg.jpg',
}

const textDefinition = "Liberalism is the belief that all human have basic rights in many aspects. Liberalists believe in equality, so they usually adopt democracy. Liberalist values individual rights and freedom, and usually limit government intervention in broad aspects. liberalism usually comes with capitalism economics system."
const textHistory = "During the enlightenment era, philosophers had spend time in questioning the authority and monarchy. Liberalism is created to replace monarchy, hierachical privilleges, and controlled economics with democracy and free market. The rising of Protestant also led to questioning the devine rights. Liberalism also sought to seperate religion from government. The idea of liberalism got more popular among philosophers and movements were based on them."

const Page = () => (
  <Layout options={options}>
    <Box> 
      <Flex>
        <Box w="40%">
          <Image src="/assets/liberalism1.jpg"/>
        </Box>
        <Flex w="60%" p="30" justifyContent="center">
          <Box position="relative" top="30%" >
            <Text fontSize="3xl"> LIBERTY </Text>
            <Text fontSize="3xl"> HUMAN RIGHTS </Text>
          </Box>
        </Flex>
      </Flex>
      <TextBox title="WHAT IS LIBERALISM?" text={textDefinition}/>
      <TextBox title="HISTORY" text={textHistory}/>
      <Flex justifyContent="center">
        <Image src="/assets/liberalism2.jpg" objectFit="contain"/>
      </Flex>
    </Box>
  </Layout>
)
export default Page