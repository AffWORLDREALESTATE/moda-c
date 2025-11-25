import { InsightsInspiration } from "@/src/view/landing/blog";
import HeroBanner from "@/src/components/common/hero-banner";
import React from "react";

function Blog() {
  return (
    <div>
      <HeroBanner title="Blogs" imageSrc="/images/bgImage.webp" videoSrc="/bgvideo.mp4" />
      <div className="pt-10">
        <InsightsInspiration />
      </div>
    </div>
  );
}

export default Blog;
