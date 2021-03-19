import { Layout, TextBox } from '../../components/layout'
import { ISystemOption } from '../../interface'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const options : ISystemOption = {
  type: 'liberalism',
  system: 'LIBERALISM',
  bgSrc: '/assets/liberalismBg.jpg',
}

const textDefinition = "Liberalism is the belief that all human have basic rights in many aspects. Liberalists believe in equality, so they usually adopt democracy. Liberalist values individual rights and freedom, and usually limit government intervention in broad aspects. liberalism usually comes with capitalism economics system."
const textHistory = "In the Middle Ages the rights and responsibilities of the individual were determined by their place in a hierarchical social system that placed great stress upon acquiescence and conformity. Under the impact of the slow commercialization and urbanization of Europe in the later Middle Ages, the intellectual ferment of the Renaissance, and the spread of Protestantism in the 16th century, the old feudal stratification of society gradually began to dissolve, leading to a fear of instability so powerful that monarchical absolutism was viewed as the only remedy to civil dissension. By the end of the 16th century, the authority of the papacy had been broken in most of northern Europe, and each ruler tried to consolidate the unity of his realm by enforcing conformity either to Roman Catholicism or to the ruler’s preferred version of Protestantism. These efforts culminated in the Thirty Years’ War (1618–48), which did immense damage to much of Europe. Where no creed succeeded in wholly extirpating its enemies, toleration was gradually accepted as the lesser of two evils; in some countries where one creed triumphed, it was accepted that too minute a concern with citizens’ beliefs was inimical to prosperity and good order."

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