import { useRouter } from 'next/router'
import { Select } from '@chakra-ui/react'

export default function LenguageSelector() {
  const router = useRouter()
  const changeLang = e => {
    router.push(router.pathname, router.pathname, {
      locale: e.target.value
    })
  }

  return (
    <Select onChange={changeLang} mr={5} cursor="pointer" minW="78px">
      <option value="en">English</option>
      <option value="es">Español </option>
    </Select>
  )
}
