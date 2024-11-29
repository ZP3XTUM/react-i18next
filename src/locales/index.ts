import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import th from "./th.json";
import en from "./en.json";

export enum Language {
  TH = "th",
  EN = "en",
}

i18n.use(initReactI18next).init({
  resources: {
    [Language.TH]: {
      translation: th,
    },
    [Language.EN]: {
      translation: en,
    },
  },
  lng: Language.TH, // ภาษาเริ่มต้น
  fallbackLng: Language.TH, // กำหนด Fallback Language ได้ในกรณีที่ไม่มีข้อความแปล
  // fallbackLng: [Language.TH, Language.EN], // ลองใช้ไทยก่อน ถ้าไม่มีจะใช้ภาษาอังกฤษ
  // fallbackLng: {
  //   'th': ['en'], // ถ้าไม่มีแปลในภาษาไทย ให้ใช้ภาษาอังกฤษ
  //   'ja': ['en', 'th'], // ถ้าไม่มีแปลในภาษาญี่ปุ่น ให้ใช้ภาษาอังกฤษหรือภาษาไทย
  //   'default': ['en'], // ค่า fallback สำหรับภาษาอื่น ๆ
  // },
  interpolation: {
    escapeValue: false,
  },
});
