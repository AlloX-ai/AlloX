import { useState, useEffect } from "react";

export const ComingSoon = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set target date (3 days from now for demo purposes)

        const COUNTDOWN_END_UTC = "2026-02-23T14:00:00.000+00:00";
        const endDate = new Date(COUNTDOWN_END_UTC);
        const targetDate = endDate

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;
            console.log(now, targetDate.getTime())
            if (distance > 0) {
                setCountdown({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor(
                        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                    ),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);
    console.log(countdown)
    return (
        <div className="min-h-screen bg-pattern flex flex-col items-center justify-center">
            <section className="pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto relative">
                    <div className="text-center space-y-8">
                        {/* Badge */}
                        <div className="inline-block">
                            <div className="glass-card px-4 py-2 text-xs font-medium text-gray-600 uppercase tracking-wider">
                                Bridging TradFi & DeFi
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight animate-fade-in">
                            The Future of Investing
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Launches In
                            </span>
                        </h1>

                        {/* Countdown Timer */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mt-12">
                            {/* Days */}
                            <div className="glass-card p-4 md:p-8 group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 md:mb-4">
                                    {String(countdown.days).padStart(2, "0")}
                                </div>
                                <div className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    Days
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="glass-card p-4 md:p-8 group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 md:mb-4">
                                    {String(countdown.hours).padStart(2, "0")}
                                </div>
                                <div className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    Hours
                                </div>
                            </div>

                            {/* Minutes */}
                            <div className="glass-card p-4 md:p-8 group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2 md:mb-4">
                                    {String(countdown.minutes).padStart(2, "0")}
                                </div>
                                <div className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    Minutes
                                </div>
                            </div>

                            {/* Seconds */}
                            <div className="sm:block  hidden glass-card p-4 md:p-8 group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                <div className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 md:mb-4">
                                    {String(countdown.seconds).padStart(2, "0")}
                                </div>
                                <div className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    Seconds
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}

                        {/* Beta Notice */}
                    </div>
                </div>
            </section>
        </div>
    );
};
