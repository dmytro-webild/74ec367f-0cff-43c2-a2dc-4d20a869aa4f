"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Lake County Off Road"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="4x4 Repair Specialists You Can Trust"
      description="Lake County Off Road delivers expert automotive service for your 4x4, from routine maintenance to custom lift kits and diagnostics. Local expertise, straightforward service."
      buttons={[
        {
          text: "Call Us: 707-275-8828",
          href: "tel:7072758828",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-9bt8o2mc.jpg"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Automotive Repair",
          description: "Full-service mechanical repairs.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-2eb9gdu3.jpg",
        },
        {
          title: "Lift Kits",
          description: "Custom suspension modifications.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-c8ryhyrl.jpg",
        },
        {
          title: "Diagnostic Testing",
          description: "Advanced electronic diagnostics.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-zrdqjnwx.jpg",
        },
        {
          title: "Tires & Rims",
          description: "Off-road and street tire services.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-9bt8o2mc.jpg",
        },
        {
          title: "Tune Ups & Oil",
          description: "Routine engine maintenance.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-ev0czn5d.jpg",
        },
        {
          title: "Mufflers & Exhaust",
          description: "Custom and standard exhaust work.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-zrdqjnwx.jpg",
        },
        {
          title: "AC & Fluid Flush",
          description: "Cooling and fluid systems.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-2eb9gdu3.jpg",
        },
        {
          title: "Shocks & Trailer Repair",
          description: "Heavy-duty suspension and towing.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-c8ryhyrl.jpg",
        },
        {
          title: "Flat Repair",
          description: "Emergency tire puncture service.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-zrdqjnwx.jpg",
        },
        {
          title: "Fluids Check",
          description: "Essential fluid analysis.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-2eb9gdu3.jpg",
        },
      ]}
      title="Our Expert Services"
      description="Comprehensive automotive care designed for high-performance off-road vehicles."
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Quality You Can Count On"
      description="Delivering professional service to our local off-road community."
      metrics={[
        {
          id: "m1",
          value: "15+",
          title: "Years Experience",
          items: [
            "Expert diagnostics",
            "Technical precision",
          ],
        },
        {
          id: "m2",
          value: "2k+",
          title: "Vehicles Serviced",
          items: [
            "Off-road builds",
            "Daily drivers",
          ],
        },
        {
          id: "m3",
          value: "100%",
          title: "Customer Focus",
          items: [
            "Transparent quotes",
            "Local support",
          ],
        },
      ]}
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Visit or Call Our Shop"
      description="Located in Upper Lake, CA. Serving all off-road enthusiasts with transparent, expert care."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-c8ryhyrl.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1779057063923-ev0czn5d.jpg"
      logoText="Lake County Off Road"
      columns={[
        {
          title: "Address",
          items: [
            {
              label: "Upper Lake County, CA",
              href: "#",
            },
          ],
        },
        {
          title: "Phone",
          items: [
            {
              label: "707-275-8828",
              href: "tel:7072758828",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Email Us",
              href: "mailto:info@lakecountyoffroad.com",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
