import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";

export const Container = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;
export const ProductsContainer = styled.div`
  flex: 60%;
`;
export const Title = styled.h3`
  color: #111;
  letter-spacing: 1.07px;
  border-bottom: 1px solid #ededed;
  font-weight: 300;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`;

export const IconMessage = styled.p`
  position: relative;
  border: 1px solid #ededed;
  text-align: center;
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: -5px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`;

export const BoldText = styled.b`
  font-weight: 800;
`;

export const StyledIcon = styled(TbTruckDelivery)`
  position: absolute;
  top: 5px;
  left: 7px;
  font-size: 30px;
  margin-right: 10px;
`;

export const ProductsDiv = styled.div``;

export const CardContainer = styled.div`
  flex: 40%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    border-top: 1px solid #ededed;
    padding-top: 15px;
  }
`;
export const CardDiv = styled.div`
  display: flex;
  width: 290px;
  height: 240px;
  margin: 0 auto;
  margin-top: 45px;
  background-color: #f9f9f9;
  padding: 5px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 auto;
  }
`;

export const CardDivLeft = styled.div`
  flex: 50%;
`;

export const LeftHeader = styled.h5`
  border-bottom: 1px solid #ededed;
  padding: 10px;
`;

export const RightHeader = styled.h5`
  text-decoration: underline;
  border-bottom: 1px solid #ededed;
  color: #111;
  padding: 10px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    color: #4a4a4a;
    text-decoration: none;
  }
`;

export const LeftPrice = styled.p`
  font-weight: 400;
  color: #6d6d6d;
`;
export const RightPrice = styled.p`
  font-weight: 600;
  margin-bottom: 40px;
`;
export const Cargo = styled.p`
  font-weight: 400;
  color: #6d6d6d;
  border-bottom: 1px solid #ededed;
  padding: 10px;
`;
export const CargoPrice = styled.p`
  font-weight: 600;
  border-bottom: 1px solid #ededed;
  padding: 10px;
`;
export const LastLeftPrice = styled.p`
  font-weight: 400;
  color: #6d6d6d;
`;
export const LastRightPrice = styled.p`
  font-weight: 600;
`;

export const CardDivRight = styled.div`
  flex: 50%;
`;
