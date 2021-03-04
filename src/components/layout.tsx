import { Text, Box, Center } from '@chakra-ui/react'
import { ISystemOption } from '../interface'

const System = (props) => {
  const options = props.options as ISystemOption
  const background: React.CSSProperties = {
    backgroundImage: `url(${options.bgSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: "100%",
  }
  
  return (
    <Box h="100%">
      <Box w="100%" h="100%" style={background}>
        <Box w="100%" h="10" bg={options.upperBandColor}/>
        <Box m={20}>
          <Center>
            <Text fontSize="5xl">{options.system}</Text>
          </Center>
          {props.children}
        </Box>
      </Box>
      <style global jsx>
        {`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            min-height: 100%;
          }
        `}
      </style>
    </Box>
  )
}

export default System