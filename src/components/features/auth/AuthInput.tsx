import Input from "@/components/commons/Input";
import React from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export default function AuthInput({
  type,
  errorMessage,
  ...props
}: AuthInputProps) {
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
