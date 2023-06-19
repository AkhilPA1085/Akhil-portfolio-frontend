'use client';
import React, { useState, useRef } from "react";
import ContentWrapper from "../components/common/ContentWrapper";
import Link from "next/link";
import MotionAnimation from "../components/common/MotionAnimation";
import { postData } from "../../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const telRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      tel: telRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    try {
    const response = await postData('/messages',formData)

      if (!response.ok) {
        throw new Error("Error submitting form data");
      }

      toast.success("Form data submitted successfully");
      console.log("Form data submitted successfully")

      nameRef.current.value = "";
      emailRef.current.value = "";
      telRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact mt-12 pt-12">
      <ToastContainer />
      <ContentWrapper>
        <div className="text-center text-titleColor text-4xl uppercase tracking-wider">
          Connect with me
        </div>
        <MotionAnimation>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              ref={nameRef}
              type="text"
              placeholder="Your Name"
              name="name"
              className="border-2 border-inherit px-2 w-full focus:outline-none required"
              defaultValue=""
            />
            <input
              ref={emailRef}
              type="email"
              placeholder="Your Email Id"
              name="email"
              className="border-2 border-inherit px-2 w-full focus:outline-none required"
              defaultValue=""
            />
            <input
              ref={telRef}
              type="tel"
              placeholder="Your Contact Number"
              name="tel"
              className="border-2 border-inherit px-2 w-full focus:outline-none required"
              defaultValue=""
            />
            <input
              ref={subjectRef}
              type="text"
              placeholder="Subject"
              name="subject"
              className="border-2 border-inherit px-2 w-full focus:outline-none required"
              defaultValue=""
            />
            <textarea
              ref={messageRef}
              rows={5}
              cols={20}
              placeholder="Message"
              name="message"
              className="border-2 border-inherit px-2 w-full focus:outline-none required"
              defaultValue=""
            ></textarea>
            <button
              type="submit"
              className="text-white font-bold uppercase tracking-wide bg-titleColor py-3 px-5 shadow"
            >
              Submit
            </button>
          </form>
        </MotionAnimation>
      </ContentWrapper>
    </div>
  );
};

export default ContactForm;
