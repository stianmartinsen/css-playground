import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    ignoreIssue: [
      {
        path: "src/app/globals.css",
      },
    ],
  },
};

export default nextConfig;
