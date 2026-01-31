import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group transition-shadow duration-300 hover:shadow-xl"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
        <h3 className="text-md font-semibold mt-1 flex-grow">
          <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">
            {product.title}
          </Link>
        </h3>
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
          <div className="flex items-center text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            <span>{product.rating.rate} ({product.rating.count})</span>
          </div>
        </div>
        <button 
          onClick={() => addToCart(product)} 
          className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors duration-300"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
