import React from "react";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";

export default function Footer() {
  const footerData = [
    {
      about:
        " We create digital experiences for brands and companies by using technology.",
      image: "assets/images/logo/logo.svg",
    },
  ];

  return (
    <footer class=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div class="container">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div class="mb-10 w-full">
              <a
                href="javascript:void(0)"
                class="mb-6 inline-block  max-h-[100px]"
              >
                <img src={footerData[0].image} alt="logo" class="max-w-full" />
              </a>
              <p class="mb-8 lg:max-w-[270px] text-base text-gray-7">
                {footerData[0].about}
              </p>
              <div class="-mx-3 flex items-center">
                <a
                  href="javascript:void(0)"
                  class="px-3 text-gray-7 hover:text-white"
                >
                  <FacebookIcon />{" "}
                </a>
                <a
                  href="javascript:void(0)"
                  class="px-3 text-gray-7 hover:text-white"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="javascript:void(0)"
                  class="px-3 text-gray-7 hover:text-white"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="javascript:void(0)"
                  class="px-3 text-gray-7 hover:text-white"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div class="mb-10 w-full">
              <h4 class="mb-9 text-lg font-semibold text-white">About Us</h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div class="mb-10 w-full">
              <h4 class="mb-9 text-lg font-semibold text-white">Features</h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Refund policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div class="mb-10 w-full">
              <h4 class="mb-9 text-lg font-semibold text-white">Latest blog</h4>
              <div class="flex flex-col gap-8">
                <a
                  href="blog-details.html"
                  class="group flex items-center gap-[22px]"
                >
                  <div class="overflow-hidden rounded">
                    <img
                      src="./assets/images/blog/blog-footer-01.jpg"
                      alt="blog"
                    />
                  </div>
                  <span class="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                    I think really important to design with...
                  </span>
                </a>
                <a
                  href="blog-details.html"
                  class="group flex items-center gap-[22px]"
                >
                  <div class="overflow-hidden rounded">
                    <img
                      src="./assets/images/blog/blog-footer-02.jpg"
                      alt="blog"
                    />
                  </div>
                  <span class="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                    Recognizing the need is the primary...
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
