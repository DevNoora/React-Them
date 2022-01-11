import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../titles/SectionTitle';
import ProductsItem from './ProductsItem';

const ProductsSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .products__title {
    margin-bottom: 3rem;
  }
  .products__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .products__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ProductsSection() {
  return (
    <ProductsSectionStyles id="products">
      <div className="container">
        <SectionTitle className="services__title">Our Services</SectionTitle>
        <div className="services__items">
          <ProductsItem
            title="Professional Editing"
            desc="We do professional photo editing. Let us help you to take your photo next level."
          />
          <ProductsItem
            title="Casual Photography"
            desc="You can hire us for any kind of casual Photography. Book us for your next events. "
          />
          <ProductsItem
            title="Wedding Photography"
            desc="Wedding is the most memorable events of our life. Let us help you to capture it."
          />
        </div>
      </div>
    </ProductsSectionStyles>
  );
}

export default ProductsSection;
