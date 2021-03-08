import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

function SubTotal({ index, item }) {
  let total = item.quantity * item.price;

  return (
    <Container>
      <IndexContainer>{index + 1}-</IndexContainer>
      <TitleContainer>
        {item.title.length > 20
          ? item.title.substring(0, 25) + "..."
          : item.title}
      </TitleContainer>
      <ItemContainer>
        <QuantityContainer>{item.quantity}x</QuantityContainer>
        <PriceContainer>
          <NumberFormat
            value={item.price}
            displayType={"text"}
            thouseandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
          />
          =
        </PriceContainer>
      </ItemContainer>
      <TotalContainer>
        <NumberFormat
          value={total}
          displayType={"text"}
          thouseandSeparator={true}
          decimalScale={2}
          fixedDecimalScale={true}
          thousandSeparator={true}
        />
      </TotalContainer>
    </Container>
  );
}

export default SubTotal;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const IndexContainer = styled.div`
  flex: 0.05;
`;

const TitleContainer = styled.div`
  flex: 0.55;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0.2;
`;

const QuantityContainer = styled.div``;

const PriceContainer = styled.div``;

const TotalContainer = styled.div`
  font-weight: bold;
  flex: 0.2;
  text-align: right;
`;
