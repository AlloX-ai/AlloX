import { useState } from 'react';
import { Send, MessageSquare, TrendingUp, History as HistoryIcon, Wallet, Trash2, Mic, Coins, PieChart, Loader2 } from 'lucide-react';
import { WalletModal } from '../components/WalletModal';
import { NetworkSelector } from '../components/NetworkSelector';
import { ChatBubble } from '../components/ChatBubble';
import { ActionCard } from '../components/ActionCard';

type Tab = 'chat' | 'portfolio' | 'trading' | 'staking' | 'history';

interface ChatMessage {
  id: number;
  type: 'user' | 'ai' | 'thinking';
  content: string | JSX.Element;
  timestamp: Date;
}

interface ChatSession {
  id: number;
  title: string;
  date: string;
  messages: ChatMessage[];
}

interface StakedPool {
  id: number;
  name: string;
  protocol: string;
  token: string;
  amountStaked: string;
  apy: number;
  lockDaysRemaining: number;
  currentRewards: string;
  estimatedTotalRewards: string;
  color: string;
}

interface CompletedAction {
  id: number;
  type: 'swap' | 'portfolio' | 'allocation';
  title: string;
  description: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
}

export function LaunchAppPage() {
  const [activeTab, setActiveTab] = useState<Tab>('chat');
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [message, setMessage] = useState('');
  const [currentMessages, setCurrentMessages] = useState<ChatMessage[]>([]);
  const [selectedStaking, setSelectedStaking] = useState<any>(null);
  const [stakingAmount, setStakingAmount] = useState('');
  const [stakedPools, setStakedPools] = useState<StakedPool[]>([]);
  const [slippage, setSlippage] = useState('0.5');
  const [isRecording, setIsRecording] = useState(false);
  const [completedActions, setCompletedActions] = useState<CompletedAction[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: 1,
      title: 'Portfolio setup',
      date: 'Today, 2:30 PM',
      messages: [],
    },
    {
      id: 2,
      title: 'Swap + staking',
      date: 'Yesterday, 4:15 PM',
      messages: [],
    },
    {
      id: 3,
      title: 'Market watch',
      date: 'Jan 20, 11:00 AM',
      messages: [],
    },
  ]);

  const handleWalletConnect = (wallet: string) => {
    setWalletConnected(true);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    handleSuggestionClick(message);
    setMessage('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    const userMsg: ChatMessage = {
      id: Date.now(),
      type: 'user',
      content: suggestion,
      timestamp: new Date(),
    };

    setCurrentMessages([...currentMessages, userMsg]);
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      let aiResponse: ChatMessage;

      if (suggestion === 'Swap Tokens' || suggestion.includes('Buy') || suggestion.toLowerCase().includes('swap')) {
        aiResponse = {
          id: Date.now() + 1,
          type: 'ai',
          content: (
            <div>
              <p className="text-sm mb-4">I'll help you with that swap. Here's what I found:</p>
              <ActionCard onConfirm={() => handleConfirmSwap()}>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-gray-500">From</div>
                      <div className="font-bold text-lg">100 USDC</div>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">To</div>
                      <div className="font-bold text-lg">0.057 ETH</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm pt-3 border-t border-gray-200/50">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Price</span>
                      <span className="font-medium">1 ETH = $1,754.38</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Route</span>
                      <span className="font-medium">Uniswap V3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Network Fee</span>
                      <span className="font-medium">~$1.20</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Slippage</span>
                      <div className="flex gap-2">
                        {['0.5', '1.0', '2.0'].map((s) => (
                          <button
                            key={s}
                            onClick={() => setSlippage(s)}
                            className={`px-2 py-1 rounded-lg text-xs transition-all duration-200 ${
                              slippage === s
                                ? 'bg-black text-white'
                                : 'bg-gray-100 hover:bg-gray-200 hover:shadow-sm'
                            }`}
                          >
                            {s}%
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ActionCard>
            </div>
          ),
          timestamp: new Date(),
        };
      } else if (suggestion === 'Trending Tokens' || suggestion.toLowerCase().includes('trending')) {
        aiResponse = {
          id: Date.now() + 1,
          type: 'ai',
          content: (
            <div>
              <p className="text-sm mb-4">Here are the top 5 trending tokens right now:</p>
              <div className="space-y-2 mb-4">
                {[
                  { name: 'AERO', change: '+24.5%', color: 'from-blue-400 to-blue-600' },
                  { name: 'VIRTUAL', change: '+18.2%', color: 'from-purple-400 to-purple-600' },
                  { name: 'PRIME', change: '+15.8%', color: 'from-pink-400 to-pink-600' },
                  { name: 'LDO', change: '+12.3%', color: 'from-orange-400 to-orange-600' },
                  { name: 'ARB', change: '+9.7%', color: 'from-cyan-400 to-cyan-600' },
                ].map((token) => (
                  <div 
                    key={token.name} 
                    className="flex items-center justify-between bg-white/40 rounded-xl p-3 transition-all duration-200 hover:bg-white/60 hover:shadow-sm hover:border hover:border-gray-200/50 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${token.color}`}></div>
                      <span className="font-medium">{token.name}</span>
                    </div>
                    <span className="text-green-600 font-medium text-sm">{token.change}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-3">Would you like to allocate funds across these tokens?</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleAllocateEvenly()}
                  className="flex-1 py-2 px-4 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 hover:shadow-lg transition-all duration-200"
                >
                  Allocate evenly
                </button>
                <button 
                  onClick={() => handleCustomAllocation()}
                  className="flex-1 py-2 px-4 bg-white/80 border border-gray-200 rounded-xl text-sm font-medium hover:bg-white hover:shadow-md hover:border-gray-300 transition-all duration-200"
                >
                  Custom allocation
                </button>
              </div>
            </div>
          ),
          timestamp: new Date(),
        };
      } else if (suggestion === 'Build a Portfolio' || suggestion.toLowerCase().includes('portfolio')) {
        aiResponse = {
          id: Date.now() + 1,
          type: 'ai',
          content: (
            <div>
              <p className="text-sm mb-4">I'll help you build a diversified portfolio. What's your budget?</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {['$500', '$1,000', '$5,000'].map((budget) => (
                  <button
                    key={budget}
                    onClick={() => handleBudgetSelect(budget)}
                    className="py-2 px-4 bg-white/80 border border-gray-200 rounded-xl text-sm font-medium hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200"
                  >
                    {budget}
                  </button>
                ))}
              </div>
              <p className="text-sm mb-3">Risk preference:</p>
              <div className="grid grid-cols-3 gap-2">
                {['Conservative', 'Moderate', 'Aggressive'].map((risk) => (
                  <button
                    key={risk}
                    onClick={() => handleRiskSelect(risk)}
                    className="py-2 px-3 bg-white/80 border border-gray-200 rounded-xl text-xs font-medium hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200"
                  >
                    {risk}
                  </button>
                ))}
              </div>
            </div>
          ),
          timestamp: new Date(),
        };
      } else if (suggestion.toLowerCase().includes('staking')) {
        aiResponse = {
          id: Date.now() + 1,
          type: 'ai',
          content: (
            <div>
              <p className="text-sm mb-4">Here are the best staking options available right now:</p>
              <div className="space-y-3">
                {[
                  { name: 'AERO', apy: 18.5, protocol: 'Aerodrome', color: 'from-blue-400 to-blue-600' },
                  { name: 'VIRTUAL', apy: 22.3, protocol: 'Virtual Protocol', color: 'from-purple-400 to-purple-600' },
                  { name: 'ETH', apy: 4.2, protocol: 'Lido', color: 'from-cyan-400 to-cyan-600' },
                ].map((token) => (
                  <div 
                    key={token.name}
                    className="bg-white/40 rounded-xl p-4 transition-all duration-200 hover:bg-white/60 hover:shadow-md hover:border hover:border-gray-200/50 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${token.color}`}></div>
                      <div className="flex-1">
                        <div className="font-bold">{token.name}</div>
                        <div className="text-xs text-gray-600">{token.protocol}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{token.apy}%</div>
                        <div className="text-xs text-gray-500">APY</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">Would you like to stake your tokens?</p>
            </div>
          ),
          timestamp: new Date(),
        };
      } else {
        aiResponse = {
          id: Date.now() + 1,
          type: 'ai',
          content: "I'm here to help! I can assist you with swapping tokens, building portfolios, finding trending tokens, and discovering staking opportunities. What would you like to do?",
          timestamp: new Date(),
        };
      }

      setCurrentMessages((prev) => [...prev, aiResponse!]);
    }, 1200);
  };

  const handleConfirmSwap = () => {
    const confirmMsg: ChatMessage = {
      id: Date.now(),
      type: 'ai',
      content: (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
            <span className="font-medium text-green-700">Swap submitted successfully!</span>
          </div>
          <p className="text-sm text-green-600">Transaction pending confirmation on the blockchain.</p>
        </div>
      ),
      timestamp: new Date(),
    };
    setCurrentMessages((prev) => [...prev, confirmMsg]);

    const newAction: CompletedAction = {
      id: Date.now(),
      type: 'swap',
      title: 'Swap 100 USDC to ETH',
      description: 'Successfully swapped 100 USDC for 0.057 ETH via Uniswap V3',
      timestamp: new Date(),
      status: 'completed',
    };
    setCompletedActions((prev) => [newAction, ...prev]);
  };

  const handleAllocateEvenly = () => {
    const allocationMsg: ChatMessage = {
      id: Date.now(),
      type: 'ai',
      content: (
        <div>
          <p className="text-sm mb-4">Here's your even allocation across 5 trending tokens ($100 each):</p>
          <ActionCard onConfirm={() => handleConfirmAllocation()}>
            <div className="space-y-2 mb-3">
              {['AERO', 'VIRTUAL', 'PRIME', 'LDO', 'ARB'].map((token) => (
                <div key={token} className="flex justify-between text-sm">
                  <span className="font-medium">{token}</span>
                  <span>$100.00</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-200/50">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$500.00</span>
              </div>
            </div>
          </ActionCard>
        </div>
      ),
      timestamp: new Date(),
    };
    setCurrentMessages((prev) => [...prev, allocationMsg]);
  };

  const handleCustomAllocation = () => {
    const customMsg: ChatMessage = {
      id: Date.now(),
      type: 'ai',
      content: (
        <div>
          <p className="text-sm mb-4">Great! Let's create a custom allocation. Enter your budget:</p>
          <ActionCard onConfirm={() => handleConfirmAllocation()}>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter total budget (e.g., $1000)"
                className="w-full px-4 py-2 bg-white/60 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200"
              />
              {['AERO', 'VIRTUAL', 'PRIME', 'LDO', 'ARB'].map((token) => (
                <div key={token} className="flex items-center gap-3">
                  <span className="text-sm font-medium w-20">{token}</span>
                  <input
                    type="text"
                    placeholder="0%"
                    className="flex-1 px-3 py-2 bg-white/60 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-200"
                  />
                </div>
              ))}
            </div>
          </ActionCard>
        </div>
      ),
      timestamp: new Date(),
    };
    setCurrentMessages((prev) => [...prev, customMsg]);
  };

  const handleConfirmAllocation = () => {
    const confirmMsg: ChatMessage = {
      id: Date.now(),
      type: 'ai',
      content: (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
            <span className="font-medium text-green-700">Portfolio built successfully!</span>
          </div>
          <p className="text-sm text-green-600">Your allocation has been executed across all tokens.</p>
        </div>
      ),
      timestamp: new Date(),
    };
    setCurrentMessages((prev) => [...prev, confirmMsg]);

    const newAction: CompletedAction = {
      id: Date.now(),
      type: 'portfolio',
      title: 'Portfolio Built Successfully',
      description: 'Allocated funds across AERO, VIRTUAL, PRIME, LDO, and ARB',
      timestamp: new Date(),
      status: 'completed',
    };
    setCompletedActions((prev) => [newAction, ...prev]);
  };

  const handleBudgetSelect = (budget: string) => {
    const budgetMsg: ChatMessage = {
      id: Date.now(),
      type: 'user',
      content: budget,
      timestamp: new Date(),
    };
    setCurrentMessages((prev) => [...prev, budgetMsg]);
  };

  const handleRiskSelect = (risk: string) => {
    const riskMsg: ChatMessage = {
      id: Date.now(),
      type: 'user',
      content: risk,
      timestamp: new Date(),
    };

    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      const responseMsg: ChatMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: (
          <div>
            <p className="text-sm mb-4">Perfect! Based on your {risk.toLowerCase()} risk profile, here's a recommended portfolio:</p>
            <ActionCard onConfirm={() => handleConfirmAllocation()}>
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">ETH (40%)</span>
                  <span>$200.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">USDC (30%)</span>
                  <span>$150.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">AERO (20%)</span>
                  <span>$100.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">VIRTUAL (10%)</span>
                  <span>$50.00</span>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-200/50">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>$500.00</span>
                </div>
              </div>
            </ActionCard>
          </div>
        ),
        timestamp: new Date(),
      };

      setCurrentMessages((prev) => [...prev, riskMsg, responseMsg]);
    }, 1200);
  };

  const handleDeleteChat = (sessionId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setChatSessions(chatSessions.filter(session => session.id !== sessionId));
  };

  const handleLoadChat = (session: ChatSession) => {
    setCurrentMessages(session.messages);
    setActiveTab('chat');
  };

  const handleStake = (stakingOption: any) => {
    setSelectedStaking(stakingOption);
  };

  const handleConfirmStaking = () => {
    if (!selectedStaking || !stakingAmount) return;

    const newStakedPool: StakedPool = {
      id: Date.now(),
      name: selectedStaking.name,
      protocol: selectedStaking.protocol,
      token: selectedStaking.token,
      amountStaked: stakingAmount,
      apy: selectedStaking.apy,
      lockDaysRemaining: selectedStaking.lockDays,
      currentRewards: '0',
      estimatedTotalRewards: ((parseFloat(stakingAmount) || 0) * selectedStaking.apy / 100).toFixed(2),
      color: selectedStaking.color,
    };

    setStakedPools([...stakedPools, newStakedPool]);
    setSelectedStaking(null);
    setStakingAmount('');
  };

  const portfolio = {
    totalBalance: 12847.32,
    pnl24h: 324.18,
    pnlPercent: 2.59,
    tokens: [
      {
        symbol: 'ETH',
        name: 'Ethereum',
        amount: '2.45 ETH',
        value: 4289.50,
        change: 5.2,
        color: 'from-blue-400 to-blue-600',
      },
      {
        symbol: 'USDC',
        name: 'USD Coin',
        amount: '5,240 USDC',
        value: 5240.00,
        change: 0.0,
        color: 'from-green-400 to-green-600',
      },
      {
        symbol: 'AERO',
        name: 'Aerodrome',
        amount: '1,200 AERO',
        value: 1848.00,
        change: 12.4,
        color: 'from-purple-400 to-purple-600',
      },
      {
        symbol: 'VIRTUAL',
        name: 'Virtual Protocol',
        amount: '850 VIRTUAL',
        value: 1469.82,
        change: -3.1,
        color: 'from-red-400 to-red-600',
      },
    ],
  };

  const stakingOptions = [
    {
      id: 1,
      name: 'AERO Staking',
      protocol: 'Aerodrome Finance',
      token: 'AERO',
      apy: 18.5,
      lockPeriod: 'Flexible',
      lockDays: 0,
      color: 'from-blue-400 to-blue-600',
      userBalance: '1,200',
    },
    {
      id: 2,
      name: 'VIRTUAL Staking',
      protocol: 'Virtual Protocol',
      token: 'VIRTUAL',
      apy: 22.3,
      lockPeriod: '7 days',
      lockDays: 7,
      color: 'from-purple-400 to-purple-600',
      userBalance: '850',
    },
    {
      id: 3,
      name: 'ETH Staking',
      protocol: 'Lido Finance',
      token: 'ETH',
      apy: 4.2,
      lockPeriod: 'Flexible',
      lockDays: 0,
      color: 'from-cyan-400 to-cyan-600',
      userBalance: '2.45',
    },
  ];

  return (
    <div className="min-h-screen bg-pattern flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-pattern/95 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="font-bold text-xl tracking-tight hidden md:inline">AlloX</span>
          </div>

          <div className="flex items-center gap-4">
            <NetworkSelector />
            
            {walletConnected ? (
              <div className="glass-card px-4 py-2.5 flex items-center gap-3 transition-all duration-200 hover:shadow-md">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium">0x7a9f...3d2c</div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setWalletModalOpen(true)}
                className="btn-primary transition-all duration-200 hover:shadow-lg"
              >
                <Wallet size={18} className="md:mr-2" />
                <span className="hidden md:inline">Connect Wallet</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content - Fixed Layout */}
      <div className="flex-1 pt-20 flex overflow-hidden">
        {/* Fixed Sidebar Navigation - Desktop */}
        <aside className="hidden md:block w-[276px] border-r border-gray-200/50 bg-pattern/50">
          <div className="p-6 space-y-2">
            <button
              onClick={() => setActiveTab('chat')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === 'chat'
                  ? 'bg-black text-white shadow-lg'
                  : 'text-gray-700 hover:bg-black/5 hover:shadow-sm'
              }`}
            >
              <MessageSquare size={20} />
              Chat
            </button>

            <button
              onClick={() => setActiveTab('portfolio')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === 'portfolio'
                  ? 'bg-black text-white shadow-lg'
                  : 'text-gray-700 hover:bg-black/5 hover:shadow-sm'
              }`}
            >
              <PieChart size={20} />
              Portfolio
            </button>

            <button
              onClick={() => setActiveTab('trading')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === 'trading'
                  ? 'bg-black text-white shadow-lg'
                  : 'text-gray-700 hover:bg-black/5 hover:shadow-sm'
              }`}
            >
              <TrendingUp size={20} />
              Trading
            </button>

            <button
              onClick={() => setActiveTab('staking')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === 'staking'
                  ? 'bg-black text-white shadow-lg'
                  : 'text-gray-700 hover:bg-black/5 hover:shadow-sm'
              }`}
            >
              <Coins size={20} />
              Staking
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === 'history'
                  ? 'bg-black text-white shadow-lg'
                  : 'text-gray-700 hover:bg-black/5 hover:shadow-sm'
              }`}
            >
              <HistoryIcon size={20} />
              History
            </button>
          </div>
        </aside>

        {/* Main Content Area - Scrollable */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {activeTab === 'chat' && (
            <>
              {/* Scrollable Chat Messages */}
              <div className="flex-1 overflow-y-auto">
                {currentMessages.length === 0 && (
                  <div className="h-full flex items-center justify-center px-6">
                    <div className="text-center max-w-2xl">
                      <h2 className="text-3xl font-bold mb-4">Hello, I'm AlloX</h2>
                      <p className="text-gray-600 mb-8">
                        I can help you discover, execute, and manage crypto actions. Let me know how I can help you today!
                      </p>

                      <div className="flex flex-wrap gap-2 justify-center mb-8">
                        {[
                          'Build a Portfolio',
                          'Swap Tokens',
                          'Trending Tokens',
                          'Buy $100 ETH',
                          'Best staking options'
                        ].map((suggestion) => (
                          <button
                            key={suggestion}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-4 py-2 glass-card text-sm font-medium hover:bg-white/90 hover:shadow-md hover:border hover:border-gray-200/50 transition-all duration-200 rounded-full"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentMessages.length > 0 && (
                  <div className="py-8 px-6 max-w-[1000px] mx-auto w-full space-y-6">
                    {currentMessages.map((msg) => (
                      <ChatBubble key={msg.id} type={msg.type}>
                        {typeof msg.content === 'string' ? (
                          <p className="text-sm">{msg.content}</p>
                        ) : (
                          msg.content
                        )}
                      </ChatBubble>
                    ))}
                    
                    {isThinking && (
                      <ChatBubble type="ai">
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm text-gray-600">AlloX is thinking...</span>
                        </div>
                      </ChatBubble>
                    )}
                  </div>
                )}
              </div>

              {/* Fixed Chat Input */}
              <div className="border-t border-gray-200/50 bg-pattern/95 backdrop-blur-lg">
                <div className="px-6 py-6 max-w-[1000px] mx-auto w-full">
                  <div className="relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your intent..."
                      className="w-full px-6 py-4 pr-28 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white/80 transition-all duration-200"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                      {!message && (
                        <button 
                          onClick={() => setIsRecording(!isRecording)}
                          className={`p-3 ${isRecording ? 'bg-red-500' : 'bg-gray-200'} rounded-xl hover:opacity-80 transition-all duration-200`}
                        >
                          <Mic size={18} className={isRecording ? 'text-white animate-pulse' : 'text-gray-700'} />
                        </button>
                      )}
                      {message && (
                        <button 
                          onClick={handleSendMessage}
                          className="p-3 bg-black rounded-xl hover:bg-gray-800 hover:shadow-lg transition-all duration-200"
                        >
                          <Send size={18} className="text-white" />
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-3">
                    AlloX can make mistakes. Always verify transactions before confirming.
                  </p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'portfolio' && (
            <div className="flex-1 px-6 py-8 max-w-[1200px] mx-auto w-full overflow-y-auto">
              <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
              
              {walletConnected ? (
                <>
                  <div className="glass-card p-8 mb-6 transition-all duration-200 hover:shadow-lg">
                    <div className="text-sm text-gray-500 mb-2">Total Balance</div>
                    <div className="text-5xl font-bold mb-3">${portfolio.totalBalance.toLocaleString()}</div>
                    <div className={`text-lg ${portfolio.pnl24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {portfolio.pnl24h >= 0 ? '+' : ''}{portfolio.pnlPercent}% (${portfolio.pnl24h.toFixed(2)}) 24h
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Assets</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {portfolio.tokens.map((token) => (
                      <div 
                        key={token.symbol} 
                        className="glass-card p-6 transition-all duration-200 hover:bg-white/80 hover:shadow-lg hover:border hover:border-gray-200/50 cursor-pointer"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${token.color}`}></div>
                          <div className="flex-1">
                            <div className="font-bold text-lg">{token.symbol}</div>
                            <div className="text-sm text-gray-500">{token.name}</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Amount</div>
                            <div className="font-medium">{token.amount}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold">${token.value.toFixed(2)}</div>
                            <div className={`text-sm ${token.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {token.change >= 0 ? '+' : ''}{token.change}%
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="glass-card p-12 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Wallet size={40} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Connect Your Wallet</h3>
                  <p className="text-gray-600 mb-6">Connect your wallet to view your portfolio</p>
                  <button
                    onClick={() => setWalletModalOpen(true)}
                    className="btn-primary text-lg px-8 py-4 transition-all duration-200 hover:shadow-xl"
                  >
                    <Wallet size={20} className="mr-2" />
                    Connect Wallet
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'trading' && (
            <div className="flex-1 px-6 py-8 max-w-[1200px] mx-auto w-full overflow-y-auto">
              <h2 className="text-3xl font-bold mb-6">Trading</h2>
              
              {completedActions.length > 0 ? (
                <div className="space-y-4">
                  {completedActions.map((action) => (
                    <div 
                      key={action.id} 
                      className="glass-card p-6 transition-all duration-200 hover:bg-white/80 hover:shadow-lg hover:border hover:border-gray-200/50"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                              action.status === 'completed' 
                                ? 'bg-green-100 text-green-700' 
                                : action.status === 'pending'
                                ? 'bg-orange-100 text-orange-700'
                                : 'bg-red-100 text-red-700'
                            }`}>
                              {action.status === 'completed' ? '✓ Completed' : action.status === 'pending' ? 'Pending' : 'Failed'}
                            </div>
                            <span className="text-xs text-gray-500">
                              {action.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold mb-1">{action.title}</h3>
                          <p className="text-sm text-gray-600">{action.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass-card p-8 text-center">
                  <p className="text-gray-600 mb-4">No completed actions yet.</p>
                  <p className="text-sm text-gray-500">Use the Chat to initiate trades and they'll show up here.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'staking' && stakedPools.length === 0 && (
            <div className="flex-1 px-6 py-8 max-w-[1200px] mx-auto w-full overflow-y-auto">
              <h2 className="text-3xl font-bold mb-6">Staking Opportunities</h2>
              
              {!selectedStaking && (
                <div className="grid md:grid-cols-2 gap-6">
                  {stakingOptions.map((option) => (
                    <div 
                      key={option.id} 
                      className="glass-card p-6 transition-all duration-200 hover:bg-white/80 hover:shadow-lg hover:border hover:border-gray-200/50"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl`}></div>
                          <div>
                            <h3 className="font-bold">{option.name}</h3>
                            <p className="text-sm text-gray-600">{option.protocol}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-end mb-4">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">APY</div>
                          <div className="text-2xl font-bold text-green-600">{option.apy}%</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600 mb-1">Lock Period</div>
                          <div className="font-medium">{option.lockPeriod}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleStake(option)}
                        className="btn-primary w-full transition-all duration-200 hover:shadow-lg"
                      >
                        Stake {option.token}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {selectedStaking && (
                <div className="max-w-2xl mx-auto">
                  <button
                    onClick={() => setSelectedStaking(null)}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6 transition-colors duration-200"
                  >
                    ← Back to Staking Options
                  </button>

                  <div className="glass-card p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${selectedStaking.color} rounded-2xl`}></div>
                      <div>
                        <h2 className="text-2xl font-bold">{selectedStaking.name}</h2>
                        <p className="text-gray-600">{selectedStaking.protocol}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium">Wallet Balance</label>
                          <span className="text-sm text-gray-600">{selectedStaking.userBalance} {selectedStaking.token}</span>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Amount to Stake</label>
                        <input
                          type="text"
                          value={stakingAmount}
                          onChange={(e) => setStakingAmount(e.target.value)}
                          placeholder={`Enter ${selectedStaking.token} amount`}
                          className="w-full px-4 py-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white/80 transition-all duration-200"
                        />
                        <button
                          onClick={() => setStakingAmount(selectedStaking.userBalance)}
                          className="text-sm text-blue-600 hover:underline mt-2 transition-all duration-200"
                        >
                          Use Max
                        </button>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-3 block">Lock Time</label>
                        <div className="grid grid-cols-3 gap-3">
                          <button className="py-3 bg-white/80 border border-gray-200 rounded-xl text-sm font-medium hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200">
                            Flexible
                          </button>
                          <button className="py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 hover:shadow-lg transition-all duration-200">
                            7 days
                          </button>
                          <button className="py-3 bg-white/80 border border-gray-200 rounded-xl text-sm font-medium hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200">
                            30 days
                          </button>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Estimated Rewards (1 year)</span>
                          <span className="font-bold text-green-600">
                            +{((parseFloat(stakingAmount) || 0) * selectedStaking.apy / 100).toFixed(2)} {selectedStaking.token}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">APY</span>
                          <span className="font-bold text-green-600">{selectedStaking.apy}%</span>
                        </div>
                      </div>

                      <button
                        onClick={handleConfirmStaking}
                        disabled={!stakingAmount}
                        className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-xl"
                      >
                        Confirm Staking
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'staking' && stakedPools.length > 0 && (
            <div className="flex-1 px-6 py-8 max-w-[1200px] mx-auto w-full overflow-y-auto">
              <h2 className="text-3xl font-bold mb-6">Active Staking</h2>
              
              <div className="max-w-2xl space-y-4">
                {stakedPools.map((pool) => (
                  <div 
                    key={pool.id} 
                    className="glass-card p-8 transition-all duration-200 hover:bg-white/80 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${pool.color} rounded-2xl`}></div>
                      <div>
                        <h3 className="text-2xl font-bold">{pool.name}</h3>
                        <p className="text-gray-600">{pool.protocol}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount Staked</span>
                        <span className="font-bold">{pool.amountStaked} {pool.token}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lock Time Remaining</span>
                        <span className="font-bold">
                          {pool.lockDaysRemaining === 0 ? 'Flexible' : `${pool.lockDaysRemaining} days`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Rewards</span>
                        <span className="font-bold text-green-600">+{pool.currentRewards} {pool.token}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">APY</span>
                        <span className="font-bold text-green-600">{pool.apy}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Estimated Total Rewards</span>
                        <span className="font-bold text-green-600">+{pool.estimatedTotalRewards} {pool.token}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="btn-primary flex-1 transition-all duration-200 hover:shadow-lg">
                        Claim Rewards
                      </button>
                      <button 
                        disabled={pool.lockDaysRemaining > 0}
                        className="btn-secondary flex-1 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-md"
                      >
                        {pool.lockDaysRemaining > 0 ? 'Withdraw (Locked)' : 'Withdraw'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="flex-1 px-6 py-8 max-w-[1200px] mx-auto w-full overflow-y-auto">
              <h2 className="text-3xl font-bold mb-6">Chat History</h2>
              <div className="space-y-3">
                {chatSessions.map((session) => (
                  <div
                    key={session.id}
                    onClick={() => handleLoadChat(session)}
                    className="glass-card p-6 hover:bg-white/80 hover:shadow-lg hover:border hover:border-gray-200/50 transition-all duration-200 group relative cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-4">
                        <h3 className="font-bold mb-1">{session.title}</h3>
                        <p className="text-sm text-gray-600">{session.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageSquare size={20} className="text-gray-400" />
                        <button
                          onClick={(e) => handleDeleteChat(session.id, e)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 size={18} className="text-red-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 bg-pattern/95 backdrop-blur-lg border-t border-gray-200/50">
        <div className="glass-card px-2 py-3">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === 'chat' ? 'bg-black text-white' : 'text-gray-600 hover:bg-black/5'
              }`}
            >
              <MessageSquare size={20} />
              <span className="text-xs font-medium">Chat</span>
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === 'portfolio' ? 'bg-black text-white' : 'text-gray-600 hover:bg-black/5'
              }`}
            >
              <PieChart size={20} />
              <span className="text-xs font-medium">Portfolio</span>
            </button>
            <button
              onClick={() => setActiveTab('trading')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === 'trading' ? 'bg-black text-white' : 'text-gray-600 hover:bg-black/5'
              }`}
            >
              <TrendingUp size={20} />
              <span className="text-xs font-medium">Trading</span>
            </button>
            <button
              onClick={() => setActiveTab('staking')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === 'staking' ? 'bg-black text-white' : 'text-gray-600 hover:bg-black/5'
              }`}
            >
              <Coins size={20} />
              <span className="text-xs font-medium">Staking</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === 'history' ? 'bg-black text-white' : 'text-gray-600 hover:bg-black/5'
              }`}
            >
              <HistoryIcon size={20} />
              <span className="text-xs font-medium">History</span>
            </button>
          </div>
        </div>
      </nav>

      <WalletModal
        isOpen={walletModalOpen}
        onClose={() => setWalletModalOpen(false)}
        onConnect={handleWalletConnect}
      />
    </div>
  );
}
