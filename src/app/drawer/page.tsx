"use client";

import { Button } from "@/components/button";
import classNames from "classnames";

export default function DrawerPage() {
  return (
    <div className="h-screen grid place-items-center">
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
          "ml-auto mr-0 h-screen w-80 p-6 rounded-s-2xl",

          // Enable transitions
          "transition-all duration-200 ease-out transition-discrete",

          // Set initial position
          "starting:open:translate-x-full shadow-none translate-x-full",

          // Set open styles
          "open:shadow-2xl open:translate-x-0",

          // Animate backdrop opacity
          "backdrop:transition-all backdrop:opacity-0 open:backdrop:opacity-100 starting:open:backdrop:opacity-0"
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

      <Button onClick={() => document.querySelector("dialog")?.showModal()}>
        Open
      </Button>
    </div>
  );
}
