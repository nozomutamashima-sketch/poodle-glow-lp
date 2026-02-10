"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Sparkles, Camera } from "lucide-react";

export default function DiagnosisExplanation() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Title */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">
                        顔タイプ診断®とは？
                    </h2>
                    <p className="text-foreground/60">
                        あなたの魅力を最大限に引き出す理論
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-24">
                    {/* Explanation 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-pink-50/50 p-8 rounded-2xl border border-pink-100">
                            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                                顔の輪郭やパーツの形・配置バランス<br />からあなたに似合う
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-3 text-foreground/80">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    ファッションのテイスト
                                </li>
                                <li className="flex items-center gap-3 text-foreground/80">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    メイクの方向性
                                </li>
                                <li className="flex items-center gap-3 text-foreground/80">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    髪型や全体の雰囲気
                                </li>
                            </ul>
                            <p className="font-bold text-lg text-accent">
                                を導き出す診断です。
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-xl font-medium text-foreground">
                                「なんとなく似合わない…」を<br />
                                <span className="text-accent border-b-2 border-pink-200">理論で“似合う”に変える</span> のが<br className="md:hidden" />顔タイプ診断です。
                            </p>
                        </div>
                    </motion.div>

                    {/* Illustration - Eight Type Matrix */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-2xl h-[300px] md:h-[400px] flex items-center justify-center relative overflow-hidden"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/eight-type.png"
                                    alt="顔タイプ診断マトリクス"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                        <p className="text-right text-[10px] text-gray-500 mt-2">
                            日本顔タイプ診断協会ホームページより
                        </p>
                    </div>
                </div>


                {/* Diagnosis Method */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                            Flow
                        </span>
                        <h3 className="text-2xl font-bold text-foreground">
                            顔タイプ診断の診断方法
                        </h3>
                    </div>

                    <div className="bg-[#FFF5F7] rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                                <Camera className="w-10 h-10 text-accent" />
                            </div>
                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    オンライン顔タイプ診断®は、<br className="md:hidden" />
                                    <span className="font-bold">お送りいただいた顔写真<br className="md:hidden" />（正面・横顔）<br /></span> をもとに診断いたします。
                                </p>
                                <p className="text-foreground/80 text-sm leading-relaxed">
                                    顔タイプ診断は、<br className="md:hidden" />対面の場合でも写真撮影を行って診断することが<br className="hidden md:block" />
                                    協会のルールとして定められています。
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-pink-200/50 text-center">
                            <p className="text-foreground/80 font-medium">
                                撮影方法や注意点は<br />事前に詳しくご案内します。<br /><br />
                                オンラインでもご安心ください。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
