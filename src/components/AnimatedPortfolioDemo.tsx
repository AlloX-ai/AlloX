import { useState, useEffect } from 'react';
import aeroToken from '../assets/tokens/aero.svg';
import virtualToken from '../assets/tokens/virtual.svg';
import primeToken from '../assets/tokens/prime.svg';



type AnimationStep = 'idle' | 'typing' | 'show-user' | 'thinking' | 'show-ai';

export function AnimatedPortfolioDemo() {
  const [step, setStep] = useState<AnimationStep>('idle');
  const [typingText, setTypingText] = useState('');
  
  const userMessage = 'Suggest 3 trending DeFi tokens';

  const tokens = [
    { name: 'AERO', color: 'from-blue-400 to-blue-600', gain: '+24.5%', icon: aeroToken},
    { name: 'VIRTUAL', color: 'from-purple-400 to-purple-600', gain: '+18.2%', icon: virtualToken },
    { name: 'PRIME', color: 'from-pink-400 to-pink-600', gain: '+15.8%', icon: primeToken },
  ];

  useEffect(() => {
    let timer: number | any;

    switch (step) {
      case 'idle':
        timer = setTimeout(() => setStep('typing'), 500);
        break;

      case 'typing':
        if (typingText.length < userMessage.length) {
          timer = setTimeout(() => {
            setTypingText(userMessage.slice(0, typingText.length + 1));
          }, 50);
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
              <p className="text-sm mb-3">Here are 3 trending tokens:</p>
              <div className="space-y-2 mb-3">
                {tokens.map((token, idx) => (
                  <div 
                    key={token.name}
                    className="flex justify-between items-center text-sm animate-fade-in"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="flex items-center gap-2"> 
                      <img src={token.icon} alt='' className='w-6 h-6 rounded-full' />
                      <span className="font-medium">{token.name}</span>
                    </div>
                    <span className="text-green-600 text-xs">{token.gain}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mb-2">Want to allocate funds?</p>
              <div className="flex gap-2">
                <button className="flex-1 py-1.5 bg-black text-white rounded-lg text-xs font-medium">
                  Allocate $500
                </button>
                <button className="flex-1 py-1.5 bg-white/80 border border-gray-200 rounded-lg text-xs font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
