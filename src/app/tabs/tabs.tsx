import classNames from "classnames";
import { Children, isValidElement, useId } from "react";

export function TabsExample({ className }: { className?: string }) {
  const name = useId();

  return (
    <>
      <style>{`
        /* Custom CSS Property needed to be able to position the tab trigger in their corresponding column. */
        @property --tab-index {
          syntax: "<integer>";
          inherits: true;
          initial-value: 1;
        }
      `}</style>

      <Tabs className={className}>
        <Tab title="First item" open name={name}>
          Here is the first item
        </Tab>
        <Tab title="Second item is a bit longer" name={name}>
          Here is the second item. It's a bit longer than the first item.
          <p className="max-w-prose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Tab>
        <Tab title="Third item" name={name}>
          Here is the third item
        </Tab>
        <Tab title="Fourth item" name={name}>
          Here is the fourth item
        </Tab>
      </Tabs>
    </>
  );
}

function Tabs({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Count the number of tabs
  const tabCount = Children.toArray(children).filter(
    (child) => isValidElement(child) && child.type === Tab,
  ).length;

  return (
    <div
      style={
        {
          "--tab-count": tabCount,
        } as React.CSSProperties
      }
      className={classNames(
        "relative",
        // Set up grid
        "grid grid-rows-[min-content_1fr] grid-cols-[repeat(var(--tab-count),auto)_1fr] justify-start gap-4",
        className,
      )}
    >
      {children}
      <div
        aria-hidden="true"
        className={classNames(
          "tabs-indicator pointer-events-none absolute h-[2px] bg-slate-900",
          "transition-[left,top,width] duration-300 ease-[cubic-bezier(.2,.8,.2,1)]",
          "[position-anchor:--active-tab]",
          "left-[anchor(left)]",
          "top-[calc(anchor(bottom)+2px)]",
          "w-[anchor-size(width)]",
        )}
      />
    </div>
  );
}

function Tab({
  name,
  title,
  children,
  open = false,
}: {
  name: string;
  title: string;
  children: React.ReactNode;
  open?: boolean;
}) {
  return (
    <details
      className={classNames(
        // Set up grid
        "grid grid-cols-subgrid grid-rows-subgrid col-span-full row-span-full pointer-events-none open:details-content:pointer-events-auto",
        // Create a group to be able to style the summary based on the details state
        "group",
        // Increment the counter
        "[--tab-index:sibling-index()]",
        // Style the content of the tab
        "details-content:row-2 details-content:rounded-b-md details-content:col-span-full",
      )}
      open={open}
      name={name}
    >
      <summary
        className={classNames(
          // Place the summary in its corresponding column
          "col-(--tab-index)",
          // Make sure the summary is clickable by giving it a higher z-index
          "z-10",
          // Prevent clicking the already open tab
          "pointer-events-auto group-open:pointer-events-none",
          // Hide the default arrow
          "list-none [&::-webkit-details-marker]:hidden",
          // Style the tab
          "text-slate-600 font-medium opacity-70 transition-all rounded-md cursor-default whitespace-nowrap",
          // Style the open tab
          "group-open:opacity-100",
          // Anchor-position target for the indicator (only the open tab sets the anchor-name)
          "group-open:[anchor-name:--active-tab]",
        )}
      >
        {title}
      </summary>
      {children}
    </details>
  );
}
