"use client";

import {
  MessageCircle,
  Globe,
  Link as LinkIcon,
  Music,
  Mail,
  Link,
} from "lucide-react";

export default function Social() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Terhubung
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
          Ikuti perjalanan kami.
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://instagram.com/sesegeritu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-card border border-border/40 px-5 py-3 font-medium hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all"
          >
            <LinkIcon className="w-5 h-5"></LinkIcon> Instagram
          </a>
          <a
            href="https://wa.me/6289521220642"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-card border border-border/40 px-5 py-3 font-medium hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all"
          >
            <MessageCircle className="w-5 h-5"></MessageCircle> WhatsApp
          </a>
          <a
            href="https://www.facebook.com/share/17riieyT4B/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-card border border-border/40 px-5 py-3 font-medium hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all"
          >
            <Globe className="w-5 h-5"></Globe> Facebook
          </a>
          <a
            href="https://tiktok.com/@sesegeritu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-card border border-border/40 px-5 py-3 font-medium hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all"
          >
            <Music className="w-5 h-5"></Music> TikTok
          </a>
          <a
            href="https://linktr.ee/sesegeritu"
            className="flex items-center gap-2 rounded-full bg-card border border-border/40 px-5 py-3 font-medium hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all"
          >
            <Link className="w-5 h-5"></Link>
            Linktree
          </a>
        </div>
      </div>
    </section>
  );
}
