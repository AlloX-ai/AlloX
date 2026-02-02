import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function NetworkSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('Base');

  const networks = [
    { name: 'Base', icon: '🔵' },
    { name: 'BNB Chain', icon: '🟡' },
    { name: 'Ethereum', icon: '💎' },
    { name: 'opBNB', icon: '🟠' },
    { name: 'Polygon', icon: '🟣' },
    { name: 'Arbitrum', icon: '🔷' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card px-4 py-2.5 flex items-center gap-3 hover:bg-white/80 transition-colors"
      >
        <span className="text-lg">
          {networks.find((n) => n.name === selectedNetwork)?.icon}
        </span>
        <span className="font-medium text-sm">{selectedNetwork}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute top-full right-0 mt-2 glass-card p-2 min-w-[200px] z-20 animate-fade-in">
            {networks.map((network) => (
              <button
                key={network.name}
                onClick={() => {
                  setSelectedNetwork(network.name);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${
                  selectedNetwork === network.name
                    ? 'bg-black text-white font-medium'
                    : 'hover:bg-black/5'
                }`}
              >
                <span className="text-lg">{network.icon}</span>
                <span>{network.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
