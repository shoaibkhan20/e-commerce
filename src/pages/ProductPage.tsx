import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/apiService';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await getProductById(Number(id));
        setProduct(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch product details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl font-bold">{error || 'Product not found'}</h2>
        <Link to="/" className="text-accent hover:underline mt-4 inline-block">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-accent mb-8 transition-colors">
        <ArrowLeft size={16} />
        Back to products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center">
          <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
        </div>
        <div>
          <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
          <h1 className="text-3xl lg:text-4xl font-bold my-2">{product.title}</h1>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating.rate) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="ml-2 text-gray-600">{product.rating.rate} ({product.rating.count} reviews)</span>
          </div>
          <p className="text-3xl font-bold text-primary my-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
          <button 
            onClick={() => addToCart(product)} 
            className="w-full md:w-auto bg-primary text-white py-3 px-8 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
