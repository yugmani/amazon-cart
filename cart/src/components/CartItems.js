import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";

function CartItems() {
  return (
    <Container>
      <HeadingContainer>Shopping Cart</HeadingContainer>
      <hr />
      <CartContainer>
        <CartItem />
      </CartContainer>
    </Container>
  );
}

export default CartItems;

const Container = styled.div`
  background-color: lightyellow;
  padding: 20px;
  margin-right: 18px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const HeadingContainer = styled.h1`
  padding-bottom: 15px;
  display: flex;
  align-items: center;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  // padding-right: 15px;
  // padding-left: 15px;
`;
