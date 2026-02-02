import { useState, useEffect } from 'react';

type AnimationStep = 'idle' | 'typing' | 'show-user' | 'thinking' | 'show-ai';

export function AnimatedSwapDemo() {
  const [step, setStep] = useState<AnimationStep>('idle');
  const [typingText, setTypingText] = useState('');
  
  const userMessage = 'Swap 200 USDT to ETH';

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
        timer = setTimeout(() => setStep('show-ai'), 1500);
        break;

      case 'show-ai':
        timer = setTimeout(() => {
          // Reset and restart
          setStep('idle');
          setTypingText('');
        }, 4000);
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

        {/* AI Response */}
        {showAIResponse && (
          <div className="flex justify-start animate-slide-up">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 border border-blue-200/50 rounded-xl p-4 mb-3">
                <div className="flex justify-between mb-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">From</div>
                    <div className="font-bold">200 USDT</div>
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">To</div>
                    <div className="font-bold">0.114 ETH</div>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Route</span>
                    <span className="font-medium">Uniswap V3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Network Fee</span>
                    <span className="font-medium">~$1.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Slippage</span>
                    <span className="font-medium">0.5%</span>
                  </div>
                </div>
              </div>
              <button className="w-full py-2 bg-black text-white rounded-xl text-xs font-medium">
                Confirm Swap
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
