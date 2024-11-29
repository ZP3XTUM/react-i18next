import React from "react";
import { useTranslation } from "react-i18next";

import ButtonLang from "../components/ButtonLang";
import CodeBlock from "../components/CodeBlock";

const Nesting: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-10 text-blue-800">Nesting</h1>

      <p className="text-lg">{t("nesting.nesting1")}</p>

      <CodeBlock>
        <p>{`t("nesting.nesting1")`}</p>
        <br />
        <p className="text-yellow-200">ตัวอย่าง JSON</p>
        <p>{`<TH>`}</p>
        <pre>
          {JSON.stringify(
            {
              nesting: {
                nesting1: "ผม $t(nesting.nesting2)",
                nesting2: "รัก $t(nesting.nesting3)",
                nesting3: "คุณ $t(nesting.nesting4)",
                nesting4: "❤️",
              },
            },
            null,
            2
          )}
        </pre>
        <p>{`<EN>`}</p>
        <pre>
          {JSON.stringify(
            {
              nesting: {
                nesting1: "I $t(nesting.nesting2)",
                nesting2: "love $t(nesting.nesting3)",
                nesting3: "you $t(nesting.nesting4)",
                nesting4: "❤️",
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

export default Nesting;
