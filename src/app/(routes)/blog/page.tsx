import { InsightsInspiration } from "@/src/view/landing/blog";
import { T } from "@/src/components/common/T";
import React from "react";

function Blog() {
  return (
    <div className="pt-28">
      <section className="px-4 mb-6">
        <h1 className="text-center text-4xl font-serif font-bold text-[#0a4b6f]">Blogs</h1>
      </section>
      <InsightsInspiration />
    </div>
  );
}

export default Blog;
