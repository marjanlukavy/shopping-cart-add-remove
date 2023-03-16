import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/productsSlice";

import { Product } from "../../utils/storeTypes";

import {
  ShoppingCart,
  AddProductDetails,
  ProductDetails,
  ProductImage,
  ProductItemContainer,
  ProductPrice,
  ProductTitle,
  ProductCartBackground,
} from "./ProductItem.styles";

const ProductItem = ({
  title,
  price,
  image,
  id,
}: Pick<Product, "title" | "price" | "image" | "id">) => {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ productId: id }));
  }
  return (
    <ProductItemContainer>
      <ProductCartBackground onClick={handleAddToCart}>
        <AddProductDetails>
          <span>Add to Cart</span>
          <ShoppingCart />
        </AddProductDetails>
      </ProductCartBackground>
      <ProductImage src={image} alt={`product image of ${title}`} />

      <ProductDetails>
        <ProductTitle>{title} </ProductTitle>
        <ProductPrice>{price}$</ProductPrice>
      </ProductDetails>
    </ProductItemContainer>
  );
};

export default ProductItem;
