"use client";
import React, { useRef, useState } from "react";
import contact from "../../../assets/contact.png";
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
          console.log(error)
          setModalMessage(`Failed to send email`);
          setShowModal(true);
        }
      );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      id="contactus"
      className="flex w-full h-auto pb-10 justify-center items-center bg-white"
    >
      <div className="w-[80%] flex justify-between items-center max-md:flex-col">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-1 flex-col justify-between items-start w-[70%] max-md:mt-6 max-md:w-[90%]"
        >
          <h1 className="text-4xl font-semibold text-acc max-lg:text-xl">
            Get in Touch
          </h1>
          <h3 className="text-xl my-5 max-lg:md">
            Ready to embark on your next construction project with PristiqBuild?
            Fill out the form below to get in touch with our team, or connect
            with us on social media to stay updated on our latest projects and
            news.
          </h3>
          <div className="w-[70%] max-md:w-full">
            <label className="block mb-2 text-sm font-medium text-txt">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="bg-white border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="my-3 w-[70%] max-md:w-full">
            <label className="block mb-2 text-sm font-medium text-txt">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="my-3 w-[70%] max-md:w-full">
            <label className="block mb-2 text-sm font-medium text-txt">
              Phone Number
            </label>
            <input
              type="tel"
              name="user_number"
              className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="w-[70%] max-md:w-full">
            <label className="block mb-2 text-sm font-medium text-txt">
              Message
            </label>
            <textarea
              name="message"
              className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-[150px] p-2.5 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Message"
            />
          </div>
          <div className="flex w-[70%] mt-3 justify-center items-center bg-acc border rounded-xl max-md:w-full">
            <button
              type="submit"
              value="Send"
              className="text-2xl p-3 w-[200px] text-bg"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex flex-1 flex-col items-end justify-end">
          <Image src={contact} width={700} alt="contact png" />
          <div className="flex flex-col w-[50%] items-start justify-start max-md:w-full">
            <p className="flex">
              <CiLocationOn className="mr-3" size={30} /> wuse zone 5, Abuja
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[300px] h-[300px] justify-center  items-center flex flex-col p-6 rounded-lg">
            <p className="text-xl text-center">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
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
