import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header({ users }) {
  return (
    <Container>
      <LogoContainer>
        <Logoimg
          src="https://larrybrownsports.com/wp-content/uploads/2021/02/amazon-logo.jpg"
          alt="logo"
        />
      </LogoContainer>
      {/* <HeaderTitle>Amazon Cart </HeaderTitle> */}
      <UserContainer>
        {users[1]}
        <UserImage>
          <AccountCircleIcon />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  background-color: #25364a;
  color: white;
  // position: relative;
`;

const HeaderTitle = styled.div`
  font-size: 37px;
  display: flex;
  align-items: center;
  margin-right: 15px;
  margin-left: 15px;
`;

const LogoContainer = styled.div`
  max-width: 150px;
  max-height: 150px;
  cursor: pointer;
  margin-left: 8px;
`;

const Logoimg = styled.img`
  width: 100%;
  height: 100%;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  // position: absolute;
  // right: 0;
  margin-right: 15px;
  margin-left: 15px;
`;

const UserImage = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 8px;
`;
