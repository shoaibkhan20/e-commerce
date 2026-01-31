import React from 'react';
import { Store } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-secondary static bottom-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Store className="h-7 w-7 text-accent" />
            <span className="text-xl font-bold">ShopSphere</span>
          </div>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
