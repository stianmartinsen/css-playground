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
    <div className="py-10">
      <div
        className={classNames(
          // Container/grid setup
          "*:aspect-5/4 *:w-3/4 *:min-w-0 *:shrink-0",

          // Mandatory scroll snap
          "snap-mandatory snap-x *:snap-start",

          // Images
          "*:object-cover",

          // Grid setup
          "overflow-auto flex gap-4",

          // Scroll behavior
          "scroll-smooth",

          // Scroll buttons
          // - Give the carousel an anchor name
          "[anchor-name:--carousel]",
          // - Position the buttons
          "[&::scroll-button(*)]:absolute [&::scroll-button(*)]:[position-anchor:--carousel] [&::scroll-button(*)]:[align-self:anchor-center] [&::scroll-button(right)]:right-[calc(anchor(right)+2rem)] [&::scroll-button(left)]:left-[calc(anchor(left)+2rem)]",
          // - Content in the buttons
          "[&::scroll-button(left)]:content-['Previous'] [&::scroll-button(right)]:content-['Next']",
          // - Style the buttons
          "[&::scroll-button(*)]:p-4 [&::scroll-button(*)]:border [&::scroll-button(*)]:bg-white [&::scroll-button(*)]:rounded-full",

          // Scroll marker groups (dots)
          // - Style the group
          "[scroll-marker-group:after] [&::scroll-marker-group]:mt-4 [&::scroll-marker-group]:flex [&::scroll-marker-group]:justify-center [&::scroll-marker-group]:gap-2",
          // - Style the markers
          "[&>*::scroll-marker]:content-[''] [&>*::scroll-marker]:inline-flex [&>*::scroll-marker]:size-6 [&>*::scroll-marker]:bg-white [&>*::scroll-marker]:border [&>*::scroll-marker]:rounded-full",
          // - Style the active marker
          "[&>*::scroll-marker:target-current]:bg-amber-500"
        )}
      >
        {children}
      </div>
    </div>
  );
}
