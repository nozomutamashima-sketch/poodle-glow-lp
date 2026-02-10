"use client";

import { Button } from "./ui/button";
import Image from "next/image";



export default function Hero() {
    return (
        <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-pink-50 to-white bg-dot-pattern-pink pb-20 md:pb-0">
            {/* Decorative Circles - Adjusted for "Adult Cute" */}
            <div className="absolute top-[-10%] left-[-5%] w-[40vh] h-[40vh] bg-pink-200/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[50vh] h-[50vh] bg-purple-200/20 rounded-full blur-[80px]" />

            {/* Floating Blobs */}
            <div className="absolute top-1/4 left-10 w-24 h-24 bg-pink-300/10 rounded-full blur-xl animate-float-delayed" />
            <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-xl animate-float" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20 pt-28 md:pt-0">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-8 relative">
                    <div className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full border border-pink-100 text-foreground/80 text-sm tracking-widest shadow-sm mb-1">
                        顔タイプ診断®・骨格診断・パーソナルカラー
                    </div>


                    {/* Visual Content - Mobile Only (inserted between Tagline and Logo Text) */}
                    <div className="relative w-[280px] h-[280px] mx-auto md:hidden mb-2">
                        <div className="absolute inset-0 border-[1px] border-pink-100 rounded-full animate-spin-slow-reverse" />
                        <div className="absolute inset-4 bg-white rounded-full shadow-lg flex items-center justify-center p-2">
                            <div className="relative w-full h-full rounded-full overflow-hidden border border-pink-50">
                                <Image
                                    src="/logo.jpg"
                                    alt="Poodle Glow Logo"
                                    fill
                                    className="object-cover opacity-95"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Logo - Above Catchphrase */}
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4 relative">
                        <span className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] italic text-accent tracking-widest drop-shadow-md relative z-10">
                            Poodle Glow
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6 relative">
                        作りすぎないのに<br />
                        <span className="text-accent relative inline-block text-4xl md:text-6xl lg:text-7xl mt-2">
                            ちゃんと可愛い
                            <span className="absolute bottom-2 left-0 w-full h-3 md:h-4 bg-pink-200/40 -z-10 -rotate-1 rounded-sm" />
                        </span>
                        <span className="text-2xl md:text-4xl">。</span>
                    </h1>

                    <p className="text-lg text-foreground/80 max-w-[500px] leading-relaxed mx-auto md:mx-0">
                        「Poodle Glow」は、あなただけの魅力を<br />引き出すプライベートサロンです。<br /><br />
                        自分を知って、<br />もっと自分を好きになる体験を。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 pb-8 md:pb-0">
                        <Button
                            size="lg"
                            className="rounded-full text-lg h-14 px-10 shadow-lg shadow-pink-200/50 text-white bg-primary hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-pink-300/50"
                            onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            診断メニューを見る
                        </Button>
                    </div>
                </div>

                {/* Visual Content - Desktop Only */}
                <div className="hidden md:flex flex-1 justify-center items-center relative">
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                        {/* Elegant Circle Frame */}
                        <div className="absolute inset-0 border-[1px] border-pink-100 rounded-full animate-spin-slow-reverse" />

                        <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center p-2">
                            <div className="relative w-full h-full rounded-full overflow-hidden border border-pink-50">
                                <Image
                                    src="/logo.jpg"
                                    alt="Poodle Glow Logo"
                                    fill
                                    className="object-cover opacity-95 hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-pink-300 animate-bounce md:block hidden">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-pink-300 to-transparent" />
                </div>
            </div>
        </section>
    );
}

