"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

export default function FAQ() {
    const faqs = [
        {
            question: "オンラインでも正確に診断できますか？",
            answer: "はい、可能です。顔タイプ診断は対面でも写真を撮影して診断するため、オンラインでも基準に沿って正確に行えます。"
        },
        {
            question: "写真の撮り方が不安です",
            answer: "撮影方法や注意点は事前にわかりやすくご案内します。スマートフォンで撮影した写真で問題ありません。"
        },
        {
            question: "すっぴんじゃないとダメですか？",
            answer: "基本はナチュラルメイクでお願いしています。濃いメイクや加工アプリは診断に影響するためお控えください。"
        },

        {
            question: "メイクが本当に苦手でも大丈夫ですか？",
            answer: "もちろん大丈夫です。今のメイクをベースに、すぐ実践できるアドバイスを行います。"
        },
        {
            question: "質問し放題では、どんなことを聞いていいですか？",
            answer: "コスメ選び、メイク方法、髪型、服のテイストなど顔タイプに関することは何でもご相談いただけます。"
        },
        {
            question: "結婚式など特別な日のメイク相談もできますか？",
            answer: "はい、可能です。シーンに合わせたメイクアドバイスも行っています。"
        },
        {
            question: "パーソナルカラー診断はオンラインで受けられますか？",
            answer: "パーソナルカラー診断は、撮影環境（照明・背景・カメラ性能）の影響を大きく受けるためオンラインでは行っておりません。誤った結果をお伝えしないため、正確性を重視してオンライン診断は実施していません。"
        },
        {
            question: "SNS紹介割引はどうやって使いますか？",
            answer: "ご紹介投稿をしていただき、お申込み時にお知らせいただくだけで500円OFFになります。（期間限定）"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">Q&A</h2>
                    <p className="text-foreground/60">よくあるご質問</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-pink-100 rounded-lg px-4 data-[state=open]:bg-pink-50/30">
                            <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline hover:text-accent transition-colors py-6">
                                Q. {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-foreground/80 leading-relaxed pb-6 text-base">
                                {faq.answer.split('\n').map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
