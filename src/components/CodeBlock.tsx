// CodeBlock.tsx
import React from "react";

interface CodeBlockProps {
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return <div className="bg-black text-white rounded-md p-4 mt-5">{children}</div>;
};

export default CodeBlock;
