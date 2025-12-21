'use client';

import { useState, useEffect } from 'react';

const RenderBar = () => {
    const bars = 8;
    const initialDelay = 3;
    return (
        <div className="w-screen h-screen bg-black overflow-hidden">
            <div className="flex w-full h-full">
                {[...Array(bars)].map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 relative"
                        style={{
                            perspective: '1000px',
                        }}
                    >
                        {/* Top bar */}
                        <div
                            className="absolute top-0 left-0 right-0 h-1/2 bg-white border-b "
                            style={{
                                animation: `slideUp 0.5s ease-in-out forwards`,
                                animationDelay: `${initialDelay + i * 0.08}s`,
                                transformOrigin: 'center top',
                            }}
                        />
                        {/* Bottom bar */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-1/2 bg-white border-t "
                            style={{
                                animation: `slideDown 0.5s ease-in-out forwards`,
                                animationDelay: `${initialDelay + i * 0.08}s`,
                                transformOrigin: 'center bottom',
                            }}
                        />
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes slideDown {
                    from {
                        transform: scaleY(1);
                    }
                    to {
                        transform: scaleY(0);
                    }
                }
                @keyframes slideUp {
                    from {
                        transform: scaleY(1);
                    }
                    to {
                        transform: scaleY(0);
                    }
                }
            `}</style>
        </div>
    );
};

interface LoadingPageProps {
    isVisible: boolean;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ isVisible }) => {
    return (
        <div
            className="w-screen h-screen flex items-center justify-center bg-white fixed top-0 left-0 z-60 pointer-events-none z-60"
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                pointerEvents: isVisible ? 'auto' : 'none',
            }}
        >
            <img
                src={"../../public/logow.png"}
                alt="Logo"
                className="absolute z-10 scale-40"
                width={200}
                height={200}
                style={{
                    animation: `fadeOut 0.4s ease-in-out forwards`,
                    animationDelay: `3.1s`,
                }}
            />
            <RenderBar/>
            <style>{`
                @keyframes fadeOut {
                    from {
                        opacity: 1;
                    }
                    to {
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default function Home() {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 3600); // 3.6 seconds to match animation timing

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <LoadingPage isVisible={showLoading} />
        </>
    );
}


