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
  Image,
  Flex
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
import '@fontsource/noto-sans'
import ProjectSlider from '../components/ProjectSlider'

const Page = props => {
  const s1ref = useRef(null)
  const s2ref = useRef(null)
  const s3ref = useRef(null)
  const s4ref = useRef(null)
  const { s1, s2, s3, s4 } = props.home
  const img = `/images/blogging.svg`
  const pro1Url = `/images/pro1.png`
  const pro2Url = `/images/pro2.png`
  const pro3Url = `/images/pro3.png`
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
        <Flex
          flexWrap={'wrap'}
          justifyContent={'center'}
          alignItems={'center'}
          backgroundColor={useColorModeValue('#E4E4E7', 'transparent')}
          py={10}
          px={10}
          rounded="md"
        >
          <Box w="70%" className="center">
            <Heading
              as="h2"
              ref={s1ref}
              variant="page-title"
              fontSize={{
                base: '60px',
                sm: '100px',
                md: '130px',
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
          <Box w={{ base: '90%', sm: '50%', lg: '30%' }} h={['200px', '300px']}>
            <Image src={img} width={400} height={'100%'} alt="working" />
          </Box>
        </Flex>
      </Section>
      <Section setW={setWhereiam} me="two">
        <ProjectSlider
          sref={s4ref}
          data={s4}
          imgUrl={pro3Url}
          siteUrl="https://america-countries-app.herokuapp.com/"
          codeUrl="https://github.com/IanRivas/american-countries-app"
        />
      </Section>
      <Section setW={setWhereiam} me="three">
        <ProjectSlider
          sref={s3ref}
          data={s3}
          imgUrl={pro2Url}
          siteUrl="https://react-basement-ecommerce.vercel.app/"
          codeUrl="https://github.com/IanRivas/react-basement-ecommerce"
        />
      </Section>
      <Section setW={setWhereiam} me="four">
        <ProjectSlider
          sref={s2ref}
          data={s2}
          imgUrl={pro1Url}
          siteUrl="https://evangelion-wiki.netlify.app/"
          codeUrl="https://github.com/IanRivas/React-Bootstrap-Eva"
        />
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
