import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
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
      <Box w="100%" m={5} p={5} bg={colors[event.type]} rounded={5}>
        <Text fontSize="3xl">{event.title}</Text>
        <Text fontSize="xl">{event.content}</Text>
      </Box>
    </Flex>
  )
}


const Timeline = () => {
  events.sort((a, b) => a.year-b.year)
  let [filter, setFilter] = useState('')
  let [displayEvents, setDisplayEvents] = useState(events)
  useEffect(()=>{
    setDisplayEvents(filter==''?events:events.filter(e => e.type == filter));
  },[filter])

  return (
    <Box m={20}>
      <Box w="100%">
        <Text fontSize="5xl">Timeline</Text>
        <Box>
          <Button m={2} bg="gray.500" color="gray.100" onClick={()=>{setFilter('')}}>All</Button>
          <Button m={2} bg="red.500" color="red.100" onClick={()=>{setFilter('communism')}}>Communism</Button>
          <Button m={2} bg="blue.500" color="blue.100" onClick={()=>{setFilter('liberalism')}}>Liberalism</Button>
          <Button m={2} bg="green.500" color="green.100" onClick={()=>{setFilter('capitalism')}}>Capitalism</Button>
          <Button m={2} bg="yellow.500" color="yellow.100" onClick={()=>{setFilter('socialism')}}>Socialism</Button>
        </Box>
      </Box>
      <Flex ml={20}>
        <Flex w="10px">
          <Box w={1} bg="gray.500" />
        </Flex>
        <Box w="100%" >
          {displayEvents.map((event: IEvent, i: number) => (
              <Event {...event} key={i}/>
          ))}
        </Box>
      </Flex>
    </Box>
  )
}



export default Timeline