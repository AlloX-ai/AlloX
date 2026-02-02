import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Zap, Shield, TrendingUp, Bot, MessageSquare, Lock } from 'lucide-react';

interface LandingPageProps {
  onLaunchDapp: () => void;
}

export function LandingPage({ onLaunchDapp }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-['Inter',sans-serif] relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Glass Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-xl shadow-black/5">
          <div className="flex justify-between items-center px-6 h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-semibold text-gray-900">AlloX</span>
            </div>
            <Button 
              onClick={onLaunchDapp} 
              className="bg-gray-900/90 hover:bg-gray-900 text-white backdrop-blur-xl rounded-full px-6 shadow-lg"
            >
              Launch App
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-full px-5 py-2 shadow-lg">
                <span className="text-gray-700 text-sm font-medium">AI-Powered Crypto Platform</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] text-gray-900">
              Trade crypto with
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI conversations
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Just chat with AlloX. No complex dashboards. No steep learning curves. 
              Your intelligent copilot for the crypto market.
            </p>
            
            <Button 
              size="lg"
              onClick={onLaunchDapp}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-10 py-7 text-lg shadow-2xl shadow-purple-500/30"
            >
              Start Chatting
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Glass Card Showcase */}
      <section className="py-16 px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl p-12 shadow-2xl shadow-black/10"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Bot className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Your AI Crypto Copilot
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              AlloX connects to real-time on-chain and off-chain data sources, bringing you the latest 
              crypto trends, token analytics, and market movements, helping you act fast and stay ahead.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-2xl p-6">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-semibold">Real-Time Insights</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Get instant access to market data, token analytics, and trending cryptocurrencies 
                  through natural conversation.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-2xl p-6">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-semibold">Smart Execution</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Execute trades, manage portfolios, and optimize yields with AI-powered recommendations 
                  and automated strategies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Everything you need in one place
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: 'Natural Conversations',
                description: 'Chat naturally about crypto. Ask questions, get insights, execute trades, all through conversation.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Zap,
                title: 'Instant Execution',
                description: 'Swap, bridge, or send assets in seconds. AlloX finds the best routes with lowest fees automatically.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: TrendingUp,
                title: 'Smart Portfolios',
                description: 'Build and manage your portfolio with AI. Get personalized recommendations based on your goals.',
                gradient: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Bot,
                title: 'Learn as You Go',
                description: 'New to crypto? AlloX explains concepts in simple terms while you explore and learn by doing.',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: Shield,
                title: 'Built-in Protection',
                description: 'Every transaction includes safeguards to prevent common errors and protect your assets.',
                gradient: 'from-pink-500 to-rose-500'
              },
              {
                icon: Lock,
                title: 'Your Keys, Your Crypto',
                description: 'Non-custodial and secure. You always maintain complete control over your digital assets.',
                gradient: 'from-indigo-500 to-violet-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-2xl p-8 hover:bg-white/50 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl shadow-purple-500/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-center">Ready to start?</h2>
              <p className="text-lg text-white/90 mb-8 text-center max-w-xl mx-auto">
                Join the future of crypto trading with AI-powered intelligence
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  onClick={onLaunchDapp}
                  className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-10 py-7 text-lg shadow-xl"
                >
                  Launch AlloX
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 lg:px-12 border-t border-white/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-bold text-gray-900">AlloX</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your AI-powered crypto copilot for the decentralized future.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Chat</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Trading</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Staking</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/40 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 AlloX. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Discord</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">GitHub</a>
            </div>
          </div>
        </div>
      </footer>

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