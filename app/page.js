import IvarHero from "./components/IvarHero";
import WhatIvarDoes from "./components/WhatIvarDoes";
import QuickActionsBand from "./components/QuickActionsBand";
import SignatureFeature from "./components/SignatureFeature";
import IndiaJourneyCircles from "./components/IndiaJourneyCircles";
import HomeCategoryCards from "./components/HomeCategoryCards";
import FeaturedCarousel from "./components/FeaturedCarousel";
import ComparisonSection from "./components/ComparisonSection";
import MakhanaStory from "./components/MakhanaStory";
import IngredientLibrary from "./components/IngredientLibrary";
import IngredientToProduct from "./components/IngredientToProduct";
import FoodInnovationGrid from "./components/FoodInnovationGrid";
import HowItWorksSteps from "./components/HowItWorksSteps";
import ImageTextSection from "./components/ImageTextSection";
import GoldCTABand from "./components/GoldCTABand";
import DarkCTA from "./components/DarkCTA";
import ContactCTABand from "./components/ContactCTABand";

export default function Home() {
  return (
    <main id="home">
      <IvarHero />
      <WhatIvarDoes />
      <QuickActionsBand />
      <SignatureFeature />
      <IndiaJourneyCircles />
      <HomeCategoryCards />
      <FeaturedCarousel />
      <ComparisonSection />
      <MakhanaStory />
      <IngredientLibrary />
      <IngredientToProduct />
      <FoodInnovationGrid />
      <HowItWorksSteps />
      <ImageTextSection
        img="/assets/hero-veg-fruit-table.jpg"
        imgAlt="Ivar packaging"
        imageSide="right"
        eyebrow="Packaging"
        title="Innovative Packaging for Better Food."
        text="Packaging protects freshness, improves convenience and brings great food to more people — designed with the same care as what's inside it."
        cta="Explore Packaging"
        ctaHref="/packaging"
      />
      <GoldCTABand />
      <DarkCTA
        img="/assets/hero-grain-bowl.jpg"
        eyebrow="Our Global Vision"
        title="From Indian Roots to Global Opportunities."
        text="Building better food for a brighter tomorrow — Indian goodness, global possibilities."
        cta="Partner with Ivar"
        ctaHref="/contact"
      />
      <ContactCTABand />
    </main>
  );
}
