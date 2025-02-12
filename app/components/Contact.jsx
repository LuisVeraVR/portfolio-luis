"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, Check, X } from "lucide-react";
import { networkData } from "@/assets/assets";
import { translations } from "../utils/translations";
import { useAppContext } from "@/components/context/AppContext";

function Contact() {
  const { language } = useAppContext();
  const { theme } = useAppContext();
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
    setSubmitResult(null);
  }, [language]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value.trim();
    const email = form[1].value.trim();
    const message = form[2].value.trim();

    if (!name || !email || !message) {
      setErrorMessage(t.contact.errors.requiredFields);
      setSubmitResult("error");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "b1206e69-178e-44a6-a3e5-5f2e7dd02662",
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(t.contact.errors.formSubmissionError);
      }

      setSubmitResult("success");
    } catch (error) {
      setErrorMessage(t.contact.errors.formSubmissionErrorAgain);
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo dark:text-white">{t.contact.title}</h4>
      <h2 className="text-center text-5xl font-Ovo dark:text-white">{t.contact.subtitle}</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white">
        {t.contact.description}
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-6 mt-10 mb-8">
          <input
            className="
              flex-1 p-3 
              outline-none 
              border border-gray-400 
              dark:border-gray-700 
              rounded-md 
              bg-white 
              dark:bg-gray-800 
              text-gray-800
              dark:text-gray-200
              placeholder-gray-500 
              dark:placeholder-gray-400
            "
            type="text"
            placeholder={t.contact.namePlaceholder}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(t.contact.errors.nameInvalid)
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
          <input
            className="
              flex-1 p-3 
              outline-none 
              border border-gray-400 
              dark:border-gray-700 
              rounded-md 
              bg-white 
              dark:bg-gray-800 
              text-gray-800
              dark:text-gray-200
              placeholder-gray-500 
              dark:placeholder-gray-400
            "
            type="email"
            placeholder={t.contact.emailPlaceholder}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(t.contact.errors.emailInvalid)
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>
        <textarea
          className="
            w-full p-4 
            outline-none 
            border border-gray-400 
            dark:border-gray-700 
            rounded-md 
            bg-white 
            dark:bg-gray-800 
            text-gray-800
            dark:text-gray-200
            placeholder-gray-500 
            dark:placeholder-gray-400
          "
          rows={6}
          placeholder={t.contact.messagePlaceholder}
          required
          onInvalid={(e) =>
            e.target.setCustomValidity(t.contact.errors.messageInvalid)
          }
          onInput={(e) => e.target.setCustomValidity("")}
        ></textarea>

        {errorMessage && (
          <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
        )}

        <div className="relative mt-6 flex justify-center">
          <button
            className={`
              w-20 h-12 
              rounded-full 
              bg-black 
              dark:bg-gray-800
              text-white 
              flex items-center justify-center 
              transition-all 
              duration-300 
              ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-800 dark:hover:bg-gray-700"
              }
            `}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>

          <div
            className={`
              absolute top-0 right-0 
              flex items-center justify-center 
              w-20 h-12 
              transition-opacity 
              duration-300 
              ${submitResult ? "opacity-100" : "opacity-0"}
            `}
          >
            {submitResult === "success" && (
              <div className="bg-green-500 rounded-full p-1">
                <Check className="w-5 h-5 text-white" />
              </div>
            )}
            {submitResult === "error" && (
              <div className="bg-red-500 rounded-full p-1">
                <X className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        </div>
      </form>

      <ul className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center mt-10">
      {networkData.map(({ icon, iconDark, link }, index) => {
        const iconSrc = theme === "dark" && iconDark ? iconDark : icon;
        return (
          <li
            key={index}
            className="
              flex items-center justify-center 
              w-12 sm:w-14 
              aspect-square 
              border border-gray-400 
              dark:border-gray-700
              rounded-lg 
              cursor-pointer 
              hover:shadow-black 
              hover:-translate-y-1 
              transition-transform 
              duration-500
            "
          >
            <Link href={link} target="_blank">
              <Image src={iconSrc} alt="" className="w-5 sm:w-7" />
            </Link>
          </li>
        );
      })}
    </ul>
    </div>
  );
}

export default Contact;
