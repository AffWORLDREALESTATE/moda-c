import { InsightsInspiration } from "@/src/view/landing/blog";
import { T } from "@/src/components/common/T";
import React from "react";

function Blog() {
  return (
    <div>
      <section className="pt-32 pb-12 px-4 bg-white">
        <div className=" mx-auto text-center">
          <h1 className="text-5xl font-medium mb-6 text-black font-serif font-bold">
            <T k="blog.title" fallback="Blog" />
          </h1>
        </div>
      </section>
      <div className=" mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-center  text-4xl font-serif font-bold">
          <T k="blog.list.introHeading" fallback="Living the Dubai Dream: Where Inspiration Meets Information" />
        </h1>
        <p className="text-center text-gray-600 mt-4">
         <T k="blog.list.introSubheading" fallback="Dive into our curated collection of articles, designed to enlighten, inspire, and guide you through Dubai’s dynamic real estate market." />
        </p>
      </div>
      <InsightsInspiration/>
    </div>
  );
}

export default Blog;
