import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  border: 1px solid #ededed;
  margin-bottom: 1.5rem;
  padding: 1rem;
`;

export const ProductsLeft = styled.div``;
export const ProductsRight = styled.div``;

export const ProductsImage = styled.img``;

export const LightText = styled.b`
  font-weight: 200;
`;

export const ProductName = styled.p`
  font-weight: 500;
`;
export const ProductTitle = styled.p`
  font-weight: 200;
  color: #6d6d6d;
`;
export const ProductPrice = styled.p`
  font-weight: 800;
`;
export const ProductColor = styled.p``;
export const ProductQuantity = styled.p``;
export const Button = styled.button`
  background: transparent;
  border: none;
  margin-top: 5px;
  margin-right: 5px;
  color: #111;
  font-size: 30px;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: #6d6d6d;
  }
`;
export const ProductCargo = styled.p`
  font-weight: 200;
  color: #6d6d6d;
  font-size: 13px;
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #ec2c2c;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
