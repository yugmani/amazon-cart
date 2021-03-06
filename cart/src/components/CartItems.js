import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";

function CartItems({ items }) {
  // console.log("From CartItems Component:", items);
  return (
    <Container>
      <HeadingContainer>Shopping Cart</HeadingContainer>
      <hr />
      <CartContainer>
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </CartContainer>
    </Container>
  );
}

export default CartItems;

const Container = styled.div`
  // background-color: lightyellow;

  margin-right: 18px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const HeadingContainer = styled.h1`
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-right: 15px;
  padding-left: 15px;
  // padding: 15px;
`;
