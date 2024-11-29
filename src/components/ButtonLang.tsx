import React from "react";
import { Language } from "../locales";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

const ButtonLang: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-4 mt-6">
      <button
        onClick={() => changeLanguage(Language.TH)}
        className={cn(
          "px-4 py-2 border-2 border-green-500 text-black rounded",
          i18n.language === Language.TH && "bg-green-500 text-white font-bold"
        )}
      >
        ไทย
      </button>
      <button
        onClick={() => changeLanguage(Language.EN)}
        className={cn("px-4 py-2 border-2 border-blue-500 text-black rounded", i18n.language === Language.EN && "bg-blue-500 text-white font-bold")}
      >
        English
      </button>
    </div>
  );
};

export default ButtonLang;
