"use client";

import { Button } from "@/components/button";
import classNames from "classnames";

export default function DrawerPage() {
  return (
    <>
      <dialog
        id="drawer"
        closedby="any"
        className={classNames(
          // Style the backdrop
          "backdrop:bg-black/20",

          // Position the dialog
          "fixed left-auto right-0 h-dvh w-80 rounded-s-2xl p-6",

          // Safari specifics
          "max-h-none",

          // Enable transitions
          "transition-all duration-300 ease-out transition-discrete",

          // Set initial position
          "starting:open:transform-[translateX(100%)] shadow-none translate-x-full",

          // Set open styles
          "open:shadow-2xl open:translate-x-0",

          // Animate backdrop opacity
          "backdrop:transition-opacity backdrop:duration-300 backdrop:opacity-0 open:backdrop:opacity-100 starting:open:backdrop:opacity-0",
        )}
      >
        <Button autoFocus command="close" commandfor="drawer">
          Close
        </Button>

        <p className="my-8">Hello world</p>

        <form method="dialog">
          <Button>OK</Button>
        </form>
      </dialog>
      <div className="h-screen grid place-items-center">
        <Button command="show-modal" commandfor="drawer">
          Open
        </Button>
      </div>
    </>
  );
}
