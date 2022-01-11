import React from "react";
import styled from "styled-components";
import themeList from "../../data/themeList";
import ParagraphText from "../paragraphTexts/ParagraphText";

const ProductsItemStyles = styled.div`
  text-align: left;
  padding: 3rem;
  border-radius: 12px;
  border-bottom: 2px solid #379af6 !important;
  border-right: 2px solid #421969 !important;
  .Products__title {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5em;
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "var(--darkBlue_2)" : "var(--lightBlue_1)"};
  }
  &:hover {
    background-color: var(--mediumSlateBlue);
    .products__title {
      color: var(--lightBlue_1);
    }
    .products__desc {
      color: var(--lightBlue_1);
    }
  }
  @media only screen and (max-width: 768px) {
    background-color: var(--mediumSlateBlue);
    .products__icon {
      background-color: var(--lightBlue_1);
      color: var(--mediumSlateBlue);
    }
    .products__title {
      color: var(--lightBlue_1);
    }
    .products__desc {
      color: var(--lightBlue_1);
    }
    .products__title {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
  }
`;

function ProductsItem({ icon, title, desc }) {
  return (
    <ProductsItemStyles>
      <div className="products__title">{title}</div>
      <ParagraphText className="products__desc">{desc}</ParagraphText>
    </ProductsItemStyles>
  );
}

export default ProductsItem;
