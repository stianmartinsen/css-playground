export default function ViewTransitionsArticlesPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Articles
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Practical guides, experiments, and performance notes on CSS View
            Transitions and modern UI animation.
          </p>
        </div>

        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700"
              >
                Search articles
              </label>
              <input
                id="search"
                type="text"
                placeholder="Try “named transitions”, “sticky”, or “timelines”"
                className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "All",
                "CSS",
                "Web Animations",
                "Accessibility",
                "Performance",
              ].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="px-3 py-1.5 text-sm rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Featured
          </h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1 bg-linear-to-br from-blue-600 to-indigo-600 p-6">
                <p className="text-xs font-semibold text-white/80 uppercase tracking-wide">
                  Editor’s pick
                </p>
                <div className="mt-3">
                  <div className="text-white font-bold text-2xl leading-tight">
                    Named view transitions, explained
                  </div>
                  <p className="text-white/90 mt-2 text-sm">
                    Control exactly what moves (and what stays put) during
                    navigation.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 p-6">
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Jun 18, 2026</span>
                  <span aria-hidden="true">•</span>
                  <span>7 min read</span>
                  <span aria-hidden="true">•</span>
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1">
                    CSS
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1">
                    Named transitions
                  </span>
                </div>

                <p className="mt-4 text-gray-700">
                  View Transitions becomes far more powerful once you can
                  assign names to the elements that matter. This article walks
                  through the mental model, common gotchas, and a practical
                  “shared UI” pattern you can reuse across pages.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/view-transitions"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Read the guide
                  </a>
                  <a
                    href="/view-transitions/about"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Meet the author
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Latest posts
            </h2>
            <span className="text-sm text-gray-500">Updated this week</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Sticky UI that actually transitions",
                date: "May 2, 2026",
                minutes: 6,
                tag: "UX/UI",
              },
              {
                title: "Performance checklist for view transitions",
                date: "Apr 21, 2026",
                minutes: 8,
                tag: "Performance",
              },
              {
                title: "Accessibility: reducing motion without losing meaning",
                date: "Apr 7, 2026",
                minutes: 5,
                tag: "Accessibility",
              },
              {
                title: "Web Animations interop: what to try first",
                date: "Mar 28, 2026",
                minutes: 9,
                tag: "Web Animations",
              },
              {
                title: "Common pitfalls: mismatched element targets",
                date: "Mar 11, 2026",
                minutes: 7,
                tag: "CSS",
              },
              {
                title: "Coordinating transitions with async data",
                date: "Feb 24, 2026",
                minutes: 10,
                tag: "Frontend",
              },
            ].map((a) => (
              <article
                key={a.title}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="h-28 bg-linear-to-r from-gray-100 via-gray-50 to-white" />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3 text-sm text-gray-500">
                    <span className="font-medium text-gray-700">{a.date}</span>
                    <span>{a.minutes} min</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-gray-900">
                    {a.title}
                  </h3>
                  <div className="mt-2 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                    {a.tag}
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    Short, actionable notes with examples you can drop into your
                    next UI.
                  </p>
                  <div className="mt-4">
                    <a
                      href="/view-transitions"
                      className="text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Get the newsletter
              </h2>
              <p className="text-gray-600 mt-2">
                Monthly tips on smooth UI transitions, performance wins, and
                patterns that scale.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full md:w-72 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="button"
                className="shrink-0 px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
