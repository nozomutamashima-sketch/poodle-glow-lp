"use client";

export default function Concept() {
    return (
        <section className="py-24 bg-[#FFF5F7] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-accent tracking-widest flex flex-col md:flex-row items-center justify-center gap-3">
                            <span className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold italic">Poodle Glow</span>
                            <span className="text-xl md:text-2xl font-medium">の由来</span>
                        </h2>
                        <div className="h-[1px] w-12 bg-accent/30 mx-auto" />
                    </div>

                    <div className="space-y-12 font-serif text-foreground">
                        <div className="flex flex-col gap-8 text-lg md:text-xl font-medium text-center">
                            <p className="leading-relaxed">
                                Poodle（プードル）＝<span className="text-accent underline decoration-pink-200/50 underline-offset-4">上品・愛され・洗練</span>
                            </p>
                            <p className="leading-relaxed">
                                Glow（グロウ）＝<span className="text-accent underline decoration-pink-200/50 underline-offset-4">内側から輝く美しさ</span>
                            </p>
                        </div>

                        <div className="text-base md:text-lg text-foreground/80 flex flex-col gap-6 leading-relaxed">
                            <p>一人ひとりが持つ魅力を引き出し、</p>
                            <p>作りすぎないのに「ちゃんと可愛い」</p>
                            <p>そんな <span className="font-bold text-foreground">自然で垢抜けた輝き</span> を叶えたい<br />という想いから<br /><br />「プードルグロウ」と名付けました。</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </section>
    );
}
