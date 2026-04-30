import { Link } from "react-router";
import { GlassCard } from "../components/GlassCard";
import { AnimatedChatDemo } from "../components/AnimatedChatDemo";
import {
  ArrowRight,
  MessageSquare,
  Shield,
  Zap,
  Globe,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import { FaTelegram, FaDiscord, FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";
import { StatsCounter } from "../components/StatsCounter";


export function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AlloX";
  }, []);

  const partners = [
    { name: "BNB Chain", icon: "bnbChain.svg" },
    { name: "Base", icon: "base.svg" },
    { name: "Binance Wallet", icon: "binanceWallet.svg" },
    { name: "TrustWallet", icon: "trustWallet.svg" },
    { name: "Gate Wallet", icon: "gateWallet.svg" },
    { name: "Zerra Ventures", icon: "zerraVentures.svg" },
    { name: "XPIN Network", icon: "xpinNetwork.svg" },
    { name: "SWFT BLOCKCHAIN", icon: "swftBlockchain.svg" },
    { name: "Bridgers", icon: "bridgers.svg" },
    { name: "OKX Wallet", icon: "okxWallet.svg" },
    { name: "PancakeSwap", icon: "pancakeSwap.svg" },
    { name: "Simplicity Group", icon: "simplicityGroup.svg" },
    { name: "ChainGPT", icon: "chainGpt.svg" },
    { name: "Oortech", icon: "oortech.svg" },
    { name: "iMe", icon: "iMe.svg" },
    { name: "MoonWhale", icon: "moonWhale.svg" },
    { name: "World Mobile", icon: "worldMobile.svg" },
    { name: "World of Dypians", icon: "wod.svg" },
    { name: "Mansory", icon: "mansory.png" },
    { name: "4AI", icon: "4ai.png" },
     { name: "Syndicate", icon: "syndicate.png" },
    { name: "Gate DEX", icon: "gate.svg" },

  ]

  return (
    <div className="min-h-screen bg-pattern">
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

              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                Invest in Narratives,
                <br />
                Not Tokens
              </h1>

              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                An AI-powered capital allocation platform that transforms market
                narratives into diversified, risk-managed portfolios. Bridging
                TradFi and DeFi through transparent, automated basket
                construction.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="https://app.allox.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Launch App
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/product"
                  className="text-lg px-8 py-4 text-gray-700 hover:text-black transition-colors inline-flex items-center font-medium"
                >
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
      <StatsCounter />

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
              Proven performance across market cycles. Real results, real
              impact.
            </p>
          </div>

          {/* Key Metrics Grid - Enhanced */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-16">
            <GlassCard
              hover
              className="flex flex-col justify-center p-4 sm:p-8 text-center group transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl lg:text-5xl font-bold mb-0 sm:mb-3 bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                $150M+
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Capital Throughput
              </div>
            </GlassCard>

            <GlassCard
              hover
              className="flex flex-col justify-center p-4 sm:p-8 text-center group transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl lg:text-5xl font-bold mb-0 sm:mb-3 bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                500K+
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Wallets interacted
              </div>
            </GlassCard>

            <GlassCard
              hover
              className="flex flex-col justify-center p-4 sm:p-8 text-center group transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl lg:text-5xl font-bold mb-0 sm:mb-3 bg-gradient-to-br from-pink-600 to-orange-600 bg-clip-text text-transparent">
                175K+
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Community Reach
              </div>
            </GlassCard>

            <GlassCard
              hover
              className="flex flex-col justify-center p-4 sm:p-8 text-center group transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl lg:text-5xl font-bold mb-0 sm:mb-3 bg-gradient-to-br from-orange-600 to-green-600 bg-clip-text text-transparent">
                $100M+
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Assets Allocated
              </div>
            </GlassCard>

            <GlassCard
              hover
              className="flex flex-col justify-center p-4 sm:p-8 text-center group transition-all duration-300 hover:scale-105 col-span-2 lg:col-span-1"
            >
              <div className="text-2xl lg:text-5xl font-bold mb-0 sm:mb-3 bg-gradient-to-br from-green-600 to-cyan-600 bg-clip-text text-transparent">
                $40M+
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                On chain Rewards
              </div>
            </GlassCard>
          </div>

          {/* Achievements - Enhanced */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <GlassCard
              hover
              className="p-10 text-center relative overflow-hidden group transition-all duration-300"
            >
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

            <GlassCard
              hover
              className="p-10 text-center relative overflow-hidden group transition-all duration-300"
            >
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

            <GlassCard
              hover
              className="p-10 text-center relative overflow-hidden group transition-all duration-300"
            >
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
          {/* <div className="text-center">
            <GlassCard className="p-8 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>
              <p className="text-base text-gray-700 leading-relaxed">
                <span className="font-bold text-lg">$40M+ in rewards distributed</span> across ETH, BNB, and AVAX. 
                <br className="hidden md:block" />
                Proven multi-chain infrastructure. Real value delivered to our community.
              </p>
            </GlassCard>
          </div> */}
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
              <h3 className="text-xl font-bold mb-3">
                Narrative-Based Investing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Invest in market themes like Gaming, AI, or RWA, not individual
                tokens. Each narrative contains a diversified basket of vetted
                assets.
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Constructed Baskets</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI continuously analyzes markets to build and rebalance
                diversified token baskets within each narrative, optimizing for
                performance and risk.
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Globe size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Risk-Tiered Allocations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Choose your risk level: High, Mid, or Low market cap tiers. Each
                tier offers different risk/reward profiles within the same
                narrative.
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Select Any Amounts</h3>
              <p className="text-gray-600 leading-relaxed">
                Select any amounts and let AI handle the complex allocation and
                execution across multiple tokens.
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield size={24} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Transparent Explanations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI explains every recommendation, showing exactly which tokens
                are in each basket, their weightings, and why they were
                selected.
              </p>
            </GlassCard>

            <GlassCard hover className="p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Narrative Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Track how capital flows across sectors and adjust exposure based
                on narrative strength.
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
              AlloX transforms complex market themes into simple, risk-managed
              investment decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard className="p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  Narrative Intelligence
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AlloX monitors market narratives in real-time, identifying
                  emerging themes and constructing diversified baskets of tokens
                  that represent each narrative's core value proposition.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-blue-600 mt-0.5 flex-shrink-0"
                    />
                    <span>
                      AI analyzes social sentiment, trading volume, and
                      fundamentals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-blue-600 mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Automatically rebalances baskets as narratives evolve
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-blue-600 mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Surfaces emerging narratives before they go mainstream
                    </span>
                  </li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard className="p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  Risk-Managed Allocation
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every narrative offers three risk tiers based on market cap
                  distribution. Choose your comfort level while maintaining full
                  diversification within your selected theme.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-purple-600 mt-0.5 flex-shrink-0"
                    />
                    <span>
                      High Cap: Lower risk, established projects (&gt;$150M+ MC)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-purple-600 mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Mid Cap: Balanced growth potential ($30M-$150M MC)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-purple-600 mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Low Cap: Higher risk/reward early-stage ($2M-$30M MC)
                    </span>
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
                <span className="font-bold">Our mission:</span> Transform how
                people invest in crypto by replacing token-picking with
                narrative-based allocation, where AI constructs, manages, and
                rebalances diversified baskets that capture the true value of
                market themes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From Gaming to RWA, from AI to DeSci, each narrative becomes a
                professionally managed portfolio that bridges traditional
                finance discipline with decentralized finance innovation.
              </p>
            </div>

            <Link
              to="/foundation"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Learn About Foundation
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Builders Section */}
      {/* <section className="py-24 px-6">
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
      </section> */}

      {/* Roadmap Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-6">Roadmap</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our journey
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6">
            <GlassCard className="p-8 min-w-[320px] snap-start">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-purple-600" />
                <div className="text-sm font-medium text-purple-600">
                  Q1 2026
                </div>
              </div>
              <div className="w-3 h-3 bg-purple-600 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-3">Foundation Launch</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-green-600 flex-shrink-0 mt-0.5"
                  />
                  {/* <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div> */}
                  <span>Beta platform release</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-green-600 flex-shrink-0 mt-0.5"
                  />
                  {/* <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div> */}
                  <span>AlloX Campaign</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-green-600 flex-shrink-0 mt-0.5"
                  />
                  {/* <div className="w-4 h-4 border-2 border-green-400 rounded-full flex-shrink-0 mt-0.5"></div> */}
                  <span>Daily Bonus</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8 min-w-[320px] snap-start ring-2 ring-black/10">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-purple-600" />
                <div className="text-sm font-medium text-purple-600">Q2 2026 - Current</div>
              </div>
              <div className="w-3 h-3 bg-purple-600 rounded-full mb-4 animate-pulse"></div>
              <h3 className="text-xl font-bold mb-3">Multi-Chain Expansion</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-green-600 flex-shrink-0 mt-0.5"
                  />
                  <span>On-chain execution</span>
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
                <div className="text-sm font-medium text-gray-600">Q3 2026</div>
              </div>
              <div className="w-3 h-3 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-3">
                Platform & Distribution
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Token launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Public API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Grant program activation</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-8 min-w-[320px] snap-start">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-gray-400" />
                <div className="text-sm font-medium text-gray-600">Q4 2026</div>
              </div>
              <div className="w-3 h-3 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-3">
                Infrastructure & Decentralization
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Protocol integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Community governance live</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0 mt-0.5"></div>
                  <span>Chain Expansion</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50/50 to-transparent">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Partners & Backers</h2>
            <p className="text-xl text-gray-600">
              Collaborating with industry leaders to shape the future
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <GlassCard className="p-8 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <img
                    src={`https://cdn.allox.ai/allox/partners/${partner.icon}`}
                    alt={partner.name}
                    className="h-12 mx-auto mb-4"
                  />
                  <p className="text-xs font-medium text-gray-600">{partner.name}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <GlassCard className="p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-6">
                  <div className="glass-card px-4 py-2 text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Security First
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl mb-6">Audited & Secure</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our dApp has been rigorously audited by a leading blockchain security firm to ensure the safety of your assets.
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <a
                    href="https://skynet.certik.com/projects/allox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg px-8 py-4 gap-2 inline-flex items-center group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="24"
                      viewBox="0 0 22 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.6925 3.67883L20.8188 4.44253C20.9184 5.15299 20.9645 5.86991 20.9568 6.58728C20.956 8.17256 20.7648 9.75196 20.3872 11.2916C19.8766 13.3834 18.9873 15.3639 17.7633 17.1353C16.3489 19.1696 14.3038 21.1705 11.3228 22.7782L10.958 22.9747L10.5934 22.7782C7.61237 21.1705 5.56809 19.1696 4.15285 17.1353C2.92885 15.3639 2.03956 13.3834 1.52896 11.2916C1.15149 9.75226 0.960251 8.1731 0.959345 6.58812C0.951639 5.87075 0.997774 5.15382 1.09736 4.44337L1.22366 3.67966C1.23444 3.61738 1.23279 3.55358 1.2188 3.49194C1.20482 3.4303 1.17877 3.37204 1.14216 3.32051C1.10556 3.26898 1.05912 3.2252 1.00552 3.1917C0.951915 3.1582 0.892216 3.13564 0.829859 3.12533C0.767502 3.115 0.703722 3.11713 0.642187 3.13157C0.580652 3.14601 0.522588 3.1725 0.471335 3.20949C0.420081 3.24648 0.376654 3.29324 0.343557 3.34709C0.310459 3.40094 0.288344 3.46081 0.278487 3.52324L0.152186 4.28695C0.0435488 5.04906 -0.00706138 5.81832 0.000791185 6.58812C0.00139315 8.25118 0.201903 9.90812 0.598003 11.5233C1.13719 13.7291 2.07583 15.8173 3.36744 17.6848C4.86048 19.8338 7.026 21.9467 10.1425 23.6238L10.7347 23.9425C10.8045 23.9803 10.8825 24 10.9618 24C11.0411 24 11.1192 23.9803 11.1889 23.9425L11.7803 23.6238C14.8935 21.9459 17.0599 19.8338 18.5554 17.6848C19.8464 15.8175 20.7844 13.7295 21.3231 11.5242C21.7193 9.90896 21.9198 8.25202 21.9204 6.58897C21.9282 5.81916 21.8776 5.0499 21.769 4.28779L21.6427 3.52408C21.6328 3.46164 21.6107 3.40177 21.5776 3.34793C21.5445 3.29407 21.5011 3.24731 21.4498 3.21032C21.3986 3.17333 21.3405 3.14685 21.279 3.13241C21.2175 3.11796 21.1537 3.11584 21.0913 3.12616C21.0289 3.13648 20.9692 3.15904 20.9156 3.19254C20.862 3.22603 20.8156 3.26981 20.779 3.32134C20.7424 3.37287 20.7164 3.43113 20.7024 3.49278C20.6884 3.55442 20.6867 3.61822 20.6975 3.6805L20.6925 3.67883Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.84009 3.15853L10.9584 0.983701L18.2355 3.20538C18.3574 3.2418 18.4887 3.22848 18.6007 3.16832C18.7127 3.10817 18.7964 3.00609 18.8333 2.88441C18.8703 2.76273 18.8575 2.63138 18.7978 2.51909C18.7382 2.4068 18.6365 2.32272 18.5149 2.28526L11.098 0.0209225C11.007 -0.00697418 10.9097 -0.00697418 10.8186 0.0209225L3.55987 2.23674C3.49921 2.25488 3.44273 2.28481 3.39367 2.32483C3.34461 2.36486 3.30395 2.41417 3.27399 2.46995C3.24404 2.52573 3.22541 2.58688 3.21915 2.64988C3.21289 2.71289 3.21914 2.7765 3.23754 2.83708C3.25593 2.89767 3.28611 2.95402 3.32634 3.00291C3.36657 3.0518 3.41606 3.09226 3.47197 3.12197C3.52787 3.15168 3.5891 3.17006 3.65213 3.17605C3.71516 3.18203 3.77875 3.17551 3.83925 3.15686L3.84009 3.15853Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.326742 3.81935L10.5319 23.7376C10.5717 23.8155 10.6321 23.8809 10.7064 23.9268C10.7808 23.9728 10.8663 23.9975 10.9538 23.9983C11.0412 23.9991 11.1271 23.9759 11.2023 23.9313C11.2774 23.8866 11.339 23.8222 11.3801 23.7451L17.6036 12.1055L17.6128 12.0871L21.5962 3.80597C21.6502 3.69169 21.6569 3.56071 21.6148 3.44152C21.5728 3.32233 21.4854 3.22454 21.3716 3.16943C21.2579 3.11433 21.127 3.10634 21.0074 3.14722C20.8878 3.18809 20.7892 3.27453 20.7329 3.38773L16.7562 11.6622L10.9727 22.4862L1.17912 3.38103C1.1509 3.32431 1.1117 3.27375 1.06379 3.23228C1.01589 3.19082 0.960226 3.15927 0.900035 3.13947C0.83985 3.11966 0.776335 3.112 0.713162 3.11693C0.649994 3.12185 0.588429 3.13926 0.532038 3.16815C0.475644 3.19704 0.425545 3.23683 0.384641 3.28522C0.343738 3.3336 0.312844 3.38963 0.293749 3.45004C0.274654 3.51046 0.267738 3.57406 0.273401 3.63717C0.279065 3.70027 0.297195 3.76163 0.326742 3.81768V3.81935Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.2113 12.6898H16.5597C16.6867 12.6898 16.8085 12.6394 16.8983 12.5495C16.9881 12.4597 17.0386 12.338 17.0386 12.2109C17.0386 12.0839 16.9881 11.9621 16.8983 11.8723C16.8085 11.7825 16.6867 11.732 16.5597 11.732H5.2113C5.08429 11.732 4.96249 11.7825 4.87268 11.8723C4.78288 11.9621 4.73242 12.0839 4.73242 12.2109C4.73242 12.338 4.78288 12.4597 4.87268 12.5495C4.96249 12.6394 5.08429 12.6898 5.2113 12.6898Z"
                        fill="white"
                      />
                      <script />
                    </svg>
                    CertiK
                    <ArrowRight
                      size={20}
                      className=" group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <a
                    href="https://github.com/AlloX-ai/AlloX-Security-Audit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg px-8 py-4 inline-flex items-center group"
                  >
                    <Shield size={26} className="mr-2" />
                    View Security Audit
                    <ArrowRight
                      size={20}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6 border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">dApp Audited</h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive security audit by CertiK
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">
                        Multi-Signature Security
                      </h4>
                      <p className="text-sm text-gray-600">
                        Protected by multi-sig wallet
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Real-Time Monitoring</h4>
                      <p className="text-sm text-gray-600">
                        24/7 security monitoring and threat detection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <GlassCard className="p-8 md:p-16 text-center">
            <h2 className="text-4xl md:text-6xl mb-6">
              Invest in Themes, Not Tokens
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Experience capital allocation reimagined. AI transforms market
              narratives into diversified, risk-managed portfolios you can
              invest in with one click.
            </p>
            <Link
              to="https://app.allox.ai/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Launch App
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
