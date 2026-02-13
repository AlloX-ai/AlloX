import { useEffect, useRef, useState } from "react";

interface Stats {
 stats: {
    totalUsers: number;
    totalTransactions: number;
    totalValueOnChain: number;
  };
}

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
  decimals?: number;
  prefix?: string;
}

function StatItem({
  end,
  suffix = "",
  label,
  decimals = 0,
  prefix = "",
}: StatItemProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);





  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepValue = end / steps;
          const stepDuration = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            if (currentStep <= steps) {
              setCount(Math.min(stepValue * currentStep, end));
            } else {
              setCount(end);
              clearInterval(timer);
            }
          }, stepDuration);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.floor(num).toLocaleString();
  };


  

  return (
    <div ref={ref} className="text-center px-6 md:px-8">
      <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
        {prefix}
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function StatsCounter() {



 const [data, setData] = useState<Stats | null>(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.allox.ai/season1/stats`,
      );
      const res: Stats = await response.json();


        setData(res)
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

    useEffect(() => {
    
  getData();
    
  }, [])



  return (
    <section className="py-16 px-6 relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative">
       {data ? (
        <div className="glass-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-gray-200/50 gap-8 md:gap-0">
            <StatItem end={Number(data?.stats?.totalUsers)}  label="Wallets" />
            <StatItem
              end={Number(data?.stats?.totalTransactions)}
              
              label="Prompts Processed"
            />
            <StatItem end={Number(data?.stats?.totalValueOnChain)} decimals={2} label="Total Volume" prefix="$" />
          </div>
        </div>
      ) : (
        <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
  </svg>
      )}
      </div>
    </section>
  );
}
