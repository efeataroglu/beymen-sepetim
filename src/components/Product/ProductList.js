import React from "react";
import { useSelector } from "react-redux";
import { Title } from "../styles/ProductList.styled";
import EmptyBasket from "../ShoppingCard/EmptyBasket";
import FullBasket from "../ShoppingCard/FullBasket";
function ProductList() {
  const { cartItems, quantity, total } = useSelector((store) => store.card);
  // console.log(quantity);
  return <>{quantity < 1 ? <EmptyBasket /> : <FullBasket />}</>;
}

export default ProductList;
