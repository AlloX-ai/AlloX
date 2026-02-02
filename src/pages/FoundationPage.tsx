import { Navbar } from '../components/Navbar';
import { GlassCard } from '../components/GlassCard';
import { Download, Users, Target, Globe, Award, BookOpen, Vote, Gift } from 'lucide-react';

export function FoundationPage() {
  return (
    <div className="min-h-screen bg-pattern">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="glass-card px-4 py-2 text-xs font-medium text-gray-600 uppercase tracking-wider">
              AlloX Foundation
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 max-w-5xl mx-auto animate-fade-in">
            Narrative-Driven Capital Allocation
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            The AlloX Foundation builds AI-powered infrastructure that transforms market narratives into diversified, risk-managed portfolios, bridging traditional finance discipline with decentralized finance innovation.
          </p>
        </div>
      </section>

      {/* Litepaper Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-gray-50/50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Litepaper</h2>
            <p className="text-lg text-gray-600">
              A concise overview of AlloX's vision, ecosystem, and roadmap
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <GlassCard hover className="p-8">
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
                A comprehensive overview of AlloX's vision for narrative-based investing and our basket construction methodology.
              </p>
              
              <button className="btn-primary w-full justify-center">
                <Download size={18} className="mr-2" />
                Download PDF
              </button>
            </GlassCard>

            <GlassCard hover className="p-8">
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
                AlloX의 인텐트 기반 DeFi 비전 및 생태계 접근 방식에 대한 포괄적인 개요.
              </p>
              
              <button className="btn-primary w-full justify-center">
                <Download size={18} className="mr-2" />
                PDF 다운로드
              </button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Why AlloX Foundation Exists */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why We Exist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the infrastructure for narrative-based capital allocation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <GlassCard className="p-10">
              <Target size={40} className="text-blue-600 mb-6" />
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Transform how people invest by replacing token-picking with narrative-based allocation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're building infrastructure that transforms market narratives into professionally managed, diversified baskets. Our AI constructs, rebalances, and optimizes token allocations within each theme, bringing traditional finance discipline to decentralized markets while maintaining full transparency and user control.
              </p>
            </GlassCard>

            <GlassCard className="p-10">
              <Globe size={40} className="text-purple-600 mb-6" />
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Democratize access to professionally managed crypto portfolios.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where anyone can invest in crypto with the same sophistication as institutional players. Through AI-constructed baskets, risk-tiered allocation, and transparent rebalancing, we make narrative-based investing accessible to everyone, removing the complexity of token research while maintaining full decentralization.
              </p>
            </GlassCard>
          </div>

          <div className="mt-12">
            <GlassCard className="p-12">
              <h3 className="text-2xl font-bold mb-6 text-center">The Problem We're Solving</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
                <span className="font-bold">Crypto investing is overwhelming.</span> With thousands of tokens, constant narrative shifts, and complex research requirements, investors struggle to build diversified portfolios. Most resort to picking individual tokens, missing broader thematic opportunities and proper risk management.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                AlloX Foundation solves this by transforming market narratives into investable baskets. Our AI handles token selection, allocation, and rebalancing, bringing institutional-grade portfolio management to everyone while maintaining complete transparency and decentralization.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* How Governance Works */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-50/50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Governance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AlloX Foundation is governed by the community through decentralized voting
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-12 mb-8">
              <div className="flex items-center gap-4 mb-8">
                <Vote size={32} className="text-blue-600" />
                <h3 className="text-3xl font-bold">How Governance Works</h3>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Proposal Creation</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Any token holder can create a proposal for protocol changes, treasury allocation, grant programs, or ecosystem initiatives. Proposals require a minimum token threshold to prevent spam.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600 font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Community Discussion</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Proposals are discussed in our governance forum where community members provide feedback, suggest improvements, and debate the merits of each proposal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">On-Chain Voting</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Token holders vote on-chain with voting power proportional to their holdings. Votes are transparently recorded on the blockchain and cannot be manipulated.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600 font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Execution</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Approved proposals are automatically executed through smart contracts or implemented by the foundation team. All actions are publicly documented.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <div className="grid md:grid-cols-3 gap-6">
              <GlassCard className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">7 days</div>
                <div className="text-sm text-gray-600">Voting Period</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-sm text-gray-600">Min. Tokens to Propose</div>
              </GlassCard>
              <GlassCard className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">51%</div>
                <div className="text-sm text-gray-600">Quorum Required</div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Grants and Ecosystem Support */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Grants & Ecosystem Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We fund builders, researchers, and creators who advance the AlloX ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <GlassCard className="p-10">
              <div className="flex items-center gap-3 mb-6">
                <Award size={32} className="text-blue-600" />
                <div>
                  <div className="text-sm font-medium text-blue-600">BUILDER GRANTS</div>
                  <h3 className="text-3xl font-bold">Up to $100K</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                For teams building applications, integrations, or infrastructure on top of AlloX. We provide funding, technical support, mentorship, and go-to-market assistance.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span className="text-sm text-gray-700">Technical integrations & SDKs</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span className="text-sm text-gray-700">AI agent development</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span className="text-sm text-gray-700">Protocol integrations</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span className="text-sm text-gray-700">User-facing applications</span>
                </div>
              </div>
              
              <button className="btn-primary w-full justify-center">
                Apply for Builder Grant
              </button>
            </GlassCard>

            <GlassCard className="p-10">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={32} className="text-purple-600" />
                <div>
                  <div className="text-sm font-medium text-purple-600">RESEARCH GRANTS</div>
                  <h3 className="text-3xl font-bold">Up to $50K</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                For researchers exploring novel approaches to intent parsing, agent coordination, cross-chain execution, and AI safety in DeFi contexts.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span className="text-sm text-gray-700">Intent architecture research</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span className="text-sm text-gray-700">AI agent coordination models</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span className="text-sm text-gray-700">Security & safety frameworks</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span className="text-sm text-gray-700">Cross-chain execution optimization</span>
                </div>
              </div>
              
              <button className="btn-primary w-full justify-center">
                Apply for Research Grant
              </button>
            </GlassCard>
          </div>

          <GlassCard className="p-10">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Gift size={32} className="text-green-600" />
                  <div>
                    <div className="text-sm font-medium text-green-600">COMMUNITY GRANTS</div>
                    <h3 className="text-3xl font-bold">Up to $10K</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  For community members creating content, organizing events, translating documentation, or contributing to the ecosystem in other meaningful ways.
                </p>
                
                <button className="btn-secondary">
                  Learn More
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold mb-1">$5M+</div>
                  <div className="text-xs text-gray-600">Total Allocated</div>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold mb-1">150+</div>
                  <div className="text-xs text-gray-600">Grants Awarded</div>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold mb-1">45</div>
                  <div className="text-xs text-gray-600">Active Projects</div>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold mb-1">12</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-gray-50/50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Community Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing community and shape the future of DeFi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard hover className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Quests</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Complete challenges, provide feedback, and earn rewards through our gamified contribution system.
              </p>
              <a href="#" className="text-sm font-medium hover:underline">
                View Quests →
              </a>
            </GlassCard>

            <GlassCard hover className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Research Fellowship</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Join our research cohort exploring the future of intent-driven DeFi and AI agents.
              </p>
              <a href="#" className="text-sm font-medium hover:underline">
                Apply Now →
              </a>
            </GlassCard>

            <GlassCard hover className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ecosystem Bridges</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bring AlloX to your protocol or chain with integration grants and co-marketing.
              </p>
              <a href="#" className="text-sm font-medium hover:underline">
                Partner With Us →
              </a>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200/50">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-gray-600">
            © 2024 AlloX Foundation. Building the future of AI x DeFi.
          </p>
        </div>
      </footer>
    </div>
  );
}
