type FeaturesDict = {
  badge: string;
  title: string;
  subtitle: string;
  items: { icon: string; title: string; description: string }[];
};

export default function Features({ dict }: { dict: FeaturesDict }) {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-medium text-accent">
            {dict.badge}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-text-secondary">{dict.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border/50 bg-bg-card p-6 transition-colors hover:border-accent/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bg-inset text-2xl">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
