import IvarHero from "./components/IvarHero";
import QuickActionsBand from "./components/QuickActionsBand";
import SignatureFeature from "./components/SignatureFeature";
import AllCollections from "./components/AllCollections";
import CollectionRows from "./components/CollectionRows";
import IdealCombo from "./components/IdealCombo";
import HowItWorksSteps from "./components/HowItWorksSteps";
import ImageTextSection from "./components/ImageTextSection";

export default function Home() {
  return (
    <main id="home">
      <IvarHero />
      <QuickActionsBand />
      <SignatureFeature />
      <AllCollections />
      <CollectionRows />
      <IdealCombo />
      <HowItWorksSteps />
      <ImageTextSection
        img="/assets/products/eat/category-packaging.png"
        imgAlt="Ivar packaging"
        imageSide="right"
        eyebrow="Packaging"
        title="Innovative Packaging for Better Food."
        text="Packaging protects freshness, improves convenience and brings great food to more people — designed with the same care as what's inside it."
        cta="Packaging — Coming Soon"
        ctaHref="/packaging"
      />
    </main>
  );
}
