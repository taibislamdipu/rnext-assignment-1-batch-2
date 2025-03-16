import React from "react";
import GiftIcon from "../icons/GiftIcon";
import LayoutIcon from "../icons/LayoutIcon";
import StackIcon from "../icons/StackIcon";
import VirtualToursIcon from "../icons/VirtualToursIcon";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const featuresData = {
    title: "Features",
    title2: "Main Features Of Play",
    desc1:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
  };

  const featuresList = [
    {
      icon: <GiftIcon />,
      title: "Premium Property Listings",
      desc: "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
      btnText: "Learn More",
    },
    {
      icon: <LayoutIcon />,
      title: "Personalized Property Matching",
      desc: "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
      btnText: "Learn More",
    },
    {
      icon: <StackIcon />,
      title: "Expert Guidance and Support",
      desc: "Benefit from the expertise of our dedicated team of real estate professionals..",
      btnText: "Learn More",
    },
    {
      icon: <VirtualToursIcon />,
      title: "Virtual Tours",
      desc: "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
      btnText: "Learn More",
    },
  ];

  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                {featuresData.title}
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                {featuresData.title2}
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                {featuresData.desc1}
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {featuresList.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              desc={feature.desc}
              btnText={feature.btnText}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
