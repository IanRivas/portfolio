import Link from 'next/link'
// import Image from 'next/image'
import {
  Heading,
  Box,
  useColorModeValue,
  IconButton,
  Button,
  HStack,
  Text,
  Image
} from '@chakra-ui/react'
import Section from '../components/Section'
import {
  AiFillLinkedin,
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineGithub
} from 'react-icons/ai'
import { useState, useRef } from 'react'

import FpNav from '../components/FpNav'
import '@fontsource/manrope/400.css'
import '@fontsource/m-plus-rounded-1c/700.css'

const Page = props => {
  const s1ref = useRef(null)
  const s2ref = useRef(null)
  const s3ref = useRef(null)
  const s4ref = useRef(null)
  const { s1, s2, s3, s4 } = props.home
  const img = `/images/blogging.svg`
  const pro1 = `/images/pro1.png`
  const pro2 = `/images/pro2.png`
  const pro3 = `/images/pro3.png`
  const [whereiam, setWhereiam] = useState('')

  return (
    <>
      <FpNav
        s1ref={s1ref}
        s2ref={s2ref}
        s3ref={s3ref}
        s4ref={s4ref}
        w={whereiam}
      />
      <Section setW={setWhereiam} me="one">
        <Box w="70%" className="center">
          <Heading
            as="h2"
            ref={s1ref}
            variant="page-title"
            fontSize={{
              base: '60px',
              sm: '100px',
              md: '150px',
              lg: '190px'
            }}
          >
            {s1.name}
          </Heading>
          <Text>{s1.title}</Text>
          <HStack my="20px" spacing="24px">
            <Link href="https://www.linkedin.com/in/ian-javier-rivas/">
              <a>
                <Button colorScheme={useColorModeValue('purple', 'orange')}>
                  <IconButton
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(
                      <AiFillLinkedin size={40} />,
                      <AiOutlineLinkedin size={40} />
                    )}
                  />
                </Button>
              </a>
            </Link>
            <Link href="https://github.com/IanRivas">
              <a>
                <Button colorScheme={useColorModeValue('purple', 'orange')}>
                  <IconButton
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(
                      <AiFillGithub size={40} />,
                      <AiOutlineGithub size={40} />
                    )}
                  />
                </Button>
              </a>
            </Link>
          </HStack>
        </Box>
        <Box w={{ base: '50%', sm: '50%', lg: '30%' }} h={['200px', '300px']}>
          <Image src={img} width={400} height={'100%'} alt="working" />
        </Box>
      </Section>
      <Section setW={setWhereiam} me="two">
        <Box
          w={{
            base: '100%',
            md: '50%',
            lg: '60%'
          }}
        >
          <Box className="center">
            <Heading ref={s2ref} mb="25px">
              {s2.project_title}
            </Heading>
            <Text w="70%">{s2.project_text}</Text>
            <HStack my="20px" spacing="24px">
              <Link href="https://vigorous-pasteur-79ab03.netlify.app/">
                <a>
                  <Button colorScheme={useColorModeValue('purple', 'orange')}>
                    <Text
                      color={useColorModeValue('light', 'dark')}
                      fontFamily="M PLUS Rounded 1c"
                      fontWeight="bold"
                      letterSpacing={0.5}
                    >
                      {s2.btn_page}
                    </Text>
                  </Button>
                </a>
              </Link>
              <Link href="https://github.com/IanRivas/React-Bootstrap-Eva">
                <a>
                  <Button colorScheme={useColorModeValue('purple', 'orange')}>
                    <IconButton
                      colorScheme={useColorModeValue('purple', 'orange')}
                      icon={useColorModeValue(
                        <AiFillGithub size={40} />,
                        <AiOutlineGithub size={40} />
                      )}
                    />
                    <Text ml="5px">{s2.btn_code}</Text>
                  </Button>
                </a>
              </Link>
            </HStack>
          </Box>
        </Box>
        <Box w={{ base: '50%', sm: '50%', lg: '30%' }}>
          <Image
            src={pro1}
            width={400}
            height={{ base: 150, sm: 350 }}
            alt="project screen"
          />
        </Box>
      </Section>
      <Section setW={setWhereiam} me="three">
        <Box
          w={{
            base: '100%',
            md: '50%',
            lg: '60%'
          }}
        >
          <Box className="center">
            <Heading ref={s3ref} mb="25px">
              {s3.project_title}
            </Heading>
            <Text w="70%">{s3.project_text}</Text>
            <HStack my="20px" spacing="24px">
              <Link href="https://react-basement-ecommerce.vercel.app/">
                <a>
                  <Button colorScheme={useColorModeValue('purple', 'orange')}>
                    <Text
                      color={useColorModeValue('light', 'dark')}
                      fontFamily="M PLUS Rounded 1c"
                      fontWeight="bold"
                      letterSpacing={0.5}
                    >
                      {s2.btn_page}
                    </Text>
                  </Button>
                </a>
              </Link>
              <Link href="https://github.com/IanRivas/react-basement-ecommerce">
                <a>
                  <Button colorScheme={useColorModeValue('purple', 'orange')}>
                    <IconButton
                      colorScheme={useColorModeValue('purple', 'orange')}
                      icon={useColorModeValue(
                        <AiFillGithub size={40} />,
                        <AiOutlineGithub size={40} />
                      )}
                    />
                    <Text ml="5px">{s2.btn_code}</Text>
                  </Button>
                </a>
              </Link>
            </HStack>
          </Box>
        </Box>
        <Box w={{ base: '50%', sm: '50%', lg: '30%' }}>
          <Image
            src={pro2}
            width={400}
            height={{ base: 150, sm: 350 }}
            alt="project screen"
          />
        </Box>
      </Section>
      <Section setW={setWhereiam} me="four">
        <Box
          w={{
            base: '100%',
            md: '50%',
            lg: '60%'
          }}
        >
          <Box className="center">
            <Heading ref={s4ref} mb="25px">
              {s4.project_title}
            </Heading>
            <Text w="70%">{s4.project_text}</Text>
            <HStack my="20px" spacing="24px">
              <Link href="https://america-countries-app.herokuapp.com/">
                <a>
                  <Button colorScheme={useColorModeValue('purple', 'orange')}>
                    <Text
                      color={useColorModeValue('light', 'dark')}
                      fontFamily="M PLUS Rounded 1c"
                      fontWeight="bold"
                      letterSpacing={0.5}
                    >
                      {s2.btn_page}
                    </Text>
                  </Button>
                </a>
              </Link>
              <Link href="https://github.com/IanRivas/american-countries-app">
                <a>
                  <Button colorScheme={useColorModeValue('purple', 'orange')}>
                    <IconButton
                      colorScheme={useColorModeValue('purple', 'orange')}
                      icon={useColorModeValue(
                        <AiFillGithub size={40} />,
                        <AiOutlineGithub size={40} />
                      )}
                    />
                    <Text ml="5px">{s2.btn_code}</Text>
                  </Button>
                </a>
              </Link>
            </HStack>
          </Box>
        </Box>
        <Box w={{ base: '50%', sm: '50%', lg: '30%' }}>
          <Image
            src={pro3}
            width={400}
            height={{ base: 150, sm: 350 }}
            alt="project screen"
          />
        </Box>
      </Section>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`)

  return {
    props: {
      home: response.default.home
    }
  }
}

export default Page
