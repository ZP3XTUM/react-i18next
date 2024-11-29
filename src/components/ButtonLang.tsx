import React from "react";
import { Language } from "../locales";
import { useTranslation } from "react-i18next";

const ButtonLang: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-4 mt-6">
      <button
        onClick={() => changeLanguage(Language.TH)}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        ไทย
      </button>
      <button
        onClick={() => changeLanguage(Language.EN)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        English
      </button>
    </div>
  );
};

export default ButtonLang;
