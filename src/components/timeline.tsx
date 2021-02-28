import { Box, Flex, Text } from '@chakra-ui/react'
import { events } from '../constants/systems'
import { IEvent } from '../interface'
import Link from 'next/link'

const Event = (event: any) => {
  return (
    <Link href={"/system/"+event.eventKey}>
      <Flex justifyContent="center" alignItems="center">
        <Flex justifyContent="center" alignItems="center">
          <Text> {event.year} </Text>
          <Box m={2} w="10px" h="10px" rounded="10px" bg="gray.500"/>
        </Flex>
        <Box w="100%" rounded={5} p={5} m={5} bg="blue.100">
          <Text fontSize="3xl">{event.title}</Text>
          <Text fontSize="xl">{event.content}</Text>
        </Box>
      </Flex>
    </Link>
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
              <Event {...event} key={i} eventKey={i}/>
          ))}
        </Box>
      </Flex>
    </Box>
  )
}



export default Timeline