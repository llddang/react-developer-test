import Input from "@/components/commons/Input";
import React from "react";

interface SignUpInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export default function SignUpInput({
  type,
  errorMessage,
  ...props
}: SignUpInputProps) {
  return (
    <div>
      <Input
        type={type}
        className={errorMessage && "!border-red-400 "}
        {...props}
      />
      {errorMessage && (
        <p className="text-sm pl-2 text-red-400">{errorMessage}</p>
      )}
    </div>
  );
}
