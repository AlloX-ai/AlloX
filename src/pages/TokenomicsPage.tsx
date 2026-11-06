import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { TrendingUp, Users, Tag, Zap } from "lucide-react";
import { GlassCard } from "../components/GlassCard";

const SUPPLY = 1_000_000_000;
const MAX_MONTH = 48;
const CHART_W = 640;
const CHART_H = 260;

type Tranche = {
  name: string;
  color: string;
  pct: number;
  tge: number; // share of tranche unlocked at TGE (0-1)
  cliff: number; // months
  vest: number; // months of linear vesting after cliff (0 = fully unlocked)
};

const TRANCHES: Tranche[] = [
  { name: "Community", color: "#6366f1", pct: 35, tge: 0.05, cliff: 0, vest: 48 },
  { name: "Ecosystem", color: "#06b6d4", pct: 35, tge: 0.2, cliff: 0, vest: 36 },
  { name: "Investors", color: "#f97316", pct: 12, tge: 0.021, cliff: 12, vest: 24 },
  { name: "Team", color: "#d946ef", pct: 12, tge: 0, cliff: 12, vest: 36 },
  { name: "Liquidity", color: "#22c55e", pct: 6, tge: 1, cliff: 0, vest: 0 },
];

const MILESTONES = [0, 6, 12, 24, 36, 48];

const KPIS = [
  { label: "Total supply", value: "1,000,000,000", sub: "ALLOX" },
  { label: "Tranches", value: "5", sub: "70% to community and ecosystem" },
  { label: "Unlocked at TGE", value: "150,020,000", sub: "15.0% of supply" },
  { label: "Fully unlocked", value: "Month 48", sub: "After TGE" },
];

const UTILITIES = [
  {
    title: "Staking",
    desc: "Earn yield from ALLOX staking pools.",
    Icon: TrendingUp,
    iconWrap: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  },
  {
    title: "Governance",
    desc: "Vote on narrative categories, risk parameters, and platform upgrades.",
    Icon: Users,
    iconWrap: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",
  },
  {
    title: "Fee Discounts",
    desc: "Receive discounts on trading, portfolio creation, and transaction fees.",
    Icon: Tag,
    iconWrap: "bg-orange-100 text-orange-700 dark:text-orange-300",
  },
  {
    title: "Premium Feature Access",
    desc: "Unlock advanced AI features, priority allocations, and exclusive campaigns.",
    Icon: Zap,
    iconWrap: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-500/15 dark:text-fuchsia-300",
  },
];

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

const trancheAmount = (t: Tranche) => (SUPPLY * t.pct) / 100;

function unlockedAt(t: Tranche, month: number) {
  const total = trancheAmount(t);
  const atTge = total * t.tge;
  if (!t.vest) return total;
  if (month <= t.cliff) return atTge;
  return atTge + ((total - atTge) * Math.min(month - t.cliff, t.vest)) / t.vest;
}

const donutGradient = (() => {
  let acc = 0;
  const stops = TRANCHES.map((t) => {
    const from = acc;
    acc += t.pct;
    return `${t.color} ${from}% ${acc}%`;
  });
  return `conic-gradient(${stops.join(", ")})`;
})();

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle: string }) {
  return (
    <div id={id} className="flex flex-col gap-1 scroll-mt-32">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
}

export function TokenomicsPage() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mark, setMark] = useState(12);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tokenomics";
  }, []);

  const layers = useMemo(() => {
    const months = Array.from({ length: MAX_MONTH + 1 }, (_, m) => m);
    const x = (m: number) => ((m / MAX_MONTH) * CHART_W).toFixed(1);
    const y = (v: number) => (CHART_H - (v / SUPPLY) * CHART_H).toFixed(1);
    let base = months.map(() => 0);
    return TRANCHES.map((t) => {
      const lo = base;
      const hi = months.map((m, i) => lo[i] + unlockedAt(t, m));
      base = hi;
      const top = months.map((m, i) => `${x(m)},${y(hi[i])}`);
      const bottom = [...months].reverse().map((m) => `${x(m)},${y(lo[m])}`);
      return { color: t.color, points: [...top, ...bottom].join(" ") };
    });
  }, []);

  const markTotal = TRANCHES.reduce((sum, t) => sum + unlockedAt(t, mark), 0);
  const markPct = `${((markTotal / SUPPLY) * 100).toFixed(2)}%`;
  const markX = (mark / MAX_MONTH) * CHART_W;

  return (
    <div className="min-h-screen bg-pattern">
      <div className="relative pt-32 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col">
          {/* Hero */}
          <GlassCard className="relative overflow-hidden p-8 md:p-14 min-h-[380px] flex flex-wrap items-center justify-between gap-8">
            {/* Decorative grid lines */}
            <svg
              aria-hidden="true"
              viewBox="0 0 1150 380"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none stroke-gray-100"
            >
              <line x1="0" y1="95" x2="1150" y2="95" />
              <line x1="0" y1="190" x2="1150" y2="190" />
              <line x1="0" y1="285" x2="1150" y2="285" />
              <line x1="575" y1="0" x2="575" y2="380" />
              <line x1="862" y1="0" x2="862" y2="380" />
            </svg>

            {/* Decorative orbit */}
            <svg
              aria-hidden="true"
              width="560"
              height="560"
              viewBox="0 0 560 560"
              className="hidden md:block absolute -right-[60px] top-1/2 -mt-[280px] pointer-events-none"
            >
              <g fill="none" className="stroke-gray-200">
                <circle cx="280" cy="280" r="270" />
                <circle cx="280" cy="280" r="215" strokeDasharray="3 7" />
                <circle cx="280" cy="280" r="160" />
              </g>
              <g fill="none" strokeWidth="2.5" strokeLinecap="round">
                <path d="M280 10 A270 270 0 0 1 528 175" stroke="#6366f1" />
                <path d="M545 330 A270 270 0 0 1 380 531" stroke="#06b6d4" />
                <path d="M120 490 A270 270 0 0 1 40 400" stroke="#f97316" />
                <path d="M18 230 A270 270 0 0 1 60 120" stroke="#d946ef" />
              </g>
              <circle cx="528" cy="175" r="5" fill="#6366f1" />
              <circle cx="380" cy="531" r="5" fill="#06b6d4" />
              <circle cx="40" cy="400" r="5" fill="#f97316" />
              <circle cx="60" cy="120" r="5" fill="#d946ef" />
              <circle cx="128" cy="432" r="4" fill="#22c55e" />
              <g strokeWidth="1.5" className="stroke-gray-300">
                <line x1="280" y1="58" x2="280" y2="72" />
                <line x1="280" y1="488" x2="280" y2="502" />
                <line x1="58" y1="280" x2="72" y2="280" />
                <line x1="488" y1="280" x2="502" y2="280" />
              </g>
            </svg>

            <div className="relative flex-[1_1_420px] max-w-[520px] flex flex-col gap-4">
              <span className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.12em] text-gray-500">
                <span className="w-6 h-[1.5px] bg-gray-900" />
                ALLOX TOKEN
              </span>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none">
                Tokenomics
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                How ALLOX is allocated, what it does, and when it unlocks.
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="flex items-center h-[30px] px-3 rounded-full border border-gray-200 text-xs font-semibold tabular-nums">
                  1,000,000,000 supply
                </span>
              </div>
            </div>

            {/* Token coin */}
            <div
              role="img"
              aria-label="ALLOX token"
              className="relative shrink-0 w-[200px] h-[200px] md:w-[240px] md:h-[240px] mx-auto md:mx-0 md:mr-[60px]"
            >
              <span className="absolute left-6 right-6 -bottom-[18px] h-7 rounded-full bg-[rgba(17,24,39,0.22)] blur-[14px]" />
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(145deg,#52525b_0%,#0a0a0b_45%,#27272a_100%)] shadow-[0_24px_50px_rgba(17,24,39,0.3),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.55)]" />
              <span className="absolute inset-[14px] rounded-full border-[1.5px] border-[rgba(255,255,255,0.16)] bg-[radial-gradient(circle_at_30%_25%,#2f2f35_0%,#111113_60%,#050506_100%)] shadow-[inset_0_3px_12px_rgba(0,0,0,0.6)]" />
              <span className="absolute inset-7 rounded-full border border-dashed border-[rgba(255,255,255,0.14)]" />
              <img
                src="/images/allox-token.png"
                alt=""
                className="absolute left-1/2 top-1/2 w-[46%] h-[46%] -translate-x-1/2 -translate-y-1/2 object-contain"
              />
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.14)_45%,transparent_60%)]" />
            </div>
          </GlassCard>

          {/* KPIs */}
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {KPIS.map((k) => (
              <GlassCard key={k.label} className="min-w-0 px-4 py-4 sm:px-5 sm:py-[18px] flex flex-col gap-0.5">
                <span className="text-[11px] sm:text-xs text-gray-500">{k.label}</span>
                <span className="text-base sm:text-2xl font-bold tracking-tight tabular-nums break-words">{k.value}</span>
                <span className="text-[11px] sm:text-xs text-gray-500 leading-snug">{k.sub}</span>
              </GlassCard>
            ))}
          </div>

          {/* Allocation */}
          <div className="mt-14">
            <SectionHeading
              id="allocation"
              title="Allocation"
              subtitle="1,000,000,000 ALLOX split across five tranches."
            />
          </div>
          <GlassCard className="mt-5 flex flex-wrap overflow-hidden">
            <div className="flex-[0_1_340px] min-w-[280px] p-8 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col items-center justify-center gap-5 mx-auto">
              <div
                role="img"
                aria-label={`Allocation: ${TRANCHES.map((t) => `${t.name} ${t.pct}%`).join(", ")}`}
                className="relative w-[230px] h-[230px] rounded-full transition-transform"
                style={{ background: donutGradient }}
              >
                <div className="absolute inset-[38px] rounded-full bg-white flex flex-col items-center justify-center text-center">
                  {hovered === null ? (
                    <>
                      <span className="text-xs text-gray-500">Total supply</span>
                      <span className="text-3xl font-bold tracking-tight leading-tight">1B</span>
                      <span className="text-xs text-gray-500">ALLOX</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs text-gray-500">{TRANCHES[hovered].name}</span>
                      <span className="text-3xl font-bold tracking-tight leading-tight">
                        {TRANCHES[hovered].pct}%
                      </span>
                      <span className="text-xs text-gray-500 tabular-nums">
                        {fmt(trancheAmount(TRANCHES[hovered]))}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <span className="text-xs text-gray-500 text-center">Hover a row to see its share</span>
            </div>

            <div className="flex-[1_1_560px] min-w-0 overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-sm whitespace-nowrap">
                <thead>
                  <tr className="text-left text-gray-500 text-xs">
                    <th scope="col" className="pt-[22px] pb-3 pl-7 pr-4 font-medium">Tranche</th>
                    <th scope="col" className="pt-[22px] pb-3 px-3 font-medium">Allocation</th>
                    <th scope="col" className="pt-[22px] pb-3 px-3 font-medium text-right">Tokens</th>
                    <th scope="col" className="pt-[22px] pb-3 px-3 font-medium">TGE unlock</th>
                    <th scope="col" className="pt-[22px] pb-3 px-3 font-medium">Cliff</th>
                    <th scope="col" className="pt-[22px] pb-3 pl-3 pr-7 font-medium">Vesting</th>
                  </tr>
                </thead>
                <tbody>
                  {TRANCHES.map((t, i) => (
                    <tr
                      key={t.name}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      className={`border-t border-gray-100 transition-colors ${
                        hovered === i ? "bg-gray-50" : ""
                      }`}
                    >
                      <th scope="row" className="py-4 pl-7 pr-4 text-left font-semibold">
                        <span className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-[3px]" style={{ background: t.color }} />
                          {t.name}
                        </span>
                      </th>
                      <td className="py-4 px-3">
                        <span className="flex items-center gap-2.5">
                          <span className="font-bold w-9 tabular-nums">{t.pct}%</span>
                          <span className="w-20 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                            <span
                              className="block h-full"
                              style={{ width: `${(t.pct / 35) * 100}%`, background: t.color }}
                            />
                          </span>
                        </span>
                      </td>
                      <td className="py-4 px-3 text-right tabular-nums">{fmt(trancheAmount(t))}</td>
                      <td className="py-4 px-3">
                        <span className="text-xs font-semibold px-2 py-[3px] rounded-md bg-gray-100 text-gray-700">
                          {Math.round(t.tge * 100)}%
                        </span>
                      </td>
                      <td className="py-4 px-3 text-gray-600">{t.cliff ? `${t.cliff} mo.` : "None"}</td>
                      <td className="py-4 pl-3 pr-7 text-gray-600">
                        {t.vest ? `${t.vest} mo. linear` : "N/A"}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-200 bg-gray-50 font-bold">
                    <th scope="row" className="py-4 pl-7 pr-4 text-left">Total</th>
                    <td className="py-4 px-3">100%</td>
                    <td className="py-4 px-3 text-right tabular-nums">1,000,000,000</td>
                    <td className="py-4 px-3 font-medium text-gray-600">15.0% of supply</td>
                    <td />
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* Utility */}
          <div className="mt-[72px]">
            <SectionHeading id="utility" title="Utility" subtitle="What holding ALLOX unlocks on AlloX." />
          </div>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {UTILITIES.map(({ title, desc, Icon, iconWrap }) => (
              <GlassCard key={title} hover className="p-[26px] flex flex-col gap-3.5">
                <span className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconWrap}`}>
                  <Icon size={20} />
                </span>
                <span className="text-lg font-bold">{title}</span>
                <span className="text-sm text-gray-600 leading-relaxed">{desc}</span>
              </GlassCard>
            ))}
          </div>

          {/* Emissions */}
          <div className="mt-[72px]">
            <SectionHeading
              id="emissions"
              title="Emissions"
              subtitle="How much ALLOX is unlocked over time, by tranche."
            />
          </div>
          <GlassCard className="mt-5 p-6 md:p-7 flex flex-wrap gap-7">
            <div className="flex-[2_1_560px] min-w-0 flex flex-col gap-3.5">
              <div className="flex flex-wrap justify-between items-baseline gap-3">
                <span className="text-lg font-bold">Unlocked supply over time</span>
                <span className="text-xs text-gray-500">Months after TGE</span>
              </div>
              <div className="relative">
                <svg
                  viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="Stacked chart of unlocked ALLOX by tranche from TGE to month 48"
                  className="w-full h-[280px] block"
                >
                  {[0, 65, 130, 195].map((gy) => (
                    <line
                      key={gy}
                      x1="0"
                      x2={CHART_W}
                      y1={gy}
                      y2={gy}
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                      className="stroke-gray-100"
                    />
                  ))}
                  {layers.map((l) => (
                    <polygon key={l.color} points={l.points} fill={l.color} fillOpacity="0.85" />
                  ))}
                  <line
                    x1={markX}
                    x2={markX}
                    y1="0"
                    y2={CHART_H}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    vectorEffect="non-scaling-stroke"
                    className="stroke-gray-900"
                  />
                </svg>
                <span className="absolute left-0 top-0 pointer-events-none text-[11px] text-gray-500">
                  100%
                </span>
              </div>
              <div className="flex justify-between text-[11px] text-gray-500 tabular-nums">
                <span>TGE</span>
                <span>12</span>
                <span>24</span>
                <span>36</span>
                <span>48</span>
              </div>
              <div role="tablist" aria-label="Milestone" className="flex flex-wrap gap-2">
                {MILESTONES.map((m) => {
                  const on = mark === m;
                  return (
                    <button
                      key={m}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => setMark(m)}
                      className={`h-[34px] px-3.5 rounded-full border text-[13px] font-semibold cursor-pointer transition-colors ${
                        on
                          ? "bg-black text-white border-black"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {m ? `Month ${m}` : "TGE"}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex-[1_1_300px] min-w-0 flex flex-col gap-3.5 p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <span className="text-[13px] text-gray-500">
                {mark ? `Unlocked by month ${mark}` : "Unlocked at TGE"}
              </span>
              <span className="flex flex-col">
                <span className="text-3xl font-bold tracking-tight tabular-nums">{markPct}</span>
                <span className="text-[13px] text-gray-600 tabular-nums">{fmt(markTotal)} ALLOX unlocked</span>
              </span>
              <span className="h-2 rounded-full bg-gray-200 overflow-hidden">
                <span className="block h-full bg-gray-900 transition-[width] duration-300" style={{ width: markPct }} />
              </span>
              <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
                {TRANCHES.map((t) => {
                  const u = unlockedAt(t, mark);
                  return (
                    <li key={t.name} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-3 text-[13px]">
                      <span className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-[3px]" style={{ background: t.color }} />
                        {t.name}
                      </span>
                      <span className="tabular-nums pl-[18px] sm:pl-0">
                        <span className="font-semibold">{fmt(u)}</span>{" "}
                        <span className="text-gray-500">· {Math.round((u / trancheAmount(t)) * 100)}% of tranche</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </GlassCard>

          {/* CTA */}
          <div className="mt-[72px] px-8 md:px-10 py-9 rounded-3xl bg-black text-white flex flex-wrap justify-between items-center gap-6">
            <span className="flex flex-col gap-1.5">
              <span className="text-2xl font-bold tracking-tight">Want the full picture?</span>
              <span className="text-white/70">
                Launch the app and see how AlloX builds narrative portfolios on chain.
              </span>
            </span>
            <Link
              to="https://app.allox.ai/"
              target="_blank"
              rel="noreferrer"
              className="h-11 px-5 rounded-xl bg-white text-black text-sm font-semibold flex items-center hover:opacity-90 transition-opacity"
            >
              Launch App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
