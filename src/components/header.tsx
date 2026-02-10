"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Concept", href: "#concept" },
    { name: "Diagnosis", href: "#diagnosis" },
    { name: "Profile", href: "#profile" },
    { name: "Plans", href: "#plans" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Header height approx
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo Area (Small text logo if needed, or hidden if scrolled) */}
                <div className={cn("font-serif font-bold text-accent transition-opacity duration-300", scrolled ? "opacity-100" : "opacity-0")}>
                    Poodle Glow
                </div>

                {/* Desktop Nav (Optional, maybe hiding for this specific request "Menu button only"?)
                    User said: "HeaderにMenuの欄を追加して、Menuのボタンを押せば...".
                    So sticking to Menu button primarily.
                */}

                <div className={cn("flex items-center gap-3 transition-opacity duration-300", scrolled ? "opacity-100" : "opacity-0 pointer-events-none")}>
                    <Button
                        size="sm"
                        className="inline-flex rounded-full px-4 md:px-6 shadow-md bg-primary hover:bg-primary/90 text-white font-medium transition-transform hover:scale-105 text-xs md:text-sm"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        お問い合わせ
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleMenu}
                        className="relative z-50 rounded-full hover:bg-pink-100/50"
                    >
                        {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
                        <span className="sr-only">Menu</span>
                    </Button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 right-0 w-full md:w-80 bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-3xl md:rounded-bl-3xl p-6 pt-20 border-b border-l border-pink-100 overflow-hidden"
                        >
                            <nav className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item.href}
                                        onClick={() => scrollToSection(item.href)}
                                        className="text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-pink-50 rounded-xl transition-colors flex items-center justify-between group"
                                    >
                                        {item.name}
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Backdrop for menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    );
}
