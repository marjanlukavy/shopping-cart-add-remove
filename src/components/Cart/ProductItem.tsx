import { useDispatch } from "react-redux";
import { setProductQuantity, deleteProduct } from "../../store/productsSlice";

import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemTitle,
  CartItemPrice,
  QuantityInput,
  RemoveButton,
} from "./Cart.styles";

const ProductItemCart = ({
  title,
  price,
  image,
  quantity,
  id,
}: {
  title: string;
  price: number;
  id: number;
  image: string;
  quantity: number;
}) => {
  const dispatch = useDispatch();
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    dispatch(setProductQuantity({ productId: id, quantity: newQuantity }));
  };

  const handleProductDelate = () => {
    dispatch(deleteProduct({ productId: id }));
  };

  return (
    <CartItemContainer>
      <CartItemImage src={image} alt={`product image of ${title}`} />
      <CartItemDetails>
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemPrice>Price: {price}$</CartItemPrice>
        <CartItemPrice>
          Quantity:
          <QuantityInput
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </CartItemPrice>
        <RemoveButton
          onClick={handleProductDelate}
          aria-label={`Remove ${title} from cart`}
        >
          Remove
        </RemoveButton>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default ProductItemCart;
