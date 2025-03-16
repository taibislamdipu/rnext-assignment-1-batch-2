import React from "react";

export default function LinkButton({ href, className, target }) {
  return (
    <a href={href} className={className} target={target ? target : "_self"}>
      Book Now
    </a>
  );
}
