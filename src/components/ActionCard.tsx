import { ReactNode } from 'react';

interface ActionCardProps {
  children: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  onReview?: () => void;
}

export function ActionCard({ children, onConfirm, onCancel, onReview }: ActionCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-5 space-y-4">
      {children}
      
      <div className="flex gap-2 pt-2">
        {onConfirm && (
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 px-4 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Confirm
          </button>
        )}
        {onReview && (
          <button
            onClick={onReview}
            className="flex-1 py-2.5 px-4 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Review
          </button>
        )}
        {onCancel && (
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 px-4 bg-white/80 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
