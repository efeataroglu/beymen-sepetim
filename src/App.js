import { ThemeProvider } from "styled-components";
import theme from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Product/ProductList";
import { Container } from "./components/styles/Container.styled";
import { useEffect } from "react";
import { totalBasket } from "./slices/cardSlice";
import { useSelector, useDispatch } from "react-redux";
export default function App() {
  const { cardItems } = useSelector((store) => store.card);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalBasket());
  }, [cardItems]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />
        <Container>
          <ProductList />
        </Container>
      </>
    </ThemeProvider>
  );
}
