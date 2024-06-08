import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductsCard';
import Filters from '../components/Filters';

function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: [0, 1000],
    discount: 0,
    availability: true,
  });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products', { params: filters });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>All Products</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;
