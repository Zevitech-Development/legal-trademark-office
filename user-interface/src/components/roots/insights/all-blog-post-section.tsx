import React from "react";

import BlogCard from "@/components/roots/insights/blog-card";

const AllBlogPostSection = () => {
  return (
    <section className="flex flex-col gap-4 section-margin-standard">
      <h1 className="lg:text-[32px] md:text-[22px] text-[14px] lg:leading-[42px] md:leading-[32px] leading-[20px] font-bold font-inter tracking-wider text-heading-color">
        All Blog Posts
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8 mt-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default AllBlogPostSection;
