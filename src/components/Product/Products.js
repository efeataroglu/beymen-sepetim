import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  ProductsContainer,
  ProductsImage,
  ProductName,
  ProductTitle,
  ProductPrice,
  ProductColor,
  ProductQuantity,
  ProductsLeft,
  ProductsRight,
  ProductCargo,
  LightText,
  Button,
  DeleteBtn
} from "../styles/Products.styled";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { removeItem, increase, decrease } from "../../slices/cardSlice";

function Products({ id, name, title, price, color, img, quantity, cargo }) {
  const dispatch = useDispatch();
  const toPrice = parseFloat(price);
  const formattedPrice = new Intl.NumberFormat("tr-TR").format(toPrice);

  return (
    <>
      <ProductsContainer>
        <ProductsLeft>
          <ProductsImage src={img} />
        </ProductsLeft>
        <ProductsRight>
          <ProductName>{name}</ProductName>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{formattedPrice} TL</ProductPrice>
          <ProductColor>
            Renk: <LightText>{color}</LightText>
          </ProductColor>
          <ProductQuantity>
            Adet: {quantity}
            <div>
              <Button
                onClick={() => {
                  dispatch(increase(id));
                }}
              >
                <CiCirclePlus />
              </Button>
              <Button
                onClick={() => {
                  dispatch(decrease(id));
                }}
              >
                <CiCircleMinus />
              </Button>
            </div>
          </ProductQuantity>
          <ProductCargo>{cargo}</ProductCargo>
          <DeleteBtn
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            Ürünü Sil
          </DeleteBtn>
        </ProductsRight>
      </ProductsContainer>
    </>
  );
}

export default Products;
