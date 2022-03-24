import React, { useEffect } from 'react'
import Link from 'next/link'
import {
  Box,
  Heading,
  Text,
  HStack,
  Button,
  Image,
  IconButton,
  useColorModeValue,
  Flex
} from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'

export default function ProjectSlider({
  sref,
  data,
  imgUrl,
  siteUrl,
  codeUrl,
  inview
}) {
  const animateButtons = useAnimation()
  const animateText = useAnimation()
  useEffect(() => {
    if (inview) {
      animateText.start({
        opacity: 1,
        transition: {
          type: 'string',
          delay: 0.8,
          duration: 0.4
        }
      })
      animateButtons.start({
        y: 0,
        transition: {
          type: 'string',
          delay: 1.2,
          duration: 0.5,
          bounce: 0.3
        }
      })
    }
    if (!inview) {
      animateText.start({ opacity: 0 })
      animateButtons.start({ y: 100, duration: 0.1, bounce: 0 })
    }
  }, [inview, animateButtons, animateText])

  return (
    <Flex
      flexWrap={'wrap'}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={useColorModeValue('#E4E4E7', '#303133')}
      py={10}
      px={3}
      rounded="md"
      boxShadow="2xl"
    >
      <Box
        w={{
          base: '100%',
          md: '50%',
          lg: '60%'
        }}
      >
        <Box className="center" overflow={'hidden'}>
          <Heading ref={sref} mb="25px" className="project-title">
            {data.project_title}
          </Heading>
          <motion.div animate={animateText} className="center">
            <Text w="70%">{data.project_text}</Text>
          </motion.div>
          <motion.div animate={animateButtons}>
            <HStack my="20px" spacing="15px">
              <Link href={siteUrl}>
                <a>
                  <Button colorScheme={useColorModeValue('purple', 'orange')}>
                    <Text
                      color={useColorModeValue('light', 'dark')}
                      fontWeight="bold"
                      letterSpacing={0.5}
                    >
                      {data.btn_page}
                    </Text>
                  </Button>
                </a>
              </Link>
              <Link href={codeUrl}>
                <a>
                  <Button colorScheme={useColorModeValue('purple', 'orange')}>
                    <Text mr="5px">{data.btn_code}</Text>
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
          </motion.div>
        </Box>
      </Box>
      <Box w={{ base: '50%', sm: '50%', lg: '30%' }}>
        <Image
          src={imgUrl}
          width={400}
          height={{ base: 150, sm: 350 }}
          alt="project screen"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </Box>
    </Flex>
  )
}
