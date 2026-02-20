import { useParams, Link } from 'react-router';
import { GlassCard } from '../components/GlassCard';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { useEffect } from 'react';

export function BlogPostPage() {
  const { postId } = useParams();
 useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  // Mock blog post content
  const post = {
    id: postId,
    category: 'Product Update',
    title: 'AlloX Expands to Ethereum and BNB Chain',
    date: 'January 15, 2024',
    author: 'AlloX Team',
    readTime: '5 min read',
    content: `
      We're thrilled to announce that AlloX is expanding beyond Base to support Ethereum and BNB Chain, bringing intent-driven crypto execution to millions of new users across multiple networks.

      ## What This Means for Users

      With multi-chain support, you can now execute intents across three major networks without leaving the AlloX interface. Simply tell AlloX what you want to do, and our AI will automatically:

      - Detect the optimal network for your transaction
      - Handle cross-chain bridging when needed
      - Find the best execution path across DEXs on each chain
      - Present a unified confirmation flow

      ## Supported Networks

      **Ethereum Mainnet**
      Access the largest DeFi ecosystem with support for all major protocols including Uniswap, Aave, Compound, and more. Our AI optimizes gas costs and finds the best routes for your swaps.

      **BNB Chain**
      Execute transactions on BNB Chain with lower fees and access to the Binance ecosystem. Perfect for high-frequency trading and smaller transactions.

      **Base Network**
      Our original launch network continues to offer the lowest fees and fastest execution times, ideal for most DeFi operations.

      ## How It Works

      The experience remains simple. When you submit an intent like "Swap 1000 USDC to ETH", AlloX will:

      1. Check which network has your USDC
      2. Find the best DEX on that network
      3. Calculate optimal slippage and gas
      4. Present a clear action card for confirmation

      If you need to bridge assets, AlloX handles it automatically. For example, "Bridge 500 USDC to Ethereum" will select the fastest, most secure bridge and execute the transfer with one confirmation.

      ## What's Next

      This expansion is just the beginning. We're actively working on:

      - Polygon and Arbitrum integration (Q2 2024)
      - Advanced cross-chain intents (Q3 2024)
      - Automated portfolio rebalancing across chains (Q3 2024)
      - Intent batching for gas optimization (Q4 2024)

      ## Try It Now

      Multi-chain support is live for all AlloX users. Connect your wallet and start exploring DeFi across Ethereum, BNB Chain, and Base with simple conversational commands.

      We can't wait to see what you build with AlloX's expanded capabilities.
    `,
  };

  const relatedPosts = [
    {
      id: 'beta-launch',
      title: 'AlloX Beta Launch: 1,000 Early Access Spots',
      category: 'Announcement',
    },
    {
      id: 'intent-architecture',
      title: 'Understanding Intent-Based DeFi Architecture',
      category: 'Technical',
    },
    {
      id: 'base-integration',
      title: 'AlloX Launches on Base Network',
      category: 'Product Update',
    },
  ];

  return (
    <div className="min-h-screen bg-pattern">

      {/* Back Link */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Post Header */}
      <section className="pb-12 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-xs font-bold text-blue-700 mb-4">
            {post.category}
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="pb-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <GlassCard className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={idx} className="text-3xl font-bold mt-12 mb-6">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={idx} className="text-xl font-bold mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('-')) {
                  const items = paragraph.split('\n-').map(item => item.trim()).filter(Boolean);
                  return (
                    <ul key={idx} className="space-y-2 my-6 ml-4">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></span>
                          <span className="text-gray-700 leading-relaxed">{item.replace(/^- /, '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-gray-50/50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                <GlassCard hover className="p-6 h-full">
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 mb-4 inline-block">
                    {relatedPost.category}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{relatedPost.title}</h3>
                  <div className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={14} />
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

   
    </div>
  );
}
