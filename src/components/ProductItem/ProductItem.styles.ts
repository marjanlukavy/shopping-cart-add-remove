import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi";

export const ShoppingCart = styled(HiOutlineShoppingCart)`
  width: 50px;
  height: auto;
  color: white;
`;

export const ProductCartBackground = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #514e4ead;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    font-weight: bold;
    font-size: 21px;
    color: white;
  }
`;

export const ProductItemContainer = styled.div`
  width: 22%;
  flex-grow: 1;
  padding: 20px;
  background-color: white;
  border: 1px solid #b6afaf;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    & > ${ProductCartBackground} {
      opacity: 1;
    }
  }

  @media (max-width: 950px) {
    width: 45%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export const ProductTitle = styled.span`
  width: 250px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ProductPrice = styled.span`
  background-color: #eaeaea;
  padding: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 150px;
  padding: 20px;
`;
