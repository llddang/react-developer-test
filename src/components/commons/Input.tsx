import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export default function Input({ type, errorMessage, ...props }: InputProps) {
  return (
    <div>
      <input
        type={type}
        {...props}
        className={`h-9 bg-white w-full rounded-md border px-3 py-2 text-base placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 
          ${errorMessage ? "border-red-400" : "border-zinc-200"}`}
      />
      {errorMessage && (
        <p className="text-sm pl-2 text-red-400">{errorMessage}</p>
      )}
    </div>
  );
}
