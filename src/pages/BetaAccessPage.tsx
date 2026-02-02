import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { GlassCard } from '../components/GlassCard';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function BetaAccessPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    telegram: '',
    projectName: '',
    projectX: '',
    service: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-pattern">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="glass-card px-4 py-2 text-xs font-medium text-gray-600 uppercase tracking-wider">
              Beta Access
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bridge TradFi & DeFi with AI
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be among the first to integrate AlloX's AI-powered, chat-first experience. Give your users natural language access to portfolio management, opportunity discovery, and onchain execution across both traditional and decentralized finance.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <GlassCard className="p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <Sparkles size={24} className="text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Application Form</h2>
                  <p className="text-sm text-gray-600">Fill in your details below</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white/80 transition-all duration-200"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white/80 transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Telegram */}
                <div>
                  <label htmlFor="telegram" className="block text-sm font-medium mb-2">
                    Personal Telegram *
                  </label>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white/80 transition-all duration-200"
                    placeholder="@username"
                  />
                  <p className="text-xs text-gray-500 mt-1">We'll reach out to you here</p>
                </div>

                {/* Project Name */}
                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium mb-2">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white/80 transition-all duration-200"
                    placeholder="Your Project"
                  />
                </div>

                {/* Project X Profile */}
                <div>
                  <label htmlFor="projectX" className="block text-sm font-medium mb-2">
                    Project X (Twitter) Profile *
                  </label>
                  <input
                    type="url"
                    id="projectX"
                    name="projectX"
                    value={formData.projectX}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white/80 transition-all duration-200"
                    placeholder="https://x.com/yourproject"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white/80 transition-all duration-200 cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="allox-api">AlloX API</option>
                    <option value="chat-widget">Chat Widget</option>
                    <option value="intent-parser">Intent Parser</option>
                    <option value="full-integration">Full Integration</option>
                    <option value="custom-solution">Custom Solution</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4 transition-all duration-200 hover:shadow-xl"
                >
                  Submit Application
                </button>

                <p className="text-xs text-center text-gray-500">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </GlassCard>
          ) : (
            <GlassCard className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle2 size={40} className="text-white" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
              
              <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto leading-relaxed">
                Thank you for your interest in AlloX. Our team will review your application and reach out to you on Telegram soon.
              </p>

              <div className="glass-card p-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50 mb-8">
                <p className="text-sm text-gray-700">
                  <span className="font-bold">What's next?</span><br />
                  We typically respond within 2-3 business days. In the meantime, join our community to stay updated!
                </p>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary px-8 py-3"
              >
                Submit Another Application
              </button>
            </GlassCard>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-50/50">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Beta Access Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Early adopters get exclusive advantages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <GlassCard hover className="p-8">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Chat-First Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrate natural language portfolio management and onchain execution into your platform through our AI-powered chat interface
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage AI that learns from every interaction, improving recommendations and adapting to user preferences over time
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="text-3xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-3">TradFi & DeFi Unity</h3>
              <p className="text-gray-600 leading-relaxed">
                Offer your users a unified experience across traditional and decentralized finance with clarity, automation, and trust
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200/50">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-sm text-gray-600">
            © 2024 AlloX Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
