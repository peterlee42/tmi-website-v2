"use client";

import Link from "next/link";
import Image from "next/image";
import LinktreeIcon from "./LinktreeIcon";
import DiscordIcon from "./DiscordIcon";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "Discord",
            href: "https://discord.gg/9p7dP3WsGG",
            icon: (
                <DiscordIcon className="w-6 h-6" />
            ),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/uoft_tmi/",
            icon: (
                <InstagramIcon className="w-6 h-6" />
            ),
        },
        {
            name: "Linktree",
            href: "https://linktr.ee/uoft_tmi",
            icon: <LinktreeIcon className="w-6 h-6" />,
        },
        {
            name: "Email",
            href: "mailto:utoronto.tmi@gmail.com",
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="w-full bg-card border-t border-secondary/20 mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-xl font-bold text-secondary hover:text-primary transition-colors"
                        >
                            <Image
                                src="/images/TMI.png"
                                alt="TMI"
                                width={240}
                                height={96}
                                className="h-12 w-auto"
                            />
                            <span>UofT TMI</span>
                        </Link>
                        <p className="text-sm text-text-muted text-center md:text-left">
                            © {currentYear} TMI. All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-text-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-md"
                                aria-label={`Visit our ${link.name}`}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
