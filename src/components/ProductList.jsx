import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import Filter from './Filter';
import './ProductList.css';
import { ThemeContext } from './ThemeContext';

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id='productList' className={`product-list ${theme}`}>
      <div className="product-list__box">
        <h2>Комплектующие:</h2>
        <Filter categories={['рули', 'вилки', 'рулевые', 'грипсы', 'колеса', 'шкурки', 'зажимы']} onFilterChange={handleFilterChange} />
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;