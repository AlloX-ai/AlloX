import { useState } from 'react';
import React from 'react';
import { ChevronDown, ChevronUp, Shuffle, Users, Shield, Clock, Globe, ZoomIn, X } from 'lucide-react';
import { Navbar } from '../components/Navbar';

const tasks = [
  {
    title: 'Connect Binance Wallet with AlloX',
    description: 'Connect wallet on https://www.allox.ai/ with Binance Wallet Extension or Binance Wallet and sign on-chain message. Build Portfolio with Binance Wallet Extension on BNB. Please click "Complete" before "Verify".',
    mechanism: 'Lucky Draw',
    capWinners: '20,000',
    rewardPerUser: '35',
  },
  {
    title: 'Build Portfolio on AlloX',
    description: 'Any USD value/volume will qualify (no minimum). Please click "Complete" before "Verify".',
    mechanism: 'Lucky Draw',
    capWinners: '20,000',
    rewardPerUser: '100',
  },
  {
    title: 'Sign in to AlloX daily for 14 Days',
    description: 'Sign in to AlloX for any 14 days within the campaign period. Sign on-chain message on each of those days. Check-ins do not need to be consecutive. 0.001 USD per transaction.\n\nNote: Clicking this task will open the AlloX dApp. Once inside, tap the "Daily Bonus" button and complete your daily sign-in — this is what counts toward your 14 days. Please click "Complete" before "Verify".',
    mechanism: 'Equal Split',
    capWinners: '10,000',
    rewardPerUser: '310',
  },
  {
    title: 'Reach $20 Portfolio Volume',
    description: 'Create portfolio on the AlloX dApp using Binance Wallet and reach a cumulative portfolio volume milestone minimum $20 on BNB Chain.\n\nEligible Portfolio tokens: BNB, CAKE, BTCB, ETH, LINK, UNI, ASTER\n\nPlease click "Complete" before "Verify".',
    mechanism: 'Equal Split',
    capWinners: '8,000',
    rewardPerUser: '350',
  },
  {
    title: 'Reach $5,000 Portfolio Volume',
    description: 'Create portfolios on the AlloX dApp using Binance Wallet and reach a cumulative portfolio volume milestone.\n\nEligible Portfolio tokens: BNB, CAKE, BTCB, ETH, LINK, UNI, ASTER\n\nPlease click "Complete" before "Verify".',
    mechanism: 'Equal Split',
    capWinners: '200',
    rewardPerUser: '7,000',
  },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'What tasks are available in this campaign?',
    a: 'There are five tasks: Connect Binance Wallet with AlloX, Build Portfolio on AlloX, Sign in to AlloX daily for 14 days, Reach $20 Portfolio Volume, and Reach $5,000 Portfolio Volume. Each task has its own reward pool and winner cap.',
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
    a: 'Rewards will be claimable directly within Binance Wallet after the campaign ends on June 10, 2026.',
  },
  {
    q: 'How do I get started with AlloX using Binance Wallet?',
    a: (
      <div className="space-y-4">
        <p>AlloX is an AI-powered platform that lets you invest in crypto market themes through diversified portfolios that execute directly on BNB Chain. Here&apos;s how to get started:</p>
        <ol className="space-y-4">
          {[
            {
              step: 1,
              text: 'Go to allox.ai and click Connect Wallet. Select Binance Wallet and confirm the connection. Make sure your Binance Wallet is set to BNB Chain before connecting.',
            },
            {
              step: 2,
              text: 'Click "Build Quick Portfolio" on the home screen. Choose BNB Chain, select a market narrative (AI, DeFi, Gaming, Memecoins, RWA, etc.), enter your investment amount, and pick your risk tolerance. Click Generate.',
            },
            {
              step: 3,
              text: 'Review your AI-generated portfolio. AlloX builds a basket of tokens matching your theme and risk level. Select your payment token (BNB, USDT, or USDC) and click Confirm & Execute.',
            },
            {
              step: 4,
              text: 'Approve the transactions in Binance Wallet. Each token swap is processed one by one. Confirm each transaction in your wallet popup.',
            },
            {
              step: 5,
              text: "You're live on-chain. Once all transactions are confirmed, your tokens land directly in your Binance Wallet. AlloX never holds your funds at any point.",
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
  'Australia', 'Brazil', 'Canada', 'Cuba', 'Crimea Region', 'Cyprus', 'Iran', 'Japan',
  'New Zealand', 'Netherlands', 'North Korea', 'Russia', 'Singapore', 'Syria',
  'United States of America and its territories (American Samoa, Guam, Puerto Rico, the Northern Mariana Islands, the U.S. Virgin Islands)',
  'Any non-government controlled areas of Ukraine',
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
        {open
          ? <ChevronUp size={18} className="text-gray-500 flex-shrink-0" />
          : <ChevronDown size={18} className="text-gray-500 flex-shrink-0" />
        }
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
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${
      isLucky ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
    }`}>
      {isLucky ? <Shuffle size={12} /> : <Users size={12} />}
      {mechanism}
    </span>
  );
}

const TUTORIAL_STEPS = [
  { title: "Connect your Binance Wallet",        desc: "Open app.allox.ai and connect your Binance Wallet. Make sure you're on the BNB Chain network." },
  { title: "Open the Binance Campaign",          desc: "Click the Binance Campaign card on the home screen." },
  { title: "Choose amount & payment token",      desc: "Choose your investment amount and select which token you want to pay with (USDT, USDC, or BNB). For this example we'll use $5 paid with USDT." },
  { title: "Generate your portfolio",            desc: "Click Generate. Your portfolio will include 3 randomly selected assets from the pool (BNB, CAKE, BTCB, ETH, LINK, UNI, ASTER)." },
  { title: "Review & confirm",                   desc: "Review your portfolio — allocation, estimated tokens, price impact, and slippage. Click Shuffle for a different mix, or Confirm & Execute when ready." },
  { title: "Approve swaps in Binance Wallet",    desc: "Confirm each swap as it pops up in Binance Wallet. One confirmation per token (3 swaps). Wait for each to process before the next starts." },
  { title: "Portfolio created!",              desc: "Once all swaps show Confirmed, your portfolio is live on BNB Chain and your volume counts toward the campaign." },
];

function TutorialModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const current = TUTORIAL_STEPS[step];
  const isLast = step === TUTORIAL_STEPS.length - 1;
  const currentImage = `https://cdn.allox.ai/allox/tutorial/tutorial${step + 1}.png`;
  const currentLargeImage = `https://cdn.allox.ai/allox/tutorial/tutorial${step + 1}large.png`;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden flex flex-col">

        {/* Header — fixed height so title wrapping doesn't resize modal */}
        <div className="px-6 pt-6 pb-5 flex items-center justify-between border-b border-gray-100" style={{ minHeight: 88 }}>
          <div className="flex-1 min-w-0 pr-3">
            <p className="text-xs font-bold text-black uppercase tracking-wide mb-1">Tutorial · Step {step + 1} of {TUTORIAL_STEPS.length}</p>
            <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2">{current.title}</h3>
          </div>
          <button onClick={onClose} className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer" aria-label="Close tutorial modal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-orange-500 transition-all duration-300"
            style={{ width: `${((step + 1) / TUTORIAL_STEPS.length) * 100}%` }}
          />
        </div>

          {/* Image placeholder */}
          <div className="bg-gray-50 border-b border-gray-100 relative overflow-hidden" style={{ height: 300 }}>
            <button
              type="button"
              onClick={() => setZoomedImage(currentLargeImage)}
              className="group relative w-full h-full cursor-zoom-in"
              aria-label={`Open large tutorial image ${step + 1}`}
            >
              <img
                src={currentImage}
                alt={`Tutorial step ${step + 1}`}
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-white/20 border border-white/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <ZoomIn size={22} />
                </span>
              </span>
              <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/60 border border-white/30 text-white flex items-center justify-center pointer-events-none">
                <ZoomIn size={16} />
              </span>
            </button>
          </div>

          {/* Description — fixed height to prevent modal resizing between steps */}
          <div className="px-6 py-5 overflow-hidden" style={{ height: 140 }}>
            <p className="text-base text-gray-700 leading-relaxed">{current.desc}</p>
            {isLast && (
              <div className="mt-3 p-2.5 bg-amber-50 border border-amber-200/60 rounded-xl text-xs text-amber-800 flex items-start gap-1.5">
                <span>Remember: click <strong>"Complete"</strong> before <strong>"Verify"</strong> in Binance Wallet.</span>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="px-6 pb-6 flex gap-3">
            <button
              onClick={() => setStep(s => s - 1)}
              disabled={step === 0}
              className="cursor-pointer flex-1 py-3 rounded-xl border border-gray-200 text-base font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-30 transition-colors"
            >
              ← Back
            </button>
            {isLast ? (
              <button onClick={onClose} className=" cursor-pointer flex-1 py-3 rounded-xl bg-black text-white text-base font-semibold hover:bg-gray-800 transition-colors">
                Done ✓
              </button>
            ) : (
              <button onClick={() => setStep(s => s + 1)} className=" cursor-pointer flex-1 py-3  rounded-xl bg-black hover:bg-gray-800 text-white text-base font-semibold transition-colors">
                Next →
              </button>
            )}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 pb-5">
            {TUTORIAL_STEPS.map((_, i) => (
              <button key={i} onClick={() => setStep(i)} className={`rounded-full transition-all ${i === step ? 'w-5 h-2 bg-black' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </div>

      {zoomedImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close large tutorial image"
          >
            <X size={20} />
          </button>
          <img
            src={zoomedImage}
            alt={`Large tutorial step ${step + 1}`}
            className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export function CampaignRulesPage() {
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <div className="min-h-screen bg-pattern">
      <Navbar />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-[900px] mx-auto space-y-8">

          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-400 via-orange-500 to-orange-600 p-8 shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-12 -mb-12" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <Shield size={12} />
                Official Campaign Rules
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                AlloX x Binance Wallet Campaign
              </h1>
              <p className="text-white/90 text-base max-w-xl">
                Complete portfolio tasks on BNB Chain using Binance Wallet and earn ALLOX token rewards through Lucky Draw and Equal Split distributions.
              </p>
            </div>
          </div>

          {/* Activity Period */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock size={20} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Activity Period</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200/60 rounded-2xl p-4">
                <div className="text-xs font-semibold text-green-600 mb-1 uppercase tracking-wide">Start</div>
                <div className="text-gray-900 font-bold">2026-06-15</div>
                <div className="text-gray-600 text-sm">11:00 AM UTC</div>
              </div>
              <div className="bg-red-50 border border-red-200/60 rounded-2xl p-4">
                <div className="text-xs font-semibold text-red-600 mb-1 uppercase tracking-wide">End</div>
                <div className="text-gray-900 font-bold">2026-07-15</div>
                <div className="text-gray-600 text-sm">11:00 AM UTC</div>
              </div>
            </div>
          </div>

          {/* Tasks Overview */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Tasks</h2>
            <p className="text-gray-500 text-sm mb-5">Complete any of the following tasks to qualify for rewards. Each task has its own reward pool and mechanism.</p>
            <ul className="space-y-3">
              {tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed font-medium">{task.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Task & Reward Distribution Table */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-gray-900">Tasks & Reward Distribution</h2>
              <button
                onClick={() => setShowTutorial(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black hover:bg-gray-800 border border-black text-white text-xs font-semibold transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                How to Build a Portfolio
              </button>
            </div>
            <p className="text-gray-500 text-sm mb-5">All tasks are Product Tasks. dApp URL: <span className="font-medium text-black">https://www.allox.ai/</span></p>


            {/* Mobile: Cards */}
            <div className="md:hidden space-y-4">
              {tasks.map((task, i) => (
                <div key={i} className="border border-gray-200/60 rounded-2xl p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-gray-900 text-sm">{task.title}</span>
                    <MechanismBadge mechanism={task.mechanism} />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">{task.description}</p>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-500 mb-0.5">Cap Winners</div>
                      <div className="font-bold text-gray-900">{task.capWinners}</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-3">
                      <div className="text-xs text-gray-500 mb-0.5">Tokens / User</div>
                      <div className="font-bold text-black">{task.rewardPerUser} ALLOX</div>
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
                      <td className="py-4 px-3 font-bold text-black align-top">{task.rewardPerUser} ALLOX</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-3">
              <div className="p-4 bg-blue-50 border border-blue-200/60 rounded-2xl text-sm text-blue-800">
                Each task is independent. You can qualify for multiple tasks and earn rewards from each.
              </div>
              <div className="p-4 bg-amber-50 border border-amber-200/60 rounded-2xl text-sm text-amber-800 flex items-start gap-2">
                <span className="text-base leading-none mt-0.5">⚠️</span>
                <span>For all tasks, please click <strong>"Complete"</strong> before clicking <strong>"Verify"</strong> in the Binance Wallet task interface.</span>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200/60 rounded-2xl text-sm text-gray-700 flex items-start gap-2">
                <span className="text-base leading-none mt-0.5">💡</span>
                <span><strong>Daily Sign-in task:</strong> Clicking the task will open the AlloX dApp. Once inside, tap the <strong>"Daily Bonus"</strong> button and complete your daily sign-in. This is what counts toward your 14 days — check-ins do not need to be consecutive.</span>
              </div>
            </div>
          </div>

          {/* Rewards Distribution */}
          <div className="glass-card p-6">
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
                "Each task is capped — once the winner limit is reached, new participants are no longer eligible for that task's reward",
                'Fraudulent activity or use of multiple wallets will result in disqualification',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Terms and Conditions</h2>
            <ul className="space-y-3">
              {[
                'Participants must complete the specified task to qualify for the corresponding reward',
                'Only Binance Wallet users with verified accounts are eligible',
                'Only one entry per user per task is allowed',
                'Users with multiple entries or fraudulent behavior will be disqualified',
                "Binance Wallet's standard Terms and Conditions apply",
                'The list of excluded countries may be updated periodically due to evolving local regulations',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Geographic Restrictions */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <Globe size={20} className="text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Geographic Restrictions</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              This campaign excludes participants residing in the following countries or regions:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {excludedCountries.map((country, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-red-50 border border-red-200/60 text-red-700 text-xs font-medium rounded-lg"
                >
                  {country}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs italic">
              Please note this list is not exhaustive and may be subject to change due to evolving local rules and regulations.
            </p>
          </div>

          {/* FAQs */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>

          <div className="h-4" />
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200/50">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-gray-600">
            © 2024 AlloX Platform. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Tutorial Modal — rendered at page root so it's not clipped by any container */}
      {showTutorial && <TutorialModal onClose={() => setShowTutorial(false)} />}
    </div>
  );
}

export default TutorialModal;