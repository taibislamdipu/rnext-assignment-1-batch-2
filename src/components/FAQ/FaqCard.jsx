import React from "react";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";

export default function FaqCard({ question, answer }) {
  return (
    <div class="mb-12 flex lg:mb-[70px]">
      <div class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
        <QuestionMarkIcon />
      </div>
      <div class="w-full">
        <h3 class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {question}
        </h3>
        <p class="text-base text-body-color dark:text-dark-6">{answer}</p>
      </div>
    </div>
  );
}
