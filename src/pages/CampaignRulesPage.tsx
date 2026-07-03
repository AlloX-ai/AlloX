import { useState } from "react";
import React from "react";
import { ChevronDown, ChevronUp, Shuffle, Users } from "lucide-react";
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


const tasks = [
  {
    title: 'Connect Binance Wallet with AlloX',
    description: 'Connect with Binance Wallet Extension or Binance Wallet and sign on-chain message.',
    mechanism: 'Lucky Draw',
    capWinners: '20,000',
    rewardPerUser: '35',
  },
  {
    title: 'Build Portfolio on AlloX',
    description: 'Build Portfolio with Binance Wallet Extension on BNB. Any USD value/volume will qualify (no minimum). Eligible Portfolio tokens: BNB, CAKE, BTCB, ETH, LINK, UNI, ASTER',
    mechanism: 'Lucky Draw',
    capWinners: '20,000',
    rewardPerUser: '100',
  },
  {
    title: 'Claim Daily Bonus 14 times',
    description: 'Claim Daily Bonus 14 times during the 30-day campaign period. Sign on-chain message on each of those days. Check-ins do not need to be consecutive.',
    mechanism: 'Equal Split',
    capWinners: '10,000',
    rewardPerUser: '310',
  },
  {
    title: 'Reach $20 Portfolio Volume',
    description: 'Create portfolio on the AlloX dApp using Binance Wallet and reach a cumulative portfolio volume milestone minimum $20 on BNB Chain.\n\nEligible Portfolio tokens: BNB, CAKE, BTCB, ETH, LINK, UNI, ASTER',
    mechanism: 'Equal Split',
    capWinners: '8,000',
    rewardPerUser: '350',
  },
  {
    title: 'Reach $5,000 Portfolio Volume',
    description: 'Create portfolios on the AlloX dApp using Binance Wallet and reach a cumulative portfolio volume milestone minimum $5,000 on BNB Chain.\n\nEligible Portfolio tokens: BNB, CAKE, BTCB, ETH, LINK, UNI, ASTER',
    mechanism: 'Equal Split',
    capWinners: '200',
    rewardPerUser: '7,000',
  },
];


const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'What tasks are available in this campaign?',
    a: 'There are five tasks: Connect Binance Wallet with AlloX, Build Portfolio on AlloX, claim Daily Bonus on AlloX daily for 14 days, Reach $20 Portfolio Volume, and Reach $5,000 Portfolio Volume. Each task has its own reward pool and winner cap.',
  },
  {
    q: 'What is the difference between Lucky Draw and Equal Split?',
    a: 'Lucky Draw means winners are selected randomly from all eligible participants who completed the task. Equal Split means the reward pool is divided equally among all qualifying users up to the winner cap.',
  },
  {
    q: 'Which tokens are eligible for portfolio tasks?',
    a: 'Eligible portfolio tokens are: BNB, CAKE, BTCB, ETH, LINK, UNI, and ASTER on BNB Chain.',
  },
  {
    q: 'Does portfolio volume need to happen in a single transaction?',
    a: 'No. Cumulative portfolio volume across multiple transactions during the campaign period counts toward the volume milestones.',
  },
  {
    q: 'Do I need a minimum amount to build a portfolio?',
    a: 'For the Build Portfolio task, any USD value/volume qualifies with no minimum required. The $20 and $5,000 volume tasks have their respective minimums.',
  },
  {
    q: 'Who is eligible to participate?',
    a: 'Only Binance Wallet users with verified accounts are eligible. Each user can only qualify once per task.',
  },
  {
    q: 'Can I participate with multiple wallets?',
    a: 'No. Participants using multiple wallets or engaging in fraudulent behavior will be disqualified.',
  },
  {
    q: 'What chain do I need to use?',
    a: 'All portfolio activities must be completed on BNB Chain using Binance Wallet.',
  },
  {
    q: 'When and how will I receive my rewards?',
    a: 'Rewards will be claimable directly within Binance Wallet after AlloX TGE.',
  },
  // {
  //   q: 'How do I get started with AlloX using Binance Wallet?',
  //   a: (
  //     <div className="space-y-4">
  //       <p>AlloX is an AI-powered platform that lets you invest in crypto market themes through diversified portfolios that execute directly on BNB Chain. Here&apos;s how to get started:</p>
  //       <ol className="space-y-4">
  //         {[
  //           {
  //             step: 1,
  //             text: 'Go to allox.ai and click Connect Wallet. Select Binance Wallet and confirm the connection. Make sure your Binance Wallet is set to BNB Chain before connecting.',
  //           },
  //           {
  //             step: 2,
  //             text: 'Click "Build Quick Portfolio" on the home screen. Choose BNB Chain, select a market narrative (AI, DeFi, Gaming, Memecoins, RWA, etc.), enter your investment amount, and pick your risk tolerance. Click Generate.',
  //           },
  //           {
  //             step: 3,
  //             text: 'Review your AI-generated portfolio. AlloX builds a basket of tokens matching your theme and risk level. Select your payment token (BNB, USDT, or USDC) and click Confirm & Execute.',
  //           },
  //           {
  //             step: 4,
  //             text: 'Approve the transactions in Binance Wallet. Each token swap is processed one by one. Confirm each transaction in your wallet popup.',
  //           },
  //           {
  //             step: 5,
  //             text: "You're live on-chain. Once all transactions are confirmed, your tokens land directly in your Binance Wallet. AlloX never holds your funds at any point.",
  //           },
  //         ].map(({ step, text }) => (
  //           <li key={step} className="flex items-start gap-4">
  //             <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
  //               <span className="text-white text-xs font-bold">{step}</span>
  //             </div>
  //             <span className="leading-relaxed">{text}</span>
  //           </li>
  //         ))}
  //       </ol>
  //     </div>
  //   ),
  // },
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

function MechanismBadge({ mechanism }: { mechanism: string }) {
  const isLucky = mechanism === 'Lucky Draw';
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${isLucky ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
      }`}>
      {isLucky ? <Shuffle size={12} /> : <Users size={12} />}
      {mechanism}
    </span>
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
          <p className="text-gray-600 mb-6 leading-relaxed">
            Complete portfolio tasks on BNB Chain using Binance Wallet to
            qualify for a share of <strong className="text-black"> 10,000,000 ALLOX tokens</strong> through Lucky Draw and Equal Split distributions.
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
                    2026-07-02
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200/60 rounded-2xl p-5">
                  <div className="text-xs font-semibold text-red-600 mb-2 uppercase tracking-wider">
                    End
                  </div>
                  <div className="text-2xl font-bold text-black">
                    2026-08-01
                  </div>
                </div>
              </div>
            </section>

            {/* Mission Details */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold text-black">
                Mission Details
              </h2>
              <p className="my-6">Complete any of the following tasks to qualify for rewards. Each task has its own reward pool and mechanism.</p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  Connect Binance Wallet with AlloX
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  Build Portfolio on AlloX

                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  Claim Daily Bonus 14 times during the 30-day campaign

                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  Reach $20 Portfolio Volume


                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">5</span>
                  </div>
                  Reach $5,000 Portfolio Volume


                </li>
              </ul>

            </section>

            {/* Reward Tiers */}
            <section className="glass-card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Tasks & Reward Distribution</h2>
              <p className="text-gray-500 text-sm mb-5">All tasks are Product Tasks. dApp URL: <a href="https://app.allox.ai/" target="_blank" className="font-medium text-orange-600">https://app.allox.ai/</a></p>

              {/* Mobile: Cards */}
              <div className="md:hidden space-y-4">
                {tasks.map((task, i) => (
                  <div key={i} className="border border-gray-200/60 rounded-2xl p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2 flex-col lg:flex-row">
                      <span className="font-semibold text-gray-900 text-sm">{task.title}</span>
                      <MechanismBadge mechanism={task.mechanism} />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">{task.description}</p>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-500 mb-0.5">Cap Winners</div>
                        <div className="font-bold text-gray-900 text-sm lg:text-base">{task.capWinners}</div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-3">
                        <div className="text-xs text-gray-500 mb-0.5">Tokens / User</div>
                        <div className="font-bold text-orange-700 text-sm lg:text-base">{task.rewardPerUser} ALLOX</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Table */}
              <div className="hidden md:block overflow-x-auto -mx-2">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-3 text-gray-500 font-semibold">Task</th>
                      <th className="text-left py-3 px-3 text-gray-500 font-semibold">Description</th>
                      <th className="text-left py-3 px-3 text-gray-500 font-semibold">Mechanism</th>
                      <th className="text-left py-3 px-3 text-gray-500 font-semibold">Cap Winners</th>
                      <th className="text-left py-3 px-3 text-gray-500 font-semibold">Tokens / User</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tasks.map((task, i) => (
                      <tr key={i} className="hover:bg-white/60 transition-colors">
                        <td className="py-4 px-3 font-semibold text-gray-900 align-top max-w-[180px]">{task.title}</td>
                        <td className="py-4 px-3 text-gray-600 text-xs leading-relaxed align-top max-w-[260px] whitespace-pre-line">{task.description}</td>
                        <td className="py-4 px-3 align-top">
                          <MechanismBadge mechanism={task.mechanism} />
                        </td>
                        <td className="py-4 px-3 font-semibold text-gray-900 align-top">{task.capWinners}</td>
                        <td className="py-4 px-3 font-bold text-orange-600 align-top">{task.rewardPerUser} ALLOX</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-orange-50 border border-orange-200/60 rounded-2xl text-sm text-orange-800">
                For all tasks, please click <b>"Complete"</b> before clicking <b>"Verify"</b> in the Binance Wallet task interface.
              </div>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200/60 rounded-2xl text-sm text-blue-800">
                <b>Daily Bonus task:</b> Clicking the task will open the AlloX dApp. Once inside, tap the <b>"Daily Bonus"</b> button and complete your daily sign-in.
              </div>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200/60 rounded-2xl text-sm text-blue-800">
                Each task is independent. You can qualify for multiple tasks and earn rewards from each.
              </div>
            </section>
            {/* Rewards Distribution */}
            <section className="glass-card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Rewards Distribution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-purple-50 border border-purple-200/60 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shuffle size={16} className="text-purple-600" />
                    <span className="font-bold text-purple-900">Lucky Draw</span>
                  </div>
                  <p className="text-xs text-gray-700">Winners selected randomly from all eligible participants. Completing the task enters you into the draw.</p>
                </div>
                <div className="bg-blue-50 border border-blue-200/60 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={16} className="text-blue-600" />
                    <span className="font-bold text-blue-900">Equal Split</span>
                  </div>
                  <p className="text-xs text-gray-700">Reward pool divided equally among all qualifying users up to the winner cap, on a first-come, first-served basis.</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Rewards will be claimable within Binance Wallet after ALLOX TGE',
                  "Each task is capped",
                  'Fraudulent activity or use of multiple wallets will result in disqualification',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
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
                  "Only one entry per user per tier is allowed",
                  "Users with multiple entries or fraudulent behavior will be disqualified",
                  "Binance Wallet's standard Terms and Conditions apply",
                  // "The list of excluded countries may be updated periodically due to evolving local regulations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-black mt-2.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Geographic Restrictions */}
            {/* <section className="glass-card p-8">
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
            </section> */}

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
