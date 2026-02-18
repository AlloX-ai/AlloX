import { Link } from "react-router";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export function NavbarComingSoon() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleLaunchClick = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2500);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="glass-card full-white px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={`https://cdn.allox.ai/allox/AlloX-desktop.svg`}
              alt="AlloX Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* CTA Button */}
          <div className="block">
            <Tooltip
              open={showTooltip}
              // onOpenChange={(open) => {
              //     if (!open) setShowTooltip(false);
              // }}
            >
              <TooltipTrigger asChild>
                <button onClick={handleLaunchClick} className="btn-primary">
                  Launch App
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                sideOffset={10}
                hideArrow
                className="border border-neutral-200/80 bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] rounded-2xl px-4 py-3 text-sm font-medium text-neutral-800 flex items-center gap-2.5 [&>svg]:text-amber-500"
              >
                <Sparkles className="size-4 shrink-0" strokeWidth={2} />
                <span>Coming soon</span>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </nav>
  );
}
