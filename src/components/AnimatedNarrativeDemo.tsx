import { useState, useEffect } from 'react';

type AnimationStep = 'idle' | 'typing' | 'show-user' | 'thinking' | 'show-ai';

export function AnimatedNarrativeDemo() {
  const [step, setStep] = useState<AnimationStep>('idle');
  const [typingText, setTypingText] = useState('');
  
  const userMessage = 'Build a high risk Memecoin basket';

  // Memecoin tokens
  const tokens = [
    { symbol: 'DOGE', allocation: '35%', color: 'from-yellow-400 to-orange-500' },
    { symbol: 'SHIB', allocation: '33%', color: 'from-orange-400 to-red-500' },
    { symbol: 'PEPE', allocation: '32%', color: 'from-green-400 to-green-600' },
  ];

  useEffect(() => {
    let timer: number;

    switch (step) {
      case 'idle':
        timer = setTimeout(() => setStep('typing'), 500);
        break;

      case 'typing':
        if (typingText.length < userMessage.length) {
          timer = setTimeout(() => {
            setTypingText(userMessage.slice(0, typingText.length + 1));
          }, 60);
        } else {
          timer = setTimeout(() => {
            setStep('show-user');
            setTypingText('');
          }, 300);
        }
        break;

      case 'show-user':
        timer = setTimeout(() => setStep('thinking'), 500);
        break;

      case 'thinking':
        timer = setTimeout(() => setStep('show-ai'), 1800);
        break;

      case 'show-ai':
        timer = setTimeout(() => {
          // Reset and restart
          setStep('idle');
          setTypingText('');
        }, 5000);
        break;
    }

    return () => clearTimeout(timer);
  }, [step, typingText]);

  const showUserMessage = ['show-user', 'thinking', 'show-ai'].includes(step);
  const showThinking = step === 'thinking';
  const showAIResponse = step === 'show-ai';

  return (
    <div className="glass-card p-6 mb-4">
      <div className="space-y-4 min-h-[280px]">
        {/* User Message - Typing */}
        {step === 'typing' && typingText && (
          <div className="flex justify-end animate-fade-in">
            <div className="bg-black text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm">
              {typingText}
              <span className="inline-block w-0.5 h-4 bg-white ml-1 animate-pulse"></span>
            </div>
          </div>
        )}

        {/* User Message - Complete */}
        {showUserMessage && (
          <div className="flex justify-end animate-fade-in">
            <div className="bg-black text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm">
              {userMessage}
            </div>
          </div>
        )}

        {/* Thinking Indicator */}
        {showThinking && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}

        {/* AI Response - Narrative Basket */}
        {showAIResponse && (
          <div className="flex justify-start animate-slide-up">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 px-4 py-3 rounded-2xl rounded-tl-sm min-w-[220px]">
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
               
                <div>
                  <div className="font-bold text-sm">Memecoin • High Risk</div>
                </div>
              </div>

              {/* Token Allocation */}
              <div className="space-y-2 mb-3">
                {tokens.map((token, idx) => (
                  <div 
                    key={token.symbol} 
                    className="flex items-center justify-between text-sm animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br`}>
                        <img src={`https://cdn.allox.ai/allox/tokens/${token.symbol.toLowerCase()}.svg`} alt="" />
                      </div>
                      <span className="font-medium">{token.symbol}</span>
                    </div>
                    <span className="font-medium text-xs">{token.allocation}</span>
                  </div>
                ))}
              </div>

              {/* Investment Summary */}
              <div className="border-t border-gray-200/50 pt-2 mb-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Estimated Cost</span>
                  <span className="font-bold text-black">~$850.00</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 py-1.5 bg-black text-white rounded-lg text-xs font-medium">
                  Build Basket
                </button>
                <button className="flex-1 py-1.5 bg-white/80 border border-gray-200 rounded-lg text-xs font-medium">
                   Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
