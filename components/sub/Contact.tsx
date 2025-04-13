// Contact.tsx
"use client";

import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm("service_ibub44c", "template_glq6jph", form.current, {
        publicKey: "ObnkQm06WHHN-hv5B",
      })
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        form.current?.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error("FAILED...", error.text);
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center p-8 min-h-screen -mt-16 text-white z-[20]" // Added z-index
    >
      <h1 className="text-5xl font-rubik mb-8">Contact</h1>

      <form
        className="flex flex-col gap-8 w-full max-w-sm sm:max-w-lg lg:max-w-2xl"
        onSubmit={sendEmail}
        ref={form}
      >
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          required
          className="w-full p-4 rounded-xl border font-robotoMono border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-4 rounded-xl border font-robotoMono border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full p-4 rounded-xl h-64 border resize-none font-robotoMono border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-9 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-md transition-transform transform hover:scale-105 active:translate-y-1 mx-auto"
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </section>
  );
};

export default Contact;
