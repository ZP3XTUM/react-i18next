import React from "react";
import { useTranslation } from "react-i18next";

import ButtonLang from "../components/ButtonLang";
import CodeBlock from "../components/CodeBlock";

const Context: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-10 text-blue-800">Context</h1>

      <p className="text-lg">{t("contexts.friend")}</p>
      <p className="text-lg">{t("contexts.friend", { context: "male" })}</p>
      <p className="text-lg">{t("contexts.friend", { context: "female" })}</p>

      <CodeBlock>
        <p>{`t("contexts.friend")`}</p>
        <p>{`t("contexts.friend", { context: "male" })`}</p>
        <p>{`t("contexts.friend", { context: "female" })`}</p>

        <br />
        <p className="text-yellow-200">ตัวอย่าง JSON</p>
        <pre>
          {JSON.stringify(
            {
              contexts: {
                friend: t("contexts.friend"),
                friend_male: t("contexts.friend_male"),
                friend_female: t("contexts.friend_female"),
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

export default Context;
