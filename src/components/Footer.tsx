type FooterDict = {
  brand: string;
  tagline: string;
  copyright: string;
};

export default function Footer({ dict }: { dict: FooterDict }) {
  return (
    <footer className="border-t border-border/50 bg-bg-inset">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-display text-lg font-bold text-accent">
              {dict.brand}
            </span>
          </div>

          {/* Tagline */}
          <p className="max-w-md text-center text-sm text-text-secondary">
            {dict.tagline}
          </p>

          {/* Usage guide link */}
          <a
            href="https://bytedance.larkoffice.com/wiki/A5RHwWhoBiOnjukIIw6cu5ybnXQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent transition-colors hover:text-accent-hover"
          >
            Seedance 2.0 使用方法 →
          </a>

          {/* Divider */}
          <div className="h-px w-16 bg-border/50" />

          {/* Copyright */}
          <p className="text-xs text-text-muted">{dict.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
