import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { events } from '../constants/timeline'
import { colors } from '../constants/colors'
import { IEvent } from '../interface'

const Event = (event: any) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex justifyContent="center" alignItems="center">
        <Box w={20}>
          <Text> {event.displayYear?event.displayYear:event.year} </Text>
        </Box>
        <Box m={2} w="10px" h="10px" bg="gray.500"/>
      </Flex>
      <Box w="100%" m={5} p={5} bg={colors[event.type].shade}>
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
    <Box px={20} py={10}>
      <Box w="100%" mt={10}>
        <Box>
          <Button m={2} rounded={0} bg="gray.500" color="gray.100" onClick={()=>{setFilter('')}}>All</Button>
          {['communism', 'liberalism', 'capitalism', 'socialism'].map((system) => (
            <Button m={2} rounded={0} bg={colors[system].shade} color={colors[system].tint} onClick={()=>{setFilter(system)}}>{system}</Button>
          ))
          }
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