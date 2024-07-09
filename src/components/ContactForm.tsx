"use client";
import { sendMail } from "@/utils/sendMail";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
type Props = {
  type: string;
};
type State = {
  name: string;
  email: string;
  number: number;
  message: string;
};
console.log(process.env.URL);
const ContactForm = (props: Props) => {
  const [state, setState] = useState<State>({
    email: "",
    message: "",
    name: "",
    number: 0,
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (
        !state.number ||
        !state.message ||
        !state.email ||
        !state.name ||
        !props.type
      ) {
        toast.error("Please Provide all Fields");
        return;
      } else {
        const { data } = await axios.post(
          `https://ravidentist.site/api/sendMail`,
          state
        );
        console.log(data);
        toast.success("Message Send Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Some Error Occured");
    }
  };
  return (
    <form className="space-y-6 dark:text-gray-50" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="text-sm">
          Full name
        </label>
        <input
          id="name"
          type="text"
          placeholder=""
          className="w-full p-3 rounded text-gray-950  bg-gray-50"
          value={state?.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-3 rounded text-gray-950 bg-gray-100"
          value={state?.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm">
          Number
        </label>
        <input
          id="number"
          type="number"
          className="w-full p-3 rounded text-gray-950 bg-gray-100"
          value={state?.number}
          onChange={(e) =>
            setState({ ...state, number: Number(e.target.value) })
          }
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          id="message"
          rows={3}
          className="w-full p-3 rounded text-gray-950 bg-gray-100"
          value={state?.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-rose-600 text-gray-50"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
