import PageIllustration from "@/components/page-illustration";
import HeroHome from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Chiffres from "@/components/chiffres";
import Industries from "@/components/Industries";
import Experience from "@/components/Experience";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Features />
      <HeroHome />
      <Workflows />
      <Testimonials />
      <Industries />
      <Experience />
      <Chiffres/>
      <Cta />
    </>
  );
}