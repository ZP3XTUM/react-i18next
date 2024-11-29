import React from "react";
import i18n from "i18next";
import { Language } from "../locales";

const ButtonLang: React.FC = () => {
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
