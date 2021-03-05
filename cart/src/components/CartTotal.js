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
      <TotalContainer>
        <HeaderThree>
          Subtotal(5 items):<TotalPriceContainer>$12541.00</TotalPriceContainer>{" "}
        </HeaderThree>
      </TotalContainer>
      <ButtonContainer>Proceed to checkout</ButtonContainer>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  padding: 15px;
  background-color: pink;
`;

const CartHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgray;
  padding-bottom: 20px;
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const HeaderThree = styled.h3``;

const TotalPriceContainer = styled.span`
  padding-left: 8px;
  font-weight: lighter;
`;

const ButtonContainer = styled.button`
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 16px;
  background-color: #f0c14b;
  width: 100%;
  border: 2px solid #a88734;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    background: #ddb347;
  }
`;
