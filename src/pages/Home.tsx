import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  FlaskConical, 
  Award, 
  Users, 
  CheckCircle2, 
  Star,
  Quote
} from 'lucide-react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { PRODUCTS, COMPANY_INFO } from '../constants';
import { cn } from '../lib/utils';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <Layout>
      <SEO 
        title="Trusted Healthcare, Powered by Innovation" 
        description="Premium Quality Tablets & Capsules by Rich Health. We manufacture high-trust pharmaceutical products including Bonrich, mTm, and more."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] -z-10" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4" />
                GMP Certified Manufacturing
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-blue-950 leading-[1.1]">
                Trusted Healthcare, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  Powered by Innovation
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                Premium Quality Tablets & Capsules by Rich Health. We combine cutting-edge science with manufacturing excellence to deliver healthcare you can trust.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/products"
                  className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 group"
                >
                  View Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 border-2 border-blue-100 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 transition-all"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-bold text-blue-950">50+</div>
                  <div className="text-sm text-gray-500 font-medium">Products</div>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div>
                  <div className="text-3xl font-bold text-blue-950">100%</div>
                  <div className="text-sm text-gray-500 font-medium">Quality Assurance</div>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div>
                  <div className="text-3xl font-bold text-blue-950">10k+</div>
                  <div className="text-sm text-gray-500 font-medium">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1579165466521-35025af6c7fe?auto=format&fit=crop&q=80&w=1200"
                  alt="Laboratory Research"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-blue-50 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-2xl">
                    <FlaskConical className="text-green-600 w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Research</div>
                    <div className="text-lg font-extrabold text-blue-950">Advanced R&D</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-blue-50 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-2xl">
                    <Award className="text-blue-600 w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Quality</div>
                    <div className="text-lg font-extrabold text-blue-950">Certified Excellence</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=600"
                    alt="Pharma Manufacturing"
                    className="rounded-3xl shadow-lg w-full aspect-square object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="bg-blue-600 rounded-3xl p-8 text-white aspect-square flex flex-col justify-center">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-blue-100 font-medium">Years of Industry Experience</div>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="bg-green-500 rounded-3xl p-8 text-white aspect-square flex flex-col justify-center">
                    <Users className="w-10 h-10 mb-4" />
                    <div className="text-xl font-bold">Expert Team of Professionals</div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
                    alt="Quality Control"
                    className="rounded-3xl shadow-lg w-full aspect-square object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">About Rich Health</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">
                  Pioneering Excellence in Pharmaceutical Manufacturing
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Rich Health is a premier tablet and capsule manufacturing company based in Surat. We are committed to delivering high-quality, affordable healthcare solutions through innovation and rigorous quality standards.
              </p>

              <div className="space-y-4">
                {[
                  "State-of-the-art manufacturing facility",
                  "Rigorous quality control processes",
                  "Highly skilled R&D professionals",
                  "Commitment to global safety standards"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <CheckCircle2 className="text-green-600 w-5 h-5" />
                    </div>
                    <span className="text-blue-950 font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:gap-4 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-blue-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Products</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-950">
                Premium Quality Healthcare Solutions
              </h3>
            </div>
            <Link
              to="/products"
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[60px] border-blue-600 rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-blue-950">
              Setting the Gold Standard in Pharma
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Quality First",
                desc: "Every product undergoes multi-level testing to ensure maximum efficacy and safety.",
                color: "blue"
              },
              {
                icon: FlaskConical,
                title: "Innovative R&D",
                desc: "Our research team constantly works on advanced formulations for better patient outcomes.",
                color: "green"
              },
              {
                icon: Award,
                title: "Certified Facility",
                desc: "Our manufacturing units are fully compliant with GMP and other international standards.",
                color: "blue"
              },
              {
                icon: Users,
                title: "Trusted Partner",
                desc: "Preferred by healthcare professionals and distributors across the country.",
                color: "green"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3",
                  item.color === 'blue' ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"
                )}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-blue-950 mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-blue-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 skew-x-12 translate-x-1/4" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-green-500 font-bold uppercase tracking-widest text-sm">Testimonials</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  What Healthcare Professionals Say About Us
                </h3>
              </div>
              <p className="text-xl text-blue-200 leading-relaxed">
                We take pride in the trust we've built with doctors, pharmacists, and distributors nationwide.
              </p>
              <div className="flex gap-4">
                <div className="bg-blue-900/50 p-6 rounded-2xl border border-blue-800 flex-1">
                  <div className="text-3xl font-bold text-green-500 mb-1">98%</div>
                  <div className="text-sm text-blue-300 font-medium uppercase tracking-wider">Client Satisfaction</div>
                </div>
                <div className="bg-blue-900/50 p-6 rounded-2xl border border-blue-800 flex-1">
                  <div className="text-3xl font-bold text-green-500 mb-1">500+</div>
                  <div className="text-sm text-blue-300 font-medium uppercase tracking-wider">Distributors</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Quote className="absolute -top-10 -left-10 w-24 h-24 text-blue-800 opacity-50" />
              <div className="space-y-6">
                {[
                  {
                    name: "Dr. Rajesh Mehta",
                    role: "Senior Physician",
                    text: "Rich Health's products have consistently shown excellent results in my patients. Their commitment to quality is evident in every batch.",
                    rating: 5
                  },
                  {
                    name: "Anita Sharma",
                    role: "Pharma Distributor",
                    text: "Working with Rich Health has been a seamless experience. Their supply chain reliability and product efficacy are top-notch.",
                    rating: 5
                  }
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                      ))}
                    </div>
                    <p className="text-lg text-blue-100 italic mb-6 leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-white">{t.name}</div>
                        <div className="text-sm text-blue-400 font-medium">{t.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-600/30"
          >
            {/* Decorative circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Partner with Rich Health Today
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join our network of healthcare professionals and distributors. Let's work together to provide premium healthcare solutions to everyone.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-500 hover:text-white transition-all shadow-xl"
                >
                  Become a Partner
                </Link>
                <Link
                  to="/products"
                  className="bg-transparent text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
