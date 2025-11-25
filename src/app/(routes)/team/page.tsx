import TeamPage from "@/src/view/team/teamPage";
import HeroBanner from "@/src/components/common/hero-banner";

export const metadata = {
  title: "Our Luxury Team - Modac Real Estate",
  description: "Meet our exceptional team of luxury real estate professionals in Dubai. Expert agents dedicated to making your property dreams come true.",
};

export default function Team() {
  return (
    <div>
      <HeroBanner title="Our Team" imageSrc="/images/bgImage.webp" videoSrc="/bgvideo.mp4" heightClassName="h-[70vh]" />
      <TeamPage />
    </div>
  );
}
