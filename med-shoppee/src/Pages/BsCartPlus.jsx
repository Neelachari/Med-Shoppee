import React, { useState } from 'react';
import { Box, Button, Center, Divider, Flex, Heading, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveItem } from '../redux/products/action';

const BsCartPlus = () => {
  const dispatch = useDispatch();
  const CartItem = useSelector((store) => store.productReducer.Cart);
  
  // Initialize quantity state for each item
  const [itemQuantities, setItemQuantities] = useState({});

  const handleRemove = (id) => {
    dispatch(RemoveItem(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    // Update the quantity for the specific item
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  return (
    <Box maxW="800px" mx="auto" my="4" marginTop={50}>
      <Heading mb="4">Your Cart</Heading>
      <Divider mb="4" />
      {CartItem.length === 0 ? <Heading>No Items in The Cart</Heading> : ""}
      <SimpleGrid columns={[1, 2]} spacing="4" width={"850px"}>
        {CartItem.map((item) => (
          <Flex key={item.id} p="4" shadow="md" borderWidth="1px" borderRadius="md">
            <Image src={item.image} alt="" boxSize="120px" objectFit="contain" />
            <Box flex="1" ml="4">
              <Text fontSize="sm" fontWeight="semibold" mb="2">
                {item.name}
              </Text>
              <Text fontSize="lg" mb="2">
                ₹{item.price}
              </Text>
              <Text fontSize="lg" mb="2">
                {item.category}
              </Text>
            </Box>
            <Spacer />
            <Box textAlign="center" display={"flex"} marginLeft={"25px"} height={"35px"} width={"300px"}>
              <Button
                size="sm"
                isDisabled={itemQuantities[item.id] === 1}
                onClick={() => handleQuantityChange(item.id, itemQuantities[item.id] - 1)}
              >
                -
              </Button>
              <span>{itemQuantities[item.id] || 1}</span>
              <Button
                size="sm"
                onClick={() => handleQuantityChange(item.id, (itemQuantities[item.id] || 1) + 1)}
              >
                +
              </Button>
            </Box>
            <Spacer />
            <Box textAlign="right" marginRight={"80px"}>
              <Text fontSize="lg" mb="2"></Text>
              <br />
              <br />
              <br />
              <Button size="sm" colorScheme="red" onClick={() => handleRemove(item.id)}>
                Remove
              </Button>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
      <Box mt="8">
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Subtotal:
          </Text>
          <Text fontSize="lg" fontWeight="semibold">
            {CartItem.reduce((total, item) => total + (item.price * (itemQuantities[item.id] || 1)), 0)}
          </Text>
        </Flex>
        <Flex justify="space-between" mt="2">
          <Text fontSize="lg" fontWeight="semibold">
            Shipping:
          </Text>
          <Text fontSize="lg" fontWeight="semibold">
            {CartItem.length === 0 ? '0' : '₹.99'}
          </Text>
        </Flex>
        <Divider my="4" />
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total:
          </Text>
          <Text fontSize="lg" fontWeight="semibold">
            ₹.{CartItem.length === 0 ? '0' : 99 + CartItem.reduce((total, item) => total + (item.price * (itemQuantities[item.id] || 1)), 0)}
          </Text>
        </Flex>
        <Center mt="8">
          {CartItem.length > 0 && (
            <Link to="/Paymentpage">
              <Button size="lg" colorScheme="green">
                Proceed to Pay
              </Button>
            </Link>
          )}
        </Center>
      </Box>
    </Box>
  );
};

export default BsCartPlus;
