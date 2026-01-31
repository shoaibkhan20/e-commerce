import React from 'react';
import { Loader } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-20 h-[100vh]">
      <Loader className="w-12 h-12 text-accent animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
