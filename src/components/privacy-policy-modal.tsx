"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

export default function PrivacyPolicyModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-xs md:text-sm text-foreground/60 hover:text-accent transition-colors underline underline-offset-4"
            >
                プライバシーポリシー
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-h-[90vh] overflow-y-auto"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="absolute right-4 top-4 text-foreground/50 hover:text-foreground"
                            >
                                <X className="w-5 h-5" />
                            </Button>

                            <div className="space-y-6">
                                <div className="text-center space-y-2">
                                    <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <ShieldCheck className="w-6 h-6 text-accent" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">プライバシーポリシー</h2>
                                    <p className="text-sm text-foreground/60">
                                        お客様の個人情報の取り扱いについて
                                    </p>
                                </div>

                                <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
                                    <section>
                                        <h3 className="font-bold text-foreground mb-1">1. 個人情報の収集・利用</h3>
                                        <p>
                                            Poodle Glow（以下「当サロン」）は、お問い合わせやサービスのお申し込み時に、お名前、メールアドレス、電話番号等の個人情報をご登録いただく場合がございます。これらの個人情報は、サービス提供、ご質問への回答、および当サロンからのご案内に利用し、それ以外の目的では利用いたしません。
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="font-bold text-foreground mb-1">2. 個人情報の管理</h3>
                                        <p>
                                            当サロンは、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティ維持等の必要な措置を講じ、厳重な管理を行います。
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="font-bold text-foreground mb-1">3. 個人情報の第三者への開示・提供の禁止</h3>
                                        <p>
                                            当サロンは、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
                                        </p>
                                        <ul className="list-disc pl-5 mt-1 space-y-1">
                                            <li>お客さまの同意がある場合</li>
                                            <li>法令に基づき開示・提供が必要な場合</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="font-bold text-foreground mb-1">4. ご本人の照会</h3>
                                        <p>
                                            お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="font-bold text-foreground mb-1">5. お問い合わせ</h3>
                                        <p>
                                            当サロンの個人情報の取扱に関するお問い合わせは、お問い合わせフォームよりご連絡ください。
                                        </p>
                                    </section>
                                </div>

                                <div className="pt-4 text-center">
                                    <Button onClick={() => setIsOpen(false)} variant="outline" className="px-8 rounded-full border-pink-200 hover:bg-pink-50 hover:text-accent">
                                        閉じる
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
