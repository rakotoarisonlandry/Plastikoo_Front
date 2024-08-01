import Image from "next/image";
import React from "react";

type Props = {};

function Education({}: Props) {
  return (
    <div className="flex">
      <h1></h1>
      <Image
        src="logotransparent.png"
        alt="Iamgelogo"
        width="200"
        height="200"
      />
    </div>
  );
}

export default Education;
