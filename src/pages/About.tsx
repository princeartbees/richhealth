import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { ShieldCheck, FlaskConical, Award, Users, CheckCircle2, Target, Eye, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO, LOGO_URL } from '../constants';

export default function About() {
  return (
    <Layout>
      <SEO 
        title="About Us" 
        description="Learn about Rich Health, a premier pharmaceutical manufacturing company in Surat dedicated to quality, innovation, and affordable healthcare."
      />

      {/* Page Header */}
      <section className="relative pt-40 pb-24 bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="Manufacturing Facility"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-950/80 to-blue-950" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <img 
                src={LOGO_URL} 
                alt={COMPANY_INFO.name} 
                className="h-20 w-auto object-contain brightness-0 invert mb-8"
                referrerPolicy="no-referrer"
              />
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Dedicated to <br />
                <span className="text-green-500">Global Health</span>
              </h1>
              <p className="text-xl text-blue-200 leading-relaxed">
                Rich Health is more than just a pharmaceutical company. We are a team of dedicated professionals committed to improving lives through high-quality healthcare solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Story</h2>
                <h3 className="text-4xl font-extrabold text-blue-950 leading-tight">
                  A Legacy of Trust and Innovation in Surat
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to make premium healthcare accessible to all, Rich Health has grown into a trusted name in the pharmaceutical industry. Based in Surat, Gujarat, we specialize in the manufacturing of high-quality tablets and capsules that meet international safety and efficacy standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our state-of-the-art facility is equipped with modern machinery and managed by a team of experts who ensure that every product leaving our premises is a testament to our commitment to excellence.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="text-3xl font-bold text-blue-900 mb-1">15+</div>
                  <div className="text-sm text-blue-600 font-bold uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
                  <div className="text-sm text-green-600 font-bold uppercase tracking-wider">Formulations</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200"
                  alt="Laboratory"
                  className="w-full h-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-blue-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[40px] shadow-xl shadow-blue-900/5 border border-gray-100 space-y-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <Target className="w-10 h-10" />
              </div>
              <h4 className="text-3xl font-bold text-blue-950">Our Mission</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide high-quality, innovative, and affordable pharmaceutical products that improve the health and well-being of people globally. We strive to achieve this through continuous research, ethical practices, and manufacturing excellence.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[40px] shadow-xl shadow-blue-900/5 border border-gray-100 space-y-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <Eye className="w-10 h-10" />
              </div>
              <h4 className="text-3xl font-bold text-blue-950">Our Vision</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a global leader in the pharmaceutical industry, recognized for our commitment to quality, innovation, and social responsibility. We aim to set new benchmarks in healthcare through our advanced formulations and patient-centric approach.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Core Values</h2>
            <h3 className="text-4xl font-extrabold text-blue-950">What Drives Us Forward</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Integrity",
                desc: "We maintain the highest ethical standards in all our operations and interactions."
              },
              {
                icon: Heart,
                title: "Compassion",
                desc: "Our work is driven by a deep desire to improve lives and alleviate suffering."
              },
              {
                icon: FlaskConical,
                title: "Innovation",
                desc: "We constantly seek new ways to improve our products and processes through science."
              }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6 p-8">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mx-auto">
                  <value.icon className="w-10 h-10" />
                </div>
                <h5 className="text-2xl font-bold text-blue-950">{value.title}</h5>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-extrabold leading-tight">
                Quality Certified <br />
                Manufacturing
              </h3>
              <p className="text-lg text-blue-200 leading-relaxed">
                Our manufacturing processes are strictly monitored and comply with the highest industry standards. We hold multiple certifications that validate our commitment to safety and quality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "GMP Certified Facility",
                  "ISO 9001:2015 Compliant",
                  "WHO Standard Practices",
                  "Quality Control Lab"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/10 rounded-3xl border border-white/10 flex items-center justify-center p-8">
                  <div className="text-center">
                    <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <div className="text-sm font-bold uppercase tracking-widest text-blue-300">Certification {i}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
