"use client";

import dynamic from "next/dynamic";

const GlobeCanvas = dynamic(() => import("./GlobeCanvas"), {
  ssr: false,
});

export default function GlobeClient() {
  return <GlobeCanvas />;
}
