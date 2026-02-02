import { Send, CheckCircle2, TrendingUp } from 'lucide-react';

export function ChatWidget() {
  return (
    <div className="glass-card p-6 max-w-md w-full hover-lift">
      {/* Chat Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="font-medium">AI Copilot</div>
          <div className="text-xs text-gray-500">Online</div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="space-y-4 mb-6">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-black text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%]">
            <p className="text-sm">I will split your budget across the top five trending coins. How much do you want to allocate?</p>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-start">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[80%]">
            <p className="text-sm font-medium mb-3">$500</p>
            <p className="text-xs text-gray-600 mb-3">Done. Review and confirm when ready.</p>
            
            {/* Token Cards */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-3">
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                  <span className="text-xs font-medium">AERO</span>
                </div>
                <div className="text-sm font-bold">$100.00</div>
                <div className="text-xs text-green-600">18% APY</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-3">
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
                  <span className="text-xs font-medium">VIRTUAL</span>
                </div>
                <div className="text-sm font-bold">$100.00</div>
                <div className="text-xs text-green-600">22% APY</div>
              </div>
            </div>

            {/* Success Badge */}
            <div className="flex items-center justify-center gap-2 bg-green-50 border border-green-200 rounded-xl py-2">
              <CheckCircle2 size={16} className="text-green-600" />
              <span className="text-xs font-medium text-green-700">Transaction Successful</span>
            </div>

            {/* Portfolio Badge */}
            <div className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-xl py-2">
              <TrendingUp size={16} className="text-blue-600" />
              <span className="text-xs font-medium text-blue-700">Portfolio Built</span>
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Ask anything..."
          className="w-full px-4 py-3 pr-12 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black rounded-xl hover:bg-gray-800 transition-colors">
          <Send size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
}
