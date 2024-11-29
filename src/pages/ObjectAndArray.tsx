import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ButtonLang from "../components/ButtonLang";
import CodeBlock from "../components/CodeBlock";

const ObjectAndArray: React.FC = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("ตั้มสุดโคตรหล่อ");
  const [name2, setName2] = useState("ตั้มสุดน่ารัก");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-10 text-blue-800">
        Objects and Arrays
      </h1>

      <h1 className="text-2xl font-semibold mb-5 text-blue-800">- Objects</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-4 py-2 rounded w-full max-w-sm mb-4"
      />

      <p className="text-lg">
        {JSON.stringify(
          t("object.tree", { returnObjects: true, something: name }),
          null,
          2
        )}
      </p>
      <p className="text-lg">
        {t("object.type_is")}{" "}
        {typeof t("object.tree", { returnObjects: true, something: "gold" })}
      </p>

      <CodeBlock>
        <p>{`t("object.tree", { returnObjects: true, something: ${name} })`}</p>
        <br />
        <p className="text-yellow-200">ตัวอย่าง JSON</p>
        <pre>
          {JSON.stringify(
            {
              object: t("object.tree", {
                returnObjects: true,
              }),
            },
            null,
            2
          )}
        </pre>
      </CodeBlock>

      <h1 className="text-2xl font-semibold my-5 text-blue-800">- Arrays</h1>

      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        className="border px-4 py-2 rounded w-full max-w-sm mb-4"
      />

      <p className="text-lg">{t("array.array_join", { joinArrays: "+" })}</p>
      <p className="text-lg">
        {t("array.array_join_with_interpolation", {
          name: name2,
          joinArrays: " ",
        })}
      </p>
      <p className="text-lg">{t("array.array_of_objects.1.name")}</p>

      <CodeBlock>
        <p>{`t("array.array_join", { joinArrays: "+" })`}</p>
        <p>{`t("array.array_join_with_interpolation", { name: ${name2}, joinArrays: " " })`}</p>
        <p>{`t("array.array_of_objects.1.name")`}</p>
        <br />
        <p className="text-yellow-200">ตัวอย่าง JSON</p>
        <pre>
          {JSON.stringify(
            {
              array: {
                array_join:
                  "[" + t("array.array_join", { joinArrays: "],[" }) + "]",
                array_join_with_interpolation:
                  "[" +
                  t("array.array_join_with_interpolation", {
                    joinArrays: "],[",
                  }) +
                  "]",
                array_of_objects: [
                  { name: t("array.array_of_objects.0.name") },
                  { name: t("array.array_of_objects.1.name") },
                ],
              },
            },
            null,
            2
          )}
        </pre>
      </CodeBlock>

      <div className="fixed top-5 right-5">
        <ButtonLang />
      </div>
    </div>
  );
};

export default ObjectAndArray;
