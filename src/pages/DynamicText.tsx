import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ButtonLang from "../components/ButtonLang";
import CodeBlock from "../components/CodeBlock";

const DynamicText: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("ตั้มสุดโคตรหล่อ");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-10 text-blue-800">Dynamic Text</h1>

      <h1 className="text-3xl mb-4">{t("dynamic.greeting", { name })}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("dynamic.placeholder")}
        className="border px-4 py-2 rounded w-full max-w-sm mb-4"
      />

      <CodeBlock>
        <p>{`t("dynamic.greeting", { name: "${name}" })`}</p>

        <br />
        <p className="text-yellow-200">ตัวอย่าง JSON</p>
        <pre>
          {JSON.stringify(
            {
              dynamic: {
                greeting: t("dynamic.greeting"),
                placeholder: t("dynamic.placeholder"),
              },
            },
            null,
            2
          )}
        </pre>
      </CodeBlock>

      <ButtonLang />
    </div>
  );
};

export default DynamicText;
