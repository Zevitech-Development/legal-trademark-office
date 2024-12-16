"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { contactUsFormSchema } from "@/schemas/contact-us-form-schema";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { LoaderCircle } from "lucide-react";
import Link from "next/link";

type ContactUsFormData = z.infer<typeof contactUsFormSchema>;

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (data: ContactUsFormData) => {
    setLoading(true);
    console.log(data);

    setTimeout(() => {
      setLoading(false);
      toast("Form has been submitted.", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      });
    }, 2000);
  };

  return (
    <div className="w-[500px] flex-center section-margin-standard">
      <Card
        className="w-full h-full bg-white rounded-xl flex flex-col gap-4"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px" }}
      >
        <CardHeader>
          <CardTitle className="font-inter text-[42px] font-bold text-heading-color">
            Get In Touch
          </CardTitle>
          <CardDescription>
            You can reach us anytime, we are here to help you out
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* FIRST AND LAST NAME FIELD */}
              <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-8">
                <FormField
                  control={control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-heading-color font-inter text-[14px]">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="eg: John"
                          {...field}
                          className="rounded-[5px] font-inter"
                        />
                      </FormControl>
                      <FormDescription className="font-inter text-[12px]">
                        Enter your first name here
                      </FormDescription>
                      <FormMessage className="text-red-600 text-[14px]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-heading-color font-inter text-[14px]">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="eg: Doe"
                          {...field}
                          className="rounded-[5px] font-inter"
                        />
                      </FormControl>
                      <FormDescription className="font-inter text-[12px]">
                        Enter your first name here
                      </FormDescription>
                      <FormMessage className="text-red-600 text-[14px]" />
                    </FormItem>
                  )}
                />
              </div>

              {/* EMAIL FIELD */}
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-heading-color font-inter text-[14px]">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="eg: johndoe@email.com"
                        {...field}
                        className="rounded-[5px] font-inter"
                      />
                    </FormControl>
                    <FormDescription className="font-inter text-[12px]">
                      Enter your email address here
                    </FormDescription>
                    <FormMessage className="text-red-600 text-[14px]" />
                  </FormItem>
                )}
              />

              {/* PHONE NUMBER FIELD */}
              <FormField
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-heading-color font-inter text-[14px]">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="eg: 1234567890"
                        {...field}
                        className="rounded-[5px] font-inter"
                      />
                    </FormControl>
                    <FormDescription className="font-inter text-[12px]">
                      Enter your phone number here
                    </FormDescription>
                    <FormMessage className="text-red-600 text-[14px]" />
                  </FormItem>
                )}
              />

              {/* MESSAGE FIELD */}
              <FormField
                control={control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-heading-color font-inter text-[14px]">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={12}
                        className="rounded-[5px] font-inter"
                        placeholder="Your message here..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="font-inter text-[12px]">
                      Enter your message here
                    </FormDescription>
                    <FormMessage className="text-red-600 text-[14px]" />
                  </FormItem>
                )}
              />

              <Button
                className="bg-primary-theme w-full h-[40px] mt-4 text-white font-inter !rounded-[5px] text-[16px] hover:bg-primary-theme"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-full h-full flex items-center justify-center gap-2">
                    <p>Submiting</p>{" "}
                    <LoaderCircle className="animate-spin text-heading-color" />
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="text-[14px] text-center leading-[20px] w-full flex-row flex flex-wrap justify-center gap-1">
          <p>By contacting with us, you agree to our</p>
          <Link
            href={"/terms-conditions"}
            className="text-heading-color font-bold underline"
          >
            Terms of Services
          </Link>
          <p> and</p>
          <Link
            href={"/privacy-policy"}
            className="text-heading-color font-bold underline"
          >
            Privacy Policy
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactUsForm;
