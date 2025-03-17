import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function Team() {
  const teamData = {
    title1: "Our Team Members",
    title2: "Our Clients",
    desc1:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
  };

  const teamMemberData = [
    {
      name: "John Doe",
      position: "Founder, CEO",
      image: "/public/assets/images/team/team-01.png",
    },
    {
      name: "Jane Smith",
      position: "Designer, UX/UI",
      image: "/public/assets/images/team/team-02.png",
    },
    {
      name: "Mark Johnson",
      position: "Developer, Frontend",
      image: "/public/assets/images/team/team-03.png",
    },
    {
      name: "Lisa Wilson",
      position: "Designer, UX/UI",
      image: "/public/assets/images/team/team-04.png",
    },
  ];

  return (
    <section
      id="team"
      class="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[485px] text-center">
              <span class="mb-2 block text-lg font-semibold text-primary">
                {teamData.title1}
              </span>
              <h2 class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                {teamData.title2}
              </h2>
              <p class="text-base text-body-color dark:text-dark-6">
                {teamData.desc1}
              </p>
            </div>
          </div>
        </div>
        <div class="-mx-4 flex flex-wrap justify-center">
          {teamMemberData.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              position={member.position}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
