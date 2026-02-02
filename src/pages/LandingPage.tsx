import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { GlassCard } from '../components/GlassCard';
import { AnimatedChatDemo } from '../components/AnimatedChatDemo';
import { ArrowRight, MessageSquare, Shield, Zap, Globe, CheckCircle2, TrendingUp, Calendar, Linkedin, Instagram, Github } from 'lucide-react';
import { FaTelegram, FaDiscord, FaXTwitter } from 'react-icons/fa6';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-pattern">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <div className="glass-card px-4 py-2 text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Bridging TradFi & DeFi
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                Invest in Narratives,
                <br />Not Tokens
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                An AI-powered capital allocation platform that transforms market narratives into diversified, risk-managed portfolios. Bridging TradFi and DeFi through transparent, automated basket construction.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/app" className="btn-primary text-lg px-8 py-4">
                  Launch App
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/product" className="text-lg px-8 py-4 text-gray-700 hover:text-black transition-colors inline-flex items-center font-medium">
                  Explore Features
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Right: Interactive Chat Widget */}
            <div className="flex justify-center lg:justify-end animate-slide-up">
              <AnimatedChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-purple-50/20 to-transparent pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="glass-card px-4 py-2 text-xs font-medium text-gray-600 uppercase tracking-wider">
                Track Record
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Built for Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Proven performance across market cycles. Real results, real impact.
            </p>
          </div>

          {/* Key Metrics Grid - Enhanced */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-16">
            <GlassCard hover className="p-8 text-center group transition-all duration-300 hover:scale-105">
              <div className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                $150M+
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Market Cap</div>
            </GlassCard>

            <GlassCard hover className="p-8 text-center group transition-all duration-300 hover:scale-105">
              <div className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                87K
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Holders</div>
            </GlassCard>

            <GlassCard hover className="p-8 text-center group transition-all duration-300 hover:scale-105">
              <div className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-br from-pink-600 to-orange-600 bg-clip-text text-transparent">
                175K
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Community</div>
            </GlassCard>

            <GlassCard hover className="p-8 text-center group transition-all duration-300 hover:scale-105">
              <div className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-br from-orange-600 to-green-600 bg-clip-text text-transparent">
                $100M
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">TVL</div>
            </GlassCard>

            <GlassCard hover className="p-8 text-center group transition-all duration-300 hover:scale-105 col-span-2 lg:col-span-1">
              <div className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-br from-green-600 to-cyan-600 bg-clip-text text-transparent">
                $40M+
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Rewards</div>
            </GlassCard>
          </div>

          {/* Achievements - Enhanced */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <GlassCard hover className="p-10 text-center relative overflow-hidden group transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 size={36} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Coinbase</h3>
                <p className="text-sm text-gray-600 mb-1">Listed in 2022</p>
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mt-2">
                  Top-tier CEX
                </div>
              </div>
            </GlassCard>

            <GlassCard hover className="p-10 text-center relative overflow-hidden group transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={36} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Top 100</h3>
                <p className="text-sm text-gray-600 mb-1">Market cap peak</p>
                <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full mt-2">
                  Elite tier
                </div>
              </div>
            </GlassCard>

            <GlassCard hover className="p-10 text-center relative overflow-hidden group transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe size={36} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">10+ Exchanges</h3>
                <p className="text-sm text-gray-600 mb-1">Global liquidity</p>
                <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full mt-2">
                  Wide reach
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Additional Details - Enhanced */}
          <div className="text-center">
            <GlassCard className="p-8 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>
              <p className="text-base text-gray-700 leading-relaxed">
                <span className="font-bold text-lg">$40M+ in rewards distributed</span> across ETH, BNB, and AVAX. 
                <br className="hidden md:block" />
                Proven multi-chain infrastructure. Real value delivered to our community.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard hover className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Narrative-Based Investing</h3>
              <p className="text-gray-600 leading-relaxed">
                Invest in market themes like Gaming, AI, or RWA, not individual tokens. Each narrative contains a diversified basket of vetted assets.
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Constructed Baskets</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI continuously analyzes markets to build and rebalance diversified token baskets within each narrative, optimizing for performance and risk.
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Globe size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Risk-Tiered Allocations</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose your risk level: High, Mid, or Low market cap tiers. Each tier offers different risk/reward profiles within the same narrative.
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Select Any Amounts</h3>
              <p className="text-gray-600 leading-relaxed">
                Select any amounts and let AI handle the complex allocation and execution across multiple tokens.
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield size={24} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Explanations</h3>
              <p className="text-gray-600 leading-relaxed">
                AI explains every recommendation, showing exactly which tokens are in each basket, their weightings, and why they were selected.
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Rebalancing</h3>
              <p className="text-gray-600 leading-relaxed">
                Baskets are automatically rebalanced as market conditions change, ensuring your narrative exposure stays optimized without manual intervention.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="glass-card px-4 py-2 text-xs font-medium text-gray-600 uppercase tracking-wider">
                Powered by AI
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              From Narratives to Portfolios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              AlloX transforms complex market themes into simple, risk-managed investment decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard className="p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Narrative Intelligence</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AlloX monitors market narratives in real-time, identifying emerging themes and constructing diversified baskets of tokens that represent each narrative's core value proposition.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>AI analyzes social sentiment, trading volume, and fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Automatically rebalances baskets as narratives evolve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Surfaces emerging narratives before they go mainstream</span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard className="p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🌉</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Risk-Managed Allocation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every narrative offers three risk tiers based on market cap distribution. Choose your comfort level while maintaining full diversification within your selected theme.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>High Cap: Lower risk, established projects (&gt;$1B MC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Mid Cap: Balanced growth potential ($100M-$1B MC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Low Cap: Higher risk/reward early-stage (&lt;$100M MC)</span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-50/50">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="glass-card px-4 py-2 text-xs font-medium text-gray-600 uppercase tracking-wider">
                AlloX Foundation
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
              Narrative-Driven Capital Allocation
            </h2>
            
            <div className="glass-card p-12 mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <span className="font-bold">Our mission:</span> Transform how people invest in crypto by replacing token-picking with narrative-based allocation, where AI constructs, manages, and rebalances diversified baskets that capture the true value of market themes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From Gaming to RWA, from AI to DeSci, each narrative becomes a professionally managed portfolio that bridges traditional finance discipline with decentralized finance innovation.
              </p>
            </div>

            <Link to="/foundation" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
              Learn About Foundation
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Builders Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6">Built for Builders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate narrative-based allocation into your dApp with our APIs and embeddable widgets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <GlassCard hover className="p-8">
              <div className="font-mono text-xs text-gray-500 mb-4">API</div>
              <h3 className="text-2xl font-bold mb-4">Narrative Basket API</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Access real-time narrative baskets, risk tiers, and automated allocation execution. Full TypeScript support included.
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-xl text-xs font-mono overflow-x-auto">
                <code>npm install @allox/sdk</code>
              </div>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="font-mono text-xs text-gray-500 mb-4">WIDGET</div>
              <h3 className="text-2xl font-bold mb-4">Allocation Widget</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Drop-in widget that lets users invest in narratives with a single click. AI-powered basket construction included.
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-xl text-xs font-mono overflow-x-auto">
                <code>{'<AlloXWidget apiKey="..." />'}</code>
              </div>
            </GlassCard>
          </div>

          <div className="text-center">
            <Link to="/beta" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
              Apply for Beta Access
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6">Roadmap</h2>
            <p className="text-xl text-gray-600">Key milestones in our journey</p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6">
            <GlassCard className="p-8 min-w-[320px] snap-start">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-blue-600" />
                <div className="text-sm font-medium text-blue-600">Q1 2024</div>
              </div>
              <div className="w-3 h-3 bg-blue-600 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-3">Foundation Launch</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Core intent parser released</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Base network integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Beta launch with 1K users</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8 min-w-[320px] snap-start ring-2 ring-black/10">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-purple-600" />
                <div className="text-sm font-medium text-purple-600">Q2 2024 - Current</div>
              </div>
              <div className="w-3 h-3 bg-purple-600 rounded-full mb-4 animate-pulse"></div>
              <h3 className="text-xl font-bold mb-3">Multi-Chain Expansion</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Ethereum & BNB Chain support</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Advanced AI agent network</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Widget SDK beta release</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8 min-w-[320px] snap-start">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-gray-400" />
                <div className="text-sm font-medium text-gray-600">Q3 2024</div>
              </div>
              <div className="w-3 h-3 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-3">Governance & Ecosystem</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Token launch & governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Grant program activation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Public API access</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8 min-w-[320px] snap-start">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-gray-400" />
                <div className="text-sm font-medium text-gray-600">Q4 2024</div>
              </div>
              <div className="w-3 h-3 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-3">Full Decentralization</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Decentralized agent network</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Community governance live</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Cross-chain router v2</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <GlassCard className="p-16 text-center">
            <h2 className="text-5xl md:text-6xl mb-6">
              Invest in Themes, Not Tokens
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Experience capital allocation reimagined. AI transforms market narratives into diversified, risk-managed portfolios you can invest in with one click.
            </p>
            <Link to="/app" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
              Launch App
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200/50">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                </div>
                <span className="font-bold text-xl">AlloX</span>
              </div>
              <p className="text-sm text-gray-600">
                Narrative-driven capital allocation for TradFi & DeFi.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/product" className="hover:text-black transition-colors">Features</Link></li>
                <li><Link to="/docs" className="hover:text-black transition-colors">Documentation</Link></li>
                <li><Link to="/app" className="hover:text-black transition-colors">Launch App</Link></li>
                <li><a href="#" className="hover:text-black transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Foundation</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/foundation" className="hover:text-black transition-colors">About</Link></li>
                <li><a href="#" className="hover:text-black transition-colors">Governance</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Grants</a></li>
                <li><Link to="/blog" className="hover:text-black transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-black transition-colors">SDKs</a></li>
                <li><a href="#" className="hover:text-black transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Beta Access</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200/50">
            {/* Social Icons */}
            <div className="flex justify-center gap-3 mb-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={20} className="text-gray-700" />
              </a>
              <a 
                href="https://telegram.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
                aria-label="Telegram"
              >
                <FaTelegram size={20} className="text-gray-700" />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
                aria-label="Discord"
              >
                <FaDiscord size={20} className="text-gray-700" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-700" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-gray-700" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-700" />
              </a>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <div>© 2024 AlloX Foundation. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-black transition-colors">Privacy</a>
                <a href="#" className="hover:text-black transition-colors">Terms</a>
                <a href="#" className="hover:text-black transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
