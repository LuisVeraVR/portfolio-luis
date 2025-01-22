"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, Check, X } from "lucide-react";
import { networkData } from "@/assets/assets";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value.trim();
    const email = form[1].value.trim();
    const message = form[2].value.trim();

    // Validar campos
    if (!name || !email || !message) {
      setErrorMessage(
        "Por favor, complete todos los campos antes de enviar el formulario."
      );
      setSubmitResult("error");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(""); // Limpiar errores previos

    // Enviar formulario a Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "b1206e69-178e-44a6-a3e5-5f2e7dd02662",
          name: name,
          email: email,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en el envío del formulario");
      }

      setSubmitResult("success");
    } catch (error) {
      setErrorMessage(
        "Hubo un error al enviar el formulario. Por favor, intente nuevamente."
      );
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">
        ¿Quieres charlar conmigo?
      </h4>
      <h2 className="text-center text-5xl font-Ovo">
        Contáctame en unos simples pasos
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Responderé con gusto a tus comentarios, sugerencias o dudas. No dudes en
        contactarme. Estaré pendiente de cada uno de los mensajes para que
        podamos estar en contacto directo.
      </p>
      <form className="max-w-2xl mx-auto" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Ingresa tu nombre"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Por favor, ingresa tu nombre.")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Ingresa tu email"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Por favor, ingresa un email válido.")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          rows={6}
          placeholder="Ingresa tu mensaje"
          required
          onInvalid={(e) =>
            e.target.setCustomValidity("Por favor, escribe tu mensaje.")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        ></textarea>
        {errorMessage && (
          <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
        )}
        <div className="relative mt-6 flex justify-center">
          <button
            className={`w-20 h-12 rounded-full bg-black text-white flex items-center justify-center transition-all duration-300 ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-800"
            }`}
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
            className={`absolute top-0 right-0 flex items-center justify-center w-20 h-12 transition-opacity duration-300 ${
              submitResult ? "opacity-100" : "opacity-0"
            }`}
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
        {networkData.map(({ icon, link }, index) => (
          <li
            key={index}
            className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-black hover:-translate-y-1 transition-transform duration-500"
          >
            <Link href={link} target="_blank">
              <Image src={icon} alt="" className="w-5 sm:w-7" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
