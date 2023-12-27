"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After a year of working as an{" "}
        <span className="font-bold">SEO specialist</span>, I decided to pursue my
        passion for website development. I enrolled in a university and watch numerous web development tutorials where I learned{" "}
        <span className="font-medium">web development and how I can utilize it as an SEO</span>.{" "}
        My favorite part of web development is the
        <span className="italic">problem-solving aspect</span>. I <span className="underline font-bold">loveee</span> the
        feeling of finally figuring out a solution to a development issue. With persistence, I've learned and mastered WordPress and also learned HTML, CSS, and JavaScript. Currently, I'm looking for a{" "}
        <span className="font-bold">full-time position as a website
        developer or SEO specialist.</span>
      </p>
    </motion.section>
  );
}
