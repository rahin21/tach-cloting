import Link from "next/link";
import React from "react";

const contacts = [
  {
    title: "Contact us",
    name: "info@tachclothing.com",
    link: "info@tachclothing.com",
  },
  {
    title: "Follow us",
    name: "Instagram",
    link: "www.instagram.com",
  },
  {
    title: "Policies",
    name: "Shiping & Returns",
    link: "/copa-de-policies",
  },
];

function ContactUs() {
  return (
    <div className=" md:-ms-80 md:ps-80 pe-5 py-10 md:py-20 flex md:flex-row flex-col justify-center lg:gap-56 md:gap-40 gap-10 bg-[#D6EBEB]">
      {contacts.map((contact,i) => (
        <div key={i} className="text-center">
          <h1 className="font-semibold text-lg">{contact.title}</h1>
					<Link href={contact.link} className="font-medium">{contact.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default ContactUs;
