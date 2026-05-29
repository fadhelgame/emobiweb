import { getContent } from "@/lib/content.server";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PartnersSection from "@/components/PartnersSection";
import LocationsSection from "@/components/LocationsSection";
import ArticlesSection from "@/components/ArticlesSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  const c = getContent();
  return (
    <>
      <HeroSection hero={c.hero} stats={c.stats} />
      <ServicesSection services={c.services} />
      <PortfolioSection portfolio={c.portfolio} />
      <PartnersSection partners={c.partners} />
      <LocationsSection locations={c.locations} />
      <ArticlesSection articles={c.articles} />
      <CTASection cta={c.cta} />
    </>
  );
}
