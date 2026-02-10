"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Reviews() {
    const reviews = [
        "自分では選ばないメイクが、実は一番似合っていてびっくりしました",
        "オンラインなのにすごく丁寧で、質問にも全部答えてもらえて安心でした",
        "今まで迷走してたメイクが、一気にスッとまとまりました",
        "診断結果だけじゃなく、どう活かすかまで教えてもらえるのが良かったです",
        "結婚式前にお願いしましたが、本当に頼んでよかったです"
    ];

    return (
        <section className="py-24 bg-[#FFF5F7]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">Voice</h2>
                    <p className="text-foreground/60">お客様の声</p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-white p-8 rounded-2xl shadow-sm border border-pink-50 relative ${index === reviews.length - 1 ? "md:col-span-2 md:w-2/3 md:mx-auto" : ""}`}
                        >
                            <Quote className="absolute top-4 left-4 w-8 h-8 text-pink-100" />
                            <p className="relative z-10 text-foreground/90 font-medium text-lg leading-relaxed pt-2">
                                {review}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-xs text-foreground/50 mt-12">
                    ※個人の感想です。効果を保証するものではありません。
                </p>
            </div>
        </section>
    );
}
