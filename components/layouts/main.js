import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Fullpage = styled.main`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
`

const Main = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/logo.png" />
        <title>Ian Rivas Portfolio</title>
      </Head>

      <Navbar />

      <Fullpage>{children}</Fullpage>
    </Box>
  )
}

export default Main
