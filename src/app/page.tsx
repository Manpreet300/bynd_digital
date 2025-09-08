"use client";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import { Elevate } from "@/components/elevate/elevate";
import { fraunces, montserrat } from "@/components/themes/typography";
import {Strategies} from "@/components/Strategies/strategies";

// import { CallToAction } from "@/components/presence_section/presence";

export default function HomePage() {
  return (
    <>
   <div><Header /></div>   
      <Hero />
      <Elevate />
      <Strategies />
    </>
  );
}
