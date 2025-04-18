"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => <div>Loading globe...</div>,
});

export const GLobe = () => {
  return (
    <div className="max-w-full overflow-hidden">
      <Globe
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
        backgroundColor="#00000000"
        lineHoverPrecision={0}
        polygonsTransitionDuration={300}
      />
    </div>
  );
};
