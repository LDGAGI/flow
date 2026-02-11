"use client";

import { useRef, useState } from "react";

type HeroDict = {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  ctaLink: string;
  trust: { users: string; videos: string; rating: string };
};

export default function Hero({ dict }: { dict: HeroDict }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
          <span className="mr-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-display text-xs font-medium text-accent">
            {dict.badge}
          </span>
        </div>

        {/* H1 */}
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {dict.title}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl">
          {dict.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={dict.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-bg-primary transition-colors hover:bg-accent-hover"
          >
            {dict.primaryCta}
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center rounded-lg border border-border px-8 py-3.5 text-base font-semibold text-text-primary transition-colors hover:border-accent/50 hover:text-accent"
          >
            {dict.secondaryCta}
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-text-muted">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
            {dict.trust.users}
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2H5v-2h10z" clipRule="evenodd" /></svg>
            {dict.trust.videos}
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            {dict.trust.rating}
          </div>
        </div>

        {/* Demo video */}
        <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-border/50 bg-bg-card shadow-2xl shadow-accent/5">
          <video
            ref={videoRef}
            className="w-full"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/demo.mp4" type="video/mp4" />
          </video>
          <button
            onClick={toggleMute}
            className="absolute right-3 bottom-3 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
