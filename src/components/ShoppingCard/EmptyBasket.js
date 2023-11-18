import { Button } from "../styles/Button.styled";
import {
  H3,
  Header,
  Paragraph,
  Section,
  Image
} from "../styles/EmptyBasket.Styled";

export default function EmptyBasket() {
  return (
    <>
      <Section>
        <Header>
          <H3>SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR</H3>
          <Image src="./images/empty.svg" />
          <Paragraph>
            Birbirinden seçkin binlerce ürünü hemen keşfedin.
          </Paragraph>
          <Button onClick={() => window.location.reload()} cl="#fff" bg="#000">
            ALIŞVERİŞE DEVEM ET
          </Button>
        </Header>
      </Section>
    </>
  );
}
