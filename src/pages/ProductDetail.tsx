import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { PRODUCTS, COMPANY_INFO } from '../constants';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Pill, 
  ShieldCheck, 
  Info, 
  MessageCircle, 
  Mail,
  ChevronRight,
  FlaskConical,
  Stethoscope,
  AlertTriangle,
  Package,
  Sparkles,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!product) {
      navigate('/products');
    } else {
      setActiveImage(product.image);
    }
  }, [product, navigate]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(`Hello Rich Health, I'm interested in learning more about ${product.name}.`);
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`;

  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <SEO 
        title={product.name} 
        description={product.shortDescription}
        ogImage={product.image}
      />

      {/* Breadcrumbs */}
      <div className="pt-32 pb-6 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-900 font-bold">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Product Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 sticky top-32"
            >
              <div className="relative aspect-square rounded-[40px] overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute top-6 left-6">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>
              </div>
              
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((img, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveImage(img)}
                      className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImage === img ? 'border-blue-600 shadow-lg ring-4 ring-blue-100' : 'border-gray-100 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-widest text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  Premium Quality Formulation
                </motion.div>
                
                <div className="space-y-2">
                  <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-blue-950 leading-tight">
                    {product.name}
                  </motion.h1>
                  {product.tagline && (
                    <motion.p variants={itemVariants} className="text-2xl font-medium text-blue-600/80 italic flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-yellow-500" />
                      "{product.tagline}"
                    </motion.p>
                  )}
                </div>

                <motion.p variants={itemVariants} className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  {product.description}
                </motion.p>
              </div>

              {/* Composition & Usage Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="bg-blue-50 p-8 rounded-[32px] border border-blue-100 space-y-4">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-lg">
                    <FlaskConical className="w-6 h-6 text-blue-600" />
                    Composition
                  </div>
                  <p className="text-blue-800 font-medium leading-relaxed">
                    {product.composition}
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-orange-50 p-8 rounded-[32px] border border-orange-100 space-y-4">
                  <div className="flex items-center gap-2 text-orange-900 font-bold text-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                    Recommended Dosage
                  </div>
                  <p className="text-orange-800 font-medium leading-relaxed">
                    {product.usage}
                  </p>
                </motion.div>
              </div>

              {/* Benefits Section */}
              <motion.div variants={itemVariants} className="space-y-8">
                <h3 className="text-3xl font-bold text-blue-950 flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Indications Section */}
              {product.indications && (
                <motion.div variants={itemVariants} className="space-y-8">
                  <h3 className="text-3xl font-bold text-blue-950 flex items-center gap-3">
                    <Stethoscope className="w-8 h-8 text-blue-600" />
                    Indications (Uses)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.indications.map((indication, i) => (
                      <div key={i} className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <Info className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-semibold">{indication}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Precautions & Packaging */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.precautions && (
                  <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-2xl font-bold text-blue-950 flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                      Precautions
                    </h3>
                    <ul className="space-y-3">
                      {product.precautions.map((precaution, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                          {precaution}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {product.packaging && (
                  <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-2xl font-bold text-blue-950 flex items-center gap-3">
                      <Package className="w-6 h-6 text-purple-600" />
                      Packaging
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed bg-purple-50 p-6 rounded-2xl border border-purple-100">
                      {product.packaging}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Actions */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white px-8 py-6 rounded-3xl font-bold text-xl hover:bg-green-700 transition-all shadow-2xl shadow-green-600/30 flex items-center justify-center gap-3 group"
                >
                  <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  Inquiry via WhatsApp
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Inquiry for ${product.name}`}
                  className="flex-1 bg-blue-600 text-white px-8 py-6 rounded-3xl font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 group"
                >
                  <Mail className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  Email Inquiry
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold text-blue-950">Other Products</h3>
              <p className="text-gray-500 font-medium">Explore more from Rich Health</p>
            </div>
            <Link to="/products" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.filter(p => p.id !== product.id).slice(0, 3).map((p, i) => (
              <motion.div 
                key={p.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-blue-950 mb-4">{p.name}</h4>
                  <Link to={`/products/${p.slug}`} className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                    View Details <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
