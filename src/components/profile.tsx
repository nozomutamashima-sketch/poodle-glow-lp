"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Instagram, Twitter } from "lucide-react";

export default function Profile() {
    return (
        <section className="py-24 bg-[#FFF5F7]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Image */}
                    <div className="flex-1 relative">
                        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] mx-auto">
                            <div className="absolute inset-0 bg-white rounded-full overflow-hidden border-4 border-white">
                                <Image
                                    src="/images/Profile2.png"
                                    alt="Profile Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-accent mb-2">PROFILE</h2>
                            <h3 className="text-3xl font-bold text-foreground">私について</h3>
                        </div>

                        <p className="text-lg leading-loose text-foreground/80">
                            大手百貨店で美容部員として勤務しながら、<br />
                            顔タイプ診断・メイクアドバイスを<br className="md:hidden" />行っています。
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    保有資格・実績
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-foreground/80 text-sm">
                                    <li>• 大手百貨店 美容部員</li>
                                    <li>• 顔タイプ診断／顔タイプメイク</li>
                                    <li>• 化粧品検定 特級</li>
                                    <li>• パーソナルカラー診断</li>
                                    <li>• 骨格診断</li>
                                    <li>• 顔タイプ診断実績 3,000人以上</li>
                                    <li>• オンライン対応 250名以上</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    得意分野
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-white text-foreground/80 hover:bg-white border-pink-100 font-normal px-4 py-1.5 text-base">
                                        似合う×今っぽいメイク
                                    </Badge>
                                    <Badge variant="secondary" className="bg-white text-foreground/80 hover:bg-white border-pink-100 font-normal px-4 py-1.5 text-base">
                                        垢抜け・印象アップのアドバイス
                                    </Badge>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="pt-4 flex items-center gap-6">
                                <a
                                    href="https://www.instagram.com/poodleglow.jp/?utm_source=ig_web_button_share_sheet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors group"
                                >
                                    <div className="p-2 bg-white rounded-full border border-pink-100 shadow-sm group-hover:scale-110 transition-transform">
                                        <Instagram className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-medium">Instagram</span>
                                </a>
                                <a
                                    href="https://twitter.com/" // Placeholder
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors group"
                                >
                                    <div className="p-2 bg-white rounded-full border border-pink-100 shadow-sm group-hover:scale-110 transition-transform">
                                        {/* X Logo SVG */}
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium">X</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
