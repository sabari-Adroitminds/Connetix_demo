"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "./inputs/Input";
import Select from "./inputs/Select";
import Textarea from "./inputs/Textarea";
import { Button } from "@/components/ui/button";
import CheckBox from "./inputs/CheckBox";
import { Form } from "../ui/form";
// import { Form } from "@/components/form";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]*$/, "Please enter a valid phone number"),
  country: z.string().min(1, "Please select a country"),
  questions: z.string().min(1, "Please select a question type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacy: z.boolean({
    required_error: "You must accept the privacy policy to continue",
  }),
  newsletter: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

const BecomeRetailer = () => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      questions: "",
      message: "",
      privacy: false,
      newsletter: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className=" w-full max-w-[1529px] bg-yellow-background rounded-[20px] p-5 lg:p-9">
        <div className="w-full flex flex-col-reverse xl:flex-row  gap-10 h-fit">
          <div className="w-full max-w-[638px] rounded-[20px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[20px]"
            >
              <source src="/videos/retailer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full max-w-[752px]">
            {/* heading */}
            <div className="w-full max-w-[649px]">
              <h2 className="text-5xl font-medium text-navy mb-4">
                Become a Retailer
              </h2>
              <span className="text-[16px] leading-[26px] tracking-[-0.5px] text-navy font-medium">
                We&apos;d love to hear from you. Please use the form below for
                all your Connetix inquiries, questions and feedback.
              </span>
            </div>

            {/* form */}
            <div className="h-fit mt-8 w-full">
              <Form {...methods}>
                <form
                  className="flex flex-col gap-5"
                  onSubmit={methods.handleSubmit(onSubmit)}
                >
                  <div className="w-fit flex flex-row flex-wrap items-center max-lg:justify-center gap-6">
                    <Input
                      name="firstName"
                      type="text"
                      containerClassName="lg:w-fit w-full sm:max-w-[664px] min-w-[320px]"
                      className="h-[56px]"
                      variant="white_rounded"
                      label="First Name"
                      placeholder="First Name"
                      isRequired
                    />

                    <Input
                      name="lastName"
                      type="text"
                      containerClassName="lg:w-fit w-full sm:max-w-[664px] min-w-[320px]"
                      className="h-[56px]"
                      variant="white_rounded"
                      label="Last Name"
                      placeholder="Last Name"
                      isRequired
                    />
                  </div>

                  <div className="w-fit flex flex-row flex-wrap items-center max-lg:justify-center gap-6">
                    <Input
                      name="email"
                      type="email"
                      className="h-[56px] w-full min-w-[320px]"
                      containerClassName="lg:w-fit w-full  sm:max-w-[664px] min-w-[320px]"
                      variant="white_rounded"
                      label="Email Address"
                      placeholder="Email Address"
                      isRequired
                    />
                    <Input
                      name="phone"
                      type="tel"
                      className="h-[56px] min-w-[320px]"
                      containerClassName="lg:w-fit w-full sm:max-w-[664px] min-w-[320px]"
                      variant="white_rounded"
                      label="Phone"
                      placeholder="Phone"
                      isRequired
                    />
                  </div>

                  <div className="w-fit flex flex-row flex-wrap items-center max-lg:justify-center gap-6">
                    <Select
                      name="country"
                      placeholder="Select Country"
                      containerClassName="lg:w-fit w-full sm:max-w-[664px] min-w-[320px]"

                      label="Select Country"
                      options={[
                        { value: "us", label: "United States" },
                        { value: "ca", label: "Canada" },
                        { value: "uk", label: "United Kingdom" },
                      ]}
                      isRequired
                      focusColor="blue-500"
                      variant="white_rounded"
                      className="h-[56px] min-w-[320px]"
                    />

                    <Select
                      name="questions"
                      label="What can we help you with"
                      placeholder="What can we help you with"
                      containerClassName="lg:w-fit w-full sm:max-w-[664px] min-w-[320px]"

                      options={[
                        { value: "product", label: "Product Information" },
                        { value: "wholesale", label: "Wholesale Inquiry" },
                        {
                          value: "distribution",
                          label: "Distribution Partnership",
                        },
                        { value: "other", label: "Other" },
                      ]}
                      isRequired
                      focusColor="blue-500"
                      variant="white_rounded"
                      className="h-[56px] min-w-[320px]"
                    />
                  </div>

                  <div className="w-full flex flex-row flex-wrap items-center max-lg:justify-center gap-6">
                    <Textarea
                      name="message"
                      label="Message"
                      placeholder="Message"
                      rows={10}
                      isRequired
                      focusColor="blue-500"
                      variant="white_rounded"
                      className="w-full h-40 max-w-[664px]"
                    />
                  </div>

                  <div className="flex flex-col gap-5">
                    <CheckBox
                      name="newsletter"
                      label="Subscribe to the Connetix Newsletter to receive exclusive promotions, offers and more!"
                    />
                    <CheckBox
                      name="privacy"
                      label="I agree to the Privacy Policy (Required)"
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-yellow hover:bg-yellow-light text-navy font-medium h-[50px] rounded-full transition-colors duration-200"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeRetailer;
