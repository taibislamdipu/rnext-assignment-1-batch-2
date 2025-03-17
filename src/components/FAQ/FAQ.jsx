import React from "react";
import FAQDots1 from "../icons/FAQDots1";
import FAQDots2 from "../icons/FAQDots2";
import FaqCard from "./FaqCard";

export default function FAQ() {
  const faqData = {
    title1: "FAQ",
    title2: "Any Questions? Look Here",
    desc1:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
  };

  const faqList = [
    {
      question1: "Is TailGrids well-documented?",
      answer1:
        "Yes! TailGrids comes with comprehensive documentation to help you get started quickly. It includes detailed guides, examples, and best practices for seamless integration.",
    },
    {
      question2: "Can I use TailGrids for commercial projects?",
      answer2:
        "Absolutely! TailGrids offers licensing options that allow usage in personal and commercial projects, making it a great choice for businesses and developers.",
    },
    {
      question3: "Does TailGrids support customization?",
      answer3:
        "Yes, TailGrids is highly customizable. You can tweak styles, components, and layouts to fit your brand or project requirements easily.",
    },
    {
      question4: "Is TailGrids compatible with popular frameworks?",
      answer4:
        "Yes! TailGrids works seamlessly with frameworks like React, Vue, and Next.js, ensuring flexibility and easy integration into your tech stack.",
    },
  ];

  return (
    <section class="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[520px] text-center">
              <span class="mb-2 block text-lg font-semibold text-primary">
                {faqData.title1}
              </span>
              <h2 class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                {faqData.title2}
              </h2>
              <p class="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                {faqData.desc1}
              </p>
            </div>
          </div>
        </div>
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4 lg:w-1/2">
            <FaqCard
              question={faqList[0].question1}
              answer={faqList[0].answer1}
            />
            <FaqCard
              question={faqList[1].question2}
              answer={faqList[1].answer2}
            />
          </div>
          <div class="w-full px-4 lg:w-1/2">
            <FaqCard
              question={faqList[2].question3}
              answer={faqList[2].answer3}
            />
            <FaqCard
              question={faqList[3].question4}
              answer={faqList[3].answer4}
            />
          </div>
        </div>
      </div>
      <div>
        <span class="absolute left-4 top-4 -z-[1]">
          <FAQDots1 />
        </span>
        <span class="absolute bottom-4 right-4 -z-[1]">
          <FAQDots2 />
        </span>
      </div>
    </section>
  );
}
