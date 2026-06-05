"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";

import { Input } from "./input";
import { Textarea } from "./textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Please share project details"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (values: ContactValues) => {
    console.log("Contact form submission", values);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid gap-4 rounded-xl bg-white p-6 shadow-soft"
    >
      <Input placeholder="Your name" {...form.register("name")} />
      <Input
        type="email"
        placeholder="Work email"
        {...form.register("email")}
      />
      <Textarea
        placeholder="Tell us about your project"
        {...form.register("message")}
      />
      <Button type="submit" className="w-full sm:w-fit">
        Submit inquiry
      </Button>
    </form>
  );
}
