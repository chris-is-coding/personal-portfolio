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
      <SectionHeading>About Christo</SectionHeading>
      <p className="mb-3">
        After freelancing as an{" "}
        <span className="font-bold">SEO specialist</span>, I decided to pursue my
        passion for programming. I enrolled in a university and coding bootcamps and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline font-bold">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also proficient on building websites using WordPress and HTML5 & CSS3. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-bold">full-time position as a website
        developer.</span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy riding my
        motorcycle to the beach, and relax there. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-bold">Android Application Development</span>. I'm also
        learning how to bake bread & pastries.
      </p>
    </motion.section>
  );
}
