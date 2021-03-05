import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function CartItem() {
  return (
    <ItemContainer>
      <CartImage
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003?wid=470&hei=556&fmt=png-alpha&.v=1583552356577"
        alt="pro"
      />
      <ItemDetails>
        <ItemName>Apple iPad Pro</ItemName>

        <StockInfo>In Stock</StockInfo>

        <ItemQuantity>
          <Quantity>
            {/* <label for="Qty"> </label> */}
            <QuantitySelect name="Qty" id="qty">
              <option value="1">Qty:1</option>
              <option value="2">Qty:2</option>
              <option value="3">Qty:3</option>
              <option value="5">Qty:5</option>
              <option value="10">Qty:10</option>
            </QuantitySelect>
            {/* <ArrowDropDownIcon /> */}
          </Quantity>
          <ItemDivider>|</ItemDivider>
          <ItemDelete>
            Delete
            {/* <DeleteOutlineIcon /> */}
          </ItemDelete>
        </ItemQuantity>
      </ItemDetails>
      <ItemPrice>$769.00</ItemPrice>
    </ItemContainer>
  );
}

export default CartItem;

const ItemContainer = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

const CartImage = styled.img`
  flex: 0.3;
  max-width: 100px;
  max-height: 150px;
  object-fit: contain;
`;

const ItemDetails = styled.div`
  //   background-color: pink;
  padding-right: 15px;
  padding-left: 15px;
  flex: auto;
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #007185;
`;

const StockInfo = styled.h5`
  margin-top: 4px;
  color: #007600;
`;

const ItemQuantity = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
`;

const ItemPrice = styled.div`
  flex: 0.2;
  font-weight: 700;
  font-size: 18px;
  text-align: right;
`;

const Quantity = styled.div``;

const QuantitySelect = styled.select`
  background-color: #f0f2f2;

  border-radius: 6px;
  padding: 3px;
  box-shadow: 0px 2px 5px 0px rgba(15, 17, 17, 0.15);
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

const ItemDelete = styled.div`
  color: #007185;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const ItemDivider = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  color: #dddddd;
  font-weight: bold;
`;
