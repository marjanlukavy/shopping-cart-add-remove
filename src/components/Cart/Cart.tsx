import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import {
  CartContainer,
  TotalCartCost,
  CloseCartContainer,
} from "./Cart.styles";
import ProductItemCart from "./ProductItem";

const Cart = () => {
  const { cart, cartAmount } = useSelector(
    (state: RootState) => state.products
  );

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {expanded && cart.length ? (
        <>
          <CloseCartContainer onClick={() => setExpanded(false)} />
        </>
      ) : null}

      <CartContainer
        expanded={expanded}
        arial-label={`cart  of ${cart.length} products`}
      >
        {expanded &&
          cart.map((product) => (
            <ProductItemCart
              key={product.id}
              title={product.title}
              price={product.price * product.quantity}
              id={product.id}
              image={product.image}
              quantity={product.quantity}
            />
          ))}

        <TotalCartCost onClick={() => setExpanded(true)}>
          <span>Items {cart.length} </span>
          &nbsp;
          <span>${cart.length * cartAmount}</span>
        </TotalCartCost>
      </CartContainer>
    </>
  );
};

export default Cart;
