import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { COMPANY_INFO } from '../constants';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, User, Building } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <SEO title="Contact Us" description="Get in touch with Rich Health." />
      <section className="pt-40 pb-20 bg-blue-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">Let's Start a <span className="text-green-500">Conversation</span></h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">Have questions about our products or interested in a partnership? Our team is here to help you.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-extrabold text-blue-950">Contact Information</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
                  <User className="w-6 h-6 text-blue-600" />
                  <div><div className="text-sm font-bold uppercase tracking-wider text-blue-600">Owner</div><div className="text-lg font-bold text-blue-950">{COMPANY_INFO.owner}</div></div>
                </div>
                <div className="bg-green-50 p-6 rounded-3xl border border-green-100 flex items-start gap-4">
                  <Phone className="w-6 h-6 text-green-600" />
                  <div><div className="text-sm font-bold uppercase tracking-wider text-green-600">Phone</div><a href={`tel:${COMPANY_INFO.phone}`} className="text-lg font-bold text-blue-950">{COMPANY_INFO.phone}</a></div>
                </div>
                <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div><div className="text-sm font-bold uppercase tracking-wider text-blue-600">Email</div><a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-bold text-blue-950 break-all">{COMPANY_INFO.email}</a></div>
                </div>
                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-600" />
                  <div><div className="text-sm font-bold uppercase tracking-wider text-gray-500">Address</div><div className="text-lg font-bold text-blue-950">{COMPANY_INFO.address}</div></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-gray-100">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
                    <h4 className="text-2xl font-bold text-green-900">Message Sent!</h4>
                    <p className="text-green-700">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required name="name" value={formState.name} onChange={handleChange} placeholder="Full Name" className="w-full px-6 py-4 bg-gray-50 border rounded-2xl" />
                    <input required name="email" type="email" value={formState.email} onChange={handleChange} placeholder="Email" className="w-full px-6 py-4 bg-gray-50 border rounded-2xl" />
                    <input required name="phone" value={formState.phone} onChange={handleChange} placeholder="Phone" className="w-full px-6 py-4 bg-gray-50 border rounded-2xl" />
                    <select required name="subject" value={formState.subject} onChange={handleChange} className="w-full px-6 py-4 bg-gray-50 border rounded-2xl"><option value="">Subject</option><option value="Inquiry">Inquiry</option></select>
                    <textarea required name="message" value={formState.message} onChange={handleChange} rows={5} placeholder="Message" className="md:col-span-2 w-full px-6 py-4 bg-gray-50 border rounded-2xl resize-none" />
                    <button type="submit" className="md:col-span-2 bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl flex items-center justify-center gap-3"><Send className="w-5 h-5" /> Send Message</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
