import Header from "./components/Header";
import styled from "styled-components";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";

function App() {
  const users = ["Prayash", "Prasiddha"];
  return (
    <Container>
      <Header users={users} />
      <CartContainer>
        <CartItems />
        <CartTotal />
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
  column-gap: 20px;
`;
