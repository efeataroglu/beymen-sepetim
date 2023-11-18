import { useSelector, useDispatch } from "react-redux";
import Products from "../Product/Products";
import {
  Container,
  Title,
  ProductsContainer,
  ProductsDiv,
  CardContainer,
  CardDiv,
  IconMessage,
  StyledIcon,
  BoldText,
  CardDivLeft,
  CardDivRight,
  RightHeader,
  LeftHeader,
  LeftPrice,
  RightPrice,
  Cargo,
  CargoPrice,
  LastLeftPrice,
  LastRightPrice
} from "../styles/FullBasket.styled";

import { Button } from "../styles/Button.styled";
import { clearBasket } from "../../slices/cardSlice";

export default function FullBasket() {
  const dispatch = useDispatch();

  const { cardItems, quantity, total } = useSelector((store) => store.card);

  const productsList = cardItems.map((item) => {
    return <Products key={item.id} {...item} />;
  });

  const toPrice = parseFloat(total);
  const formattedPrice = new Intl.NumberFormat("tr-TR").format(toPrice);

  return (
    <>
      <Container>
        <ProductsContainer>
          <Title>ALIŞVERİŞ SEPETİM</Title>
          <IconMessage>
            <StyledIcon />
            <BoldText>Beymen</BoldText> tarafından gönderilecektir.
          </IconMessage>
          <ProductsDiv>{productsList}</ProductsDiv>
        </ProductsContainer>
        <CardContainer>
          <CardDiv>
            <CardDivLeft>
              <LeftHeader>SİPARİŞ ÖZETİ</LeftHeader>
              <LeftPrice>Toplam Tutar: (KDV Dahil)</LeftPrice>
              <Cargo>Kargo Ücreti:</Cargo>
              <LastLeftPrice>Ödenecek Tutar:</LastLeftPrice>
            </CardDivLeft>

            <CardDivRight>
              <RightHeader>Sepeti Paylaş</RightHeader>
              <RightPrice>{formattedPrice} TL</RightPrice>

              <CargoPrice>0,00 TL</CargoPrice>
              <LastRightPrice>{formattedPrice} TL</LastRightPrice>
            </CardDivRight>
          </CardDiv>

          <Button
            cl="#fff"
            bg="#000"
            style={{
              width: "78%",
              margin: "0 auto",
              display: "flex",
              marginBottom: "20px",
              marginTop: "20px",
              justifyContent: "center"
            }}
          >
            SATIN AL
          </Button>
          <Button
            onClick={() => dispatch(clearBasket())}
            cl="#111"
            bg="#fff"
            br="1px"
            style={{
              width: "78%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center"
            }}
          >
            SEPETİ TEMİZLE
          </Button>
        </CardContainer>
      </Container>
    </>
  );
}
