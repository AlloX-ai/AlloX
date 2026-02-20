import { GlassCard } from '../components/GlassCard';
import { ActionCard } from '../components/ActionCard';
import { ChatBubble } from '../components/ChatBubble';

export function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-pattern">

      <div className="pt-32 px-6 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-6xl font-bold mb-4">Design System</h1>
          <p className="text-xl text-gray-600 mb-16">
            AlloX design components and guidelines
          </p>

          {/* Typography */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-8">Typography</h2>
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-gray-500 mb-2">Display / 96px</div>
                  <div className="text-8xl tracking-tight">AlloX</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">H1 / 72px</div>
                  <h1 className="text-7xl">Heading 1</h1>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">H2 / 60px</div>
                  <h2 className="text-6xl">Heading 2</h2>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">H3 / 48px</div>
                  <h3 className="text-5xl">Heading 3</h3>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">H4 / 36px</div>
                  <h4 className="text-4xl">Heading 4</h4>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">Body Large / 20px</div>
                  <p className="text-xl">Large body text for important content</p>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">Body / 16px</div>
                  <p>Regular body text for most content</p>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">Small / 14px</div>
                  <p className="text-sm">Small text for secondary information</p>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2">Caption / 12px</div>
                  <p className="text-xs">Caption text for labels and hints</p>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* Colors */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-8">Colors</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold mb-6">Primary</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-black rounded-2xl"></div>
                    <div>
                      <div className="font-mono text-sm">Black</div>
                      <div className="text-xs text-gray-500">#000000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-2xl"></div>
                    <div>
                      <div className="font-mono text-sm">White</div>
                      <div className="text-xs text-gray-500">#FFFFFF</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-600 rounded-2xl"></div>
                    <div>
                      <div className="font-mono text-sm">Gray</div>
                      <div className="text-xs text-gray-500">#4B5563</div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold mb-6">Accents</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl"></div>
                    <div>
                      <div className="font-mono text-sm">Blue</div>
                      <div className="text-xs text-gray-500">#3B82F6</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl"></div>
                    <div>
                      <div className="font-mono text-sm">Purple</div>
                      <div className="text-xs text-gray-500">#A855F7</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl"></div>
                    <div>
                      <div className="font-mono text-sm">Green</div>
                      <div className="text-xs text-gray-500">#22C55E</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-red-500 rounded-2xl"></div>
                    <div>
                      <div className="font-mono text-sm">Red</div>
                      <div className="text-xs text-gray-500">#EF4444</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* Buttons */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-8">Buttons</h2>
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-600 mb-3">Primary Button</div>
                  <div className="flex gap-4 flex-wrap">
                    <button className="btn-primary">Primary Button</button>
                    <button className="btn-primary text-sm px-6 py-2.5">Small Primary</button>
                    <button className="btn-primary text-lg px-8 py-4">Large Primary</button>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-3">Secondary Button</div>
                  <div className="flex gap-4 flex-wrap">
                    <button className="btn-secondary">Secondary Button</button>
                    <button className="btn-secondary text-sm px-6 py-2.5">Small Secondary</button>
                    <button className="btn-secondary text-lg px-8 py-4">Large Secondary</button>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-3">States</div>
                  <div className="flex gap-4 flex-wrap">
                    <button className="btn-primary">Default</button>
                    <button className="btn-primary hover:bg-gray-800">Hover</button>
                    <button className="btn-primary opacity-50 cursor-not-allowed">Disabled</button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* Glass Cards */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-8">Glass Cards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <GlassCard className="p-8">
                <h3 className="text-xl font-bold mb-4">Standard Glass Card</h3>
                <p className="text-gray-600">
                  White glass with blur effect, subtle border, and soft shadow. Used for most content containers.
                </p>
              </GlassCard>

              <GlassCard hover className="p-8">
                <h3 className="text-xl font-bold mb-4">Hoverable Glass Card</h3>
                <p className="text-gray-600">
                  Includes hover lift animation. Used for clickable cards and interactive elements.
                </p>
              </GlassCard>
            </div>
          </section>

          {/* Inputs */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-8">Inputs & Dropdowns</h2>
            <GlassCard className="p-8">
              <div className="space-y-6 max-w-2xl">
                <div>
                  <label className="text-sm font-medium mb-2 block">Standard Input</label>
                  <input
                    type="text"
                    placeholder="Enter text..."
                    className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Large Input</label>
                  <input
                    type="text"
                    placeholder="Enter text..."
                    className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Textarea</label>
                  <textarea
                    placeholder="Enter message..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Search Input</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-4 py-3 pl-10 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                    />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* Chat Bubbles */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-8">Chat Bubbles</h2>
            <GlassCard className="p-8">
              <div className="space-y-4 max-w-2xl">
                <ChatBubble type="user">
                  <p className="text-sm">This is a user message bubble</p>
                </ChatBubble>

                <ChatBubble type="ai">
                  <p className="text-sm">This is an AI response bubble with glass morphism effect</p>
                </ChatBubble>
              </div>
            </GlassCard>
          </section>

          {/* Action Cards */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-8">Action Cards</h2>
            <GlassCard className="p-8">
              <div className="max-w-2xl">
                <ActionCard onConfirm={() => {}} onCancel={() => {}}>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">From</div>
                        <div className="font-bold text-lg">200 USDT</div>
                      </div>
                      <div className="text-2xl text-gray-400 mt-4">→</div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">To</div>
                        <div className="font-bold text-lg">0.114 ETH</div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm pt-3 border-t border-gray-200/50">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Best Route</span>
                        <span className="font-medium">Uniswap V3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Network Fee</span>
                        <span className="font-medium">~$1.20</span>
                      </div>
                    </div>
                  </div>
                </ActionCard>
              </div>
            </GlassCard>
          </section>

          {/* Tags & Badges */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-8">Tags & Badges</h2>
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-600 mb-3">Category Tags</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 rounded-full text-xs font-medium text-blue-700">
                      Product Update
                    </span>
                    <span className="px-3 py-1 bg-purple-100 rounded-full text-xs font-medium text-purple-700">
                      Technical
                    </span>
                    <span className="px-3 py-1 bg-green-100 rounded-full text-xs font-medium text-green-700">
                      Announcement
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                      Foundation
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-3">Status Badges</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 rounded-full text-xs font-medium text-green-700">
                      Live
                    </span>
                    <span className="px-3 py-1 bg-orange-100 rounded-full text-xs font-medium text-orange-700">
                      In Progress
                    </span>
                    <span className="px-3 py-1 bg-red-100 rounded-full text-xs font-medium text-red-700">
                      Deprecated
                    </span>
                    <span className="px-3 py-1 bg-blue-100 rounded-full text-xs font-medium text-blue-700">
                      Beta
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* Spacing */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-8">Spacing System</h2>
            <GlassCard className="p-8">
              <div className="space-y-4">
                <p className="text-gray-600 mb-6">8px grid system</p>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black"></div>
                  <span className="font-mono text-sm">8px (0.5rem)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-black"></div>
                  <span className="font-mono text-sm">16px (1rem)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-black"></div>
                  <span className="font-mono text-sm">24px (1.5rem)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-black"></div>
                  <span className="font-mono text-sm">32px (2rem)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black"></div>
                  <span className="font-mono text-sm">48px (3rem)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-black"></div>
                  <span className="font-mono text-sm">64px (4rem)</span>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* Border Radius */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-8">Border Radius</h2>
            <GlassCard className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="w-24 h-24 bg-black rounded-lg mb-3"></div>
                  <div className="text-sm font-medium">Small</div>
                  <div className="text-xs text-gray-500">8px</div>
                </div>
                <div>
                  <div className="w-24 h-24 bg-black rounded-xl mb-3"></div>
                  <div className="text-sm font-medium">Medium</div>
                  <div className="text-xs text-gray-500">12px</div>
                </div>
                <div>
                  <div className="w-24 h-24 bg-black rounded-2xl mb-3"></div>
                  <div className="text-sm font-medium">Large</div>
                  <div className="text-xs text-gray-500">16px</div>
                </div>
                <div>
                  <div className="w-24 h-24 bg-black rounded-3xl mb-3"></div>
                  <div className="text-sm font-medium">Extra Large</div>
                  <div className="text-xs text-gray-500">24px</div>
                </div>
              </div>
            </GlassCard>
          </section>
        </div>
      </div>

    
    </div>
  );
}
