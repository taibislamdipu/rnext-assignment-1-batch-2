import React from "react";
import PropertyCard from "./PropertyCard";

export default function Properties() {
  const propertiesHeroData = {
    title1: "Properties",
    title2: "Grab your Dream Property",
    desc1:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
  };

  const propertiesList = [
    {
      title: "Modern Design Villa",
      price: "3000.00",
      noOfBedrooms: "3",
      noOfBathtub: "2",
      image: "/public/assets/images/hotel/room-1.jpeg",
    },
    {
      title: "Luxury Apartment",
      price: "2500.00",
      noOfBedrooms: "2",
      noOfBathtub: "1",
      image: "/public/assets/images/hotel/room-2.jpg",
    },
    {
      title: "Cozy Cottage",
      price: "1800.00",
      noOfBedrooms: "2",
      noOfBathtub: "1",
      image: "/public/assets/images/hotel/room-3.jpg",
    },
    {
      title: "Penthouse Suite",
      price: "5000.00",
      noOfBedrooms: "4",
      noOfBathtub: "3",
      image: "/public/assets/images/hotel/room-3.jpg",
    },
    {
      title: "Beachfront Bungalow",
      price: "4000.00",
      noOfBedrooms: "3",
      noOfBathtub: "2",
      image: "/public/assets/images/hotel/room-5.jpg",
    },
    {
      title: "Urban Loft",
      price: "2200.00",
      noOfBedrooms: "1",
      noOfBathtub: "1",
      image: "/public/assets/images/hotel/room-6.jpg",
    },
  ];

  return (
    <section>
      <div class="container">
        <div class="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span class="mb-2 block text-lg font-semibold text-primary">
            {propertiesHeroData.title1}
          </span>
          <h2 class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            {propertiesHeroData.title2}
          </h2>
          <p class="text-base text-body-color dark:text-dark-6">
            {propertiesHeroData.desc1}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertiesList.map((property) => (
            <PropertyCard
              key={property.title}
              title={property.title}
              price={property.price}
              noOfBedrooms={property.noOfBedrooms}
              noOfBathtub={property.noOfBathtub}
              image={property.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
