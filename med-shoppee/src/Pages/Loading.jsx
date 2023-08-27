import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'
import "./Loding.css"

export const Loading = () => {
  return (
    <Box padding='6' boxShadow='lg' bg='white' mt="10px" id='Loading'>
      <Box>
       <SkeletonCircle size='10'  />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box>
       <SkeletonCircle size='10' />
       <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    </Box>
  )
}
