import React from 'react'
import { Box, useColorModeValue, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Li = styled.li`
  width: 24px;
  margin-bottom: 35px;
  height: 4px;
  cursor: pointer;
  &:hover {
    transform: scaleX(1.3);
  }
`

export default function FpNav({ s1ref, s2ref, s3ref, s4ref }) {
  return (
    <Box
      position="fixed"
      css={{ backdropFilter: 'blur(40px)' }}
      zIndex={1}
      h="100vh"
    >
      <Flex align="center" h="100vh" ml={{ base: 5, sm: 50 }}>
        <ul>
          <Li onClick={() => s1ref.current.scrollIntoView()}>
            <Box bg={useColorModeValue('black', 'white')} h={'100%'}>
              <Box d="none">a</Box>
            </Box>
          </Li>
          <Li onClick={() => s2ref.current.scrollIntoView()}>
            <Box bg={useColorModeValue('black', 'white')} h={'100%'}>
              <span style={{ display: 'none' }}>a</span>
            </Box>
          </Li>
          <Li onClick={() => s3ref.current.scrollIntoView()}>
            <Box bg={useColorModeValue('black', 'white')} h={'100%'}>
              <span style={{ display: 'none' }}>a</span>
            </Box>
          </Li>
          <Li onClick={() => s4ref.current.scrollIntoView()}>
            <Box bg={useColorModeValue('black', 'white')} h={'100%'}>
              <span style={{ display: 'none' }}>a</span>
            </Box>
          </Li>
        </ul>
      </Flex>
    </Box>
  )
}
