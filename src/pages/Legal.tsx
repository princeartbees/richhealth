import React from 'react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { COMPANY_INFO } from '../constants';

export function PrivacyPolicy() {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <section className="pt-40 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl font-extrabold text-blue-950 mb-8">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none space-y-6 text-gray-600">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>At {COMPANY_INFO.name}, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
            
            <h2 className="text-2xl font-bold text-blue-900 mt-8">Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products, when you participate in activities on the website, or otherwise when you contact us.</p>
            
            <h2 className="text-2xl font-bold text-blue-900 mt-8">How We Use Your Information</h2>
            <p>We use the information we collect or receive to provide and facilitate delivery of services to the user, to respond to user inquiries, and to send administrative information to you.</p>
            
            <h2 className="text-2xl font-bold text-blue-900 mt-8">Contact Us</h2>
            <p>If you have questions or comments about this policy, you may contact us at {COMPANY_INFO.email}.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function TermsConditions() {
  return (
    <Layout>
      <SEO title="Terms & Conditions" />
      <section className="pt-40 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl font-extrabold text-blue-950 mb-8">Terms & Conditions</h1>
          <div className="prose prose-blue max-w-none space-y-6 text-gray-600">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>Welcome to {COMPANY_INFO.name}. By accessing our website, you agree to be bound by these Terms & Conditions.</p>
            
            <h2 className="text-2xl font-bold text-blue-900 mt-8">Use of the Website</h2>
            <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
            
            <h2 className="text-2xl font-bold text-blue-900 mt-8">Product Information</h2>
            <p>The information provided about our pharmaceutical products is for informational purposes only and is not intended as medical advice. Always consult with a healthcare professional.</p>
            
            <h2 className="text-2xl font-bold text-blue-900 mt-8">Intellectual Property</h2>
            <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
