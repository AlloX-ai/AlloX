import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';

export function PrivacyPage() {


  useEffect(()=>{
        window.scrollTo(0,0)
        document.title = 'Privacy'
    },[])

  return (
    <div className="min-h-screen bg-pattern">
      <Navbar />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-12">
            Last Updated: February 2, 2026
          </p>

          <div className="flex flex-col gap-12">
            {/* Introduction */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  AlloX Foundation ("AlloX," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Platform.
                </p>
                <p>
                  By using the AlloX Platform, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Privacy Principles */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">2. Our Privacy Principles</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="font-bold text-blue-900 mb-2">Privacy-First Design</p>
                  <p className="text-sm text-blue-800">
                    AlloX is built with privacy as a core principle. We collect only what is necessary to provide and improve our services.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Non-Custodial:</strong> We never have access to your private keys or digital assets</li>
                  <li><strong>Minimal Data Collection:</strong> We collect only essential information for Platform functionality</li>
                  <li><strong>No PII Requirements:</strong> The Platform is designed to avoid collecting personally identifiable information when possible</li>
                  <li><strong>Transparency:</strong> We clearly communicate what data we collect and why</li>
                  <li><strong>User Control:</strong> You maintain control over your data and can request deletion at any time</li>
                </ul>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">3. Information We Collect</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-bold mb-3">3.1 Wallet Information</h3>
                  <p>When you connect your wallet to the Platform:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Wallet Address:</strong> Your public blockchain address (non-sensitive, publicly available)</li>
                    <li><strong>Transaction History:</strong> On-chain transactions visible on public blockchains</li>
                    <li><strong>Token Balances:</strong> Information about tokens in your wallet (publicly available on blockchain)</li>
                    <li><strong>Network:</strong> Which blockchain networks you interact with</li>
                  </ul>
                  <p className="mt-3 text-sm italic">
                    Note: We never collect or have access to your private keys, seed phrases, or wallet passwords.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">3.2 Platform Usage Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Interaction Data:</strong> Features you use, pages you visit, time spent on Platform</li>
                    <li><strong>AI Interactions:</strong> Narratives selected, baskets viewed, investment amounts chosen</li>
                    <li><strong>Preferences:</strong> Risk tier selections, favorite narratives, UI settings</li>
                    <li><strong>Performance Data:</strong> Load times, errors encountered, feature usage patterns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">3.3 Device & Technical Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Device Information:</strong> Browser type, device type, operating system</li>
                    <li><strong>IP Address:</strong> Used for security, fraud prevention, and analytics</li>
                    <li><strong>Cookies & Local Storage:</strong> Session data, preferences, authentication tokens</li>
                    <li><strong>Log Data:</strong> Timestamps, API calls, error logs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">3.4 Communications</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Support Inquiries:</strong> If you contact us, we collect your messages and any information you provide</li>
                    <li><strong>Email (Optional):</strong> If you subscribe to updates, we collect your email address</li>
                    <li><strong>Feedback:</strong> Any feedback, suggestions, or bug reports you submit</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">3.5 What We DON'T Collect</h3>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <ul className="list-disc pl-6 space-y-1 text-sm text-green-800">
                      <li>Private keys, seed phrases, or wallet passwords</li>
                      <li>Government-issued ID or KYC documentation (unless required by law)</li>
                      <li>Social Security numbers or tax identification numbers</li>
                      <li>Banking or credit card information (we process no fiat payments)</li>
                      <li>Precise geolocation or GPS data</li>
                      <li>Biometric data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">4. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We use the collected information for the following purposes:</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold mb-1">Platform Operation & Functionality</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Connect and interact with your wallet</li>
                      <li>Display your portfolio and balances</li>
                      <li>Execute transactions you approve</li>
                      <li>Save your preferences and settings</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">AI Improvements & Personalization</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Train and improve AI basket construction algorithms</li>
                      <li>Provide relevant narrative recommendations</li>
                      <li>Optimize allocation strategies based on usage patterns</li>
                      <li>Customize user experience based on risk preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">Security & Fraud Prevention</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Detect and prevent unauthorized access</li>
                      <li>Monitor for suspicious activity or potential exploits</li>
                      <li>Protect against spam, phishing, and malicious behavior</li>
                      <li>Ensure Platform integrity and security</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">Analytics & Performance</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Analyze usage patterns and feature adoption</li>
                      <li>Monitor Platform performance and identify bugs</li>
                      <li>Measure effectiveness of UI/UX improvements</li>
                      <li>Generate aggregated, anonymized statistics</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">Communication & Support</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Respond to your inquiries and provide support</li>
                      <li>Send important Platform updates and notifications</li>
                      <li>Communicate about new features or narratives (if you opt-in)</li>
                      <li>Gather feedback to improve services</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">Legal & Compliance</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Comply with applicable laws and regulations</li>
                      <li>Respond to legal requests or court orders</li>
                      <li>Enforce our Terms of Service</li>
                      <li>Protect our rights and the rights of others</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">5. Information Sharing & Disclosure</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We do not sell, rent, or trade your personal information. We may share information only in the following limited circumstances:
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold mb-1">Service Providers</h4>
                    <p className="text-sm">
                      We work with third-party service providers who assist with Platform operations (hosting, analytics, customer support). These providers are bound by confidentiality obligations and may only use your data to perform services on our behalf.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">Blockchain Networks</h4>
                    <p className="text-sm">
                      When you execute transactions, information is recorded on public blockchains. Blockchain data is public and permanent, outside of our control.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">Legal Requirements</h4>
                    <p className="text-sm">
                      We may disclose information if required by law, court order, subpoena, or government request, or to protect our rights, property, or safety.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">Business Transfers</h4>
                    <p className="text-sm">
                      If AlloX is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">Aggregated Data</h4>
                    <p className="text-sm">
                      We may share aggregated, anonymized data that cannot be used to identify you (e.g., "30% of users prefer High Cap narratives").
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">6. Data Security</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Encryption:</strong> Data in transit is encrypted using TLS/SSL protocols</li>
                  <li><strong>Access Controls:</strong> Strict internal access policies and authentication requirements</li>
                  <li><strong>Infrastructure Security:</strong> Regular security audits and vulnerability assessments</li>
                  <li><strong>Monitoring:</strong> Continuous monitoring for suspicious activity and intrusions</li>
                  <li><strong>Data Minimization:</strong> We collect and retain only necessary data</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission or storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">7. Data Retention</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We retain your information only as long as necessary for the purposes outlined in this Privacy Policy:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Active Users:</strong> Data retained while you actively use the Platform</li>
                  <li><strong>Inactive Accounts:</strong> Usage data may be retained for analytics and AI training (anonymized when possible)</li>
                  <li><strong>Legal Obligations:</strong> Some data may be retained longer to comply with legal requirements</li>
                  <li><strong>Deletion Requests:</strong> Upon request, we will delete your data subject to legal and operational constraints</li>
                </ul>
              </div>
            </section>

            {/* Cookies & Tracking */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">8. Cookies & Tracking Technologies</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold mb-1">Essential Cookies</h4>
                    <p className="text-sm">Required for Platform functionality (session management, wallet connection state, security)</p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">Preference Cookies</h4>
                    <p className="text-sm">Remember your settings, risk tier preferences, and UI customizations</p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">Analytics Cookies</h4>
                    <p className="text-sm">Help us understand how users interact with the Platform (can be disabled)</p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-1">Performance Cookies</h4>
                    <p className="text-sm">Monitor Platform performance, load times, and error rates</p>
                  </div>
                </div>

                <p className="mt-4">
                  You can control cookies through your browser settings. Note that disabling certain cookies may limit Platform functionality.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">9. Third-Party Services</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Platform may integrate with third-party services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Wallet Providers:</strong> MetaMask, Coinbase Wallet, WalletConnect (subject to their own privacy policies)</li>
                  <li><strong>Blockchain Networks:</strong> Public blockchains where transactions are recorded</li>
                  <li><strong>Analytics Providers:</strong> Services that help us analyze Platform usage</li>
                  <li><strong>Infrastructure Providers:</strong> Hosting and cloud services</li>
                </ul>
                <p className="mt-4">
                  We are not responsible for the privacy practices of third-party services. We encourage you to review their privacy policies.
                </p>
              </div>
            </section>

            {/* Your Privacy Rights */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">10. Your Privacy Rights</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Depending on your jurisdiction, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
                  <li><strong>Portability:</strong> Request your data in a portable format</li>
                  <li><strong>Objection:</strong> Object to certain data processing activities</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at privacy@allox.ai. We will respond within 30 days.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">11. Children's Privacy</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Platform is not intended for individuals under 18 years of age. We do not knowingly collect information from children.
                </p>
                <p>
                  If we become aware that we have collected data from a child, we will take steps to delete that information promptly.
                </p>
              </div>
            </section>

            {/* International Users */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">12. International Data Transfers</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  AlloX operates globally. Your information may be transferred to and processed in countries other than your own.
                </p>
                <p>
                  We take appropriate safeguards to ensure your data receives adequate protection regardless of where it is processed.
                </p>
              </div>
            </section>

            {/* California Privacy Rights */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">13. California Privacy Rights (CCPA)</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to know if personal information is sold or shared</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to deletion of personal information</li>
                  <li>Right to non-discrimination for exercising CCPA rights</li>
                </ul>
                <p className="mt-4 font-bold">
                  Note: AlloX does not sell your personal information.
                </p>
              </div>
            </section>

            {/* GDPR Rights */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">14. European Privacy Rights (GDPR)</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Legal Basis:</strong> We process data based on consent, contractual necessity, legitimate interests, or legal obligations</li>
                  <li><strong>Data Protection Officer:</strong> Contact our DPO at contact@allox.ai</li>
                  <li><strong>Supervisory Authority:</strong> You have the right to lodge a complaint with your local data protection authority</li>
                </ul>
              </div>
            </section>

            {/* Do Not Track */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">15. Do Not Track Signals</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Some browsers support "Do Not Track" (DNT) signals. Currently, there is no industry standard for responding to DNT signals. We do not specifically respond to DNT signals at this time.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">16. Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.
                </p>
                <p>
                  Material changes will be communicated through the Platform or via email (if you have provided one). Continued use of the Platform after changes constitutes acceptance of the updated Privacy Policy.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-4">17. Contact Us</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="font-medium mb-2">AlloX Foundation</p>
                  <p className="text-sm">
                    <strong>General Contact:</strong> contact@allox.ai<br />
                    <strong>Website:</strong> allox.ai
                  </p>
                </div>
                <p className="text-sm italic">
                  We will respond to your inquiry within 30 days.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200/50">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-gray-600">
            © 2024 AlloX Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
