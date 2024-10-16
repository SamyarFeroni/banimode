"use client";
import React, { createContext, useState, ReactNode } from "react";

// تعریف نوع داده‌ها برای کانتکست
interface AppContextType {
  showNewComponent: boolean;
  handleShow: () => void;
  handleHide: () => void;
}

// ایجاد کانتکست با نوع مشخص
export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode; // تعیین نوع برای children
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [showNewComponent, setShowNewComponent] = useState(false);

  // توابع تغییر حالت
  const handleShow = () => setShowNewComponent(true);
  const handleHide = () => setShowNewComponent(false);

  return (
    <AppContext.Provider value={{ showNewComponent, handleShow, handleHide }}>
      {children}
    </AppContext.Provider>
  );
};
