import { Text, Flex, Image } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex p={3} bg="gray.100">
      <Image src="/logo.png" w={10} h={10} />
      <Text mx={5} color="black" fontSize="2xl"> | World History</Text>
    </Flex>
  )
}

export default Header