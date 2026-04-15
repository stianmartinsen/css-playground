import classNames from "classnames";

type ButtonProps = React.ComponentProps<"button"> & {
  /** Target element id (e.g. dialog). Used with command. */
  commandfor?: string;
  /** Action: "show-modal" | "show" | "close" | "request-close". Used with commandfor. */
  command?: string;
};

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        props.className,
        "bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md inline-flex focus-visible:ring-2 ring-offset-2"
      )}
    />
  );
}
