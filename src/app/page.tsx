"use client";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import { Elevate } from "@/components/elevate/elevate";
import GallerySection from "@/components/ProjectHighlight/project";
import { ProjectHighlights } from "@/components/HighlightText/ProjectHighlight";
import { GlobeHighlightText } from "@/components/HighlightText/GlobeHighlightText";
import { Globe } from "@/components/globe/globe";
import {InformationSection} from "@/components/information/InformationSection";

// import { CallToAction } from "@/components/presence_section/presence";

export default function HomePage() {
  return (
    <>
   <div><Header /></div>   
      <Hero />
      <Elevate />
      <InformationSection />
      <ProjectHighlights />
      <GallerySection />
      <GlobeHighlightText />
      <Globe />
    </>
  );
}
