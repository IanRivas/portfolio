import Logo from './logo'
import {
  Container,
  Box,
  Heading,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'

import ThemeToggleButton from './theme-toggle-button'
import LenguajeSelector from '../components/LenguageSelector'

const Navbar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(40px)' }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex flex={2} align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Box flex={1}>
          <Flex>
            <LenguajeSelector />
            <ThemeToggleButton />
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
