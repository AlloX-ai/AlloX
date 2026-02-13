import { useEffect, useState } from "react";
import { GlassCard } from "../components/GlassCard";
import {
  Search,
  Book,
  Wallet,
  Repeat,
  TrendingUp,
  Shield,
  Globe,
  Code,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";

export function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Docs";
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sections = [
    { id: "getting-started", label: "Getting Started", icon: Book },
    { id: "wallet-connection", label: "Wallet Connection", icon: Wallet },
    { id: "narratives", label: "Market Narratives", icon: TrendingUp },
    { id: "baskets", label: "Basket Construction", icon: Repeat },
    { id: "security", label: "Security & Risk Tiers", icon: Shield },
    { id: "networks", label: "Supported Networks", icon: Globe },
    { id: "api", label: "API & Widget Integration", icon: Code },
  ];

  const wallets = [
    {id: "metamask", name: "MetaMask", image: "metamaskConnect.svg"},
    {id: "okx", name: "OKX Wallet", image: "okxConnect.svg"},
    {id: "walletconnect", name: "WalletConnect", image: "walletConnect.svg"},
    {id: "trust", name: "Trust Wallet", image: "trustWalletLogo.svg"},
  ]



  return (
    <div className="min-h-screen bg-pattern">
      <div className="pt-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          {/* Search Bar */}
          {/* <div className="mb-8 animate-fade-in">
            <div className="glass-card p-2 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 px-4">
                <Search size={20} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="flex-1 py-3 bg-transparent border-none outline-none text-sm"
                />
                <kbd className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div> */}

          <div className="grid lg:grid-cols-[280px_1fr] gap-8 pb-24 mt-4">
            {/* Sidebar */}
            <aside className="hidden lg:block animate-slide-up">
              <div className="glass-card p-4 sticky top-28">
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          window.scrollTo(0, 0);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          activeSection === section.id
                            ? "bg-black text-white"
                            : "text-gray-700 hover:bg-black/5"
                        }`}
                      >
                        <Icon size={18} />
                        {section.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="animate-fade-in">
              {activeSection === "getting-started" && (
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      Getting Started
                    </h1>
                    <p className="text-xl text-gray-600">
                      Learn how to use AlloX in minutes
                    </p>
                  </div>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">What is AlloX?</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      AlloX is an AI-powered capital allocation platform that
                      transforms market narratives into diversified,
                      risk-managed portfolios. Instead of picking individual
                      tokens, you invest in themes like Gaming, AI, or RWA
                      through AI-constructed baskets.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Each narrative contains multiple vetted tokens with
                      transparent allocations, risk tiers (High/Mid/Low Cap),
                      and automated rebalancing as markets evolve.
                    </p>
                  </GlassCard>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-blue-600">
                          1
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-2">Visit AlloX App</h4>
                          <p className="text-gray-600 text-sm">
                            Navigate to the AlloX web application at
                            app.allox.ai
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-purple-600">
                          2
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-2">
                            Connect Your Wallet
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Click "Connect Wallet" and select your preferred
                            wallet (MetaMask, Coinbase Wallet, etc.)
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-600">
                          3
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-2">Choose a Narrative</h4>
                          <p className="text-gray-600 text-sm">
                            Select a market narrative, pick your risk tier and
                            investment amount, then let AI handle the allocation
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">Example Intents</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Swap 100 USDC to ETH",
                        "Find best staking for AERO",
                        "Bridge 500 USDT to Base",
                        "Show trending DeFi tokens",
                        "Diversify $1000 across top 5 coins",
                        "What are my staking rewards?",
                      ].map((intent) => (
                        <div
                          key={intent}
                          className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50 rounded-2xl p-4"
                        >
                          <p className="text-sm font-medium">"{intent}"</p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              )}

              {activeSection === "wallet-connection" && (
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      Wallet Connection
                    </h1>
                    <p className="text-xl text-gray-600">
                      Connect your wallet to AlloX securely
                    </p>
                  </div>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      Supported Wallets
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {wallets.map((wallet, index) => (
                        <div
                          key={wallet.id}
                          className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl"
                        >
                          <div className="w-10 h-10 bg-gray-100 rounded-xl">
                            <img src={`https://cdn.allox.ai/allox/wallets/${wallet.image}`} alt={wallet.name} />
                          </div>
                          <span className="font-medium">{wallet.name}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">How to Connect</h2>
                    <ol className="space-y-4">
                      <li className="flex gap-3">
                        <span className="font-bold">1.</span>
                        <div>
                          <p className="font-bold mb-1">Click Connect Wallet</p>
                          <p className="text-gray-600 text-sm">
                            Look for the "Connect Wallet" button in the top
                            right corner of the application.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">2.</span>
                        <div>
                          <p className="font-bold mb-1">Select Your Wallet</p>
                          <p className="text-gray-600 text-sm">
                            Choose from the list of supported wallets. A popup
                            will appear from your wallet extension.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">3.</span>
                        <div>
                          <p className="font-bold mb-1">Approve Connection</p>
                          <p className="text-gray-600 text-sm">
                            Review the connection request in your wallet and
                            click "Approve" or "Connect".
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold">4.</span>
                        <div>
                          <p className="font-bold mb-1">You're Ready</p>
                          <p className="text-gray-600 text-sm">
                            Your wallet is now connected and you can start
                            executing intents.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </GlassCard>

                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                        i
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">
                          Non-Custodial & Safe
                        </h4>
                        <p className="text-sm text-blue-700">
                          AlloX never has access to your private keys. You
                          maintain full control of your assets at all times.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "narratives" && (
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      Market Narratives
                    </h1>
                    <p className="text-xl text-gray-600">
                      Invest in themes, not individual tokens
                    </p>
                  </div>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      What Are Narratives?
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Market narratives are thematic investment opportunities
                      that represent broader crypto trends. Instead of
                      researching and buying individual tokens, you invest in an
                      entire theme that AI constructs into a diversified basket
                      of vetted assets.
                    </p>

                    <h3 className="text-xl font-bold mb-4">
                      Available Narratives
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          name: "Gaming & Metaverse",
                          desc: "Virtual worlds, digital ownership, and on chain gaming experiences.",
                        },
                        {
                          name: "AI & Agents",
                          desc: "Decentralized artificial intelligence and autonomous systems.",
                        },
                        {
                          name: "Real World Assets",
                          desc: "Bringing real world value onto the blockchain.",
                        },
                        {
                          name: "DeFi Infrastructure",
                          desc: "Core financial tools powering decentralized markets.",
                        },
                        {
                          name: "Layer 1 & Layer 2",
                          desc: "Blockchains and scaling networks that run crypto.",
                        },
                        {
                          name: "DeSci",
                          desc: "Open and decentralized scientific research.",
                        },
                      ].map((narrative) => (
                        <div
                          key={narrative.name}
                          className="bg-gray-50 border border-gray-200 rounded-xl p-4"
                        >
                          <div className="font-bold text-sm mb-1">
                            {narrative.name}
                          </div>
                          <code className="text-xs text-gray-600">
                            {narrative.desc}
                          </code>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      Risk Tiers Explained
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Each narrative offers three risk tiers based on market
                      capitalization:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">
                          <strong>High Cap (&gt;$1B):</strong> Lower risk,
                          established projects with proven track records
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">
                          <strong>Mid Cap ($100M-$1B):</strong> Balanced
                          risk/reward with growth potential
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">
                          <strong>Low Cap (&lt;$100M):</strong> Higher
                          risk/reward early-stage opportunities
                        </span>
                      </li>
                    </ul>

                    <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                      <p className="text-sm text-green-700">
                        <strong>Tip:</strong> You can mix risk tiers across
                        different narratives to create a balanced overall
                        portfolio.
                      </p>
                    </div>
                  </GlassCard>
                </div>
              )}

              {activeSection === "baskets" && (
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      Basket Construction
                    </h1>
                    <p className="text-xl text-gray-600">
                      How AI builds diversified token baskets
                    </p>
                  </div>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      AI Basket Methodology
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      AlloX AI continuously analyzes market data, social
                      sentiment, trading volume, and fundamentals to construct
                      optimal token baskets for each narrative. Baskets are
                      automatically rebalanced as market conditions change to
                      maintain optimal exposure.
                    </p>

                    <h3 className="text-xl font-bold mb-4">
                      Basket Selection Criteria
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Market Cap & Liquidity",
                          desc: "Only tokens with sufficient liquidity and market depth",
                        },
                        {
                          title: "Narrative Alignment",
                          desc: "Projects actively building in the selected theme",
                        },
                        {
                          title: "Risk Diversification",
                          desc: "Multiple tokens to reduce single-project risk",
                        },
                        {
                          title: "Transparent Allocation",
                          desc: "Clear percentage breakdown for every token",
                        },
                      ].map((criteria) => (
                        <div
                          key={criteria.title}
                          className="bg-gray-50 border border-gray-200 rounded-xl p-4"
                        >
                          <div className="font-bold text-sm mb-1">
                            {criteria.title}
                          </div>
                          <p className="text-xs text-gray-600">
                            {criteria.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      Allocation Breakdown
                    </h2>
                    <p className="text-gray-600 mb-4">
                      For each basket, AlloX transparently shows:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                        <span className="text-gray-700">
                          <strong>Token List:</strong> All assets included in
                          the basket
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                        <span className="text-gray-700">
                          <strong>Allocation %:</strong> Percentage weight for
                          each token
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                        <span className="text-gray-700">
                          <strong>Market Caps:</strong> Size tier for each
                          project
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                        <span className="text-gray-700">
                          <strong>Rationale:</strong> Why each token was
                          selected for the narrative
                        </span>
                      </li>
                    </ul>
                  </GlassCard>
                </div>
              )}

              {activeSection === "security" && (
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      Security & Risk Tiers
                    </h1>
                    <p className="text-xl text-gray-600">
                      How AlloX manages risk and keeps your assets safe
                    </p>
                  </div>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      Allocation Confirmation
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Every allocation in AlloX requires explicit confirmation.
                      You'll see the complete basket breakdown, all token
                      allocations, total investment amount, network fees, and
                      risk tier before confirming.
                    </p>

                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
                      <div className="flex gap-3">
                        <Shield
                          size={24}
                          className="text-green-600 flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-bold text-green-900 mb-2">
                            Full Transparency
                          </h4>
                          <p className="text-sm text-green-700">
                            AlloX shows exactly which tokens you're buying, how
                            much of each, and why they were selected. No
                            surprises.
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      Non-Custodial Architecture
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      AlloX never has access to your private keys or funds. All
                      transactions are signed directly by your wallet, and you
                      maintain full custody of your assets at all times.
                    </p>
                  </GlassCard>

                  {/* <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      Smart Contract Audits
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      All AlloX smart contracts have been audited by leading
                      security firms including Trail of Bits and OpenZeppelin.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-2xl p-4">
                        <h4 className="font-bold mb-2">Trail of Bits</h4>
                        <p className="text-sm text-gray-600">
                          Core protocol audit - August 2024
                        </p>
                      </div>
                      <div className="border border-gray-200 rounded-2xl p-4">
                        <h4 className="font-bold mb-2">OpenZeppelin</h4>
                        <p className="text-sm text-gray-600">
                          Intent router audit - September 2024
                        </p>
                      </div>
                    </div>
                  </GlassCard> */}
                </div>
              )}

              {activeSection === "networks" && (
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      Supported Networks
                    </h1>
                    <p className="text-xl text-gray-600">
                      AlloX works across multiple blockchain networks
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <GlassCard className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                          🔵
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Base</h3>
                          <p className="text-sm text-gray-600">Coinbase's L2</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Low fees, fast transactions. Ideal for most DeFi
                        operations.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 font-medium">Live</span>
                      </div>
                    </GlassCard>

                    <GlassCard className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                          💎
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Ethereum</h3>
                          <p className="text-sm text-gray-600">Mainnet</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Access the largest DeFi ecosystem with all major
                        protocols.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 font-medium">Live</span>
                      </div>
                    </GlassCard>

                    <GlassCard className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl">
                          🟡
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">BNB Chain</h3>
                          <p className="text-sm text-gray-600">Binance Chain</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Lower fees perfect for high-frequency trading and small
                        transactions.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 font-medium">Live</span>
                      </div>
                    </GlassCard>

                    <GlassCard className="p-8 opacity-60">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                          🔷
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Arbitrum</h3>
                          <p className="text-sm text-gray-600">Ethereum L2</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Coming soon. High-speed, low-cost Ethereum scaling
                        solution.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-orange-600 font-medium">
                          Q2 2024
                        </span>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              )}

              {activeSection === "api" && (
                <div className="space-y-8">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      API & Widget Integration
                    </h1>
                    <p className="text-xl text-gray-600">
                      Integrate AlloX into your application
                    </p>
                  </div>

                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">Installation</h2>
                    <p className="text-gray-600 mb-6">
                    Coming Soon
                    </p>

                    {/* <div className="relative">
                      <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                        <code>{`npm install @allox/sdk\n# or\nyarn add @allox/sdk`}</code>
                      </pre>
                      <button
                        onClick={() => handleCopy("npm install @allox/sdk")}
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        {copied ? (
                          <Check size={16} className="text-white" />
                        ) : (
                          <Copy size={16} className="text-white" />
                        )}
                      </button>
                    </div> */}
                  </GlassCard>

                  {/* <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">Basic Usage</h2>
                    <div className="relative mb-6">
                      <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto text-sm">
                        <code>{`import { AlloX } from '@allox/sdk';

const allox = new AlloX({
  apiKey: process.env.ALLOX_API_KEY,
  network: 'base'
});

// Process a user intent
const result = await allox.processIntent({
  userAddress: '0x...',
  intent: 'Swap 100 USDC for ETH'
});

console.log(result);`}</code>
                      </pre>
                    </div>
                  </GlassCard> */}

                  {/* <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      Embeddable Widget
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Add the AlloX chat widget to any web application:
                    </p>
                    <div className="relative">
                      <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto text-sm">
                        <code>{`import { AlloXWidget } from '@allox/widget';

function App() {
  return (
    <AlloXWidget
      apiKey="your-api-key"
      network="base"
      theme="light"
    />
  );
}`}</code>
                      </pre>
                    </div>
                  </GlassCard> */}

                  {/* <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="font-bold mb-2">Apply for Beta Access</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      API and widget integration is currently in beta. Apply for
                      access to receive your API key and join our developer
                      community.
                    </p>
                    <button className="btn-primary">
                      Apply Now
                      <ChevronRight size={16} className="ml-2" />
                    </button>
                  </div> */}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
