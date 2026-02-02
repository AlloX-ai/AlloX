import { X } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (wallet: string) => void;
}

export function WalletModal({ isOpen, onClose, onConnect }: WalletModalProps) {
  if (!isOpen) return null;

  const wallets = [
    { name: 'MetaMask', icon: '🦊' },
    { name: 'Binance Wallet', icon: '🟡' },
    { name: 'Trust Wallet', icon: '🔷' },
    { name: 'WalletConnect', icon: '🔗' },
    { name: 'Coinbase Wallet', icon: '🔵' },
    { name: 'Rainbow', icon: '🌈' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative glass-card p-8 w-full max-w-md animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Connect Wallet</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Wallet Options */}
        <div className="space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => {
                onConnect(wallet.name);
                onClose();
              }}
              className="w-full flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:bg-white/80 hover:border-gray-300 transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl border border-gray-200/50 group-hover:scale-110 transition-transform">
                {wallet.icon}
              </div>
              <span className="font-medium">{wallet.name}</span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-gray-500 mt-6">
          By connecting, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
