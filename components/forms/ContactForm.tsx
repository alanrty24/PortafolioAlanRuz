"use client";
import React from "react";
import { useAlert } from "../../hooks/useRef";
import { useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { HiArrowRight } from "react-icons/hi";

const ContactForm: React.FC = () => {
  const { showAlert } = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  async function handleSend(data: FormData) {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        return console.log("Error al enviar el mensaje");
      }

      const resData = await response.json();
      console.log("Mensaje enviado:", resData);
    } catch (error) {
      console.log(error);
    } finally {
      showAlert({
        title: "Correo Enviado",
        text: "Se ha enviado correctamente tu email",
      });
      reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSend)}
      className="flex flex-col w-full md:w-1/2 gap-2 p-8 shadow-2xl shadow-slate-500 rounded-xl"
    >
      <Input
        label="Name"
        placeholder="Ej: Daniel..."
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span className="text-red-500">Se requiere el nombre</span>
      )}
      <Input
        label="Email"
        placeholder="Email..."
        type="email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-red-500">Se requiere el Email</span>
      )}
      <Input
        label="Message"
        placeholder="Mensaje..."
        className="h-32"
        {...register("message", { required: true })}
      />
      {errors.message && (
        <span className="text-red-500 p-0 m-0">Se requiere un mesaje</span>
      )}

      <Button
        type="submit"
        variant="secondary"
        size={"lg"}
        className="relative flex items-center justify-baseline p-6 rounded-4xl w-1/2 gap-4 group hover:bg-(--color-secundary) transition-colors duration-200 mt-4"
      >
        <div className="absolute left-2 flex items-center justify-center rounded-full h-10 w-10 p-2 bg-(--color-secundary) text-white group-hover:bg-white group-hover:text-(--color-secundary) transition-all duration-500">
          <HiArrowRight className="animate-move-right" />
        </div>
        <span className=" text-black text-end md:text-center md:text-base group-hover:text-white w-full">
          Enviar
        </span>
      </Button>
    </form>
  );
};

export default ContactForm;
