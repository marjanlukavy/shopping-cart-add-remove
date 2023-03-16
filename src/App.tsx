import React from "react";
import Cart from "./components/Cart/Cart";
import Products from "./components/ProductContainer/Products";
import styled from "styled-components";

const AppContainer = styled.div`
  position: relative;
`;

function App() {
  return (
    <AppContainer>
      <Products />
      <Cart />
    </AppContainer>
  );
}

export default App;
