export default function ViewTransitionsContactPage() {
  return (
    <div className="min-h-screen bg-indigo-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Contact
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Have a question about CSS View Transitions, named transitions, or
            motion accessibility? Send a message and we’ll get back to you.
            (This form is dummy content for the playground.)
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900">Details</h2>

              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <a
                    href="mailto:hello@example.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    hello@example.com
                  </a>
                </div>

                <div>
                  <div className="font-medium text-gray-900">Office hours</div>
                  <div className="text-gray-600">
                    Mon–Thu: 10:00–16:00
                    <br />
                    Fri: 10:00–13:00
                  </div>
                </div>

                <div>
                  <div className="font-medium text-gray-900">Location</div>
                  <div className="text-gray-600">
                    123 Motion Street
                    <br />
                    Suite 42
                    <br />
                    Somewhere, Earth
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-md bg-gray-50 border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-900">For press</p>
                <p className="mt-1 text-sm text-gray-600">
                  Want a quote or a quick technical review? Email{" "}
                  <span className="font-medium text-gray-900">
                    press@example.com
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Send us a message
              </h2>

              <form className="mt-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What can we help with?"
                    className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us what you’re building, where you’re stuck, or what kind of pattern you want next."
                    className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="rounded-md border border-gray-200 p-4">
                  <div className="text-sm font-medium text-gray-900">
                    What’s your priority?
                  </div>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        label: "I need help debugging transitions",
                        value: "debug",
                      },
                      { label: "I want accessibility guidance", value: "a11y" },
                      { label: "I’m researching performance", value: "perf" },
                      { label: "I’d like to share a pattern", value: "share" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <input
                          type="checkbox"
                          name="priority"
                          value={opt.value}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
                  <p className="text-xs text-gray-500">
                    By sending this message you agree this is dummy content and
                    will not submit anywhere.
                  </p>
                  <button
                    type="submit"
                    className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-6 rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="h-48 bg-linear-to-br from-gray-100 to-gray-50" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
                  <div>
                    <div className="font-semibold text-gray-900">Find us</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Map placeholder (the playground keeps it simple).
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
