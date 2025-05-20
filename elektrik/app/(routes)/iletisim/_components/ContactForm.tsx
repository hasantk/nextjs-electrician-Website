"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AOS from "aos";
import "aos/dist/aos.css";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});
const formSchema = z.object({
  name: z.string().min(2, {
    message: "İsim Alanını Boş Bırakmayın.",
  }),
  email: z.string().email({
    message: "Geçerli Mail Adresi Yazın.",
  }),
  message: z.string().min(10, {
    message: "Mesajınızı Yazın.",
  }),
  recaptcha: z.string().min(1, "Lütfen reCAPTCHA İle Doğrulayın."),
});

const ContactForm = () => {
  const MapEmbed = dynamic(() => import("./Harita"), {
    ssr: false,
  });
  useEffect(() => {
    AOS.init({
      duration: 1000, // animasyon süresi (ms)
      once: false, // bir kez oynasın (scroll ile tekrar tetiklenmesin)
    });
  }, []);

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      recaptcha: "",
      recaptchaToken: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });
    } catch (error) {}
  }
  return (
    <div>
      <div
        className="grid grid-row sm:grid-cols-2 max-w-4xl mx-auto p-6 gap-[50] shadow-xl border-gray-100 border-[0.20] mt-[80]"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="flex flex-col font-serif">
          <span className=" text-center text-2xl">İletişim</span>
          <div className="flex flex-col mt-[20]">
            <h2 className="text-lg">Adress:</h2>
            <p className="text-gray-800">
              📍 Yeşil Camii Mahallesi Topkapı Caddesi No:20/B İznik / Bursa
            </p>
          </div>
          <div className="flex flex-col mt-[20]">
            <h2 className="text-lg">Açılış Saati:</h2>
            <p className="text-gray-800">⏰ Pazartesi - Cuma: 09.00 - 19.00</p>
          </div>
          <div className="flex flex-col mt-[20]">
            <h2 className="text-lg">Telefon Numarası:</h2>
            <p className="text-gray-800">📞 +90 539 598 0668</p>
          </div>
        </div>
        <div className="mt-[0] sm:mt-[50]">
          {" "}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-serif text-md">
                      E-Posta Adresi
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="E-Posta Adresi Girin." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-serif text-md">
                      Ad Soyad
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="İsminizi Girin." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-serif text-md">Mesaj</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Mesajınızı Girin." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <ReCAPTCHA
                sitekey="6LddGSgrAAAAANP-k8SHyHuxSBRZ-F4fzKaVnbBD"
                onChange={(token: string | null) => {
                  setRecaptchaToken(token);
                  form.setValue("recaptcha", token || "");
                }}
                onExpired={() => {
                  setRecaptchaToken(null);
                  form.setValue("recaptcha", "");
                }}
              />
              <Button type="submit" className="bg-red-500 hover:bg-red-600">
                Gönder
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <MapEmbed />
    </div>
  );
};

export default ContactForm;
