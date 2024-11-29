import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ButtonLang from "../components/ButtonLang";
import CodeBlock from "../components/CodeBlock";

const PassingDefault: React.FC = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("200");

  const options = [
    { value: "200", label: "200" },
    { value: "404", label: "404" },
    { value: "502", label: "502" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-10 text-blue-800">
        Passing Default Value
      </h1>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="border px-4 py-2 rounded w-full max-w-sm mb-4"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <h1 className="text-3xl mb-4">
        {t([`passing_default.${selected}`, "passing_default.unspecific"])}
      </h1>

      <CodeBlock>
        <p>{`t(["passing_default.${selected}", "passing_default.unspecific"])`}</p>
      </CodeBlock>

      <ButtonLang />
    </div>
  );
};

export default PassingDefault;
