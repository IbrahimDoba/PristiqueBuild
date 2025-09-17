"use client";
import React, { useRef, useState } from "react";
import contact from "@/assets/contact.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const ContactSection = () => {
  const form = useRef<any>(null);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const userNumber = formData.get("user_number");
    const message = formData.get("message");

    if (!userName || !userEmail || !userNumber || !message) {
      setModalMessage("Incomplete fields. Please fill out all fields.");
      setShowModal(true);
      return;
    }

    emailjs
      .sendForm("service_a4o6xzq", "template_joqbe4r", form.current, {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setModalMessage("Email sent successfully!");
          setShowModal(true);
          form.current.reset();
        },
        (error) => {
          console.log(error);
          setModalMessage(`Failed to send email`);
          setShowModal(true);
        },
      );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      id="contactus"
      className="flex h-auto w-full items-center justify-center bg-white pb-10"
    >
      <div className="flex w-[80%] items-center justify-between max-md:flex-col">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex w-[70%] flex-1 flex-col items-start justify-between max-md:mt-6 max-md:w-[90%]"
        >
          <h1 className="text-primary text-4xl font-semibold max-lg:text-xl">
            Get in Touch
          </h1>
          <h3 className="max-lg:md my-5 text-xl">
            Ready to embark on your next construction project with PristiqBuild?
            Fill out the form below to get in touch with our team, or connect
            with us on social media to stay updated on our latest projects and
            news.
          </h3>
          <div className="w-[70%] max-md:w-full">
            <label className="text-txt mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-white p-2.5 sm:text-sm dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="my-3 w-[70%] max-md:w-full">
            <label className="text-txt mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black sm:text-sm dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="my-3 w-[70%] max-md:w-full">
            <label className="text-txt mb-2 block text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="user_number"
              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black sm:text-sm dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="w-[70%] max-md:w-full">
            <label className="text-txt mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              className="focus:ring-primary-600 focus:border-primary-600 block h-[150px] w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black sm:text-sm dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Message"
            />
          </div>
          <div className="bg-acc mt-3 flex w-[70%] items-center justify-center rounded-xl border max-md:w-full">
            <button
              type="submit"
              value="Send"
              className="text-bg w-[200px] p-3 text-2xl"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex flex-1 flex-col items-end justify-end">
          <Image src={contact} width={700} alt="contact png" />
          <div className="flex w-[50%] flex-col items-start justify-start max-md:w-full">
            <p className="flex">
              <CiLocationOn className="mr-3" size={30} /> First floor, Murjanatu
              House, 1 Zambezi Crescent, Wuse, Abuja.
            </p>
            <p className="my-3 flex">
              <IoCallOutline className="mr-3" size={30} />
              +234 708 718 3815
            </p>
            <p className="flex">
              <MdOutlineEmail className="mr-3" size={30} />
              info@pristiqbuild.com
            </p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="flex h-[300px] w-[300px] flex-col items-center justify-center rounded-lg bg-white p-6">
            <p className="text-center text-xl">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
