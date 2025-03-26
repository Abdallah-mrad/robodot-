export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Chiffres from "@/components/chiffres";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      {/* <PageIllustration /> */}
      {/* <Hero /> */}
      <Features />
      {/* <Testimonials /> */}
      <Workflows />
      <Chiffres/>
      <Cta />
    </>
  );
}
