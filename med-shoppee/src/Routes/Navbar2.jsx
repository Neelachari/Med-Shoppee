'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

export default function Navbar2() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'0px'}
        boder={"1px solid red"}
        mt={'0px'}
        py={{ base: 0 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          // ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          >
          {/* <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          /> */}
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text> */}

          <Flex display={{ base: 'none', md: 'flex' }} ml={2}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={0}>
          {/* <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
            Sign In
          </Button> */}
          {/* <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={8}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label} <ChevronDownIcon/>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'sm'}
                bg={popoverContentBgColor}
                p={1}
                rounded={'sm'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'sm'}
      _hover={{ bg: useColorModeValue('orange.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'orange.400' }}
            fontWeight={500}>
            {label} 
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'orange.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-evenly"
        alignItems="center"
        fontSize={"5px"}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={1}
            h={1}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={1}
          pl={2}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

// interface NavItem {
//   label: string
//   subLabel?: string
//   children?: Array<NavItem>
//   href?: string
// }

const NAV_ITEMS = [
  {
    label: 'Health Resource Center',
    children: [
      {
        label: 'All Diseases',
        // subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'All Medicines',
        // subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Medicines by Therapeutic Class',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Vitamins & Nutrition',
    children: [
      {
        label: 'Vitamins & Supplements',
        // subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Multivitamins',
        // subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Vitamin D3',
        // subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Vitamin C',
        // subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Vitamin B12 & B Complex',
        // subLabel: 'Find your dream design job',
        href: '#',
      }
    ],
  },
  {
    label: 'Diabetes',
    children: [
      {
        label: 'Diabetes Monitoring Devices',
        // subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Sugar Free',
        // subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Diabetic Medicines',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Sugar Substitutes',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Diabetic Diet',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Healthcare Devices',
    children: [
      {
        label: 'Top Selling Categories',
        // subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Diabetes Devices',
        // subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Pain Management',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Wound Care & Dressings',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Supports, Splints & Braces',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Surgicals',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Mobility Aids',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Daily Living Aids',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Personal Care',
    children: [
      {
        label: 'Skin Care',
        // subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Baby Care',
        // subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Hair Care',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Men Care',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Women Care',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Pet Care',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Ayurveda Products',
    children: [
      {
        label: 'Ayurveda Top Brands',
        // subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Chyawanparash',
        // subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Popular categories',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Top Health Concerns',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Unani Medicines',
        // subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  
  // {
  //   label: 'Health Resource Center',
  //   children: [
  //     {
  //       label: 'All Diseases',
  //       // subLabel: 'Trending Design to inspire you',
  //       href: '#',
  //     },
  //     {
  //       label: 'All Medicines',
  //       // subLabel: 'Trending Design to inspire you',
  //       href: '#',
  //     },
  //     {
  //       label: 'Medicines by Therapeutic Class',
  //       // subLabel: 'Up-and-coming Designers',
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: 'Health Resource Center',
  //   children: [
  //     {
  //       label: 'All Diseases',
  //       // subLabel: 'Trending Design to inspire you',
  //       href: '#',
  //     },
  //     {
  //       label: 'All Medicines',
  //       // subLabel: 'Trending Design to inspire you',
  //       href: '#',
  //     },
  //     {
  //       label: 'Medicines by Therapeutic Class',
  //       // subLabel: 'Up-and-coming Designers',
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: 'Learn Design',
  //   href: '#',
  // },
  // {
  //   label: 'Hire Designers',
  //   href: '#',
  // },
]