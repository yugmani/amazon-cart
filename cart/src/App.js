import React, { useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import data from "./Data/data.js";

function App() {
  const users = ["Prayash", "Prasiddha"];
  const [cartItems, setCartItems] = useState(data);
  // console.log(cartItems);
  return (
    <Container>
      <Header users={users} />
      <CartContainer>
        <CartItems items={cartItems} setCartItems={setCartItems} />
        <CartTotal items={cartItems} />
      </CartContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: space-between;
  flex-direction: column;
  height: 100vh;
`;

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 14px 18px 0 18px;
  column-gap: 15px;
`;
