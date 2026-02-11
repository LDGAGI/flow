type FAQDict = {
  badge: string;
  title: string;
  subtitle: string;
  items: { question: string; answer: string }[];
};

export default function FAQ({ dict }: { dict: FAQDict }) {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-bg-inset">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-display text-sm font-medium text-accent">
            {dict.badge}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-text-secondary">{dict.subtitle}</p>
        </div>

        <div className="mt-12 space-y-4">
          {dict.items.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border/50 bg-bg-card"
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-display text-sm font-semibold text-text-primary">
                {item.question}
                <svg
                  className="h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
