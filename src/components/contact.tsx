"use client";

import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Info } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">Contact</h2>
                    <p className="text-foreground/60">お申込み・お問い合わせ</p>
                </div>

                {/* Warning / Usage Guide */}
                <div className="mb-12">
                    <Alert className="bg-pink-50 border-pink-100">
                        <Info className="h-5 w-5 text-accent" />
                        <AlertTitle className="text-foreground font-bold ml-2">申込み前にお読みください</AlertTitle>
                        <AlertDescription className="text-foreground/80 mt-2 ml-2">
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>顔タイプ診断は写真診断で行います</li>
                                <li>撮影方法は事前にご案内します</li>
                                <li>スマートフォン撮影で問題ありません</li>
                                <li>加工アプリ・過度なメイクはお控えください</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>

                <div className="w-full bg-pink-50/50 rounded-xl overflow-hidden shadow-sm border border-pink-100 py-12">
                    <div className="flex justify-center">
                        <a
                            href="https://forms.gle/sotNniwHq1oE3Qaj7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-5 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            お申し込みはこちら
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
