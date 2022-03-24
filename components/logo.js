import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(-10deg) scale(1.1);
  }
`

const Logo = () => {
  const palmImg = `/images/logo.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={palmImg} width={30} height={30} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="Noto Sans"
            fontWeight="bold"
            letterSpacing={0.5}
            ml={1}
            _hover={{ textDecoration: 'underline' }}
          >
            Ian Rivas
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
