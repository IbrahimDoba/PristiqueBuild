import ContactSection from "@/components/sections/contact/Contact";
import { Metadata } from "next";
import React from "react";

function Contact() {
  const metadata: Metadata = {
    title: "Contact Pristiq Build",
    description: "Contact the Pristiq Build Team.",
  };

  return (
    <main>
      <ContactSection />
    </main>
  );
}

export default Contact;
