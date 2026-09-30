import { ChevronRight, X } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import privateSalePopup from "../assets/privateSalePopup.png";

const PublicSaleModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(7, 9, 15, 0.82) 0%, rgba(15, 12, 31, 0.72) 55%, rgba(13, 21, 32, 0.87) 100%), url(${privateSalePopup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid rgba(129,140,248,0.3)",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(129,140,248,0.1)",
        }}
      >
        {/* Glow orbs */}
        <div
          className="absolute -top-12 -left-12 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: "#818cf8", filter: "blur(48px)", opacity: 0.18 }}
        />
        <div
          className="absolute -bottom-8 right-8 w-28 h-28 rounded-full pointer-events-none"
          style={{ background: "#22d3ee", filter: "blur(40px)", opacity: 0.12 }}
        />

        {/* Top accent line */}
        <div
          className="h-[3px] w-full"
          style={{
            background: "linear-gradient(90deg, #818cf8, #6366f1, #22d3ee)",
          }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-7 h-7 flex items-center justify-center rounded-full transition-colors z-15 cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.08)",
            color: "rgba(255,255,255,0.5)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
          }}
        >
          <X className="w-3.5 h-3.5 " />
        </button>

        <div className="relative z-10 px-6 py-10">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-7">
            {/* <span
              className="inline-flex items-center gap-1.5 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest"
              style={{
                background: "rgba(74,222,128,0.15)",
                color: "#4ade80",
                border: "1px solid rgba(74,222,128,0.3)",
              }}
            >
              <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse inline-block" />
              Live Now
            </span> */}
            <img
              src="https://cdn.allox.ai/allox/publicSale/sonarLogo.svg"
              alt=""
              className="h-7 sm:h-5 w-auto max-w-[100px] sm:max-w-[140px] object-contain object-right drop-shadow opacity-100"
              
            />
            {/* <span
              className="text-[9px] font-bold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Private Sale
            </span> */}
          </div>

          {/* Headline */}
          <h3 className="text-3xl font-black text-white leading-tight mb-8">
            Open to Everyone.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #818cf8, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ALLOX Public Sale.
            </span>
          </h3>
          <p className=" text-sm mt-4 text-gray-300 mb-8">
            Join the AlloX Public Sale via Sonar, Coinbase's onchain token sale
            infrastructure.
          </p>

          {/* 3 key stats */}
          <div className="grid grid-cols-2 gap-3 mb-9">
            {[
              { label: "Token Price:", value: "$0.065", color: "#818cf8" },
              { label: "Public FDV", value: "$65M", color: "#4ade80" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl px-3 py-3.5 text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="text-[9px] font-semibold uppercase tracking-wide mb-1.5"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {s.label}
                </div>
                <div
                  className="text-base font-black"
                  style={{ color: s.color }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="https://sale.allox.ai"
            target="_blank"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-black text-sm text-white transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #818cf8, #6366f1)",
              boxShadow: "0 8px 24px rgba(99,102,241,0.4)",
            }}
          >
            Join Public Sale
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicSaleModal;