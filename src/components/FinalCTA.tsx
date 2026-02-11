type FinalCTADict = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  ctaLink: string;
  trust: string;
};

export default function FinalCTA({ dict }: { dict: FinalCTADict }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.title}
        </h2>
        <p className="mt-4 text-lg text-text-secondary">{dict.subtitle}</p>

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
            href={dict.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border px-8 py-3.5 text-base font-semibold text-text-primary transition-colors hover:border-accent/50 hover:text-accent"
          >
            {dict.secondaryCta}
          </a>
        </div>

        <p className="mt-6 text-sm text-text-muted">{dict.trust}</p>
      </div>
    </section>
  );
}
