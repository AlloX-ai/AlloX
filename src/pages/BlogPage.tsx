import { Navbar } from '../components/Navbar';
import { GlassCard } from '../components/GlassCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';

export function BlogPage() {

 useEffect(()=>{
        window.scrollTo(0,0)
        document.title = 'Blog'
    },[])

  const featuredPost = {
    id: 'multi-chain-expansion',
    category: 'Product Update',
    title: 'AlloX Expands to Ethereum and BNB Chain',
    summary: 'We\'re excited to announce multi-chain support with Ethereum and BNB Chain integration, bringing intent-driven execution to millions of new users.',
    date: 'January 15, 2024',
    banner: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop',
  };

  const posts = [
    {
      id: 'beta-launch',
      category: 'Announcement',
      title: 'AlloX Beta Launch: 1,000 Early Access Spots Available',
      snippet: 'Join our beta program and be among the first to experience AI-powered crypto execution. Limited spots available.',
      date: 'January 10, 2024',
      banner: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
    },
    {
      id: 'intent-architecture',
      category: 'Technical',
      title: 'Understanding Intent-Based DeFi Architecture',
      snippet: 'A deep dive into how AlloX parses natural language intents and converts them into secure on-chain transactions.',
      date: 'January 5, 2024',
      banner: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop',
    },
    {
      id: 'security-first',
      category: 'Security',
      title: 'How AlloX Keeps Your Assets Safe',
      snippet: 'Learn about our non-custodial architecture, smart contract audits, and multi-layer security approach.',
      date: 'December 28, 2023',
      banner: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop',
    },
    {
      id: 'foundation-launch',
      category: 'Foundation',
      title: 'Introducing the AlloX Foundation',
      snippet: 'The AlloX Foundation is established to advance intent-driven DeFi through grants, research, and ecosystem support.',
      date: 'December 20, 2023',
      banner: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=300&fit=crop',
    },
    {
      id: 'base-integration',
      category: 'Product Update',
      title: 'AlloX Launches on Base Network',
      snippet: 'Our first network integration goes live on Base, bringing low-cost intent execution to the Coinbase ecosystem.',
      date: 'December 15, 2023',
      banner: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=300&fit=crop',
    },
    {
      id: 'roadmap-2024',
      category: 'Roadmap',
      title: '2024 Roadmap: What\'s Next for AlloX',
      snippet: 'Our plans for multi-chain expansion, governance token launch, and ecosystem growth in 2024.',
      date: 'December 10, 2023',
      banner: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=300&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-pattern">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Latest Announcements</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Stay updated with the latest AlloX product updates, technical insights, and ecosystem news
          </p>
        </div>
      </section>

      {/* Featured Post with Banner */}
      <section className="px-6 mb-16">
        <div className="max-w-[1200px] mx-auto">
          <Link to={`/blog/${featuredPost.id}`}>
            <GlassCard hover className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-10 md:p-12">
                  <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-xs font-bold text-blue-700 mb-4">
                    {featuredPost.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.summary}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{featuredPost.date}</span>
                    <span className="inline-flex items-center gap-1 text-black font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={featuredPost.banner} 
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </GlassCard>
          </Link>
        </div>
      </section>

      {/* All Posts with Banners */}
      <section className="px-6 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold mb-8">All Posts</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <GlassCard hover className="overflow-hidden h-full">
                  <div className="relative h-48">
                    <img 
                      src={post.banner} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.snippet}</p>
                    <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
