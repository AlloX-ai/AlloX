import { useState, useEffect, useRef } from "react";
import { MessageSquare } from "lucide-react";

type AnimationStep =
  | "idle"
  | "typing-user-1"
  | "show-user-1"
  | "thinking-1"
  | "show-ai-1"
  | "typing-user-2"
  | "show-user-2"
  | "thinking-2"
  | "show-ai-2"
  | "confirming"
  | "success";

export function AnimatedChatDemo() {
  const [step, setStep] = useState<AnimationStep>("idle");
  const [typingText, setTypingText] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const userMessage1 = "Show me the Gaming narrative";
  const userMessage2 = "Mid Cap, $500";

  const narrativeTokens = [
    {
      name: "IMX",
      allocation: "25%",
      marketCap: "$2.8B",
    },
    {
      name: "GALA",
      allocation: "20%",
      marketCap: "$1.2B",
    },
    {
      name: "PRIME",
      allocation: "20%",
      marketCap: "$680M",
    },
    {
      name: "BEAM",
      allocation: "20%",
      marketCap: "$450M",
    },
    {
      name: "PORTAL",
      allocation: "15%",
      marketCap: "$320M",
    },
  ];

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [step, typingText]);

  useEffect(() => {
    let timer: number;

    switch (step) {
      case "idle":
        timer = setTimeout(() => setStep("typing-user-1"), 500);
        break;

      case "typing-user-1":
        if (typingText.length < userMessage1.length) {
          timer = setTimeout(() => {
            setTypingText(
              userMessage1.slice(0, typingText.length + 1),
            );
          }, 50);
        } else {
          timer = setTimeout(() => {
            setStep("show-user-1");
            setTypingText("");
          }, 300);
        }
        break;

      case "show-user-1":
        timer = setTimeout(() => setStep("thinking-1"), 500);
        break;

      case "thinking-1":
        timer = setTimeout(() => setStep("show-ai-1"), 1500);
        break;

      case "show-ai-1":
        timer = setTimeout(
          () => setStep("typing-user-2"),
          2500,
        );
        break;

      case "typing-user-2":
        if (typingText.length < userMessage2.length) {
          timer = setTimeout(() => {
            setTypingText(
              userMessage2.slice(0, typingText.length + 1),
            );
          }, 100);
        } else {
          timer = setTimeout(() => {
            setStep("show-user-2");
            setTypingText("");
          }, 300);
        }
        break;

      case "show-user-2":
        timer = setTimeout(() => setStep("thinking-2"), 500);
        break;

      case "thinking-2":
        timer = setTimeout(() => setStep("show-ai-2"), 1500);
        break;

      case "show-ai-2":
        timer = setTimeout(() => {
          setIsButtonClicked(true);
          setTimeout(() => setStep("confirming"), 200);
        }, 2000);
        break;

      case "confirming":
        timer = setTimeout(() => setStep("success"), 2000);
        break;

      case "success":
        timer = setTimeout(() => {
          // Reset and restart animation
          setStep("idle");
          setTypingText("");
          setIsButtonClicked(false);
        }, 3000);
        break;
    }

    return () => clearTimeout(timer);
  }, [step, typingText]);

  const showUserMessage1 = [
    "show-user-1",
    "thinking-1",
    "show-ai-1",
    "typing-user-2",
    "show-user-2",
    "thinking-2",
    "show-ai-2",
    "confirming",
    "success",
  ].includes(step);
  const showThinking1 = step === "thinking-1";
  const showAIResponse1 = [
    "show-ai-1",
    "typing-user-2",
    "show-user-2",
    "thinking-2",
    "show-ai-2",
    "confirming",
    "success",
  ].includes(step);
  const showUserMessage2 = [
    "show-user-2",
    "thinking-2",
    "show-ai-2",
    "confirming",
    "success",
  ].includes(step);
  const showThinking2 = step === "thinking-2";
  const showAIResponse2 = ["show-ai-2", "confirming", "success"].includes(step);
  const showConfirming = step === "confirming";
  const showSuccess = step === "success";

  return (
    <div className="glass-card p-6 max-w-md w-full">
      {/* Chat Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200/50">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center">
          <MessageSquare size={20} className="text-gray-700" />
        </div>
        <div>
          <div className="font-medium">AlloX</div>
          <div className="text-xs text-gray-500">
            {showThinking1 || showThinking2
              ? "Thinking..."
              : showConfirming
              ? "Processing..."
              : "Ready to assist"}
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        ref={messagesContainerRef}
        className="space-y-4 mb-4 h-[400px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {/* User Message 1 - Typing */}
        {step === "typing-user-1" && typingText && (
          <div className="flex justify-end animate-fade-in">
            <div className="bg-black text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">
              {typingText}
              <span className="inline-block w-0.5 h-4 bg-white ml-1 animate-pulse"></span>
            </div>
          </div>
        )}

        {/* User Message 1 - Complete */}
        {showUserMessage1 && (
          <div className="flex justify-end animate-fade-in">
            <div className="bg-black text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">
              {userMessage1}
            </div>
          </div>
        )}

        {/* Thinking Indicator 1 */}
        {showThinking1 && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1">
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* AI Response 1 - Gaming Narrative */}
        {showAIResponse1 && (
          <div className="flex justify-start animate-slide-up">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%]">
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-sm">Gaming Narrative</span>
                </div>
                <p className="text-xs text-gray-600 mb-3">
                  Diversified basket of gaming & metaverse tokens
                </p>
              </div>

              <div className="space-y-1.5 mb-3 bg-gradient-to-br from-blue-50/80 to-purple-50/80 border border-blue-200/50 rounded-lg p-2.5">
                {narrativeTokens.map((token, idx) => (
                  <div
                    key={token.name}
                    className="flex items-center justify-between text-xs animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{token.name}</span>
                      <span className="text-gray-500 text-[10px]">{token.marketCap}</span>
                    </div>
                    <span className="font-medium text-blue-600">
                      {token.allocation}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-1.5 mb-3">
                <p className="text-xs font-medium text-gray-700">Select risk tier & amount:</p>
                <div className="grid grid-cols-3 gap-1.5 text-[10px]">
                  <div className="bg-green-50 border border-green-200 rounded px-2 py-1 text-center">
                    <div className="font-medium text-green-700">High Cap</div>
                    <div className="text-gray-500">Lower risk</div>
                  </div>
                  <div className="bg-blue-50 border-2 border-blue-500 rounded px-2 py-1 text-center">
                    <div className="font-medium text-blue-700">Mid Cap</div>
                    <div className="text-gray-500">Balanced</div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded px-2 py-1 text-center">
                    <div className="font-medium text-orange-700">Low Cap</div>
                    <div className="text-gray-500">Higher risk</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-1.5">
                <button className="py-1.5 px-2 bg-white/80 border border-gray-200 rounded-lg text-xs font-medium">
                  $100
                </button>
                <button className="py-1.5 px-2 bg-white/80 border border-gray-200 rounded-lg text-xs font-medium">
                  $250
                </button>
                <button className="py-1.5 px-2 bg-black text-white rounded-lg text-xs font-medium">
                  $500
                </button>
                <button className="py-1.5 px-2 bg-white/80 border border-gray-200 rounded-lg text-xs font-medium">
                  $1K
                </button>
              </div>
            </div>
          </div>
        )}

        {/* User Message 2 - Typing */}
        {step === "typing-user-2" && typingText && (
          <div className="flex justify-end animate-fade-in">
            <div className="bg-black text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm">
              {typingText}
              <span className="inline-block w-0.5 h-4 bg-white ml-1 animate-pulse"></span>
            </div>
          </div>
        )}

        {/* User Message 2 - Complete */}
        {showUserMessage2 && (
          <div className="flex justify-end animate-fade-in">
            <div className="bg-black text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm">
              {userMessage2}
            </div>
          </div>
        )}

        {/* Thinking Indicator 2 */}
        {showThinking2 && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1">
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* AI Confirmation Card */}
        {showAIResponse2 && (
          <div className="flex justify-start animate-slide-up">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%]">
              <div className="flex items-center gap-2 mb-3">
                <p className="text-sm font-bold">
                  Gaming - Mid Cap Basket
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 border border-blue-200/50 rounded-xl p-3 mb-3">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-gray-600">Investment</span>
                  <span className="font-bold">$500.00</span>
                </div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-gray-600">Tokens</span>
                  <span className="font-medium">5 assets</span>
                </div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-gray-600">Risk Tier</span>
                  <span className="font-medium text-blue-600">Mid Cap</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">Network Fee</span>
                  <span className="font-medium">~$2.50</span>
                </div>
              </div>

              <button className={`w-full py-2 px-4 bg-black text-white rounded-xl text-xs font-medium transition-all duration-200 ${
                isButtonClicked ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
              }`}>
                Confirm Allocation
              </button>
            </div>
          </div>
        )}

        {/* Confirming Transaction */}
        {showConfirming && (
          <div className="flex justify-start animate-slide-up">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
                <span className="text-sm">Confirming transaction...</span>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {showSuccess && (
          <div className="flex justify-start animate-slide-up">
            <div className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm border border-green-200/50 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-green-900">Allocation complete!</span>
              </div>
              <p className="text-xs text-green-700">
                Successfully allocated $500 to Gaming narrative basket (5 tokens).
              </p>
            </div>
          </div>
        )}

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="relative mt-4">
        <input
          type="text"
          placeholder="Type your intent..."
          className="w-full px-4 py-2.5 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
          disabled
        />
      </div>
    </div>
  );
}