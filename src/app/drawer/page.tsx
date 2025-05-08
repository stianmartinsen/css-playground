"use client";

import { Button } from "@/components/button";
import classNames from "classnames";

export default function DrawerPage() {
  return (
    <>
      <dialog
        // Close the dialog if the user clicks outside of it
        onClick={(e) => {
          const dialog = e.target as HTMLDialogElement;
          const rect = dialog.getBoundingClientRect();
          const isInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width;
          if (!isInDialog) {
            dialog.close();
          }
        }}
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
          "starting:open:[transform:translateX(100%)] shadow-none translate-x-full",

          // Set open styles
          "open:shadow-2xl open:translate-x-0",

          // Animate backdrop opacity
          "backdrop:transition-opacity backdrop:duration-300 backdrop:opacity-0 open:backdrop:opacity-100 starting:open:backdrop:opacity-0"
        )}
      >
        <Button
          autoFocus
          onClick={() => document.querySelector("dialog")?.close()}
        >
          Close
        </Button>

        <p className="my-8">Hello world</p>

        <form method="dialog">
          <Button>OK</Button>
        </form>
      </dialog>
      <div className="h-screen grid place-items-center">
        <Button onClick={() => document.querySelector("dialog")?.showModal()}>
          Open
        </Button>
      </div>
    </>
  );
}
