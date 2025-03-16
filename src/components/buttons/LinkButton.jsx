import React from "react";

export default function LinkButton({ href, className, target, children }) {
  return (
    <a href={href} className={className} target={target ? target : "_self"}>
      {children}
    </a>
  );
}
