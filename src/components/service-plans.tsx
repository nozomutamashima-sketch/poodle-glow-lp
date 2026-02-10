"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

export default function ServicePlans() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">Menu & Price</h2>
                    <p className="text-foreground/60">あなたを彩るメニュー</p>
                </div>

                {/* Diagnosis Plans */}
                <h3 className="text-xl font-bold text-center mb-8 text-foreground">顔タイプ診断プラン</h3>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
                    {/* Standard Plan (Center) - Displayed first for emphasis on small screens or center on large */}
                    {/* Full Support Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="col-span-1 md:order-2"
                    >
                        <Card className="h-full border-2 border-pink-200 shadow-xl relative overflow-hidden bg-white/50 backdrop-blur-sm">
                            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                            <div className="absolute top-4 right-4 animate-pulse">
                                <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-0">人気No.1</Badge>
                            </div>
                            <CardHeader className="text-center pb-2 pt-8">
                                <CardTitle className="text-xl font-bold text-foreground">① フルサポートプラン</CardTitle>
                                <div className="mt-4 flex items-baseline justify-center text-foreground">
                                    <span className="text-4xl font-bold tracking-tight">¥4,000</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4 pt-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-accent shrink-0" />
                                        <span className="text-foreground/90">顔タイプ診断資料付き</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-accent shrink-0" />
                                        <span className="text-foreground/90 font-bold bg-pink-50 px-2 py-0.5 rounded">メイクアドバイス</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-accent shrink-0" />
                                        <span className="text-foreground/90">1ヶ月 質問し放題</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Standard Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="col-span-1 md:order-1"
                    >
                        <Card className="h-full border border-pink-100 shadow-md">
                            <CardHeader className="text-center pb-2 pt-8">
                                <CardTitle className="text-lg font-bold text-foreground/80">② スタンダードプラン</CardTitle>
                                <div className="mt-4 flex items-baseline justify-center text-foreground">
                                    <span className="text-3xl font-bold tracking-tight">¥3,000</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4 pt-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-accent/70 shrink-0" />
                                        <span className="text-foreground/80">顔タイプ診断資料付き</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-accent/70 shrink-0" />
                                        <span className="text-foreground/80">質問 1件まで</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Simple Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 md:order-3"
                    >
                        <Card className="h-full border border-pink-100 shadow-sm">
                            <CardHeader className="text-center pb-2 pt-8">
                                <CardTitle className="text-lg font-bold text-foreground/80">③ シンプルプラン</CardTitle>
                                <div className="mt-4 flex items-baseline justify-center text-foreground">
                                    <span className="text-3xl font-bold tracking-tight">¥2,000</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4 pt-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-accent/70 shrink-0" />
                                        <span className="text-foreground/80">顔タイプ診断結果のみ</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Options */}
                <div className="max-w-2xl mx-auto mb-24 bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h4 className="text-center font-bold text-foreground mb-4">オプション</h4>
                    <ul className="space-y-2 text-sm md:text-base">
                        <li className="flex justify-between border-b border-gray-200 pb-2">
                            <span className="text-foreground/80">質問1ヶ月し放題（②③対象）</span>
                            <span className="font-bold">＋500円</span>
                        </li>
                        <li className="flex justify-between pt-2">
                            <span className="text-foreground/80">SNS紹介割引（期間限定）</span>
                            <span className="font-bold text-accent">500円OFF</span>
                        </li>
                    </ul>
                </div>


                {/* Makeup Advice Plan */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#FFF5F7] rounded-3xl p-8 md:p-12 border border-pink-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />


                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-foreground mb-2">メイクアドバイスプラン</h3>
                            <span className="text-3xl font-bold text-accent">¥2,500</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <div>
                                <h4 className="font-bold text-foreground mb-4 border-l-4 border-accent pl-3">こんな方におすすめ</h4>
                                <ul className="space-y-2 text-sm text-foreground/80 list-disc list-inside marker:text-accent">
                                    <li>メイクが苦手でうまくできない</li>
                                    <li>男性ウケのいい、モテるメイクが知りたい</li>
                                    <li>客観的に見て似合うメイクを教えてほしい</li>
                                    <li>とにかく可愛くなりたい</li>
                                    <li>今っぽい・旬なメイクを知りたい</li>
                                    <li>診断を受けたけどメイクがしっくりこない</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-foreground mb-4 border-l-4 border-accent pl-3">内容</h4>
                                <ul className="space-y-2 text-sm text-foreground/80">
                                    <li>• 現役美容部員×イメコンが垢抜けポイントを<br className="md:hidden" />アドバイス</li>
                                    <li>• お送りいただいた写真にメイクを書き足して<br className="md:hidden" />お返し</li>
                                    <li>• 1ヶ月 質問し放題</li>
                                    <li>• 結婚式など特別な日のメイク相談にも対応</li>
                                </ul>
                                <div className="mt-6 pt-4 border-t border-pink-200/50">
                                    <p className="text-accent font-bold text-sm">
                                        ※SNS紹介で500円OFF（期間限定）
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
