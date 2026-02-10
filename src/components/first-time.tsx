"use client";

import { motion } from "framer-motion";

export default function FirstTime() {
    return (
        <section className="py-32 bg-gradient-to-br from-[#FFF0F5] to-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />


            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto space-y-12"
                >
                    <div className="inline-block px-4 py-1.5 bg-white border border-pink-100 rounded-full text-accent text-sm tracking-widest mb-4">
                        はじめての方へ
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">

                        あなたの<br />
                        <span className="text-accent">「似合う」を知る</span><br />

                        第一歩
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-loose font-serif">
                        <p>
                            「自分に何が似合うのか分からない」<br />
                            「頑張ってるのに垢抜けない」
                        </p>
                        <p>
                            そんなお悩みを、<br className="md:hidden" />
                            感覚ではなく<span className="font-bold text-foreground border-b-2 border-pink-200">理論で解決</span>します。
                        </p>
                        <p>
                            無理に変えるのではなく、<br />
                            今のあなたを活かした“似合う”を<br className="md:hidden" />
                            ご提案します。
                        </p>
                    </div>

                    <div className="pt-8">
                        <p className="text-foreground/90 font-medium mb-8">
                            顔タイプ診断で、<br />
                            メイクやファッション選びが<br />
                            もっと楽しくなります。<br />
                            <br />
                            「なんとなく」から<br className="md:hidden" />
                            「自信をもって選べる自分」へ。
                        </p>


                    </div>
                </motion.div>

            </div>
        </section>
    );
}
