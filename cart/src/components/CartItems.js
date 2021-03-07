import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";

function CartItems({ items, setCartItems }) {
  const deleteItem = (indexToDelete) => {
    //Create a deleteItem() function
    //Pass the function from CartItems to CartItem component
    //Pass the index of the item to know which item to delete
    //Use the filter() function in es6 to filter out item based on index
    //Update the items using setCartItems() function
    // console.log("index:", index);

    const newItems = items.filter((item, index) => {
      return index != indexToDelete;
    });
    console.log(newItems);
    setCartItems(newItems);
  };
  const changeItemQuantity = (e, index) => {
    //When we select a quantity on item, we pass it in here
    //Pass in the index
    //using the index we need to change the quantity to the selected one from select option
    //update the items state

    // console.log(e.target.value);
    // console.log("index:", index);
    //DO NOT UPDATE THE STATE WITHOUT setter function
    const newItems = [...items];
    // console.log(newItems);
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  };

  return (
    <Container>
      <HeadingContainer>Shopping Cart</HeadingContainer>
      <hr />
      <CartContainer>
        {items.map((item, index) => (
          <CartItem
            index={index}
            key={index}
            item={item}
            changeItemQuantity={changeItemQuantity}
            deleteItem={deleteItem}
          />
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
