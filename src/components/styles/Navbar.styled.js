import styled from "styled-components";
import { IoBag } from "react-icons/io5";

export const StyledNavbar = styled.nav`
  height: 80px;
  box-shadow: inset 0 -1px 0 0 #e9e9e9;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.img`
  width: 320px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 200px;
    margin-top: 20px;
  }
`;

export const NavDiv = styled.div`
  position: relative;
`;

export const BasketContainer = styled.div`
  color: #4a4a4a;
  width: 20px;
  text-align: center;
  border-radius: 50%;
`;

export const StyledIcon = styled(IoBag)`
  color: #4a4a4a;
  position: absolute;
  bottom: 7px;
  right: 16px;
`;

export const BasketCounter = styled.p``;
