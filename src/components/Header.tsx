import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store, LogIn, LogOut, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const { isAuthenticated, username, logout } = useAuth();

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-primary">
            <Store className="h-7 w-7 text-accent" />
            <span className="text-xl font-bold tracking-tight">ShopSphere</span>
          </Link>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link to="/" className="text-gray-600 hover:text-accent transition-colors duration-200 font-medium hidden sm:block">
              Home
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium hidden md:flex items-center gap-2">
                  <User size={16} /> {username}
                </span>
                <button onClick={logout} className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors duration-200 font-medium">
                  <LogOut size={18} />
                  <span className="hidden sm:block">Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors duration-200 font-medium">
                <LogIn size={18} />
                <span className="hidden sm:block">Login</span>
              </Link>
            )}

            <Link to="/cart" className="relative text-gray-600 hover:text-accent transition-colors duration-200">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </motion.div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
