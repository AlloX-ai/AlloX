import { useEffect } from "react";

export function TermsPage() {

  useEffect(()=>{
        window.scrollTo(0,0)
        document.title = 'Terms of Service'
    },[])


  return (
    <div className="min-h-screen bg-pattern">

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-600 mb-12">
            Last Updated: March 17, 2026
          </p>

          <div className="flex flex-col gap-12">
            {/* Introduction */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Welcome to AlloX. These Terms of Service ("Terms") govern your access to and use of the AlloX platform, including our website, applications, and services (collectively, the "Platform"). The Platform is operated by AlloX Foundation ("AlloX," "we," "us," or "our").
                </p>
                <p>
                  By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Platform.
                </p>
              </div>
            </section>

            {/* Service Description */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">2. Service Description</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  AlloX is an AI-powered capital allocation platform that transforms market narratives into diversified, risk-managed portfolios. The Platform provides:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI-constructed token baskets based on market narratives (Gaming, AI, RWA, DeFi, etc.)</li>
                  <li>Risk-tiered investment options (High Cap, Mid Cap, Low Cap)</li>
                  <li>Fixed investment amounts for simplified portfolio allocation</li>
                  <li>Automated rebalancing and portfolio management recommendations</li>
                  <li>Transparent allocation breakdowns and AI rationale explanations</li>
                </ul>
                <p>
                  AlloX is a non-custodial platform. You maintain full control of your digital assets at all times through your connected wallet.
                </p>
              </div>
            </section>

            {/* Eligibility */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">3. Eligibility</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  To use the Platform, you must:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 18 years old (or the age of majority in your jurisdiction)</li>
                  <li>Have the legal capacity to enter into these Terms</li>
                  <li>Not be a resident of, or located in, any jurisdiction where the use of the Platform would be illegal or restricted</li>
                  <li>Not be included on any sanctions lists or subject to financial restrictions</li>
                </ul>
                <p>
                  You represent and warrant that you meet all eligibility requirements. We reserve the right to refuse service to anyone at any time.
                </p>
              </div>
            </section>

            {/* Financial Disclaimers */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">4. Financial Disclaimers</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
                  <p className="font-bold text-yellow-900 mb-2">Important Notice</p>
                  <p className="text-sm text-yellow-800">
                    Cryptocurrency investments are highly speculative and involve substantial risk of loss. You should never invest more than you can afford to lose.
                  </p>
                </div>
                <p>
                  <strong>No Investment Advice:</strong> AlloX does not provide investment advice, financial advice, trading advice, or any other sort of advice. The Platform provides information and tools for you to make your own investment decisions.
                </p>
                <p>
                  <strong>AI Recommendations:</strong> AI-generated baskets and recommendations are based on algorithmic analysis and should not be considered as guaranteed returns or risk-free investments. Past performance does not indicate future results.
                </p>
                <p>
                  <strong>Risk of Loss:</strong> You acknowledge that trading and investing in digital assets involves significant risk. You may lose some or all of your invested capital. Market conditions can change rapidly and unpredictably.
                </p>
                <p>
                  <strong>Do Your Own Research:</strong> You are solely responsible for conducting your own due diligence and making your own investment decisions. You should consult with qualified financial advisors before making investment decisions.
                </p>
              </div>
            </section>

            {/* Wallet Connection & Security */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">5. Wallet Connection & Security</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Non-Custodial Nature:</strong> AlloX is a non-custodial platform. We never have access to your private keys, seed phrases, or digital assets. You maintain complete control of your funds at all times.
                </p>
                <p>
                  <strong>Wallet Security:</strong> You are solely responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Securing your wallet credentials, private keys, and seed phrases</li>
                  <li>Maintaining the security of your devices and internet connection</li>
                  <li>Reviewing and approving all transactions before execution</li>
                  <li>Understanding the risks associated with smart contract interactions</li>
                </ul>
                <p>
                  <strong>Transaction Approval:</strong> All transactions require explicit approval through your connected wallet. AlloX cannot execute transactions without your consent.
                </p>
                <p>
                  <strong>Lost Access:</strong> If you lose access to your wallet, we cannot recover your funds or provide access. Please backup your wallet credentials securely.
                </p>
              </div>
            </section>

            {/* AI Technology & Limitations */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">6. AI Technology & Limitations</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>AI-Powered Features:</strong> AlloX uses artificial intelligence to analyze market data, construct token baskets, and provide allocation recommendations.
                </p>
                <p>
                  <strong>No Guarantees:</strong> AI recommendations are based on historical data and algorithmic analysis. They do not guarantee future performance, returns, or outcomes.
                </p>
                <p>
                  <strong>Potential Errors:</strong> While we strive for accuracy, AI systems may produce errors, inaccuracies, or unexpected results. You should verify all information before making investment decisions.
                </p>
                <p>
                  <strong>Continuous Learning:</strong> Our AI systems continuously learn and improve. Recommendations may change over time as market conditions evolve and our algorithms are updated.
                </p>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">7. User Responsibilities</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Platform in compliance with all applicable laws and regulations</li>
                  <li>Not use the Platform for any illegal or unauthorized purpose</li>
                  <li>Not attempt to manipulate, exploit, or abuse the Platform or its AI systems</li>
                  <li>Not interfere with or disrupt the Platform's operation</li>
                  <li>Not use the Platform to engage in money laundering, terrorism financing, or other financial crimes</li>
                  <li>Pay all applicable taxes on your cryptocurrency transactions</li>
                  <li>Comply with all tax reporting requirements in your jurisdiction</li>
                </ul>
              </div>
            </section>

            {/* Fees */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">8. Fees</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Platform Fees:</strong> AlloX may charge fees for certain services. All fees will be clearly disclosed before you confirm any transaction.
                </p>
                <p>
                  <strong>Network Fees:</strong> You are responsible for paying all blockchain network fees (gas fees) associated with your transactions. Network fees are paid directly to blockchain validators, not to AlloX.
                </p>
                <p>
                  <strong>Third-Party Fees:</strong> Third-party services (DEXs, bridges, protocols) may charge their own fees. These fees are outside of AlloX's control.
                </p>
                <p>
                  <strong>Fee Changes:</strong> We reserve the right to modify our fee structure at any time. Changes will be communicated in advance when possible.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">9. Intellectual Property</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Platform, including all content, features, functionality, AI algorithms, and design, is owned by AlloX Foundation and protected by intellectual property laws.
                </p>
                <p>
                  You may not copy, modify, distribute, sell, or lease any part of the Platform without our explicit written permission.
                </p>
              </div>
            </section>

            {/* Disclaimers */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">10. Disclaimers</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="uppercase font-bold">
                  THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p>
                  We disclaim all warranties, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Accuracy, reliability, or completeness of information</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Security from unauthorized access or cyber attacks</li>
                  <li>Compatibility with your devices or wallet software</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">11. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="uppercase font-bold">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALLOX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
                </p>
                <p>
                  This includes, but is not limited to, losses resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Investment losses or poor market performance</li>
                  <li>Smart contract vulnerabilities or exploits</li>
                  <li>Blockchain network failures or congestion</li>
                  <li>Wallet security breaches or lost private keys</li>
                  <li>AI errors, inaccuracies, or unexpected recommendations</li>
                  <li>Third-party protocol failures or hacks</li>
                  <li>Regulatory changes or legal restrictions</li>
                </ul>
              </div>
            </section>

            {/* Indemnification */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">12. Indemnification</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  You agree to indemnify, defend, and hold harmless AlloX, its affiliates, and their respective officers, directors, employees, and agents from any claims, losses, damages, liabilities, costs, and expenses arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use or misuse of the Platform</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Your investment decisions and trading activities</li>
                  <li>Any disputes with other users or third parties</li>
                </ul>
              </div>
            </section>

            {/* Modifications */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">13. Modifications to Terms</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on the Platform with a new "Last Updated" date.
                </p>
                <p>
                  Your continued use of the Platform after changes are posted constitutes your acceptance of the modified Terms.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">14. Termination</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We reserve the right to suspend or terminate your access to the Platform at any time, with or without notice, for any reason, including violation of these Terms.
                </p>
                <p>
                  You may stop using the Platform at any time. Since the Platform is non-custodial, you retain access to your funds through your wallet regardless of Platform access.
                </p>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">15. Dispute Resolution</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Informal Resolution:</strong> Before filing a formal claim, you agree to contact us at legal@allox.ai to attempt to resolve the dispute informally.
                </p>
                <p>
                  <strong>Arbitration:</strong> Any disputes that cannot be resolved informally shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
                <p>
                  <strong>Class Action Waiver:</strong> You agree to resolve disputes on an individual basis and waive your right to participate in class actions or representative proceedings.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">16. Governing Law</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where AlloX Foundation is organized, without regard to conflict of law principles.
                </p>
              </div>
            </section>

            {/* Severability */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">17. Severability</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
              </div>
            </section>

            {/* Contact */}
             <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4 text-black">18. Activity Terms & Rewards</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Disqualification Rights:</strong> AlloX reserves the right to disqualify a user's reward eligibility if AlloX determines that the user has breached the AlloX Terms of Use, tampered with AlloX program code, or interfered with the operation of AlloX program code with other software.
                </p>
                <p>
                  <strong>Program Modifications:</strong> AlloX reserves the right at any time in its sole and absolute discretion to determine and/or amend or vary these Activity Terms without prior notice, including but not limited to canceling, extending, terminating or suspending the activities, its eligibility terms and criteria, the selection and number of winners, and the timing of any act to be done, and all users shall be bound by these amendments.
                </p>
                <p>
                  <strong>Reward Value Variability:</strong> The value of Gems and Points can change based on multiple factors including but not limited to market conditions, token economics, and platform participation levels.
                </p>
                <p>
                  <strong>Vesting Terms:</strong> Future rewards may be subject to cliff and vesting periods. Users will be notified of any applicable vesting schedules before claiming rewards.
                </p>
              </div>
            </section>
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">19. Contact Information</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you have questions about these Terms, please contact us at:
                </p>
                <p className="font-medium">
                  Email: contact@allox.ai<br />
                  Website: allox.ai
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

    
    </div>
  );
}
