// page.tsx
"use client";
import { styled } from "@mui/material/styles";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
// import { CallToAction } from "@/components/presence_section/presence";

const PageWrapper = styled('main')({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#fff",
  // ✅ REMOVED bottom padding. Now the hero section will extend to the bottom edge.
  padding: "0 4rem",
  boxSizing: "border-box",
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden', // Prevents any accidental scrollbars
});

export default function HomePage() {
  return (
    <PageWrapper>
      <Header />
      <Hero />
    
    </PageWrapper>

    
  );
}