import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Link from 'next/link'

import {
  Center,
  Flex,
  Button,
  useColorModeValue,
  FormLabel,
  Alert,
  AlertIcon,
  Heading,
  CloseButton,
  SimpleGrid,
  Text,
  IconButton
} from '@chakra-ui/react'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { AiFillPhone, AiOutlinePhone } from 'react-icons/ai'
import { MdMail, MdOutlineEmail } from 'react-icons/md'
import { motion } from 'framer-motion'

export default function Mailer({ contact }) {
  const [status, setStatus] = useState('')

  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm('portfolio', 'template_7pebr2t', e.target, 'KYDDa5-i_TZn-67PO')
      .then(res => {
        console.log(res)
        setStatus('success')
        e.target.name.value = ''
        e.target.user_email.value = ''
        e.target.message.value = ''
      })
      .catch(err => {
        console.log(err)
        setStatus('error')
      })
  }

  const closeAlert = () => {
    setStatus('')
  }

  return (
    <Center className="form-container">
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
              delay: 0.6
            }
          }
        }}
      >
        <SimpleGrid minChildWidth="250px" spacing="40px" w="80%" m={'auto'}>
          <Flex
            direction={'column'}
            backgroundColor={useColorModeValue('#E4E4E7', '#303133')}
            p="20px"
          >
            <Link href="/">
              <a>
                <Button
                  colorScheme={useColorModeValue('purple', 'orange')}
                  w={'fit-content'}
                  _hover={{ transform: 'translateX(-10px)' }}
                >
                  <ArrowLeftIcon />
                  <Text pl={2} fontFamily="Noto Sans">
                    Back
                  </Text>
                </Button>
              </a>
            </Link>
            {status && status === 'success' ? (
              <Alert status="success" mt={3}>
                <AlertIcon />
                {contact.success}
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={closeAlert}
                />
              </Alert>
            ) : status == 'error' ? (
              <Alert status="error" mt={3}>
                <AlertIcon />
                {contact.error}
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={closeAlert}
                />
              </Alert>
            ) : null}

            <Heading
              as={'h5'}
              my={5}
              fontSize={'1.7rem'}
              opacity={useColorModeValue(0.8, 0.6)}
            >
              {contact.form_title}
            </Heading>
            <form onSubmit={sendEmail}>
              <Flex direction={'column'}>
                <FormLabel>{contact.name}*</FormLabel>
                <input
                  type="text"
                  ref={element => element?.focus?.()}
                  name="name"
                  required
                  style={{ color: '#303133', padding: '5px 15px' }}
                />

                <FormLabel>Email*</FormLabel>
                <input
                  type="email"
                  name="user_email"
                  required
                  style={{ color: '#303133', padding: '5px 15px' }}
                />

                <FormLabel>{contact.message}*</FormLabel>
                <textarea
                  name="message"
                  rows="3"
                  required
                  style={{ color: '#303133', padding: '5px 15px' }}
                />

                <Button
                  colorScheme={useColorModeValue('purple', 'orange')}
                  type="submit"
                  my="10px"
                  w={'fit-content'}
                >
                  {contact.submitButton}
                </Button>
              </Flex>
            </form>
          </Flex>
          <Flex direction={'column'} p="20px">
            <Text opacity={useColorModeValue(1, 0.6)}>
              {contact.r_uppertitle}
            </Text>
            <Heading as={'h2'}>{contact.r_title}</Heading>
            <Flex align={'center'} gap={'10px'} pt={10}>
              <IconButton
                colorScheme={useColorModeValue('purple', 'orange')}
                icon={useColorModeValue(<AiFillPhone />, <AiOutlinePhone />)}
                _hover={{ cursor: 'default' }}
              ></IconButton>
              <Text>+54 11 5040-2265</Text>
            </Flex>
            <Flex align={'center'} gap={'10px'} pt={5}>
              <IconButton
                colorScheme={useColorModeValue('purple', 'orange')}
                icon={useColorModeValue(<MdMail />, <MdOutlineEmail />)}
                _hover={{ cursor: 'default' }}
              ></IconButton>
              <Text>rivas.ian.javier@gmail.com</Text>
            </Flex>
          </Flex>
        </SimpleGrid>
      </motion.div>
    </Center>
  )
}
