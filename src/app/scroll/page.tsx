import classNames from "classnames";

/* eslint-disable @next/next/no-img-element */
export default function ScrollPage() {
  return (
    <>
      <div className="h-2 bg-slate-200 fixed top-0 left-0 right-0 z-100">
        <div
          className="h-full bg-amber-500 animate-grow-width"
          style={{
            animationRange: "cover 0% cover 100%",
            animationTimeline: "scroll()",
          }}
        />
      </div>

      <div className="flex flex-col gap-y-[50vh] py-[50vh]">
        <figure className="aspect-[5/2] relative overflow-clip">
          <img
            src="https://picsum.photos/1920/1080"
            alt=""
            className={classNames(
              "object-cover absolute inset-0 size-full",
              "animate-parallax-down"
            )}
            style={{
              animationRange: "cover 0% cover 100%",
              animationTimeline: "view()",
            }}
          />
          <figcaption
            className={classNames(
              "text-white text-8xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
          >
            Hello world
          </figcaption>
        </figure>

        <img
          src="https://picsum.photos/1920/1080"
          alt=""
          className={classNames("animate-reveal")}
          style={{
            animationRange: "cover 0% cover 33%",
            animationTimeline: "view()",
          }}
        />
      </div>
    </>
  );
}
