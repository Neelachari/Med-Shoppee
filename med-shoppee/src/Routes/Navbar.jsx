'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Logo from "../Images/Project-icon.png"
import {BsCartPlus} from "react-icons/bs"
import { SignUp } from '../Pages/SignUp'
// interface Props {
//   children: React.ReactNode
// }

const Links = ['MEDICINES', 'PRODUCTS', 'LAB TESTS', 'CONSULT DOCTORS', 'AYURVEDA', 'CARE PLAN']

const NavLink = (props) => {
  const { children } = props

  return (
   <>
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      fontWeight={"500"}
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('red'),
      }}
      href={'/'}>
      {children}
    </Box>
    
   </>
    
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('white.100', 'white.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          
          <HStack spacing={8} alignItems={'center'}>
            <Box><img width="100px" src={Logo} alt=""/> </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex><BsCartPlus width={"30%"} /></Flex>
          <Flex alignItems={'center'}>
            
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJDEnnVNYD3wOk0PIywPT-2m4UETU7lhOSFBO2HywWPvrH7-g45Eh4Rq9F9WxZTYONKU&usqp=CAU'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => alert('Signup')}>Signup</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}