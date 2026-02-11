type ComparisonDict = {
  badge: string;
  title: string;
  subtitle: string;
  headers: string[];
  rows: { feature: string; values: string[] }[];
};

export default function Comparison({ dict }: { dict: ComparisonDict }) {
  return (
    <section id="comparison" className="py-20 sm:py-28 bg-bg-inset">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-medium text-accent">
            {dict.badge}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-text-secondary">{dict.subtitle}</p>
        </div>

        {/* Desktop table */}
        <div className="mt-16 hidden overflow-x-auto md:block">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {dict.headers.map((h, i) => (
                  <th
                    key={i}
                    className={`border-b border-border/50 px-6 py-4 text-left font-display font-semibold ${
                      i === 1 ? "text-accent" : "text-text-primary"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dict.rows.map((row, i) => (
                <tr key={i} className="border-b border-border/30">
                  <td className="px-6 py-4 font-medium text-text-primary">
                    {row.feature}
                  </td>
                  {row.values.map((val, j) => (
                    <td
                      key={j}
                      className={`px-6 py-4 ${
                        j === 0
                          ? "font-semibold text-accent"
                          : "text-text-secondary"
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-16 space-y-4 md:hidden">
          {dict.rows.map((row, i) => (
            <div key={i} className="rounded-xl border border-border/50 bg-bg-card p-4">
              <h3 className="mb-3 font-display text-sm font-semibold text-text-primary">
                {row.feature}
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {row.values.map((val, j) => (
                  <div key={j} className="flex justify-between">
                    <span className="text-text-muted">{dict.headers[j + 1]}</span>
                    <span className={j === 0 ? "font-semibold text-accent" : "text-text-secondary"}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
