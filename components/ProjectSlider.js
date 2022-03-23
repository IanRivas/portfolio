import React from 'react'
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
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'

export default function ProjectSlider({
  sref,
  data,
  imgUrl,
  siteUrl,
  codeUrl
}) {
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
        <Box className="center">
          <Heading ref={sref} mb="25px" className="project-title">
            {data.project_title}
          </Heading>
          <Text w="70%">{data.project_text}</Text>
          <HStack my="20px" spacing="24px">
            <Link href={siteUrl}>
              <a>
                <Button colorScheme={useColorModeValue('purple', 'orange')}>
                  <Text
                    color={useColorModeValue('light', 'dark')}
                    fontFamily="M PLUS Rounded 1c"
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
                  <IconButton
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(
                      <AiFillGithub size={40} />,
                      <AiOutlineGithub size={40} />
                    )}
                  />
                  <Text ml="5px">{data.btn_code}</Text>
                </Button>
              </a>
            </Link>
          </HStack>
        </Box>
      </Box>
      <Box w={{ base: '50%', sm: '50%', lg: '30%' }}>
        <Image
          src={imgUrl}
          width={400}
          height={{ base: 150, sm: 350 }}
          alt="project screen"
        />
      </Box>
    </Flex>
  )
}
