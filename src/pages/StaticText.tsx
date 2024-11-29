import React from "react";
import { useTranslation } from "react-i18next";

import ButtonLang from "../components/ButtonLang";
import CodeBlock from "../components/CodeBlock";

const StaticText: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-10 text-blue-800">Static Text</h1>

      <h1 className="text-3xl mb-4">{t("static.title")}</h1>
      <p className="text-lg">{t("static.description")}</p>

      <CodeBlock>
        <p>{`t("static.title")`}</p>
        <p>{`t("static.description")`}</p>

        <br />
        <p className="text-yellow-200">ตัวอย่าง JSON</p>
        <pre>
          {JSON.stringify(
            {
              static: {
                title: t("static.title"),
                description: t("static.description"),
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

export default StaticText;
