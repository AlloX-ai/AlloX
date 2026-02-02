import { ReactNode } from 'react';

interface ChatBubbleProps {
  type: 'user' | 'ai';
  children: ReactNode;
  className?: string;
}

export function ChatBubble({ type, children, className = '' }: ChatBubbleProps) {
  if (type === 'user') {
    return (
      <div className={`flex justify-end ${className}`}>
        <div className="bg-black text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%]">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex justify-start ${className}`}>
      <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 px-5 py-3 rounded-2xl rounded-tl-sm max-w-[85%]">
        {children}
      </div>
    </div>
  );
}
