import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="filter">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Все товары</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;