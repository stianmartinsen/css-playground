// Ambient types for the WICG "html-in-canvas" proposal.
// Spec: https://github.com/WICG/html-in-canvas

import "react";

declare global {
  /**
   * Transferable snapshot of an element's rendered output.
   * Note: this is a proposal type and may change.
   */
  interface ElementImage {
    readonly width: number;
    readonly height: number;
    close(): void;
  }

  interface PaintEvent extends Event {
    readonly changedElements: readonly Element[];
  }

  interface HTMLCanvasElement {
    /**
     * Reflected boolean attribute for `<canvas layoutsubtree>`.
     * (IDL attribute name is camelCase, content attribute is lowercase.)
     */
    layoutSubtree: boolean;

    onpaint: ((this: HTMLCanvasElement, ev: PaintEvent) => unknown) | null;

    requestPaint(): void;
    captureElementImage(element: Element): ElementImage;
    getElementTransform(
      element: Element | ElementImage,
      drawTransform: DOMMatrix,
    ): DOMMatrix;
  }

  interface OffscreenCanvas {
    getElementTransform(
      element: Element | ElementImage,
      drawTransform: DOMMatrix,
    ): DOMMatrix;
  }

  interface CanvasRenderingContext2D {
    drawElementImage(element: Element | ElementImage, dx: number, dy: number): DOMMatrix;
    drawElementImage(
      element: Element | ElementImage,
      dx: number,
      dy: number,
      dwidth: number,
      dheight: number,
    ): DOMMatrix;
    drawElementImage(
      element: Element | ElementImage,
      sx: number,
      sy: number,
      swidth: number,
      sheight: number,
      dx: number,
      dy: number,
    ): DOMMatrix;
    drawElementImage(
      element: Element | ElementImage,
      sx: number,
      sy: number,
      swidth: number,
      sheight: number,
      dx: number,
      dy: number,
      dwidth: number,
      dheight: number,
    ): DOMMatrix;
  }

  interface OffscreenCanvasRenderingContext2D {
    drawElementImage(element: Element | ElementImage, dx: number, dy: number): DOMMatrix;
    drawElementImage(
      element: Element | ElementImage,
      dx: number,
      dy: number,
      dwidth: number,
      dheight: number,
    ): DOMMatrix;
    drawElementImage(
      element: Element | ElementImage,
      sx: number,
      sy: number,
      swidth: number,
      sheight: number,
      dx: number,
      dy: number,
    ): DOMMatrix;
    drawElementImage(
      element: Element | ElementImage,
      sx: number,
      sy: number,
      swidth: number,
      sheight: number,
      dx: number,
      dy: number,
      dwidth: number,
      dheight: number,
    ): DOMMatrix;
  }

  interface WebGLRenderingContext {
    texElementImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLint,
      format: GLenum,
      type: GLenum,
      element: Element | ElementImage,
    ): void;
    texElementImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLint,
      width: GLsizei,
      height: GLsizei,
      format: GLenum,
      type: GLenum,
      element: Element | ElementImage,
    ): void;
    texElementImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLint,
      sx: GLfloat,
      sy: GLfloat,
      swidth: GLfloat,
      sheight: GLfloat,
      format: GLenum,
      type: GLenum,
      element: Element | ElementImage,
    ): void;
    texElementImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLint,
      sx: GLfloat,
      sy: GLfloat,
      swidth: GLfloat,
      sheight: GLfloat,
      width: GLsizei,
      height: GLsizei,
      format: GLenum,
      type: GLenum,
      element: Element | ElementImage,
    ): void;
  }

  interface GPUQueue {
    copyElementImageToTexture(
      source: Element | ElementImage,
      destination: GPUImageCopyTextureTagged,
    ): void;
    copyElementImageToTexture(
      source: Element | ElementImage,
      width: GPUIntegerCoordinate,
      height: GPUIntegerCoordinate,
      destination: GPUImageCopyTextureTagged,
    ): void;
    copyElementImageToTexture(
      source: Element | ElementImage,
      sx: number,
      sy: number,
      swidth: number,
      sheight: number,
      destination: GPUImageCopyTextureTagged,
    ): void;
    copyElementImageToTexture(
      source: Element | ElementImage,
      sx: number,
      sy: number,
      swidth: number,
      sheight: number,
      width: GPUIntegerCoordinate,
      height: GPUIntegerCoordinate,
      destination: GPUImageCopyTextureTagged,
    ): void;
  }
}

declare module "react" {
  // React's DOM attributes don't know about this experimental boolean attribute yet.
  interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
    layoutsubtree?: boolean | "" | "true" | "false";
  }
}

export {};

