import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Pill } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  index?: number;
  key?: React.Key;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <Pill className="w-4 h-4 text-green-600" />
          <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
          {product.shortDescription}
        </p>
        
        <Link
          to={`/products/${product.slug}`}
          className="flex items-center justify-between w-full py-3 px-4 bg-blue-50 text-blue-700 rounded-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-all"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
