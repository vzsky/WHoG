import { Text, Box } from '@chakra-ui/react'

export const System = ({event}) => {
  return (
    <Box m={20}>
      <Text fontSize="5xl">System: {event.title}</Text>
      <Text fontSize="xl">{event.content}</Text>
    </Box>
  )
}