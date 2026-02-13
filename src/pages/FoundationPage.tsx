import { GlassCard } from "../components/GlassCard";
import { Download, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router";

export function FoundationPage() {
  const brandAssets = [
    {
      name: "AlloX Logo Package",
      description: "A complete collection of official AlloX logos and approved variations, with clear usage guidelines to ensure consistent and accurate brand representation across all platforms.",
      format: "ZIP (SVG, PNG)",
      size: "2.4 MB",
    },
  ];
  const location = useLocation();
  const eventId = location.hash

  const scrollToElement = () => {
    const element = document.getElementById(eventId.slice(1, eventId.length));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        // block: "end",
        // inline: "nearest",
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (eventId) {
      scrollToElement();
    } else {
      window.scrollTo(0, 0);
    }
  }, [eventId]);


  useEffect(() => {
    document.title = "Foundation";
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-pattern">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="glass-card px-4 py-2 text-xs font-medium text-gray-600 uppercase tracking-wider">
              AlloX Foundation
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 max-w-5xl mx-auto animate-fade-in">
            From narratives to portfolios.
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            The AlloX Foundation builds AI-powered infrastructure that
            transforms market narratives into diversified, risk-managed
            portfolios.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-50/50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <GlassCard className="p-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={24} className="text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Transform how people invest by replacing token-picking with
                narrative-based allocation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're building infrastructure that transforms market narratives
                into professionally managed, diversified baskets. Our AI
                constructs, rebalances, and optimizes token allocations within
                each theme, bringing traditional finance discipline to
                decentralized markets while maintaining full transparency and
                user control.
              </p>
            </GlassCard>

            <GlassCard className="p-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={24} className="text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Democratize access to professionally managed crypto portfolios.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where anyone can invest in crypto with the
                same sophistication as institutional players. Through
                AI-constructed baskets, risk-tiered allocation, and transparent
                rebalancing, we make narrative-based investing accessible to
                everyone, removing the complexity of token research while
                maintaining full decentralization.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              The Problem We're Solving
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
              <span className="font-bold">
                Crypto investing is overwhelming.
              </span>{" "}
              With thousands of tokens, constant narrative shifts, and complex
              research requirements, investors struggle to build diversified
              portfolios. Most resort to picking individual tokens, missing
              broader thematic opportunities and proper risk management.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              AlloX Foundation solves this by transforming market narratives
              into investable baskets. Our AI handles token selection,
              allocation, and rebalancing, bringing institutional-grade
              portfolio management to everyone while maintaining complete
              transparency and decentralization.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* The AlloX Advantage */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The AlloX Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Defensibility compounds with real capital, data, and execution
            </p>
          </div>

          <div className="mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="p-8">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Narrative Intelligence Engine
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                AlloX continuously maps market narratives to on-chain assets
                using proprietary market signals and continuous model iteration.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Execution Depth Across On Chain Actions
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Portfolio construction, swaps, staking, rebalancing, and routing
                are executed natively on-chain in a single workflow.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Data Flywheel From Real Capital Allocation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every allocation, rebalance, and user decision feeds back into
                portfolio construction and risk models.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Trust and Composability Layer
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Transparent weights, on-chain execution, and auditable logic
                enable integrations with wallets, protocols, and institutional
                workflows.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Litepaper Section */}
      <section className="py-24 px-6" id="litepaper">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Litepaper</h2>
            <p className="text-lg text-gray-600">
              A concise overview of AlloX's vision, ecosystem, and roadmap
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <GlassCard hover className="p-8 flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                    <Download size={24} className="text-blue-600" />
                  </div>
                  <div className="px-3 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-700">
                    English
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3">Litepaper (EN)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A comprehensive overview of AlloX's vision for narrative-based
                  investing and our AI-powered basket construction methodology.
                </p>
              </div>
              <button className="btn-primary w-full justify-center">
                <Download size={18} className="mr-2" />
                Download PDF
              </button>
            </GlassCard>

            <GlassCard hover className="p-8 p-8 flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                    <Download size={24} className="text-purple-600" />
                  </div>
                  <div className="px-3 py-1 bg-purple-50 rounded-full text-xs font-medium text-purple-700">
                    한국어
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3">Litepaper (KR)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AlloX의 내러티브 기반 투자 비전 및 AI 기반 바스켓 구성 방법론에
                  대한 포괄적인 개요.
                </p>
              </div>
              <button className="btn-primary w-full justify-center">
                <Download size={18} className="mr-2" />
                PDF 다운로드
              </button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section
        id="brand"
        className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-50/50"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Brand Assets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download official AlloX brand assets, logos, and design resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {brandAssets.map((asset, index) => (
              <GlassCard
                key={index}
                hover
                className="p-8 flex flex-col justify-center align-center"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold pr-4">{asset.name}</h3>
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Download size={18} className="text-gray-600" />
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {asset.description}
                </p>

                <a
                  href="https://cdn.allox.ai/allox/AlloXBrand.zip"
                  download
                  target="_blank"
                  className="btn-secondary w-full justify-center text-sm"
                >
                  <Download size={16} className="mr-2" />
                  Download
                </a>
              </GlassCard>
            ))}
            <GlassCard hover className="p-8  max-w-4xl mx-auto w-full">
              <h3 className="text-lg font-bold mb-3">Brand Usage Guidelines</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                When using AlloX brand assets, please follow these guidelines:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span>Use the official logo files without modification</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maintain minimum clear space around the logo</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span>Don't alter colors, proportions, or add effects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Use official brand colors from the guidelines document
                  </span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <GlassCard className="p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the AlloX Ecosystem
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a builder, researcher, or community member, there's
              a place for you in the AlloX ecosystem.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/docs" className="btn-primary justify-center">
                Read Documentation
              </Link>
              <a
                href="mailto:contact@allox.ai"
                className="btn-secondary justify-center"
              >
                Become a Partner
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
