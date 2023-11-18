import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ cl }) => cl || "#333"};
  text-transform: uppercase;
  border: ${({ br }) => br} solid #111;
  font-size: 16px;
  font-weight: 400;
  padding: 15px 60px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
