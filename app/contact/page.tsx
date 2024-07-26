import Image from "next/image";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex w-full h-full bg-secondary">
      <Image
        src="/images/contact.jpg"
        alt="Concact image"
        width="200"
        height="200"
      />
    </div>
  );
};

export default Contact;
