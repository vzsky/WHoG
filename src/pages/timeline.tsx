import { Box, Flex, Text } from '@chakra-ui/react'
import { events, colors } from '../constants/timeline'
import { IEvent } from '../interface'

const Event = (event: any) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex justifyContent="center" alignItems="center">
        <Box w={20}>
          <Text> {event.displayYear?event.displayYear:event.year} </Text>
        </Box>
        <Box m={2} w="10px" h="10px" rounded="10px" bg="gray.500"/>
      </Flex>
      <Box w="100%" m={5}>
        <Box p={5} bg={colors[event.type]}>
          <Text fontSize="3xl">{event.title}</Text>
          <Text fontSize="xl">{event.content}</Text>
        </Box>
      </Box>
    </Flex>
  )
}


const Timeline = () => {
  events.sort((a, b) => a.year-b.year)
  return (
    <Box m={20}>
      <Box w="100%">
        <Text fontSize="5xl">Timeline</Text>
      </Box>
      <Flex ml={20}>
        <Flex w="10px">
          <Box w={1} bg="gray.500" />
        </Flex>
        <Box w="100%" >
          {events.map((event: IEvent, i: number) => (
              <Event {...event} key={i}/>
          ))}
        </Box>
      </Flex>
    </Box>
  )
}



export default Timeline