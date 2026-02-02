import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles,
  Send,
  Wallet,
  Menu,
  X,
  Home,
  BarChart3,
  Settings,
  LogOut,
  Copy,
  Check,
  TrendingUp,
  DollarSign,
  Zap,
  Bot,
  User,
  ChevronRight
} from 'lucide-react';

interface DappInterfaceProps {
  onBackToHome: () => void;
}

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

export function DappInterface({ onBackToHome }: DappInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hey there! 👋 I'm AlloX, your crypto copilot. I can help you trade, get market insights, or answer any crypto questions. What would you like to do today?",
      timestamp: new Date(),
      suggestions: [
        "What's trending in crypto?",
        "Help me buy some ETH",
        "Explain DeFi to me",
        "Show me my portfolio"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [copied, setCopied] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState<'chat' | 'portfolio'>('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleConnect = () => {
    setIsConnected(true);
    const mockAddress = '0x' + Math.random().toString(16).substring(2, 42);
    setWalletAddress(mockAddress);
    
    // Add a message confirming connection
    const connectMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'ai',
      content: "🎉 Wallet connected successfully! Now I can help you with trades, portfolio management, and more. What would you like to do?",
      timestamp: new Date(),
      suggestions: ["Show my portfolio", "Buy some ETH", "What are gas fees?"]
    };
    setMessages(prev => [...prev, connectMessage]);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setWalletAddress('');
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const aiResponse = generateAIResponse(messageText);
      setMessages(prev => [...prev, aiResponse]);
    }, 800);
  };

  const generateAIResponse = (query: string): Message => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('trending') || lowerQuery.includes('what')) {
      return {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: "Here are today's top trending tokens:\n\n🔥 **Ethereum (ETH)** - $3,642 (+8.5%)\n⚡ **Solana (SOL)** - $142 (+12.3%)\n💎 **Polygon (MATIC)** - $0.95 (+5.7%)\n\nETH is showing strong momentum with high trading volume. The recent upgrade is driving positive sentiment.",
        timestamp: new Date(),
        suggestions: ["Buy 0.1 ETH", "Tell me more about SOL", "What's causing the ETH rally?"]
      };
    } else if (lowerQuery.includes('buy') || lowerQuery.includes('eth')) {
      return {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: isConnected 
          ? "Great! Let me help you buy ETH. Here's the current market info:\n\n💰 **Current Price:** $3,642\n📊 **24h Change:** +8.5%\n⚡ **Gas Fee:** ~$12 (Medium)\n📈 **Market Cap:** $438B\n\nHow much ETH would you like to buy?" 
          : "To buy ETH, I'll need you to connect your wallet first. Just click the 'Connect Wallet' button and we'll get you set up! 🔐\n\nDon't worry, your wallet stays secure and you maintain full control of your assets.",
        timestamp: new Date(),
        suggestions: isConnected ? ["Buy $100 worth", "Buy 0.5 ETH", "Check my balance first"] : ["Connect my wallet"]
      };
    } else if (lowerQuery.includes('defi') || lowerQuery.includes('explain')) {
      return {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: "DeFi (Decentralized Finance) lets you access financial services without traditional banks! 🏦\n\n**Key Concepts:**\n\n💰 **Lending** - Earn interest by lending your crypto to others\n📊 **Borrowing** - Get loans using your crypto as collateral\n🔄 **Trading** - Swap tokens directly through decentralized exchanges\n🌾 **Yield Farming** - Earn rewards by providing liquidity\n\nEverything runs on smart contracts, which are like automated agreements that execute when conditions are met. No middlemen, no paperwork!",
        timestamp: new Date(),
        suggestions: ["Show me best yields", "How do I start with DeFi?", "Is DeFi safe?"]
      };
    } else if (lowerQuery.includes('portfolio')) {
      return {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: isConnected
          ? "Here's your portfolio overview:\n\n💼 **Total Value:** $23,847.50\n📈 **24h Change:** +$1,234.20 (+5.5%)\n\n**Your Holdings:**\n• ETH: 2.5 → $9,105.00 (+8.5%)\n• BTC: 0.15 → $6,450.00 (+3.2%)\n• USDC: 8,292.50 → $8,292.50 (Stable)\n\nYour ETH position is performing exceptionally well! 🚀 The portfolio is well-diversified across major assets."
          : "To view your portfolio, please connect your wallet first. Once connected, I'll analyze all your holdings, track performance, and provide personalized insights! 📊",
        timestamp: new Date(),
        suggestions: isConnected ? ["Show detailed breakdown", "Any rebalancing suggestions?", "What's my best performer?"] : ["Connect my wallet"]
      };
    } else if (lowerQuery.includes('gas') || lowerQuery.includes('fee')) {
      return {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: "Gas fees are transaction costs on the Ethereum network! ⛽\n\n**Current Gas Prices:**\n🟢 **Low:** ~$8 (slower, 5-10 min)\n🟡 **Medium:** ~$12 (normal, 2-3 min)\n🔴 **High:** ~$18 (fast, <1 min)\n\n**Tips to Save:**\n• Trade during off-peak hours (weekends, late night UTC)\n• Use Layer 2 solutions like Arbitrum or Optimism\n• Batch multiple transactions together\n\nWould you like me to notify you when gas is low?",
        timestamp: new Date(),
        suggestions: ["Yes, notify me", "What are Layer 2s?", "Show me alternatives"]
      };
    } else {
      return {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: "I'm here to help with anything crypto-related! I can assist you with:\n\n📊 **Trading** - Buy, sell, or swap tokens\n💼 **Portfolio** - Track and manage your assets\n📈 **Market Data** - Get real-time prices and trends\n🎓 **Education** - Learn about DeFi, NFTs, and more\n⚙️ **Optimization** - Find best yields and routes\n\nWhat would you like to explore?",
        timestamp: new Date(),
        suggestions: ["Current ETH price", "Best DeFi yields", "Explain staking", "Latest crypto news"]
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-['Inter',sans-serif] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 h-screen flex">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-80 bg-white/40 backdrop-blur-2xl border-r border-white/60 flex flex-col shadow-xl"
            >
              {/* Logo */}
              <div className="p-6 border-b border-white/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">AlloX</span>
                  </div>
                  <button 
                    onClick={() => setSidebarOpen(false)} 
                    className="lg:hidden text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Wallet Section */}
              <div className="p-6">
                {isConnected ? (
                  <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Wallet Connected</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">Active</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/40">
                      <span className="text-gray-700 font-mono text-sm font-medium">
                        {walletAddress.substring(0, 8)}...{walletAddress.substring(36)}
                      </span>
                      <button 
                        onClick={copyAddress} 
                        className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                      >
                        {copied ? 
                          <Check className="w-4 h-4 text-green-600" /> : 
                          <Copy className="w-4 h-4 text-gray-600" />
                        }
                      </button>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">$23,847</div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="w-4 h-4 mr-1.5 text-green-600" />
                      <span className="text-green-600 font-semibold">+$1,234 (5.5%)</span>
                      <span className="text-gray-500 ml-2">24h</span>
                    </div>
                  </div>
                ) : (
                  <Button 
                    onClick={handleConnect}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl h-12 shadow-lg shadow-purple-500/30"
                  >
                    <Wallet className="w-5 h-5 mr-2" />
                    Connect Wallet
                  </Button>
                )}
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4 space-y-2">
                <button 
                  onClick={() => setCurrentView('chat')}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all group ${
                    currentView === 'chat' 
                      ? 'bg-white/60 backdrop-blur-xl text-gray-900 shadow-sm border border-white/60' 
                      : 'text-gray-700 hover:bg-white/40 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      currentView === 'chat'
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                        : 'bg-gray-200/60 group-hover:bg-gray-300/60'
                    } transition-colors`}>
                      <Bot className={`w-5 h-5 ${currentView === 'chat' ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <span className="font-semibold">Chat</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${currentView === 'chat' ? 'text-gray-400' : 'text-gray-400 opacity-0 group-hover:opacity-100'} transition-all`} />
                </button>
                
                <button 
                  onClick={() => {
                    if (isConnected) {
                      setCurrentView('portfolio');
                    } else {
                      handleConnect();
                    }
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all group ${
                    currentView === 'portfolio' 
                      ? 'bg-white/60 backdrop-blur-xl text-gray-900 shadow-sm border border-white/60' 
                      : 'text-gray-700 hover:bg-white/40 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      currentView === 'portfolio'
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                        : 'bg-gray-200/60 group-hover:bg-gray-300/60'
                    } transition-colors`}>
                      <BarChart3 className={`w-5 h-5 ${currentView === 'portfolio' ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <span className="font-medium">Portfolio</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${currentView === 'portfolio' ? 'text-gray-400' : 'text-gray-400 opacity-0 group-hover:opacity-100'} transition-opacity`} />
                </button>
                
                <button className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 hover:bg-white/40 hover:text-gray-900 transition-all group">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-gray-200/60 rounded-lg flex items-center justify-center group-hover:bg-gray-300/60 transition-colors">
                      <DollarSign className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="font-medium">Trading</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                
                <button className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 hover:bg-white/40 hover:text-gray-900 transition-all group">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-gray-200/60 rounded-lg flex items-center justify-center group-hover:bg-gray-300/60 transition-colors">
                      <Zap className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="font-medium">Staking</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </nav>

              {/* Bottom Actions */}
              <div className="p-4 border-t border-white/40 space-y-2">
                <button 
                  onClick={onBackToHome}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-white/40 hover:text-gray-900 transition-all"
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Back to Home</span>
                </button>
                {isConnected && (
                  <button 
                    onClick={handleDisconnect}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50/60 transition-all"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Disconnect</span>
                  </button>
                )}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white/40 backdrop-blur-2xl border-b border-white/60 shadow-sm">
            <div className="px-8 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {!sidebarOpen && (
                    <button 
                      onClick={() => setSidebarOpen(true)} 
                      className="p-2 hover:bg-white/50 rounded-lg transition-colors"
                    >
                      <Menu className="w-6 h-6 text-gray-600" />
                    </button>
                  )}
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">AI Copilot</h1>
                    <p className="text-sm text-gray-600">Your intelligent crypto assistant</p>
                  </div>
                </div>
                
                {!isConnected && (
                  <Button 
                    onClick={handleConnect}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 shadow-lg shadow-purple-500/30"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                )}
              </div>
            </div>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6">
            {currentView === 'chat' ? (
              <AnimatePresence mode="popLayout">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-3xl ${message.type === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                      {/* AI Message */}
                      {message.type === 'ai' && (
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Bot className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl rounded-tl-md px-6 py-4 shadow-lg">
                              <p className="text-gray-800 leading-relaxed whitespace-pre-line">{message.content}</p>
                            </div>
                            <div className="text-xs text-gray-500 mt-2 ml-2">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* User Message */}
                      {message.type === 'user' && (
                        <div className="flex items-start justify-end space-x-4">
                          <div className="flex-1">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl rounded-tr-md px-6 py-4 shadow-lg">
                              <p className="text-white leading-relaxed">{message.content}</p>
                            </div>
                            <div className="text-xs text-gray-500 mt-2 mr-2 text-right">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                          <div className="w-10 h-10 rounded-xl bg-gray-300/60 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <User className="w-5 h-5 text-gray-700" />
                          </div>
                        </div>
                      )}

                      {/* Suggestions */}
                      {message.suggestions && message.type === 'ai' && (
                        <div className="flex flex-wrap gap-2 mt-4 ml-14">
                          {message.suggestions.map((suggestion, idx) => (
                            <motion.button
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ delay: 0.1 * idx, type: 'spring', stiffness: 300, damping: 20 }}
                              onClick={() => handleSendMessage(suggestion)}
                              className="bg-white/60 backdrop-blur-xl hover:bg-white/80 border border-white/60 text-gray-700 text-sm px-4 py-2.5 rounded-full transition-all hover:shadow-md hover:scale-105 font-medium"
                            >
                              {suggestion}
                            </motion.button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-6xl mx-auto space-y-6"
              >
                {!isConnected ? (
                  <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-12 text-center shadow-lg">
                    <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Connect Your Wallet</h3>
                    <p className="text-gray-600 mb-6">Connect your wallet to view your portfolio and track your assets</p>
                    <Button
                      onClick={handleConnect}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 shadow-lg shadow-purple-500/30"
                    >
                      <Wallet className="w-5 h-5 mr-2" />
                      Connect Wallet
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Portfolio Overview */}
                    <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-lg">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Overview</h2>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-6">
                          <p className="text-sm text-gray-600 mb-2">Total Balance</p>
                          <p className="text-3xl font-bold text-gray-900">$23,847.50</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-6">
                          <p className="text-sm text-gray-600 mb-2">24h Change</p>
                          <p className="text-3xl font-bold text-green-600 flex items-center">
                            <TrendingUp className="w-6 h-6 mr-2" />
                            +5.5%
                          </p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-6">
                          <p className="text-sm text-gray-600 mb-2">Profit/Loss</p>
                          <p className="text-3xl font-bold text-green-600">+$1,234.20</p>
                        </div>
                      </div>
                    </div>

                    {/* Assets */}
                    <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Your Assets</h3>
                      <div className="space-y-4">
                        {[
                          { symbol: 'ETH', name: 'Ethereum', amount: 2.5, value: 9105, change: 8.5, color: 'from-blue-500 to-purple-500' },
                          { symbol: 'BTC', name: 'Bitcoin', amount: 0.15, value: 6450, change: 3.2, color: 'from-orange-500 to-yellow-500' },
                          { symbol: 'USDC', name: 'USD Coin', amount: 8292.50, value: 8292.50, change: 0, color: 'from-green-500 to-teal-500' }
                        ].map((asset) => (
                          <div key={asset.symbol} className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                            <div className="flex items-center space-x-4">
                              <div className={`w-12 h-12 bg-gradient-to-br ${asset.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                <span className="text-white font-bold text-sm">{asset.symbol}</span>
                              </div>
                              <div>
                                <p className="font-bold text-gray-900">{asset.name}</p>
                                <p className="text-sm text-gray-600">{asset.amount} {asset.symbol}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gray-900">${asset.value.toLocaleString()}</p>
                              <p className={`text-sm ${asset.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {asset.change >= 0 ? '+' : ''}{asset.change}%
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white/40 backdrop-blur-2xl border-t border-white/60 px-8 py-6 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-2 flex items-center space-x-3 shadow-lg">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  placeholder="Ask me anything about crypto..."
                  className="flex-1 bg-transparent border-0 text-gray-900 placeholder:text-gray-500 focus-visible:ring-0 px-4 py-2"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 h-11 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/30"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                AlloX can make mistakes. Always verify important information and transactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}