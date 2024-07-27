"use client";

import { Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const info = [
  {
    icon: <FaUser />,
    title: "Name",
    description: "Anmol Gupta",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "anmolgupta@asu.edu",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "anmolguptamanit@asu.edu",
  },
];

const Contact = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "20c56cef-df7c-4721-83f0-2560e2e31a06");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("Message sent successfully");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.7, duration: 0.4, ease: "easeInOut" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] xl:w-[65%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's chat!</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  required
                  type="text"
                  name="First Name"
                  placeholder="First Name"
                />
                <Input
                  type="text"
                  name="Second Name"
                  placeholder="Second Name"
                />
                <Input required type="email" name="email" placeholder="Email" />
              </div>
              <Textarea
                required
                placeholder="Your message"
                name="message"
              ></Textarea>
              <Button className="max-w-40" type="submit">
                Send
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li className="flex items-center gap-6" key={index}>
                    <div className="w-[52px] h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-xl">{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-[20px]">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
