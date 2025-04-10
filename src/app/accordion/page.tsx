import classNames from "classnames";
import { ChevronDown } from "lucide-react";

export default function AccordionPage() {
  return (
    <div className="h-screen mt-[20vw]">
      <div className="w-full max-w-2xl mx-auto px-8">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        <details
          name="foo"
          className={classNames(
            "group bg-slate-300 rounded-md mb-4",

            // Allow animating to size: auto
            "[interpolate-size:allow-keywords] details-content:transition-discrete",

            // Transition height
            "details-content:overflow-hidden",
            "details-content:opacity-0 details-content:transition-all details-content:duration-1000",
            "details-content:h-0 open:details-content:h-auto open:details-content:opacity-100"
          )}
        >
          <summary
            className={classNames(
              "cursor-pointer font-semibold p-4 rounded-md focus-visible:ring-2 ring-offset-2 outline-none",

              // Hide the default arrow
              "list-none [&::-webkit-details-marker]:hidden"
            )}
          >
            <ChevronDown
              className={classNames(
                "size-6 inline-block mr-2",

                // Transition chevron open state
                "transition-transform duration-300 group-open:-rotate-180"
              )}
            />
            What does LOREM mean?
          </summary>

          <div className={classNames("px-4 pb-4")}>
            ‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ is dummy
            text that is not meant to mean anything. It is used as a placeholder
            in magazine layouts, for example, in order to give an impression of
            the finished document. The text is intentionally unintelligible so
            that the viewer is not distracted by the content. The language is
            not real Latin and even the first word ‘Lorem’ does not exist. It is
            said that the lorem ipsum text has been common among typesetters
            since the 16th century.
          </div>
        </details>

        <details
          name="foo"
          className={classNames(
            "group bg-slate-300 rounded-md mb-4",

            // Allow animating to size: auto
            "[interpolate-size:allow-keywords] details-content:[transition-behavior:allow-discrete]",

            // Transition height
            "details-content:overflow-hidden",
            "details-content:opacity-0 details-content:transition-all details-content:duration-1000",
            "details-content:h-0 [&:open::details-content]:h-auto [&:open::details-content]:opacity-100"
          )}
        >
          <summary
            className={classNames(
              "cursor-pointer font-semibold p-4 rounded-md focus-visible:ring-2 ring-offset-2 outline-none",

              // Hide the default arrow
              "list-none [&::-webkit-details-marker]:hidden"
            )}
          >
            <ChevronDown
              className={classNames(
                "size-6 inline-block mr-2",

                // Transition chevron open state
                "transition-transform duration-300 group-open:-rotate-180"
              )}
            />
            What does LOREM mean?
          </summary>

          <div className={classNames("px-4 pb-4")}>
            ‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ is dummy
            text that is not meant to mean anything. It is used as a placeholder
            in magazine layouts, for example, in order to give an impression of
            the finished document. The text is intentionally unintelligible so
            that the viewer is not distracted by the content. The language is
            not real Latin and even the first word ‘Lorem’ does not exist. It is
            said that the lorem ipsum text has been common among typesetters
            since the 16th century.
          </div>
        </details>

        <details
          name="foo"
          className={classNames(
            "group bg-slate-300 rounded-md mb-4",

            // Allow animating to size: auto
            "[interpolate-size:allow-keywords] details-content:[transition-behavior:allow-discrete]",

            // Transition height
            "details-content:overflow-hidden",
            "details-content:opacity-0 details-content:transition-all [&::details-content]:duration-1000",
            "[&::details-content]:h-0 [&:open::details-content]:h-auto [&:open::details-content]:opacity-100"
          )}
        >
          <summary
            className={classNames(
              "cursor-pointer font-semibold p-4 rounded-md focus-visible:ring-2 ring-offset-2 outline-none",

              // Hide the default arrow
              "list-none [&::-webkit-details-marker]:hidden"
            )}
          >
            <ChevronDown
              className={classNames(
                "size-6 inline-block mr-2",

                // Transition chevron open state
                "transition-transform duration-300 group-open:-rotate-180"
              )}
            />
            What does LOREM mean?
          </summary>

          <div className={classNames("px-4 pb-4")}>
            ‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ is dummy
            text that is not meant to mean anything. It is used as a placeholder
            in magazine layouts, for example, in order to give an impression of
            the finished document. The text is intentionally unintelligible so
            that the viewer is not distracted by the content. The language is
            not real Latin and even the first word ‘Lorem’ does not exist. It is
            said that the lorem ipsum text has been common among typesetters
            since the 16th century.
          </div>
        </details>
      </div>
    </div>
  );
}
