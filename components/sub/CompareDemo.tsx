import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div>
      <Compare
        firstImage="https://s3.eu-west-2.amazonaws.com/assets.archilink.co.uk/_2000xAUTO_crop_center-center_none/7547/Elevation-Lidar-underlay.webp"
        secondImage="https://s3.eu-west-2.amazonaws.com/assets.archilink.co.uk/_2000xAUTO_crop_center-center_none/7548/Elevation-Lidar-overlay-line.webp"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[210px] w-[340px] md:h-[400px] md:w-[69rem]"
        slideMode="hover"
      />
    </div>
  );
}
