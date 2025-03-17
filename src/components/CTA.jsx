import React from "react";
import CTASvg1 from "./icons/CTASvg1";
import CTASvg2 from "./icons/CTASvg2";

export default function CTA() {
  const CTAData = {
    title1: "What Are You Looking For?",
    title2: "Get Started Now",
    desc1:
      "There are many variations of passages of Lorem Ipsum but the majority have suffered in some form.",
    btnText1: "Let's have a meeting",
  };

  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                  <span>{CTAData.title1}</span>
                  <span className="text-3xl font-normal md:text-[40px]">
                    {CTAData.title2}
                  </span>
                </h2>
                <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                  {CTAData.desc1}
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                >
                  {CTAData.btnText1}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <CTASvg1 />
        </span>
        <span className="absolute bottom-0 right-0">
          <CTASvg2 />
        </span>
      </div>
    </section>
  );
}
