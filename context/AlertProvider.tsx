'use client'
import React from "react";
import { createContext } from "react";
import Sweat from "sweetalert2";

interface AlertContextProps {
  title: string;
  text?: string;
  icon?: "success" | "error" | "warning" | "info" | "question";
  confirmButtonText?: string;
}

// 1- Creamos el contexto
export const AlertContext = createContext({} as { showAlert: (options: AlertContextProps) => void });

const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const showAlert: (options: AlertContextProps) => void = ({
    title,
    text,
    icon = "success",
    confirmButtonText = "Aceptar",
  }) => {
    return Sweat.fire({
      title,
      text,
      icon,
      confirmButtonText: confirmButtonText,
    });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
