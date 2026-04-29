export default function ViewTransitionsAboutPage() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About this project
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            A small playground exploring CSS View Transitions, named transitions,
            and “sticky” patterns you can feel instantly. The goal is simple:
            make UI motion easier to reason about and easier to ship.
          </p>
        </div>

        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900">Our mission</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We document practical patterns for modern motion in the browser:
                what works, why it works, and how to avoid the common pitfalls
                that make transitions feel “off”.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                View Transitions help you animate UI state changes with less
                glue code and better integration with the rendering engine. We
                focus on building intuition—so your transitions match the mental
                model of your users.
              </p>
            </div>

            <div className="rounded-md bg-gray-50 border border-gray-200 p-4">
              <p className="text-sm font-medium text-gray-900">What we ship</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Reusable patterns for named transitions
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Accessible motion defaults
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Performance-first experiments
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Clarity over cleverness",
                body: "Transitions should explain the UI relationship between states—no mystery motion.",
              },
              {
                title: "Accessibility is default",
                body: "We design with `prefers-reduced-motion` and readable fallbacks in mind.",
              },
              {
                title: "Performance is a feature",
                body: "We keep transitions scoped and avoid expensive DOM effects that hurt frame rate.",
              },
              {
                title: "Learn by doing",
                body: "Small experiments, tangible results, and code you can reuse immediately.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-5"
              >
                <h3 className="font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Team</h2>
              <p className="mt-2 text-gray-600 max-w-2xl">
                A lightweight crew focused on browser-native transitions and UI
                patterns. (This is dummy content for the playground.)
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: <span className="text-gray-700">Apr 2026</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Jordan Lee", role: "Frontend Engineer", accent: "from-blue-500 to-indigo-600" },
              { name: "Sam Rivera", role: "Design Systems", accent: "from-emerald-500 to-teal-600" },
              { name: "Taylor Chen", role: "Performance", accent: "from-purple-500 to-fuchsia-600" },
              { name: "Morgan Blake", role: "Accessibility", accent: "from-orange-500 to-yellow-600" },
            ].map((m) => (
              <div key={m.name} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200">
                <div className={`h-12 w-12 rounded-full bg-linear-to-br ${m.accent}`} />
                <div>
                  <div className="font-semibold text-gray-900">{m.name}</div>
                  <div className="text-sm text-gray-600">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-gray-900 text-white rounded-lg p-6 overflow-hidden">
            <div className="relative">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10" />
              <h2 className="relative text-lg font-semibold">Want to collaborate?</h2>
              <p className="relative mt-2 text-white/80 max-w-2xl">
                If you’re working on motion, transitions, or accessibility,
                reach out—we’d love to hear what you’re building.
              </p>
              <a
                href="/view-transitions/contact"
                className="relative mt-4 inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-gray-900 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
