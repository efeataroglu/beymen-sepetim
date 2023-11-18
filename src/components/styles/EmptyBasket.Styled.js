import styled from "styled-components";

export const Section = styled.section``;
export const Header = styled.header`
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
`;
export const H3 = styled.h3`
  font-weight: 500;
  letter-spacing: 1.07px;
`;

export const Image = styled.img`
  width: 400px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
  }
`;
export const Paragraph = styled.p`
  font-weight: 300;
  letter-spacing: 1.07px;
`;
