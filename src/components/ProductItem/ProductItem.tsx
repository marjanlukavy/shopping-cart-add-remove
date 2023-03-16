import { useDispatch } from "react-redux";
import { addToCart } from "store/productsSlice";

import { ProductItemProps } from "./types";
import * as S from "./ProductItem.styles";

const ProductItem = ({ title, price, image, id }: ProductItemProps) => {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ productId: id }));
  }
  return (
    <S.ProductItemContainer>
      <S.ProductCartBackground onClick={handleAddToCart}>
        <S.AddProductDetails>
          <span>Add to Cart</span>
          <S.ShoppingCart />
        </S.AddProductDetails>
      </S.ProductCartBackground>
      <S.ProductImage src={image} alt={`product image of ${title}`} />

      <S.ProductDetails>
        <S.ProductTitle>{title} </S.ProductTitle>
        <S.ProductPrice>{price}$</S.ProductPrice>
      </S.ProductDetails>
    </S.ProductItemContainer>
  );
};

export default ProductItem;
