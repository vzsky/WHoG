import Layout from '../../components/layout'
import { ISystemOption } from '../../interface'
import { Box, Image } from '@chakra-ui/react'

const options : ISystemOption = {
  type: 'communism',
  system: 'COMMUNISM',
  bgSrc: '/assets/communismBg.jpg',
  upperBandColor: 'red.500',
}

const Page = () => (
  <Layout options={options}>
    <Box> 
      <Image src="/assets/communism1.png"/>
      <Image src="/assets/communism2.png"/>
    </Box>
  </Layout>
)
export default Page