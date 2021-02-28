import { useRouter } from 'next/router'
import { events } from '../../constants/systems'
import { Text, Box } from '@chakra-ui/react'

const System = () => {
  const router = useRouter()
  const { id } = router.query
  const event = events[parseInt(id as string)]

  return (
    <Box m={20}>
      <Text fontSize="5xl">System: {event.title}</Text>
      <Text fontSize="xl">{event.content}</Text>
    </Box>
  )
}

export default System