import React, { useState, useMemo, useEffect } from 'react';
import Banner from '../components/Banner';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/apiService';
import { Product } from '../types';
import LoadingSpinner from '../components/LoadingSpinner';
import { AnimatePresence } from 'framer-motion';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category));
    return Array.from(uniqueCategories);
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory, products]);

  return (
    <div>
      <Banner />
      <main id="products" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">Our Products</h2>
        <p className="text-center text-gray-600 mb-8">Explore our curated selection of products.</p>
        
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <>
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              <AnimatePresence>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default HomePage;
