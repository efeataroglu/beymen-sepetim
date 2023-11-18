import {
  StyledNavbar,
  Container,
  Logo,
  NavDiv,
  BasketContainer,
  StyledIcon,
  BasketCounter
} from "../styles/Navbar.styled";

import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((store) => store.card);
  return (
    <>
      <StyledNavbar>
        <Container>
          <Logo src="https://cdn.beymen.com/assets/desktop/img/beymen-logo-dot-blue.svg" />
          <NavDiv>
            <BasketContainer>
              <BasketCounter>{quantity}</BasketCounter>
            </BasketContainer>
            <StyledIcon />
          </NavDiv>
        </Container>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
