import classNames from "classnames";

/* eslint-disable @next/next/no-img-element */
export default function CarouselPage() {
  return (
    <div className="container mx-auto">
      <Carousel>
        <img src="https://picsum.photos/1920/1080?random=1" alt="" />
        <img src="https://picsum.photos/1920/1080?random=2" alt="" />
        <div className="shadow flex items-center justify-center bg-amber-200">
          This is a card
        </div>
        <img src="https://picsum.photos/1920/1080?random=3" alt="" />
      </Carousel>
    </div>
  );
}

function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={classNames(
        // Padding
        "py-10",

        // Aspect ratio
        "[&>*]:aspect-[5/4] [&>*]:min-w-0",

        // Mandatory scroll snap
        "snap-mandatory snap-x [&>*]:snap-start",

        // Images
        "[&>*]:object-cover",

        // Grid setup
        "overflow-auto grid grid-flow-col auto-cols-[80vw] gap-4",

        // Scroll behavior
        "scroll-smooth",

        // Scroll buttons
        "[&::scroll-button(left)]:content-[''/'Forrige'] [&::scroll-button(right)]:content-[''/'Neste']",
        "[&::scroll-button(*)]:p-4 [&::scroll-button(*)]:border [&::scroll-button(*)]:bg-white [&::scroll-button(*)]:rounded-full"
      )}
    >
      {children}
    </div>
  );
}
