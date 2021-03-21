import { Text, Flex, Box, Center } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex p={3} bg="gray.800" alignItems="center" justifyContent="center">
      <Box>
        <Center>
          <Text fontSize="lg"> World History of Governing </Text>
        </Center>
        <Center>
          <Text fontSize="md"> Made with love by </Text>
        </Center>
        <Center>
          <Text fontSize="md"> Touch Sungkawichai and Chayutapon Punyaratyuenyong </Text>
        </Center>
      </Box>
    </Flex>
  )
}

export default Footer