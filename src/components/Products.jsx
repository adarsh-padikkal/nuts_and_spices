import React from 'react';

const Products = () => {
  return (
    <section id="products" className="section">
      <h2 className="section-title">Our <span>Premium</span> Products</h2>
      <div className="products-grid">
        <div className="product-card">
          <div className="product-img-wrapper">
            <img src="/images/nuts.png" alt="Premium Mixed Nuts" className="product-img" />
          </div>
          <div className="product-info">
            <h3 className="product-title">Premium Nuts</h3>
            <p className="product-desc">Carefully selected, perfectly roasted, and packed with nutrients. Our premium nuts are the perfect healthy snack.</p>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img-wrapper">
            <img src="/images/spices.png" alt="Aromatic Spices" className="product-img" />
          </div>
          <div className="product-info">
            <h3 className="product-title">Aromatic Spices</h3>
            <p className="product-desc">Enhance your culinary creations with our rich, vibrant, and authentic spices sourced from traditional farms.</p>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img-wrapper">
            <img src="/images/fish.png" alt="Traditional Dry Fish" className="product-img" />
          </div>
          <div className="product-info">
            <h3 className="product-title">Traditional Dry Fishes</h3>
            <p className="product-desc">Authentically dried and preserved to maintain the highest quality and rich coastal flavors.</p>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img-wrapper">
            <img src="/images/product_cardamom.png" alt="Green Cardamom" className="product-img" />
          </div>
          <div className="product-info">
            <h3 className="product-title">Green Cardamom</h3>
            <p className="product-desc">Hand-selected, premium grade green cardamom pods known for their intense aroma and exotic flavor.</p>
          </div>
        </div>
        <div className="product-card">
          <div className="product-img-wrapper">
            <img src="/images/product_pickles.png" alt="Traditional Pickles" className="product-img" />
          </div>
          <div className="product-info">
            <h3 className="product-title">Traditional Pickles</h3>
            <p className="product-desc">Aged perfectly using generational recipes and pure spices to deliver an authentic homemade taste.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
