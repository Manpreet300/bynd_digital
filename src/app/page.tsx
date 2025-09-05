"use client";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import { Elevate } from "@/components/elevate/elevate";
// import { CallToAction } from "@/components/presence_section/presence";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Elevate />
    </>
  );
}
