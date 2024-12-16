import React from "react";

import LargeBlogCard from "./large-blog-card";
import SmallBlogCard from "./small-blog-card";

const RecentBlogPostsSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="lg:text-[32px] md:text-[22px] text-[14px] lg:leading-[42px] md:leading-[32px] leading-[20px] font-bold font-inter tracking-wider text-heading-color">
        Recent Blog Posts
      </h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-4">
        <LargeBlogCard />

        <div className="flex flex-col justify-between gap-4 col-span-1">
          <SmallBlogCard />

          <SmallBlogCard />

          <SmallBlogCard />
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPostsSection;
