import Link from 'next/link'
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
import SectionProject from '../components/SectionProject'
import { motion } from 'framer-motion'
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
          <Box w={{ base: '100%', sm: '70%' }} className="center">
            <Heading
              as="h2"
              ref={s1ref}
              variant="page-title"
              className="name"
              fontSize={{
                base: '60px',
                sm: '100px',

                lg: '180px'
              }}
              lineHeight={1}
            >
              {s1.name}
            </Heading>
            <Text>{s1.title}</Text>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    ease: 'easeOut',
                    duration: 2,
                    delay: 0.6
                  }
                }
              }}
            >
              <HStack
                my="20px"
                spacing="15px"
                direction={{ base: 'column', sm: 'row' }}
              >
                <Link href={'/contact'}>
                  <a>
                    <Button colorScheme={useColorModeValue('purple', 'orange')}>
                      <Text
                        color={useColorModeValue('light', 'dark')}
                        fontWeight="bold"
                        letterSpacing={0.5}
                        fontFamily="Noto Sans"
                      >
                        {s1.contact}
                      </Text>
                    </Button>
                  </a>
                </Link>

                <Link href="https://www.linkedin.com/in/ian-javier-rivas/">
                  <a>
                    <IconButton
                      _hover={{ transform: 'scale(1.2)' }}
                      icon={useColorModeValue(
                        <AiFillLinkedin size={40} />,
                        <AiOutlineLinkedin size={40} />
                      )}
                    />
                  </a>
                </Link>
                <Link href="https://github.com/IanRivas">
                  <a>
                    <IconButton
                      _hover={{ transform: 'scale(1.2)' }}
                      icon={useColorModeValue(
                        <AiFillGithub size={40} />,
                        <AiOutlineGithub size={40} />
                      )}
                    />
                  </a>
                </Link>
                <Link href="https://ian-rivas.vercel.app/files/CV-IanRivas.pdf">
                  <a>
                    <IconButton
                      _hover={{ transform: 'scale(1.2)' }}
                      icon={useColorModeValue(
                        <Image
                          src="/images/light-cv-icon.png"
                          alt="cv"
                          boxSize={10}
                        />,
                        <Image
                          src="/images/dark-cv-icon.png"
                          alt="cv"
                          boxSize={10}
                        />
                      )}
                    />
                  </a>
                </Link>
              </HStack>
            </motion.div>
          </Box>
          <Box w={{ base: '90%', sm: '50%', lg: '30%' }} h={['200px', '280px']}>
            <Image src={img} width={400} height={'100%'} alt="working" />
          </Box>
        </Flex>
      </Section>
      <SectionProject
        setW={setWhereiam}
        me="two"
        sref={s2ref}
        data={s2}
        imgUrl={pro3Url}
        siteUrl="https://america-countries-app.herokuapp.com/"
        codeUrl="https://github.com/IanRivas/american-countries-app"
      ></SectionProject>
      <SectionProject
        setW={setWhereiam}
        me="three"
        sref={s3ref}
        data={s3}
        imgUrl={pro2Url}
        siteUrl="https://react-basement-ecommerce.vercel.app/"
        codeUrl="https://github.com/IanRivas/react-basement-ecommerce"
      ></SectionProject>
      <SectionProject
        setW={setWhereiam}
        me="four"
        sref={s4ref}
        data={s4}
        imgUrl={pro1Url}
        siteUrl="https://evangelion-wiki.netlify.app/"
        codeUrl="https://github.com/IanRivas/React-Bootstrap-Eva"
      ></SectionProject>
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
