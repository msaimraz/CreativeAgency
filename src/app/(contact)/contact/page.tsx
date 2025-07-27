import React from "react";
import { Metadata } from "next";
import ContactTwoMain from "@/pages/contact/contact";

export const metadata: Metadata = {
  title: "Liko - Contact 2 Page",
};

const ContactTwoPage = () => {
  return (
    <ContactTwoMain/>
  );
};

export default ContactTwoPage;
