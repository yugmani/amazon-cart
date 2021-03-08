import React from "react";
import styled from "styled-components";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import NumberFormat from "react-number-format";
import SubTotal from "./SubTotal";

function CartTotal({ items }) {
  const getTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += parseFloat(item.price) * parseInt(item.quantity);
    });
    return totalPrice;
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    items.forEach((item) => {
      totalQuantity += parseInt(item.quantity);
    });
    return totalQuantity;
  };

  return (
    <Container>
      <CartHeaderContainer>
        <h2>Your Cart</h2>
        <ShoppingBasketIcon />
      </CartHeaderContainer>
      <TotalContainer>
        {items.map((item, index) => (
          <SubTotal index={index} key={index} item={item} />
        ))}

        {/* <h3>Total Items: {items.length}</h3> */}
        <HeaderThree>
          <SubTotalHeading>Subtotal:({getTotalQuantity()})</SubTotalHeading>

          <TotalPriceContainer>
            <NumberFormat
              value={getTotalPrice()}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </TotalPriceContainer>
        </HeaderThree>
      </TotalContainer>
      <ButtonContainer>Proceed to checkout</ButtonContainer>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  padding: 15px;
  background-color: white;
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

const HeaderThree = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

const SubTotalHeading = styled.div``;

const TotalPriceContainer = styled.div`
  padding-left: 8px;
  font-weight: bold;
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
