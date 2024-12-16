import React from "react";

import { Button } from "@/components/ui/button";
import RecentBlogPostsSection from "@/components/roots/insights/recent-blog-posts-section";
import AllBlogPostSection from "@/components/roots/insights/all-blog-post-section";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const InsightsPage = () => {
  return (
    <main className="layout-standard mt-[4rem]">
      <div className="section-margin-standard section-padding-standard w-full flex-center flex-col gap-2">
        <h1 className="lg:text-[42px] md:text-[32px] text-[22px] lg:leading-[52px] md:leading-[42px] leading-[32px] font-bold font-inter tracking-wider text-heading-color text-center">
          Inside Design: Stories and interviews
        </h1>
        <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-[26px] md:leading-[24px] leading-[22px] text-center">
          Subscribe to learn about new product features, the latest in
          technology, and updates
        </p>

        <div className="md:w-[500px] w-full lg:h-[60px] h-[50px] rounded-xl border-2 mt-8 flex items-center justify-between pl-4 pr-1">
          <p className="text-black/40">Enter your email</p>
          <Button className="px-4 lg:h-[50px] h-[40px] rounded-lg bg-primary-theme text-white !animation-standard hover:bg-primary-hovered">
            Subscribe
          </Button>
        </div>
      </div>

      <RecentBlogPostsSection />

      <AllBlogPostSection />

      <Pagination className="my-[4rem]">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
};

export default InsightsPage;
