// PhoneContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PhoneContextType {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  confirmationModal: boolean;
  setConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  textColor: string;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneContext = createContext<PhoneContextType | undefined>(undefined);

export const PhoneProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [textColor, setTextColor] = useState<string>("#828282");

  return (
    <PhoneContext.Provider value={{
      modal,
      setModal,
      confirmationModal,
      setConfirmationModal,
      phoneNumber,
      setPhoneNumber,
      isValid,
      setIsValid,
      errorMessage,
      setErrorMessage,
      timeLeft,
      setTimeLeft,
      textColor,
      setTextColor
    }}>
      {children}
    </PhoneContext.Provider>
  );
};

export const usePhone = () => {
  const context = useContext(PhoneContext);
  if (!context) {
    throw new Error("usePhone must be used within a PhoneProvider");
  }
  return context;
};
