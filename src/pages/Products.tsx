import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { Search, Filter, Pill, LayoutGrid, List } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Tablet' | 'Capsule'>('All');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <SEO 
        title="Our Products" 
        description="Explore our range of premium pharmaceutical products including Bonrich, mTm, Whitenil, and more. High-quality tablets and capsules by Rich Health."
      />

      {/* Header Section */}
      <section className="pt-40 pb-20 bg-blue-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950">
              Our Pharmaceutical <br />
              <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our comprehensive range of high-quality tablets and capsules, formulated for maximum efficacy and patient well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[72px] z-30 bg-white border-b border-gray-100 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex bg-gray-100 p-1 rounded-2xl w-full lg:w-auto">
              {(['All', 'Tablet', 'Capsule'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "flex-1 lg:flex-none px-8 py-2.5 rounded-xl text-sm font-bold transition-all",
                    activeCategory === cat
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-500 hover:text-blue-900"
                  )}
                >
                  {cat}s
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 space-y-6">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance Banner */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-blue-950 rounded-[40px] p-12 text-white flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3 space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                <Pill className="w-4 h-4" />
                Quality Guaranteed
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Every batch is tested for purity, potency, and safety.
              </h2>
              <p className="text-blue-200 text-lg">
                We follow stringent quality control protocols at every stage of manufacturing to ensure that our products meet the highest pharmaceutical standards.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 blur-[80px] opacity-30" />
                <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
                  <div className="text-5xl font-extrabold text-green-500 mb-2">100%</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-blue-300">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
