import React from "react";
import styled from "styled-components";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function CartTotal() {
  return (
    <Container>
      <CartHeaderContainer>
        <h2>Cart Total</h2>
        <ShoppingBasketIcon />
      </CartHeaderContainer>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  background-color: lightgray;
  padding: 10px;
`;

const CartHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
