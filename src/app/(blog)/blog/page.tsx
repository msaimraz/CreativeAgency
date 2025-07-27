import React from "react";
import { Metadata } from "next";
import BlogModernMain from "@/pages/blog/blog";

export const metadata: Metadata = {
  title: "Liko - Blog Modern page",
};

const BlogModernPage = () => {
  return (
    <BlogModernMain/>
  );
};

export default BlogModernPage;
