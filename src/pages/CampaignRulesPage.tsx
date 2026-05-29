import { useState } from "react";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Navbar } from "../components/Navbar";

const tiers = [
  {
    tier: "Tier 1",
    volume: "$25 USD",
    pool: "1,500,000 ALLOX",
    winners: "3,000 users",
    reward: "500 ALLOX",
  },
  {
    tier: "Tier 2",
    volume: "$100 USD",
    pool: "1,750,000 ALLOX",
    winners: "2,500 users",
    reward: "700 ALLOX",
  },
  {
    tier: "Tier 3",
    volume: "$500 USD",
    pool: "2,000,000 ALLOX",
    winners: "2,500 users",
    reward: "800 ALLOX",
  },
  {
    tier: "Tier 4",
    volume: "$1,000 USD",
    pool: "2,250,000 ALLOX",
    winners: "2,250 users",
    reward: "1000 ALLOX",
  },
  {
    tier: "Tier 5",
    volume: "$5,000 USD",
    pool: "2,500,000 ALLOX",
    winners: "2,000 users",
    reward: "1250 ALLOX",
  },
];

const faqs = [
  {
    q: "What is the campaign prize?",
    a: "A total of 10,000,000 ALLOX tokens (worth approximately $300,000 USD) will be distributed across four reward tiers, with up to 2,500,000 ALLOX ($75,000) available per tier.",
  },
  {
    q: "How do the tiers work?",
    a: "There are four independent tiers based on cumulative swap volume: $100, $500, $1,000, and $5,000. Each tier has its own reward pool and a cap of 5,000 winners.",
  },
  {
    q: "How much will I earn per tier?",
    a: "Each qualifying winner receives 500 ALLOX per tier.",
  },
  {
    q: "Does my portfolio volume need to happen in a single transaction?",
    a: "No. Your cumulative portfolio volume across multiple transactions during the campaign period counts toward each tier threshold.",
  },
  {
    q: "Who is eligible to participate?",
    a: "Only Binance Wallet (Keyless) users with verified accounts are eligible.",
  },
  {
    q: "Is there a limit on the number of winners?",
    a: "Yes. Each tier is capped at 5,000 winners and closes on a first-come, first-served basis once full. Act early to secure your spot.",
  },
  {
    q: "Can I participate with multiple wallets?",
    a: "No. Participants using multiple wallets or engaging in fraudulent behavior will be disqualified.",
  },
  {
    q: "What chain do I need to create a portfolio on?",
    a: "All portfolios must be created on BNB Chain using Binance Wallet.",
  },
  {
    q: "When and how will I receive my rewards?",
    a: "Rewards will be claimable directly within Binance Wallet after ALLOX TGE.",
  },
  {
    q: "How are winners determined?",
    a: "Winners are selected through a lucky draw mechanism. All users who complete the required swap volume for a tier AND complete the social task will be entered into a random draw. Up to 5,000 winners will be selected per tier at the end of the campaign period.",
  },
  {
    q: "How do I create a portfolio using AlloX and Binance Wallet?",
    a: (
      <div className="space-y-4">
        <p>
          AlloX is an AI-powered platform that lets you invest in crypto market
          themes — like AI, DeFi, Memecoins, RWA, and more — through diversified
          portfolios that execute directly on BNB Chain. Here&apos;s how to get
          started:
        </p>
        <ol className="space-y-4">
          {[
            {
              step: 1,
              text: "Go to app.allox.ai and click Connect Wallet in the top right corner. Select Binance Wallet and confirm the connection. Make sure your Binance Wallet is set to BNB Chain before connecting.",
            },
            {
              step: 2,
              text: 'Click "Build Quick Portfolio" on the home screen. The builder will ask you four quick questions: the blockchain (select BNB Chain), the market narrative you want exposure to (AI, DeFi, Gaming, Memecoins, RWA, and more), your investment amount, and your risk tolerance (Conservative, Balanced, or Aggressive). Click Generate.',
            },
            {
              step: 3,
              text: "Review your AI-generated portfolio. AlloX instantly builds a basket of 5 tokens matching your theme and risk level. Select your payment token (BNB, USDT, or USDC) and click Confirm & Execute.",
            },
            {
              step: 4,
              text: "Approve the transactions in Binance Wallet. AlloX processes each token swap one by one. Confirm each transaction in your Binance Wallet popup. If you want to skip a specific token, simply cancel that individual transaction — AlloX will skip it and continue with the rest automatically.",
            },
            {
              step: 5,
              text: "You're live on-chain. Once all transactions are confirmed, your tokens land directly in your Binance Wallet. AlloX never holds your funds at any point. Each swap is fully verifiable on BscScan via its on-chain transaction hash.",
            },
          ].map(({ step, text }) => (
            <li key={step} className="flex items-start gap-4">
              <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">{step}</span>
              </div>
              <span className="leading-relaxed">{text}</span>
            </li>
          ))}
        </ol>
      </div>
    ),
  },
];

const excludedCountries = [
  "Australia",
  "Brazil",
  "Canada",
  "Cuba",
  "Crimea Region",
  "Cyprus",
  "Iran",
  "Japan",
  "New Zealand",
  "Netherlands",
  "North Korea",
  "Russia",
  "Singapore",
  "Syria",
  "United States of America and its territories (American Samoa, Guam, Puerto Rico, the Northern Mariana Islands, the U.S. Virgin Islands)",
  "Any non-government controlled areas of Ukraine",
];

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200/60 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/60 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-6">{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-gray-500 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100">
          <div className="pt-4">{a}</div>
        </div>
      )}
    </div>
  );
}

export function CampaignRulesPage() {
  return (
    <div className="min-h-screen bg-pattern">
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black">
            Campaign Rules
          </h1>
          <p className="text-lg text-gray-600 mb-4">AlloX | Binance Wallet</p>
          <p className="text-gray-600 mb-12 leading-relaxed">
            Complete portfolio tasks on BNB Chain using Binance Wallet to
            qualify for a share of <strong className="text-black"> 10,000,000 ALLOX tokens ($300,000)</strong>. Five
            reward tiers based on portfolio volume with 12,500 lucky draw
            winners receiving between 500 - 1,250 ALLOX tokens each. Only
            Binance Wallet (Keyless) users will be eligible.
          </p>
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-4 mb-12">
            <p className="text-sm font-semibold text-gray-900">
              <strong>Important:</strong> Only Binance Wallet (Keyless) users
              will be eligible.
            </p>
          </div>
          <div className="space-y-8">
            {/* Activity Period */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-6 text-black">
                Activity Period
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200/60 rounded-2xl p-5">
                  <div className="text-xs font-semibold text-green-600 mb-2 uppercase tracking-wider">
                    Start
                  </div>
                  <div className="text-2xl font-bold text-black">
                    2026-05-27
                  </div>
                  <div className="text-gray-600 mt-1">11:00 AM (UTC)</div>
                </div>
                <div className="bg-red-50 border border-red-200/60 rounded-2xl p-5">
                  <div className="text-xs font-semibold text-red-600 mb-2 uppercase tracking-wider">
                    End
                  </div>
                  <div className="text-2xl font-bold text-black">
                    2026-06-10
                  </div>
                  <div className="text-gray-600 mt-1">11:00 AM (UTC)</div>
                </div>
              </div>
            </section>

            {/* Mission Details */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-6 text-black">
                Mission Details
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                On-Chain Task
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  Create portfolios on BNB Chain using Binance Wallet
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  Portfolios must be created within the campaign period
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  Cumulative portfolio volume counts toward the tier threshold
                </li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">
                Social Task
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  Like and retweet the official AlloX campaign announcement post
                  on X (Twitter)
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  Social task must be completed to be eligible for the lucky
                  draw
                </li>
              </ul>
            </section>

            {/* Reward Tiers */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-2 text-black">
                Reward Tiers
              </h2>
              <p className="text-gray-500 mb-6">Lucky Draw Mechanism</p>
              <div className="overflow-x-auto -mx-2">
                <table className="w-full min-w-[760px] text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-3 text-gray-500 font-semibold whitespace-nowrap">
                        Tier
                      </th>
                      <th className="text-left py-3 px-3 text-gray-500 font-semibold whitespace-nowrap">
                        Min Portfolio Volume
                      </th>
                      <th className="text-left py-3 px-3 text-gray-500 font-semibold whitespace-nowrap">
                        Reward Pool
                      </th>
                      <th className="text-left py-3 px-3 text-gray-500 font-semibold whitespace-nowrap">
                        Max Winners
                      </th>
                      <th className="text-left py-3 px-3 text-gray-500 font-semibold whitespace-nowrap">
                        Reward per Winner
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tiers.map((t, i) => (
                      <tr
                        key={i}
                        className="hover:bg-white/50 transition-colors"
                      >
                        <td className="py-4 px-3 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 rounded-lg bg-gray-100 text-gray-800 text-xs font-bold">
                            {t.tier}
                          </span>
                        </td>
                        <td className="py-4 px-3 font-bold text-black whitespace-nowrap">
                          {t.volume}
                        </td>
                        <td className="py-4 px-3 text-gray-700 whitespace-nowrap">
                          {t.pool}
                        </td>
                        <td className="py-4 px-3 text-gray-700 whitespace-nowrap">
                          {t.winners}
                        </td>
                        <td className="py-4 px-3 font-bold text-green-600 whitespace-nowrap">
                          {t.reward}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Rewards Distribution */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-6 text-black">
                Rewards Distribution
              </h2>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0" />
                  Total of 10,000,000 ALLOX tokens distributed across all four
                  tiers
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0" />
                  Winners are selected through a lucky draw mechanism at the end
                  of the campaign period
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0" />
                  A different amount of winners will be randomly selected per
                  tier from all eligible participants
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0" />
                  Rewards will be claimable within Binance Wallet after ALLOX
                  TGE
                </li>
              </ul>
            </section>

            {/* Terms and Conditions */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-6 text-black">
                Terms and Conditions
              </h2>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                {[
                  "Participants must complete the portfolio task to qualify for each respective tier",
                  "Only Binance Wallet (Keyless) users with verified accounts are eligible",
                  "Winners will be randomly selected through a lucky draw at the end of the campaign period",
                  "Only one entry per user per tier is allowed",
                  "Users with multiple entries or fraudulent behavior will be disqualified",
                  "Binance Wallet's standard Terms and Conditions apply",
                  "The list of excluded countries may be updated periodically due to evolving local regulations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Geographic Restrictions */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4 text-black">
                Geographic Restrictions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This campaign excludes participants residing in the following
                countries or regions:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {excludedCountries.map((country, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded-lg"
                  >
                    {country}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm italic">
                Please note this list is not exhaustive and may be subject to
                change due to evolving local rules and regulations.
              </p>
            </section>

            {/* FAQs */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-6 text-black">FAQs</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}
