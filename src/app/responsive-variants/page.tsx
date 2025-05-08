import classNames from "classnames";

type ButtonSize = "sm" | "md" | "lg";
type ResponsiveSize = {
  default: ButtonSize;
  sm?: ButtonSize;
  md?: ButtonSize;
  lg?: ButtonSize;
  xl?: ButtonSize;
  "2xl"?: ButtonSize;
};

type ButtonProps = {
  size?: ButtonSize | ResponsiveSize;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function ResponsiveVariants() {
  return (
    <div className="h-screen grid place-items-center">
      <Button size={{ default: "sm", sm: "md", md: "lg" }}>Click me</Button>
    </div>
  );
}

function buildSizeClasses(size: ButtonSize | ResponsiveSize) {
  if (typeof size === "string") {
    return `[--component-size:${size}]`;
  }

  return Object.entries(size).map(([breakpoint, size]) => {
    if (breakpoint === "default") {
      return `[--component-size:${size}]`;
    }

    return `${breakpoint}:[--component-size:${size}]`;
  });
}

function Button({ children, className, size = "md", ...props }: ButtonProps) {
  return (
    <div className={classNames("contents", buildSizeClasses(size))}>
      <button
        className={classNames(
          // Base styles
          "bg-blue-500 text-white rounded-md",

          // Size variants
          "text-xs",
          "component-size-sm:text-xs component-size-sm:p-2",
          "component-size-md:text-base component-size-md:p-4",
          "component-size-lg:text-lg component-size-lg:px-12 component-size-lg:p-8",

          // Custom classes
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
