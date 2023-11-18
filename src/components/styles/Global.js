import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  
  body {
    background: ${({ theme }) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
  }



  
`;

export default GlobalStyles;
