import { GlassCard } from "../components/GlassCard";
import { AnimatedSwapDemo } from "../components/AnimatedSwapDemo";
import { AnimatedPortfolioDemo } from "../components/AnimatedPortfolioDemo";
import { MessageSquare, CheckCircle2, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";
import aiIcon from "../assets/aiIcon.svg";
import defiIcon from "../assets/defiIcon.svg";
import desciIcon from "../assets/desciIcon.svg";
import gamingIcon from "../assets/gamingIcon.svg";
import layerIcon from "../assets/layerIcon.svg";
import rwaIcon from "../assets/rwaIcon.svg";
import aibasketIcon from "../assets/aibasketIcon.svg";
import narrativeIcon from "../assets/narrativeIcon.svg";
import riskIcon from "../assets/riskIcon.svg";
import allocateIcon from "../assets/allocateIcon.svg";

export function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Product";
  }, []);

  return (
    <div className="min-h-screen bg-pattern">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            How AlloX Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Invest in market narratives through AI-constructed baskets in three
            easy steps
          </p>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {/* Step 1 */}
            <GlassCard className="p-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={32} className="text-blue-600" />
              </div>
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-bold text-blue-700 mb-6">
                Step 1
              </div>
              <h3 className="text-2xl font-bold mb-4">Choose a narrative</h3>
              <p className="text-gray-600 leading-relaxed">
                Select from market themes like Gaming, AI, RWA, or DeSci. Each
                narrative represents a diversified investment opportunity, not a
                single token.
              </p>
            </GlassCard>

            {/* Step 2 */}
            <GlassCard className="p-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-purple-600" />
              </div>
              <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-sm font-bold text-purple-700 mb-6">
                Step 2
              </div>
              <h3 className="text-2xl font-bold mb-4">AI builds your basket</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI constructs a diversified token basket for your chosen
                narrative, with risk tiers and transparent allocation
                percentages for every asset.
              </p>
            </GlassCard>

            {/* Step 3 */}
            <GlassCard className="p-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={32} className="text-green-600" />
              </div>
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-sm font-bold text-green-700 mb-6">
                Step 3
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Allocate with confidence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Select your investment amount, review the complete basket
                breakdown, and confirm. AlloX executes the full allocation
                across all tokens automatically.
              </p>
            </GlassCard>
          </div>

          {/* Visual Flow Diagram */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-12">
              The Allocation Flow
            </h2>
            <div className="glass-card p-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <img
                      src={narrativeIcon}
                      alt="Select Narrative"
                      className="text-3xl"
                    />
                  </div>
                  <p className="font-medium">Select Narrative</p>
                </div>

                <div className="text-gray-400 text-2xl hidden md:block">→</div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <img
                      src={aibasketIcon}
                      alt="AI Basket"
                      className="text-3xl"
                    />
                  </div>
                  <p className="font-medium">AI Basket</p>
                </div>

                <div className="text-gray-400 text-2xl hidden md:block">→</div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <img src={riskIcon} alt="Risk Tier" className="text-3xl" />
                  </div>
                  <p className="font-medium">Risk Tier</p>
                </div>

                <div className="text-gray-400 text-2xl hidden md:block">→</div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <img
                      src={allocateIcon}
                      alt="Allocate"
                      className="text-3xl"
                    />
                  </div>
                  <p className="font-medium">Allocate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-gray-50/50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Market Narratives Available
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Gaming */}
            <GlassCard hover className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img className="text-2xl" src={gamingIcon} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gaming & Metaverse</h3>
                  <p className="text-sm text-gray-600">
                    Diversified basket of gaming tokens
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                AI-constructed basket of leading gaming and metaverse projects.
                Available in High, Mid, and Low Cap tiers.
              </p>
            </GlassCard>

            {/* AI */}
            <GlassCard hover className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img className="text-2xl" src={aiIcon} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI & Agents</h3>
                  <p className="text-sm text-gray-600">
                    AI infrastructure and agent tokens
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Exposure to the AI revolution in crypto with a balanced basket
                of infrastructure, agents, and compute tokens across all risk
                tiers.
              </p>
            </GlassCard>

            {/* RWA */}
            <GlassCard hover className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img className="text-2xl" src={rwaIcon} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Real World Assets</h3>
                  <p className="text-sm text-gray-600">
                    Tokenized real-world assets
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Invest in the tokenization of real-world assets with a
                diversified basket from RWA leaders.
              </p>
            </GlassCard>

            {/* DeFi */}
            <GlassCard hover className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img className="text-2xl" src={defiIcon} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    DeFi Infrastructure
                  </h3>
                  <p className="text-sm text-gray-600">
                    Core DeFi protocols and DEXs
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Access the backbone of decentralized finance with baskets of
                leading DEXs, lending protocols, and DeFi infrastructure
                projects.
              </p>
            </GlassCard>

            {/* Layer 1/2 */}
            <GlassCard hover className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img className="text-2xl" src={layerIcon} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Layer 1 & Layer 2</h3>
                  <p className="text-sm text-gray-600">
                    Blockchain infrastructure plays
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Diversified exposure to leading L1 and L2 blockchain networks
                with automated rebalancing as the ecosystem evolves.
              </p>
            </GlassCard>

            {/* DeSci */}
            <GlassCard hover className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img className="text-2xl" src={desciIcon} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">DeSci</h3>
                  <p className="text-sm text-gray-600">
                    Decentralized science projects
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Early access to the emerging DeSci narrative with curated
                baskets of projects revolutionizing scientific research and
                funding.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Example Screenshots Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Real examples of narrative-based allocation
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Example 1: Swap */}
            <div>
              <AnimatedSwapDemo />
              <p className="text-sm text-gray-600 text-center">
                Transparent basket composition and allocation details
              </p>
            </div>

            {/* Example 2: Portfolio */}
            <div>
              <AnimatedPortfolioDemo />
              <p className="text-sm text-gray-600 text-center">
                AI explains basket rationale and risk management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <GlassCard className="p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to try AlloX?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Experience narrative-based investing with AI-constructed baskets
            </p>
            <Link
              to="/app"
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
