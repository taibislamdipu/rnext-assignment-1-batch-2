import React from "react";
import LocationIcon from "../icons/LocationIcon";
import MailIcon from "../icons/MailIcon";
import ContactForm from "./ContactForm";

export default function Contact() {
  const contactData = {
    title1: "CONTACT US",
    title2: "Let's talk about your problem.",
    title3: "Our Location",
    title3Desc: "401 Broadway, 24th Floor, Orchard Cloud View, London",
    title4: "How Can We Help?",
    title4Desc1: "info@yourdomain.com",
    title4Desc2: "contact@yourdomain.com",
  };

  return (
    <section id="contact" class="relative py-20 md:py-[120px]">
      <div class="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div class="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div class="container px-4">
        <div class="-mx-4 flex flex-wrap items-center">
          <div class="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div class="ud-contact-content-wrapper">
              <div class="ud-contact-title mb-12 lg:mb-[150px]">
                <span class="mb-6 block text-base font-medium text-dark dark:text-white">
                  {contactData.title1}
                </span>
                <h2 class="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  {contactData.title2}
                </h2>
              </div>
              <div class="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div class="mb-8 flex w-[330px] max-w-full">
                  <div class="mr-6 text-[32px] text-primary">
                    <LocationIcon />
                  </div>
                  <div>
                    <h5 class="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      {contactData.title3}
                    </h5>
                    <p class="text-base text-body-color dark:text-dark-6">
                      {contactData.title3Desc}
                    </p>
                  </div>
                </div>
                <div class="mb-8 flex w-[330px] max-w-full">
                  <div class="mr-6 text-[32px] text-primary">
                    <MailIcon />
                  </div>
                  <div>
                    <h5 class="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      {contactData.title4}
                    </h5>
                    <p class="text-base text-body-color dark:text-dark-6">
                      {contactData.title4Desc1}
                    </p>
                    <p class="mt-1 text-base text-body-color dark:text-dark-6">
                      {contactData.title4Desc2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
